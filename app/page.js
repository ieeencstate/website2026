'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Navbar from './components/navbar.jsx';
import { ThemeProvider } from './events/context/theme-context';
import { ThemeToggle } from './events/components/theme-toggle';
import { GrainOverlay } from './events/components/grain-overlay';
import { MagneticButton } from './events/components/magnetic-button';
import { useTheme } from './events/hooks/use-theme';
import { Shader, ChromaFlow, Swirl } from 'shaders/react';
import { homeContent } from './resources/homeContent';
import { useReveal } from './events/hooks/use-reveal';
import { Linkedin, Users, FileText, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

function HomePageContent() {
  const { theme } = useTheme();
  const scrollContainerRef = useRef(null);
  const shaderContainerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const scrollThrottleRef = useRef();
  const wheelTimeoutRef = useRef(null);

  const sections = useMemo(
    () => [
      { key: 'hero', Component: HeroSection, props: { content: homeContent.hero } },
      { key: 'about', Component: AboutSection, props: { content: homeContent.about } },
      { key: 'history', Component: HistorySection, props: { content: homeContent.history } },
      { key: 'leadership', Component: LeadershipSection, props: { content: homeContent.leadership } },
      { key: 'teams', Component: TeamsSection, props: { content: homeContent.teams } },
      { key: 'join', Component: JoinSection, props: { content: homeContent.join } },
    ],
    []
  );

  const sectionCount = sections.length;

  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector('canvas');
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true);
          return true;
        }
      }
      return false;
    };

    if (checkShaderReady()) return;

    const intervalId = setInterval(() => {
      if (checkShaderReady()) {
        clearInterval(intervalId);
      }
    }, 100);

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => {
      clearInterval(intervalId);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const scrollToSection = useCallback((index) => {
    if (!scrollContainerRef.current) return;
    const maxIndex = sectionCount - 1;
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    const sectionWidth = scrollContainerRef.current.offsetWidth;
    scrollContainerRef.current.scrollTo({
      left: sectionWidth * clampedIndex,
      behavior: 'smooth',
    });
    setCurrentSection(clampedIndex);
  }, [sectionCount]);

  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      if (Math.abs(e.touches[0].clientY - touchStartY.current) > 10) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const deltaY = touchStartY.current - touchEndY;
      const deltaX = touchStartX.current - touchEndX;

      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
        if (deltaY > 0 && currentSection < sectionCount - 1) {
          scrollToSection(currentSection + 1);
        } else if (deltaY < 0 && currentSection > 0) {
          scrollToSection(currentSection - 1);
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, { passive: true });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [currentSection, sectionCount, scrollToSection]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) {
        return;
      }

      e.preventDefault();
      if (wheelTimeoutRef.current) {
        return;
      }

      const fastThreshold = 400;
      const isFastScroll = Math.abs(e.deltaY) > fastThreshold;
      if (isFastScroll) {
        const target = e.deltaY > 0 ? sectionCount - 1 : 0;
        scrollToSection(target);
      } else {
        const next = e.deltaY > 0 ? currentSection + 1 : currentSection - 1;
        scrollToSection(next);
      }

      wheelTimeoutRef.current = setTimeout(() => {
        wheelTimeoutRef.current = null;
      }, 500);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
        wheelTimeoutRef.current = null;
      }
    };
  }, [currentSection, sectionCount, scrollToSection]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollThrottleRef.current) return;

      scrollThrottleRef.current = requestAnimationFrame(() => {
        if (!scrollContainerRef.current) {
          scrollThrottleRef.current = undefined;
          return;
        }

        const sectionWidth = scrollContainerRef.current.offsetWidth;
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const newSection = Math.round(scrollLeft / sectionWidth);

        if (newSection !== currentSection && newSection >= 0 && newSection < sectionCount) {
          setCurrentSection(newSection);
        }

        scrollThrottleRef.current = undefined;
      });
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      if (scrollThrottleRef.current) {
        cancelAnimationFrame(scrollThrottleRef.current);
      }
    };
  }, [currentSection, sectionCount]);

  const swirlColors = theme === 'dark'
    ? { colorA: '#420000', colorB: '#060000' }
    : { colorA: '#ffe0e0', colorB: '#fff5f5' };

  const chromaFlowColors = theme === 'dark'
    ? {
        baseColor: '#360404',
        upColor: '#1b0101',
        downColor: '#090000',
        leftColor: '#450606',
        rightColor: '#5d0d0d',
      }
    : {
        baseColor: '#ffb3b3',
        upColor: '#ffe2e2',
        downColor: '#ffffff',
        leftColor: '#ffc2c2',
        rightColor: '#ff9999',
      };

  return (
    <main
      className={`relative h-screen w-full overflow-hidden bg-background transition-colors duration-1000 ${theme === 'dark' ? 'dark' : ''}`}
      data-theme={theme}
    >
      <ThemeToggle />
      <Navbar />
      <GrainOverlay />

      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ contain: 'strict' }}
      >
        <Shader key={theme} className="h-full w-full transition-all duration-1000">
          <Swirl
            colorA={swirlColors.colorA}
            colorB={swirlColors.colorB}
            speed={0.8}
            detail={0.8}
            blend={50}
            coarseX={40}
            coarseY={40}
            mediumX={40}
            mediumY={40}
            fineX={40}
            fineY={40}
          />
          <ChromaFlow
            baseColor={chromaFlowColors.baseColor}
            upColor={chromaFlowColors.upColor}
            downColor={chromaFlowColors.downColor}
            leftColor={chromaFlowColors.leftColor}
            rightColor={chromaFlowColors.rightColor}
            intensity={0.9}
            radius={1.8}
            momentum={25}
            maskType="alpha"
            opacity={0.97}
          />
        </Shader>
        <div className={`absolute inset-0 transition-all duration-1000 ${theme === 'dark' ? 'bg-black/25' : 'bg-white/20'}`} />
      </div>

      <div
        ref={scrollContainerRef}
        data-scroll-container
        className={`relative z-10 flex h-screen overflow-x-auto overflow-y-hidden transition-opacity duration-700 transition-colors duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {sections.map(({ key, Component, props }) => (
          <Component key={key} {...props} />
        ))}
      </div>

      <style jsx global>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}

function HeroSection({ content }) {
  const { ref, isVisible } = useReveal(0.2);

  return (
    <section ref={ref} className="relative flex min-h-screen w-screen shrink-0 flex-col justify-end px-6 pb-16 pt-24 md:px-12 md:pb-24">
      <div className={`max-w-4xl transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-foreground/70">{content.eyebrow}</p>
        <h1 className="mb-6 font-sans text-5xl font-light leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl">
          {content.title}
        </h1>
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-foreground/90 md:text-xl">{content.description}</p>

        <ul className="mb-10 space-y-3 font-mono text-xs uppercase tracking-wide text-foreground/70">
          {content.highlights.map((highlight) => (
            <li key={highlight} className="flex items-center gap-3">
              <span className="h-px w-8 bg-foreground/30" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4 sm:flex-row">
          {content.primaryCta && (
            <MagneticButton
              size="lg"
              variant="primary"
              onClick={() => window.open(content.primaryCta.href, '_self')}
            >
              <span className="flex items-center gap-2">
                {content.primaryCta.label}
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </MagneticButton>
          )}
          {content.secondaryCta && (
            <MagneticButton
              size="lg"
              variant="ghost"
              onClick={() => window.open(content.secondaryCta.href, '_self')}
            >
              {content.secondaryCta.label}
            </MagneticButton>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 px-4 py-1 backdrop-blur">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/70">Scroll</span>
          <div className="h-2 w-2 animate-pulse rounded-full bg-foreground" />
        </div>
      </div>
    </section>
  );
}

function AboutSection({ content }) {
  const { ref, isVisible } = useReveal(0.3);

  return (
    <section ref={ref} className="flex h-screen w-screen shrink-0 items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-foreground/60">/ About us</p>
          <h2 className="mt-3 mb-4 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl">
            {content.title}
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">{content.mission}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.6fr_1fr] md:gap-12">
          <div className={`space-y-6 text-base leading-relaxed text-foreground/90 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <p>{content.vision}</p>
            <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-6 backdrop-blur">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/60">Highlights</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                {content.notes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <span className="text-foreground/40">—</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`rounded-3xl border border-foreground/10 bg-foreground/10 p-6 text-foreground transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/70">Recent honors</p>
            <ul className="mt-4 space-y-4">
              {content.awards.map((award) => (
                <li key={award} className="flex items-center justify-between">
                  <span className="font-sans text-xl">{award}</span>
                  <span className="text-sm text-foreground/60">Competition</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-dashed border-foreground/20 p-4 text-sm text-foreground/70">
              We aim to expand this list after every SouthEastCon season.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HistorySection({ content }) {
  const { ref, isVisible } = useReveal(0.3);

  return (
    <section ref={ref} className="flex h-screen w-screen shrink-0 items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className={`mb-10 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-foreground/60">/ Timeline</p>
          <h2 className="mt-3 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl">{content.title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/80">{content.intro}</p>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <div className={`space-y-6 text-foreground/90 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <p className="text-lg leading-relaxed">{content.narrative}</p>
            <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/60">Visit the lounge</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">{content.loungeCallout}</p>
            </div>
            <p className="text-sm text-foreground/70">{content.regionBlurb}</p>
            <p className="text-sm text-foreground/70">{content.ongoing}</p>
          </div>

          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {content.timeline.map((entry) => (
              <div key={`${entry.year}-${entry.detail}`} className="rounded-2xl border border-foreground/10 bg-background/70 p-4 backdrop-blur">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/50">{entry.year}</p>
                <p className="mt-2 text-base text-foreground">{entry.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadershipSection({ content }) {
  const { ref, isVisible } = useReveal(0.3);

  return (
    <section ref={ref} className="flex h-screen w-screen shrink-0 items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-foreground/60">/ Leadership</p>
          <h2 className="mt-3 mb-4 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl">
            {content.title}
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-foreground/80">{content.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.officers.slice(0, 6).map((officer, index) => (
            <OfficerCard key={officer.name} officer={officer} delay={index * 80} isVisible={isVisible} />
          ))}
        </div>
        <p className="mt-6 text-sm text-foreground/60">{content.placeholderCopy}</p>
      </div>
    </section>
  );
}

function OfficerCard({ officer, delay, isVisible }) {
  const placeholderInitial = officer.name.charAt(0).toUpperCase();
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(officer.image) && !imageError;

  return (
    <div
      className={`rounded-3xl border border-foreground/10 bg-foreground/5 p-6 backdrop-blur transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative mb-5 h-40 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-foreground/20 to-transparent">
        {showImage && (
          <Image
            src={officer.image}
            alt={officer.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
            onError={() => setImageError(true)}
            priority={false}
          />
        )}
        {!showImage && (
          <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-foreground/40">
            {placeholderInitial}
          </div>
        )}
      </div>
      <h3 className="text-2xl font-light text-foreground">{officer.name}</h3>
      <p className="text-sm uppercase tracking-[0.3em] text-foreground/60">{officer.role}</p>
      <a
        href={officer.linkedin || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70"
      >
        <Linkedin className="h-4 w-4" />
        LinkedIn
      </a>
    </div>
  );
}

function TeamsSection({ content }) {
  const { ref, isVisible } = useReveal(0.3);

  return (
    <section ref={ref} className="flex h-screen w-screen shrink-0 items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className={`mb-10 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-foreground/60">/ Teams</p>
          <h2 className="mt-3 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl">{content.title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/80">{content.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {content.groups.map((group, index) => (
            <div
              key={group.name}
              className={`rounded-3xl border border-foreground/10 bg-foreground/5 p-6 backdrop-blur transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-foreground/60">
                <Users className="h-4 w-4" />
                {group.name}
              </div>
              <p className="mb-4 text-base text-foreground/80">{group.description}</p>
              <div className="rounded-2xl border border-dashed border-foreground/20 p-4 text-sm text-foreground/70">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">Roster</p>
                <ul className="mt-3 space-y-1">
                  {group.members.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JoinSection({ content }) {
  const { ref, isVisible } = useReveal(0.3);

  return (
    <section ref={ref} className="flex h-screen w-screen shrink-0 items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-foreground/60">/ Join us</p>
          <h2 className="mt-3 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl">{content.title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/80">{content.subtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <JoiningColumn
            title="Join the NC State Student Chapter"
            steps={content.chapterSteps}
            isVisible={isVisible}
            delay={0}
          />
          <JoiningColumn
            title="Join the global IEEE organization"
            steps={content.ieeeSteps}
            isVisible={isVisible}
            delay={150}
          />
        </div>

        <div className={`mt-8 flex flex-wrap items-center gap-4 text-sm text-foreground/70 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="rounded-full border border-foreground/20 bg-foreground/10 px-4 py-2">
            {content.reminders[0]}
          </div>
          <div className="rounded-full border border-foreground/20 bg-foreground/10 px-4 py-2">
            {content.reminders[1]}
          </div>
          {content.resources && (
            <a
              href={content.resources.href}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-4 py-2 text-foreground hover:bg-foreground/10"
            >
              <FileText className="h-4 w-4" />
              {content.resources.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

function JoiningColumn({ title, steps, isVisible, delay }) {
  return (
    <div
      className={`rounded-3xl border border-foreground/10 bg-foreground/5 p-6 backdrop-blur transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-2xl font-light text-foreground">{title}</h3>
      <ol className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/80">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-3">
            <span className="font-mono text-xs text-foreground/50">{String(index + 1).padStart(2, '0')}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <HomePageContent />
    </ThemeProvider>
  );
}

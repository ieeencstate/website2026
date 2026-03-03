'use client';

import { Calendar } from 'lucide-react';
import { useReveal } from '../../hooks/use-reveal';
import { eventsContent } from '../../../resources/index.js';

export function CalendarSection() {
  const { ref, isVisible } = useReveal(0.3);

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-7xl lg:text-8xl">
                {eventsContent.subscribe.title}
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">{eventsContent.subscribe.subtitle}</p>
            </div>

            <div className="space-y-4 md:space-y-8">
              <a
                href={eventsContent.calendar.subscribeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block transition-all duration-700 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Calendar className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Subscribe</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                  {eventsContent.subscribe.subscribeLinkText}
                </p>
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex flex-col justify-center">
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-foreground/10">
                <img
                  src="/events-subscribe-placeholder.jpg"
                  alt="Subscribe"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden h-full w-full items-center justify-center bg-foreground/5">
                  <p className="font-mono text-sm text-foreground/40">Image placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


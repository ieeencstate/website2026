'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#060010',
  hoveredPillTextColor = '#060010',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const logoImgRef = useRef(null);
  const logoTweenRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    // Ensure we're in the browser
    if (typeof window === 'undefined') return;

    const layout = () => {
      if (!circleRefs.current || circleRefs.current.length === 0) return;
      
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement || !circle.isConnected) return;

        const pill = circle.parentElement;
        if (!pill || !pill.isConnected || typeof pill.getBoundingClientRect !== 'function') return;
        
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        if (circle && circle.style) {
          circle.style.width = `${D}px`;
          circle.style.height = `${D}px`;
          circle.style.bottom = `-${delta}px`;
        }

        if (circle && circle.nodeType === 1 && circle.isConnected) {
          try {
            gsap.set(circle, {
              xPercent: -50,
              scale: 0,
              transformOrigin: `50% ${originY}px`
            });
          } catch (e) {
            console.warn('GSAP set error:', e);
          }
        }

        let label = null;
        let white = null;
        try {
          label = pill?.querySelector?.('.pill-label');
          white = pill?.querySelector?.('.pill-label-hover');
        } catch (e) {
          console.warn('QuerySelector error:', e);
        }

        if (label && label.nodeType === 1 && label.isConnected) {
          try {
            gsap.set(label, { y: 0 });
          } catch (e) {
            console.warn('GSAP set label error:', e);
          }
        }
        if (white && white.nodeType === 1 && white.isConnected) {
          try {
            gsap.set(white, { y: h + 12, opacity: 0 });
          } catch (e) {
            console.warn('GSAP set white error:', e);
          }
        }

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        if (circle && circle.nodeType === 1 && circle.isConnected) {
          try {
            tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);
          } catch (e) {
            console.warn('GSAP timeline circle error:', e);
          }
        }

        if (label && label.nodeType === 1 && label.isConnected) {
          try {
            tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
          } catch (e) {
            console.warn('GSAP timeline label error:', e);
          }
        }

        if (white && white.nodeType === 1 && white.isConnected) {
          try {
            gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
            tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
          } catch (e) {
            console.warn('GSAP timeline white error:', e);
          }
        }

        tlRefs.current[index] = tl;
      });
    };

    // Delay layout to ensure DOM is ready
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    // Use requestAnimationFrame to ensure DOM is fully rendered
    const rafId = requestAnimationFrame(() => {
      // Double check elements exist before running layout
      if (circleRefs.current.length > 0 || navItemsRef.current || logoRef.current) {
        try {
          layout();
        } catch (e) {
          console.warn('Layout error:', e);
        }
      }
    });
    
    const onResize = () => {
      try {
        layout();
      } catch (e) {
        console.warn('Resize layout error:', e);
      }
    };
    window.addEventListener('resize', onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        try {
          layout();
        } catch (e) {
          console.warn('Fonts ready layout error:', e);
        }
      }).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu && menu.nodeType === 1 && menu.isConnected) {
      try {
        gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1, y: 0 });
      } catch (e) {
        console.warn('GSAP set menu error:', e);
      }
    }

    if (initialLoadAnimation) {
      const logo = logoRef.current;
      const navItems = navItemsRef.current;

      if (logo && logo.nodeType === 1 && logo.isConnected) {
        try {
          gsap.set(logo, { scale: 0 });
          gsap.to(logo, {
            scale: 1,
            duration: 0.6,
            ease
          });
        } catch (e) {
          console.warn('GSAP logo animation error:', e);
        }
      }

      if (navItems && navItems.nodeType === 1 && navItems.isConnected) {
        try {
          gsap.set(navItems, { width: 0, overflow: 'hidden' });
          gsap.to(navItems, {
            width: 'auto',
            duration: 0.6,
            ease
          });
        } catch (e) {
          console.warn('GSAP navItems animation error:', e);
        }
      }
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      // Clean up any running animations
      tlRefs.current.forEach(tl => {
        try {
          tl?.kill();
        } catch (e) {
          // Ignore cleanup errors
        }
      });
      activeTweenRefs.current.forEach(tween => {
        try {
          tween?.kill();
        } catch (e) {
          // Ignore cleanup errors
        }
      });
      try {
        logoTweenRef.current?.kill();
      } catch (e) {
        // Ignore cleanup errors
      }
    };
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = i => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = i => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img || img.nodeType !== 1 || !img.isConnected) return;
    logoTweenRef.current?.kill();
    try {
      gsap.set(img, { rotate: 0 });
      logoTweenRef.current = gsap.to(img, {
        rotate: 360,
        duration: 0.2,
        ease,
        overwrite: 'auto'
      });
    } catch (e) {
      console.warn('GSAP logo enter error:', e);
    }
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger && hamburger.nodeType === 1 && hamburger.isConnected) {
      try {
        const lines = hamburger.querySelectorAll('.hamburger-line');
        if (lines && lines.length >= 2) {
          if (newState) {
            if (lines[0]?.nodeType === 1 && lines[0].isConnected) {
              gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
            }
            if (lines[1]?.nodeType === 1 && lines[1].isConnected) {
              gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
            }
          } else {
            if (lines[0]?.nodeType === 1 && lines[0].isConnected) {
              gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
            }
            if (lines[1]?.nodeType === 1 && lines[1].isConnected) {
              gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
            }
          }
        }
      } catch (e) {
        console.warn('GSAP hamburger lines error:', e);
      }
    }

    if (menu && menu.nodeType === 1 && menu.isConnected) {
      try {
        if (newState) {
          gsap.set(menu, { visibility: 'visible' });
          gsap.fromTo(
            menu,
            { opacity: 0, y: 10, scaleY: 1 },
            {
              opacity: 1,
              y: 0,
              scaleY: 1,
              duration: 0.3,
              ease,
              transformOrigin: 'top center'
            }
          );
        } else {
          gsap.to(menu, {
            opacity: 0,
            y: 10,
            scaleY: 1,
            duration: 0.2,
            ease,
            transformOrigin: 'top center',
            onComplete: () => {
              if (menu && menu.nodeType === 1 && menu.isConnected) {
                try {
                  gsap.set(menu, { visibility: 'hidden' });
                } catch (e) {
                  console.warn('GSAP menu hide error:', e);
                }
              }
            }
          });
        }
      } catch (e) {
        console.warn('GSAP menu toggle error:', e);
      }
    }

    onMobileMenuClick?.();
  };

  const isExternalLink = href =>
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#');

  const isRouterLink = href => href && !isExternalLink(href);

  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: resolvedPillTextColor,
    ['--nav-h']: '42px',
    ['--logo']: '36px',
    ['--pill-pad-x']: '18px',
    ['--pill-gap']: '3px'
  };

  return (
    <div style={{ 
      position: 'relative', 
      zIndex: 1000, 
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <nav
        className={`flex items-center justify-between md:justify-start box-border px-4 md:px-0 ${className}`}
        aria-label="Primary"
        style={{
          ...cssVars,
          width: '100%'
        }}
      >
        {isRouterLink(items?.[0]?.href) ? (
          <Link
            href={items[0].href}
            aria-label="Home"
            onMouseEnter={handleLogoEnter}
            role="menuitem"
            ref={el => {
              logoRef.current = el;
            }}
            className="rounded-full p-2 inline-flex items-center justify-center overflow-hidden"
            style={{
              width: 'var(--nav-h)',
              height: 'var(--nav-h)',
              background: 'var(--base, #000)'
            }}
          >
            <img src={logo} alt={logoAlt} ref={logoImgRef} className="w-full h-full object-cover block" />
          </Link>
        ) : (
          <a
            href={items?.[0]?.href || '#'}
            aria-label="Home"
            onMouseEnter={handleLogoEnter}
            ref={el => {
              logoRef.current = el;
            }}
            className="rounded-full p-2 inline-flex items-center justify-center overflow-hidden"
            style={{
              width: 'var(--nav-h)',
              height: 'var(--nav-h)',
              background: 'var(--base, #000)'
            }}
          >
            <img src={logo} alt={logoAlt} ref={logoImgRef} className="w-full h-full object-cover block" />
          </a>
        )}

        <div
          ref={navItemsRef}
          className="relative items-center rounded-full hidden md:flex ml-2"
          style={{
            height: 'var(--nav-h)',
            background: 'var(--base, #000)'
          }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-[3px] h-full"
            style={{ gap: 'var(--pill-gap)' }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;

              const pillStyle = {
                background: 'var(--pill-bg, #fff)',
                color: 'var(--pill-text, var(--base, #000))',
                paddingLeft: 'var(--pill-pad-x)',
                paddingRight: 'var(--pill-pad-x)'
              };

              const PillContent = (
                <>
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                    style={{
                      background: 'var(--base, #000)',
                      willChange: 'transform'
                    }}
                    aria-hidden="true"
                    ref={el => {
                      circleRefs.current[i] = el;
                    }}
                  />
                  <span className="label-stack relative inline-block leading-[1] z-[2]">
                    <span
                      className="pill-label relative z-[2] inline-block leading-[1]"
                      style={{ willChange: 'transform' }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                      style={{
                        color: 'var(--hover-text, #fff)',
                        willChange: 'transform, opacity'
                      }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>
                  {isActive && (
                    <span
                      className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-[4]"
                      style={{ background: 'var(--base, #000)' }}
                      aria-hidden="true"
                    />
                  )}
                </>
              );

              const basePillClasses =
                'relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[16px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0';

              return (
                <li key={item.href} role="none" className="flex h-full">
                  {isRouterLink(item.href) ? (
                    <Link
                      role="menuitem"
                      href={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillContent}
                    </Link>
                  ) : (
                    <a
                      role="menuitem"
                      href={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillContent}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-1 cursor-pointer p-0 relative"
          style={{
            width: 'var(--nav-h)',
            height: 'var(--nav-h)',
            background: 'var(--base, #000)'
          }}
        >
          <span
            className="hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ background: 'var(--pill-bg, #fff)' }}
          />
          <span
            className="hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ background: 'var(--pill-bg, #fff)' }}
          />
        </button>
      </nav>

      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-[3em] left-4 right-4 rounded-[27px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-[998] origin-top"
        style={{
          ...cssVars,
          background: 'var(--base, #f0f0f0)'
        }}
      >
        <ul className="list-none m-0 p-[3px] flex flex-col gap-[3px]">
          {items.map(item => {
            const defaultStyle = {
              background: 'var(--pill-bg, #fff)',
              color: 'var(--pill-text, #fff)'
            };
            const hoverIn = e => {
              e.currentTarget.style.background = 'var(--base)';
              e.currentTarget.style.color = 'var(--hover-text, #fff)';
            };
            const hoverOut = e => {
              e.currentTarget.style.background = 'var(--pill-bg, #fff)';
              e.currentTarget.style.color = 'var(--pill-text, #fff)';
            };

            const linkClasses =
              'block py-3 px-4 text-[16px] font-medium rounded-[50px] transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]';

            return (
              <li key={item.href}>
                {isRouterLink(item.href) ? (
                  <Link
                    href={item.href}
                    className={linkClasses}
                    style={defaultStyle}
                    onMouseEnter={hoverIn}
                    onMouseLeave={hoverOut}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={linkClasses}
                    style={defaultStyle}
                    onMouseEnter={hoverIn}
                    onMouseLeave={hoverOut}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;

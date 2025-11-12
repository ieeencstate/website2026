'use client';

import PillNav from './PillNav';
import { usePathname } from 'next/navigation';
import { navbarContent } from '../lib/resources';

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <div style={{ 
      position: 'fixed',
      top: '1.5em',
      left: 0,
      right: 0,
      zIndex: 9999,
      width: '100%',
      backgroundColor: 'transparent',
      paddingTop: '1em',
      paddingBottom: '1em',
      pointerEvents: 'none'
    }}>
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'auto'
      }}>
        <PillNav
          logo={navbarContent.logo}
          logoAlt={navbarContent.logoAlt}
          items={navbarContent.items}
          activeHref={pathname || '/'}
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </div>
    </div>
  );
}

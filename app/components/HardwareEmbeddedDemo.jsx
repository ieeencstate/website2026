'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function IDEVisualization() {
  const groupRef = useRef();
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    timeRef.current += delta;
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(timeRef.current * 0.2) * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {/* IDE Background */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[4, 2.5]} />
        <meshBasicMaterial color="#1e1e1e" side={THREE.DoubleSide} />
      </mesh>

      {/* Title Bar */}
      <mesh position={[0, 1.1, 0.01]}>
        <planeGeometry args={[4, 0.2]} />
        <meshBasicMaterial color="#2d2d2d" side={THREE.DoubleSide} />
      </mesh>

      {/* Window Controls */}
      {[-1.2, -0.6, 0].map((x, i) => (
        <mesh key={i} position={[x, 1.1, 0.02]}>
          <circleGeometry args={[0.06, 16]} />
          <meshBasicMaterial color={i === 0 ? '#ff5f57' : i === 1 ? '#ffbd2e' : '#28c840'} side={THREE.DoubleSide} />
        </mesh>
      ))}

      {/* Sidebar */}
      <mesh position={[-1.8, 0, 0.01]}>
        <planeGeometry args={[0.25, 2.5]} />
        <meshBasicMaterial color="#252526" side={THREE.DoubleSide} />
      </mesh>

      {/* File Icons */}
      {[0.8, 0.4, 0, -0.4, -0.8].map((y, i) => (
        <mesh key={i} position={[-1.8, y, 0.02]}>
          <planeGeometry args={[0.18, 0.18]} />
          <meshBasicMaterial color={i === 0 ? '#4a9eff' : '#6a6a6a'} transparent opacity={0.8} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}

export default function HardwareEmbeddedDemo() {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const codeLines = [
    'void setup() {',
    '  pinMode(LED, OUTPUT);',
    '  Serial.begin(9600);',
    '}',
    'void loop() {',
    '  digitalWrite(LED, HIGH);',
    '  delay(1000);',
    '  digitalWrite(LED, LOW);',
    '  delay(1000);',
    '}'
  ];

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const typeSpeed = 50; // milliseconds per character
    const lineDelay = 300; // delay after completing a line
    
    const typeNextChar = () => {
      if (currentLineIndex >= codeLines.length) {
        // Reset after all lines are typed
        setTimeout(() => {
          setTypedText('');
          setCurrentLineIndex(0);
          setCurrentCharIndex(0);
        }, 2000);
        return;
      }

      const currentLine = codeLines[currentLineIndex];
      
      if (currentCharIndex < currentLine.length) {
        // Type next character
        setTypedText(prev => {
          const lines = prev.split('\n');
          const currentLineText = lines[currentLineIndex] || '';
          lines[currentLineIndex] = currentLineText + currentLine[currentCharIndex];
          return lines.join('\n');
        });
        setCurrentCharIndex(prev => prev + 1);
      } else {
        // Move to next line
        setTypedText(prev => prev + '\n');
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }
    };

    const timeout = setTimeout(typeNextChar, currentCharIndex === 0 && currentLineIndex > 0 ? lineDelay : typeSpeed);
    return () => clearTimeout(timeout);
  }, [currentLineIndex, currentCharIndex, codeLines]);

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden relative" style={{ backgroundColor: '#000' }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[3, 3, 3]} intensity={1.2} />
        <IDEVisualization />
      </Canvas>
      
      {/* HTML Overlay for Code Text */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        fontFamily: 'IBM Plex Mono, monospace',
        fontSize: '12px',
        color: '#d4d4d4',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '80%',
          marginLeft: '15%',
        }}>
          {codeLines.map((line, i) => {
            const typedLines = typedText.split('\n');
            const currentTypedLine = typedLines[i] || '';
            const isComplete = i < currentLineIndex || (i === currentLineIndex && currentCharIndex >= line.length);
            const displayLine = isComplete ? line : currentTypedLine;
            const showCursor = i === currentLineIndex && currentCharIndex < line.length;
            
            // Calculate syntax highlighting for each character
            const renderLine = () => {
              return displayLine.split('').map((char, charIdx) => {
                const charContext = displayLine.substring(0, charIdx + 1);
                let color = '#d4d4d4';
                
                if (charContext.includes('void') || charContext.includes('setup') || charContext.includes('loop')) {
                  const keywordMatch = charContext.match(/\b(void|setup|loop)\b/);
                  if (keywordMatch && charIdx >= charContext.indexOf(keywordMatch[0]) && charIdx < charContext.indexOf(keywordMatch[0]) + keywordMatch[0].length) {
                    color = '#569cd6';
                  }
                }
                if (charContext.includes('pinMode') || charContext.includes('Serial') || charContext.includes('digitalWrite') || charContext.includes('delay')) {
                  const funcMatch = charContext.match(/\b(pinMode|Serial|digitalWrite|delay)\b/);
                  if (funcMatch && charIdx >= charContext.indexOf(funcMatch[0]) && charIdx < charContext.indexOf(funcMatch[0]) + funcMatch[0].length) {
                    color = '#dcdcaa';
                  }
                }
                if (charContext.includes('LED') || charContext.includes('OUTPUT') || charContext.includes('HIGH') || charContext.includes('LOW') || charContext.includes('9600') || charContext.includes('1000')) {
                  const constMatch = charContext.match(/\b(LED|OUTPUT|HIGH|LOW|9600|1000)\b/);
                  if (constMatch && charIdx >= charContext.indexOf(constMatch[0]) && charIdx < charContext.indexOf(constMatch[0]) + constMatch[0].length) {
                    color = '#4ec9b0';
                  }
                }
                if (char === '{' || char === '}') {
                  color = '#ce9178';
                }
                
                return (
                  <span key={charIdx} style={{ color: color }}>
                    {char}
                  </span>
                );
              });
            };
            
            return (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '4px',
                lineHeight: '1.5',
              }}>
                <span style={{ color: '#858585', marginRight: '15px', minWidth: '30px', textAlign: 'right' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>
                  {renderLine()}
                </span>
                {showCursor && (
                  <span style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '16px',
                    backgroundColor: cursorVisible ? '#ffffff' : 'transparent',
                    marginLeft: '2px',
                    transition: 'opacity 0.1s',
                  }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

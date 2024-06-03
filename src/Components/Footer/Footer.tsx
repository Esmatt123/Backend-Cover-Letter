import React, { useEffect, useRef } from 'react';
import { AnimatedSpan, FooterContainer } from './Footer.styles';

const Footer: React.FC = () => {
  const text = 'Full name: Esmatt Morra,  Age: 25, Occupation: Preschool Teacher';
  const letters = Array.from(text);

  const iterations = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleAnimationIteration = () => {
    iterations.current += 1;
    if (iterations.current === letters.length) {
      containerRef.current?.removeEventListener('animationiteration', handleAnimationIteration);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('animationiteration', handleAnimationIteration);
      return () => container.removeEventListener('animationiteration', handleAnimationIteration);
    }
  }, []);

  return (
    <FooterContainer ref={containerRef} className="form-control">
      {letters.map((letter, idx) => (
        <AnimatedSpan key={idx + 1} index={idx + 1}>
          {letter}
        </AnimatedSpan>
      ))}
    </FooterContainer>
  );
};

export default Footer;

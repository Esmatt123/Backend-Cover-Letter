// View1.tsx
import React from 'react';

const Two: React.FC = () => {
  const str = `The web development and IT field is a constantly changing and growing landscape, I don't shy away from this, I love learning new things, its my passion to learn, and programming is something I burn for, Ive studied every day for over a year and at no point did I feel myself getting bored, and I seek to learn even more things in the future, I want to learn Devops, Cloud, CyberSecurity, Quality Assurance, Mobile Development, and I dont feel that this is impossible, if I came this far I can go even further. But what I believe is what makes a good developer, is having a good grasp of the foundations, be willing to learn new things, admit that theyll never be perfect and always seek to improve themselves and their work, be a good team player and be creative and have good problem solving abilites. I believe myself having these qualities, and even if I'm not fully describable with these statements yet, I believe Ill grow and learn with time`
  return (
    <div>
      <h2>Why I'll be a good future developer</h2>
      <p>{str}</p>
      <p>This paragraph is {str.split(' ').length} words long</p>
      
    </div>
  );
};

export default Two;

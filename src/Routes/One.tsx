// View1.tsx
import React from 'react';

const One: React.FC = () => {
  const str = `Ive been self studying programming for over a year now. 
  Learning about Html, Css, JavaScript, React, C# and the .NET Framework,
  the reason why I want to take this course is for a couple of reasons,  
  Ive yet to learn to program in a team and learn about agile/scrum development 
  This school seems to be very kind to people with special needs, as I myself am 
  diagnosed with Asperger syndrome and would love the guidance and supportive environment this school would offer. 
  There may be gaps in my knowledge, although Im confident in my own abilities, I want to see and hear others point of view, and push myself further 
  If this school offers any kind of recruitment assistance and potential to meet potential future employers, I would love that opportunity to get my foot in the door in the IT industry`

  return (
    <div>
      <h2>Why I want to study this course</h2>
      <p>{str}</p>
      <p>This paragraph is {str.split(' ').length} words long</p>
    </div>
  );
};

export default One;

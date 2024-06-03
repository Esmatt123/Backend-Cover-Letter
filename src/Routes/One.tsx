// View1.tsx
import React from 'react';

const One: React.FC = () => {
  const str = `Ive been self studying programming for over two years now. 
  I took the front end course, and was  very happy with the people I met, the teachers including Michelle, and the projects I got to do, 
  I am pretty familiar with backend development with Asp.net/C#, but not very familiar with Node.js, and thats why id like to take this course, 
  to add another framework to my skillset. There may be gaps in my knowledge, although Im confident in my own abilities, 
  I want to see and hear others point of view, and push myself further 
  If this school offers any kind of recruitment assistance and potential to meet 
  potential future employers, I would love that opportunity to get my foot in the door in the IT industry`

  return (
    <div>
      <h2>Why I want to study this course</h2>
      <p>{str}</p>
      <p>This paragraph is {str.split(' ').length} words long</p>
    </div>
  );
};

export default One;

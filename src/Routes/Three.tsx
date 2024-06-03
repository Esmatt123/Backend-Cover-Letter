// View1.tsx
import React from 'react';
import styled from 'styled-components';

const View1Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  overflow-y: auto;
  height: 100vh;
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const Three: React.FC = () => {
  const str = 'My name is Esmatt Morra, Im 25 years old and Im a preschool teacher. I got done with my university education in february 2022. For 2 years ive worked as a stand in teacher for dozens of different preschools in Stockholm. When I got done with university, I was free to pursue my own passions, which the biggest passion at the time was digital art. For half a year I studied digital art, and wanted to get into freelancing. After I studied for awhile I came across web development, how there was this massive growing demand for IT professionals, so I decided to give it a shot. And I immediatelly fell in love with it. So I started learning html and css, then I dedicated 4 months just to learn the ins and outs of javascript, which allowed me to get into deeper programming principles like different programming paradigms like object oriented programming, data types, and many other things. Afterwards I got into React, which I dedicated another 2 months to, after that, I decided my journey wasnt over, I didnt just wna t to become a front end developer, I realized I had to be more competitive than that. So I learned backend development with C# and the .NET framework I also learned about unit testing, databases, and creating a fullstack application with React and .Net, in this case a social media website, which was a guided project. Then I applied to an internship, where in order to prove my ability as a developer I got to make a book crud application, where you could make a list of books and then list quotes from that book, and then toggle your favourite quotes, and in this application I also had a dark and light mode, and ability to login and register with jwt tokens. This was made using Angular, and even though I hadnt used Angular before, I had to learn quickly in order to get the project done within the 2 week time frame. And I succeeded. I was accepted into the internship, but I had to decline because the internship was unpaid and 9 months long. I also applied to SALT, school of applied technology, and out of 1000 applicants, I made it to the last round of applicants. And even though I didnt get in, I was proud of how far I came. Now, I feel like although Ive enjoyed my journey so far as a teacher, I want to expand my horizons, and pursue this field which I truly feel that I burn for. When I worked with children, I learned patience, adapting to new environments, and leadership. Ive learned that its important to listen and to properly communicate. This is essential in all work fields and in all facets of life, and these are the experiences that I feel that I will  bring with my in my new job as a front end or fullstack developer. Because I know that working as a developer you work in a team, and thats why good teamwork and proper communication is necessary. Other things to know about me, I exercise once or twice a week, I like learning more about programming and digital art, Im also learning arabic. I like to spend time with friends, watch movies, read books and travel. I dont stay stuck in one place, I learn and im committed to always change and always improve on my skills and as a person. Thank you for reading, and considering my application'
  
  return (
    <View1Container>
      <h2>Personal Letter</h2>
      <ImgContainer> <Img src="/WP_20160330_21_19_52_Selfie.jpg" alt="Esmatt" /></ImgContainer>
     
      <p>{str}</p>
      <small> This letter is {str.split(' ').length} words long</small>
      <p>This website was made with React</p>
    <br />
      <button><a href='https://github.com/Esmatt123'>Github Profile</a></button>

      <button><a href='https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin'>LinkedIn</a></button>

    </View1Container>
  );
};

export default Three;

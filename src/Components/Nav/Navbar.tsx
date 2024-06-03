// Navbar.tsx
import React from 'react';
import { StyledNav, StyledUl, StyledLi } from './navbarStyled';
import { Link } from 'react-router-dom';

// Navbar component
const Navbar: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.currentTarget.offsetTop;
    const buttonLeft = e.currentTarget.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const ripple = document.createElement('span');
    ripple.classList.add('circle');
    ripple.style.top = `${yInside}px`;
    ripple.style.left = `${xInside}px`;

    // Append the ripple to the clicked StyledLi
    e.currentTarget.appendChild(ripple);

    setTimeout(() => ripple.remove(), 500);
  };

  return (
    <StyledNav>
      <StyledUl>
        <StyledLi onClick={handleClick}>
        <Link to="/">Why I want to study this course</Link>
        </StyledLi>
        <StyledLi onClick={handleClick}>
        <Link to="/two">Why I'll be a good future developer</Link>
        </StyledLi>
        <StyledLi onClick={handleClick}>
        <Link to="/three">Personal letter</Link>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

export default Navbar;

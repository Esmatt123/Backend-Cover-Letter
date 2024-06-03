import styled, { keyframes } from 'styled-components';

// Styled components
export const StyledNav = styled.nav`
  background-color: #333;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  box-sizing: border-box;
  justify-content: center;
  
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  margin-left: -20px;
  
`;

const rippleAnimation = keyframes`
  to {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
`;

export const StyledLi = styled.li`
  position: relative;
  overflow: hidden;
  margin-right: 20px;
  color: white;
  cursor: pointer;
  border-right: 1px solid black;
  border-left: 1px solid black;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .circle {
    position: absolute;
    background-color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.5s ease-out;
  }

  &:hover .circle {
    animation: ${rippleAnimation} 0.5s ease-out;
  }
`;
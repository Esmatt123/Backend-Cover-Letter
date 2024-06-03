import styled, { keyframes } from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #090045;
  width: 80%;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: #fff;
`;

export const waveAnimation = keyframes`
  0% { transform: translateY(0); opacity: 0; }
  30% { transform: translateY(-10px); opacity: 1; }
`;

export const AnimatedSpan = styled.span<{ index: number }>`
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  animation: ${waveAnimation} 0.5s ease-out ${({ index }) => index * 0.02}s 1 alternate;
`;
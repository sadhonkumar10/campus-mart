import React from 'react';
import styled from 'styled-components';
import logo from '/campus-logo.png'; // এখানে তোমার logo path

const Loader = () => {
  return (
    <StyledWrapper>
      <img src={logo} alt="Campus Mart Logo" className="logo" />
      <div className="book">
        <div className="book__pg-shadow" />
        <div className="book__pg" />
        <div className="book__pg book__pg--2" />
        <div className="book__pg book__pg--3" />
        <div className="book__pg book__pg--4" />
        <div className="book__pg book__pg--5" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .logo {
    width: 120px;
    height: auto;
    margin-bottom: 40px;
  }

  .book,
  .book__pg-shadow,
  .book__pg {
    animation: cover 5s ease-in-out infinite;
  }

  .book {
    background-color: hsl(268, 90%, 65%);
    border-radius: 0.25em;
    box-shadow:
      0 0.25em 0.5em hsla(0, 0%, 0%, 0.3),
      0 0 0 0.25em hsl(278, 100%, 57%) inset;
    padding: 0.25em;
    perspective: 37.5em;
    position: relative;
    width: 8em;
    height: 6em;
    transform: translate3d(0, 0, 0);
    transform-style: preserve-3d;
  }

  .book__pg-shadow,
  .book__pg {
    position: absolute;
    left: 0.25em;
    width: calc(50% - 0.25em);
  }

  .book__pg-shadow {
    animation-name: shadow;
    background-image: linear-gradient(-45deg, hsla(0,0%,0%,0) 50%, hsla(0,0%,0%,0.3) 50%);
    filter: blur(0.25em);
    top: calc(100% - 0.25em);
    height: 3.75em;
    transform: scaleY(0);
    transform-origin: 100% 0%;
  }

  .book__pg {
    animation-name: pg1;
    background-color: hsl(223, 10%, 100%);
    background-image: linear-gradient(90deg, hsla(223, 10%, 90%, 0) 87.5%, hsl(223, 10%, 90%));
    height: calc(100% - 0.5em);
    transform-origin: 100% 50%;
  }

  .book__pg--2,
  .book__pg--3,
  .book__pg--4 {
    background-image: repeating-linear-gradient(
        hsl(223, 10%, 10%) 0 0.125em,
        hsla(223, 10%, 10%, 0) 0.125em 0.5em
      ),
      linear-gradient(90deg, hsla(223, 10%, 90%, 0) 87.5%, hsl(223, 10%, 90%));
    background-repeat: no-repeat;
    background-position: center;
    background-size: 2.5em 4.125em, 100% 100%;
  }

  .book__pg--2 { animation-name: pg2; }
  .book__pg--3 { animation-name: pg3; }
  .book__pg--4 { animation-name: pg4; }
  .book__pg--5 { animation-name: pg5; }

  /* -------------------- Keyframes -------------------- */
  @keyframes cover {
    0%,5%,45%,55%,95%,100% { background-color: hsl(278, 84%, 67%); }
    10%,40%,60%,90% { background-color: hsl(271, 90%, 45%); }
  }

  @keyframes shadow {
    0%,10.01%,20.01%,30.01%,40.01% { transform: scaleY(0) rotateY(0); }
    5%,15%,25%,35%,45%,55%,65%,75%,85%,95% { transform: scaleY(0.2) rotateY(90deg); }
    10%,20%,30%,40%,50%,100% { transform: scaleY(0) rotateY(180deg); }
    60%,70%,80%,90%,100% { transform: scaleY(0) rotateY(0); }
  }

  @keyframes pg1 { 0%,100% { transform: rotateY(0.4deg); } 10%,15% { transform: rotateY(180deg); } 20%,80% { transform: rotateY(180deg); } 85%,90% { transform: rotateY(180deg); } }
  @keyframes pg2 { 0%,100% { transform: rotateY(0.3deg); } 5%,10% { transform: rotateY(0.3deg); } 20%,25% { transform: rotateY(179.9deg); } 30%,70% { transform: rotateY(179.9deg); } 75%,80% { transform: rotateY(179.9deg); } 90%,95% { transform: rotateY(0.3deg); } }
  @keyframes pg3 { 0%,10%,90%,100% { transform: rotateY(0.2deg); } 15%,20% { transform: rotateY(0.2deg); } 30%,35% { transform: rotateY(179.8deg); } 40%,60% { transform: rotateY(179.8deg); } 65%,70% { transform: rotateY(179.8deg); } 80%,85% { transform: rotateY(0.2deg); } }
  @keyframes pg4 { 0%,20%,80%,100% { transform: rotateY(0.1deg); } 25%,30% { transform: rotateY(0.1deg); } 40%,45% { transform: rotateY(179.7deg); } 50% { transform: rotateY(179.7deg); } 55%,60% { transform: rotateY(179.7deg); } 70%,75% { transform: rotateY(0.1deg); } }
  @keyframes pg5 { 0%,30%,70%,100% { transform: rotateY(0deg); } 35%,40% { transform: rotateY(0deg); } 50% { transform: rotateY(179.6deg); } 60%,65% { transform: rotateY(0deg); } }
`;

export default Loader;

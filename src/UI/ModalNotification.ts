import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  right: 10%;
  width: 50%;
  margin: 0 auto;
  z-index: 100;
  overflow: hidden;
  background: white;
  display: block;
  border-radius: 0.25rem;


  
  header {
    background: #4f005f;
    padding: 1rem;

    h2 {
      margin: 0;
      color: white;
      font-weight: bold;
    }
  }

  p {
    padding: 2rem;
    font-size: 1.5rem;
  }
  
  footer {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  /* @media (min-width: 800px) {
    left: calc(50% - 20rem);
    width: 40rem;
  } */
`;
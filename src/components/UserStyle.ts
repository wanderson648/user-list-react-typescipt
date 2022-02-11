import styled from 'styled-components';

export const Content = styled.form`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;


  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;

  label {
    display: block;
    font-weight: bold;
    margin: 1rem 0;
  }

  input {
    display: block;
    width: 100%;
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;

    &:focus {
      outline: none;
      border-color: #4f005f;
    }
  }
`;

export const UserList = styled.div`
  margin: 2rem auto;
  padding: 1rem;
  width: 100%;
  max-width: 40rem;
  background: white;
  border-radius: 0.25rem;

  ul {
    list-style: none;
    padding: 1rem;

    li {
      border: 1px solid #ccc;
      margin: 0.5rem 0;
      padding: 0.5rem;
    }
  }

`;

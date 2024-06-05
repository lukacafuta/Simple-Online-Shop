import styled from "styled-components";

export const MainContainerStyled = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const MainContainerHeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;

  h1 {
    margin: 0;
  }
`;

export const SignupFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`;

export const ButtonStyled = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #d7c0ae;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #967e76;
  }
`;

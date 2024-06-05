import styled from "styled-components";

export const ProductDetailContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  img {
    width: 250px;
    height: 250px;
  }
`;

export const ProductContainerHeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;

  h1 {
    margin: 0;
  }
`;

export const ProductDescriptionStyled = styled.div`
  width: 60%;
`;

export const QuantitySelectorContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
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

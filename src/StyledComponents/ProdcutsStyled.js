import styled from "styled-components";

export const MainContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem 8rem 2rem 8rem;
`;

export const ProductCardStyled = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  max-width: 250px;
  height: 400px;
  background-color: white;
  border: none;
  border-radius: 12px;
  color: black;

  img {
    width: 100%;
    height: 250px;
  }

  .price-container {
    text-decoration: none;
  }
`;

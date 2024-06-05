import styled from "styled-components";

export const CartContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const CartContainerHeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;

  h1 {
    margin: 0;
  }
`;

export const CartItemStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }

  .item-price label,
  .item-quantity label {
    font-weight: bold;
    margin-left: 1rem;
  }
`;

export const CartButtons = styled.div`
  display: flex;
  margin-left: 3rem;
  gap: 0.5rem;
`;

export const TotalContainerStyled = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  margin-top: 2rem;
`;

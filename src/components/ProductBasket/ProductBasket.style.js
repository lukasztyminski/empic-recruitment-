import styled from 'styled-components';

export const ProductBasketWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Name = styled.h3`
  background-color: ${({ theme }) => theme.colors.lightPurple};
  margin-left: 1rem;
`;

export const Quantity = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-right: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

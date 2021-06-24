import styled from 'styled-components';
import { mixinFlex } from 'helpers';

export const ProductBasketWrapper = styled.li`
  ${mixinFlex('', 'center', 'flex-start')}
`;

export const TitleWrapper = styled.div`
  ${mixinFlex('', 'center', 'flex-start')}
  width: 100%;
`;

export const Name = styled.h3`
  background-color: ${({ theme }) => theme.colors.lightPurple};
  margin-right: 1rem;
  padding: 0.1rem 0.3rem;
`;

export const Quantity = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0.5rem;
`;

export const ButtonWrapper = styled.div`
  ${mixinFlex('', 'center', 'flex-end')}
`;

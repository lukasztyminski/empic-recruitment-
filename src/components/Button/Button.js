import styled, { css } from 'styled-components';
import { mixinFlex } from 'helpers';

export const Button = styled.button`
  padding: ${({ isBig }) => (isBig ? '10px 20px' : '7px 10px')};
  font-size: ${({ isBig, theme }) => (isBig ? theme.fontSize.m : theme.fontSize.l)};
  background-color: ${({ theme }) => theme.colors.darkPurple};
  border-radius: 2rem;
  ${mixinFlex('column', 'center', 'center')};
  height: 2rem;
  width: 2rem;
  border: none;
  font-weight: bold;
  transition: 1s background ease-in-out;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
  & + & {
    margin-left: 0.5rem;
  }
  &:focus,
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.warning};
  }
`;

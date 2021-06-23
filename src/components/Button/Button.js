import styled from 'styled-components';

export const Button = styled.button`
  margin: 15px 0;
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '7px 10px')};
  font-size: ${({ isBig, theme }) => (isBig ? theme.fontSize.m : theme.fontSize.s)};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 50%;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme, value }) => {
    if (value > 9) return theme.colors.success;
    if (value < 2) return theme.colors.error;
    return theme.colors.grey;
  }};
`;

import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  height: 34px;
  border-radius: 80px;
  border: ${p => p.theme.borders.none};
  color: ${p => p.theme.colors.mainText};
  background-color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.63;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.btnHover};
  }

  :disabled {
    background-color: ${p => p.theme.colors.btnDisabled};
  }

  & + & {
    margin-left: 10px;
  }
`;

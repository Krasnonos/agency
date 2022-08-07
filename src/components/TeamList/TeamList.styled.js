import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 140px;
  padding-bottom: 140px;
  background-color: ${p => p.theme.colors.background};
`;

export const Conteiner = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  text-align: center;

  @media screen and (min-width: 360px) {
    width: 360px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding-left: 60px;
    padding-right: 60px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 50px;
  text-align: center;
  color: ${p => p.theme.colors.mainText};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1;
`;

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
  }
  @media screen and (min-width: 1024px) {
    margin: -14.5px;
  }
`;
export const Btn = styled.button`
  margin-top: 50px;
  padding: 4px 19px;
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
`;

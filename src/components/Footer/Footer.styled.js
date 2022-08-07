import styled from 'styled-components';

export const FooterSection = styled.footer`
  padding-bottom: 100px;
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
    padding-left: 194px;
    padding-right: 194px;
  }
  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding-left: 322px;
    padding-right: 322px;
  }
`;

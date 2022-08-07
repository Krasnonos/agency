import styled from 'styled-components';

export const HeaderSection = styled.header`
  padding: 13px 0px;
`;

export const Conteiner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;

  @media screen and (min-width: 360px) {
    width: 360px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1024px) {
    width: 1024px;
  }
`;

export const LogoLink = styled.a``;

export const NavBtns = styled.div`
  display: flex;
  margin-left: auto;
`;

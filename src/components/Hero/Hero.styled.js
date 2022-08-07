import styled from 'styled-components';
import mobImg from '../../images/hero-mob.jpg';
import tablImg from '../../images/hero-tablet.jpg';
import descImg from '../../images/hero-desc.png';

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 71px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${mobImg});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 768px) {
    padding-top: 89px;
    padding-bottom: 88px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${tablImg});
  }
  @media screen and (min-width: 1024px) {
    padding-top: 164px;
    padding-bottom: 163px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${descImg});
  }
`;

export const Conteiner = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;

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

export const Title = styled.h1`
  text-align: center;
  color: ${p => p.theme.colors.secondaryText};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1;
`;

export const Descr = styled.p`
  text-align: center;
  margin-top: 21px;
  margin-bottom: 32px;
  color: ${p => p.theme.colors.secondaryText};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.63;
`;

export const BtnWrap = styled.div`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
`;

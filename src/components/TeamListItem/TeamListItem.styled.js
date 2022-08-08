import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 328px;
  min-height: 254px;
  padding: 20px;
  background-color: ${p => p.theme.colors.secondaryBg};
  border-radius: ${p => p.theme.radii.normal};

  & + & {
    @media screen and (max-width: 767px) {
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 8px;
    width: 344px;
    min-height: 254px;
  }
  @media screen and (min-width: 1024px) {
    margin: 14.5px;
    width: 282px;
    min-height: 254px;
  }

  @media screen and (min-width: 1170px) {
    width: 370px;
  }
`;

export const ImgWrap = styled.div`
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DescrBlock = styled.div`
  text-align: center;
  color: ${p => p.theme.colors.mainText};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.63;
`;

export const MemberName = styled.h3`
  margin-bottom: 20px;
  font-weight: ${p => p.theme.fontWeights.normal};
`;

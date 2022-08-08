import styled from 'styled-components';

export const From = styled.form`
  margin-top: 50px;
  @media screen and (min-width: 768px) {
    width: 380px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  height: 54px;
  padding: 14px 16px;
  border: 1px solid rgba(208, 207, 207, 1);
  border-radius: 4px;

  & + & {
    margin-top: 50px;
  }
`;

export const PhoneBox = styled.div`
  position: relative;
  margin-top: 50px;
`;

export const PhoneLabel = styled.label`
  position: absolute;
  left: 16px;
  bottom: -20px;
  font-size: 12px;
  line-height: 1.17;
  color: #7e7e7e;
`;

export const PositionText = styled.p`
  text-align: left;
  margin-top: 43px;
  margin-bottom: 11px;
  color: ${p => p.theme.colors.mainText};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.63;
`;

export const RadiosWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 41px;
`;

export const Label = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: start;
  width: 180px;
  padding-left: 32px;
  color: ${p => p.theme.colors.mainText};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.63;

  & + & {
    margin-top: 7px;
  }
  :hover,
  :focus {
    cursor: pointer;
  }
`;

export const RadioInput = styled.input`
  display: none;
`;

export const CheckMark = styled.span`
  position: absolute;
  left: 0px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: solid 1px rgba(208, 207, 207, 1);

  ${RadioInput}:checked ~ & {
    background-color: ${p => p.theme.colors.secondary};
    border: solid 1px ${p => p.theme.colors.secondary};
    box-shadow: inset 0px 0px 0px 4px ${p => p.theme.colors.secondaryBg};
  }
`;

export const UploadInput = styled.input`
  display: none;
`;

export const UploadLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  height: 54px;
  margin-bottom: 50px;
  border: 1px solid rgba(208, 207, 207, 1);
  border-radius: 4px;
  color: #7e7e7e;

  :hover,
  :focus {
    cursor: pointer;
  }
`;

export const UploadSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 83px;
  margin-right: 16px;
  margin-left: -1px;
  border: 1px solid rgba(0, 0, 0, 0.87);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  color: ${p => p.theme.colors.mainText};
`;

export const BtnWrap = styled.div`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
`;

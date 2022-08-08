import styled from 'styled-components';

export const From = styled.form`
  margin-top: 50px;
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

export const Label = styled.label``;

export const RadioInput = styled.input``;

export const CheckMark = styled.span``;

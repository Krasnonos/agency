import mobImg from '../../images/hero-mob.jpg';
import {
  Item,
  ImgWrap,
  Img,
  DescrBlock,
  MemberName,
} from './TeamListItem.styled';

export const TeamListItem = () => {
  return (
    <Item>
      <ImgWrap>
        <Img src={mobImg} alt="Takamaru Ayako Jurrien" />
      </ImgWrap>
      <DescrBlock>
        <MemberName>Takamaru Ayako Jurrien</MemberName>
        <p>Lead Independent Director </p>
        <p>Takamuru@gmail.com</p>
        <p>+38 (098) 278 90 24</p>
      </DescrBlock>
    </Item>
  );
};

import {
  Item,
  ImgWrap,
  Img,
  DescrBlock,
  MemberName,
} from './TeamListItem.styled';

export const TeamListItem = ({ user }) => {
  const { name, email, phone, position, photo } = user;
  return (
    <Item>
      <ImgWrap>
        <Img src={photo} alt={name} />
      </ImgWrap>
      <DescrBlock>
        <MemberName>{name}</MemberName>
        <p>{position}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </DescrBlock>
    </Item>
  );
};

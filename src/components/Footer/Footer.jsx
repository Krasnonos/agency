import { SignUpForm } from '../SignUpForm/SignUpForm';
import { FooterSection, Conteiner, Title } from './Footer.styled';

export const Footer = ({ onSubmitForm }) => {
  return (
    <FooterSection>
      <Conteiner>
        <Title>Working with POST request</Title>
        <SignUpForm onSubmitForm={onSubmitForm} />
      </Conteiner>
    </FooterSection>
  );
};

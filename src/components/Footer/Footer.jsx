import { SignUpForm } from '../SignUpForm/SignUpForm';
import { FooterSection, Conteiner, Title } from './Footer.styled';

export const Footer = ({ setIsNewUser }) => {
  return (
    <FooterSection>
      <Conteiner>
        <Title>Working with POST request</Title>
        <SignUpForm setIsNewUser={setIsNewUser} />
      </Conteiner>
    </FooterSection>
  );
};

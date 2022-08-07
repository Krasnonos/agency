import { Button } from '../Button/Button';
import { Section, Conteiner, Title, Descr, BtnWrap } from './Hero.styled';

export const Hero = () => {
  return (
    <Section>
      <Conteiner>
        <Title>Test assignment for front-end developer</Title>
        <Descr>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </Descr>
        <BtnWrap>
          <Button>Sign Up</Button>
        </BtnWrap>
      </Conteiner>
    </Section>
  );
};

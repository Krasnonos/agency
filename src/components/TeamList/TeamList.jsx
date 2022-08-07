import { TeamListItem } from '../TeamListItem/TeamListItem';
import { Section, Conteiner, Title, List, Btn } from './TeamList.styled';

export const TeamList = () => {
  return (
    <Section>
      <Conteiner>
        <Title>Working with GET request</Title>
        <List>
          <TeamListItem />
          <TeamListItem />
          <TeamListItem />
          <TeamListItem />
          <TeamListItem />
          <TeamListItem />
          <TeamListItem />
        </List>
        <Btn type="button">Show more</Btn>
      </Conteiner>
    </Section>
  );
};

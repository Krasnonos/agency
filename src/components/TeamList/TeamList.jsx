import { useState, useEffect, useRef } from 'react';
import { TeamListItem } from '../TeamListItem/TeamListItem';
import { Section, Conteiner, Title, List, Btn } from './TeamList.styled';
import { getUsers } from '../../utils/getUsers';

export const TeamList = ({ isNewUser, setIsNewUser }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isShowMore, setIsShowMore] = useState(true);
  const isFirsRender = useRef(true);

  useEffect(() => {
    if (isFirsRender.current) {
      isFirsRender.current = false;
      return;
    }
    getUsers(page).then(res => {
      setUsers(state => [...state, ...res.users]);
      if (res.total_pages === res.page) {
        setIsShowMore(false);
      }
    });
  }, [page]);

  useEffect(() => {
    if (isNewUser) {
      getUsers(1).then(res => setUsers(res.users));
      setIsNewUser(false);
    }
  }, [isNewUser, setIsNewUser]);

  if (!users.length === 0) {
    return;
  }

  return (
    <Section>
      <Conteiner>
        <Title>Working with GET request</Title>
        <List>
          {users.map(user => (
            <TeamListItem key={user.id} user={user} />
          ))}
        </List>
        {isShowMore && (
          <Btn type="button" onClick={() => setPage(page => page + 1)}>
            Show more
          </Btn>
        )}
      </Conteiner>
    </Section>
  );
};

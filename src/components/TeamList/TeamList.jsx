import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { TeamListItem } from '../TeamListItem/TeamListItem';
import { Section, Conteiner, Title, List, Btn } from './TeamList.styled';
import { getUsers } from '../../utils/getUsers';

export const TeamList = ({ isNewUser, setIsNewUser }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isShowMore, setIsShowMore] = useState(true);

  useEffect(() => {
    try {
      getUsers(page).then(res => {
        setUsers(state => [...state, ...res.users]);
        if (res.total_pages === res.page) {
          setIsShowMore(false);
        }
      });
    } catch (error) {
      toast(error.message);
    }
  }, [page]);

  useEffect(() => {
    if (isNewUser) {
      try {
        getUsers(1).then(res => setUsers(res.users));
        setIsNewUser(false);
      } catch (error) {
        toast(error.message);
      }
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

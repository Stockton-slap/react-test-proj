import user from '../../data/user.json';
// import data from '../../data/data.json';
import friends from '../../data/friends.json';
// import transactions from '../../data/transactions.json';

import { Container } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import { FriendList } from 'components/FriendList/FriendList';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <>
      <Container>
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        ></Profile>
      </Container>

      <Container>
        <FriendList friends={friends}></FriendList>
      </Container>
    </>
  );
};

import PropTypes from 'prop-types';
import { FriendItem } from './Friend.styled';
import { Status } from './Friend.styled';
import { Avatar } from './Friend.styled';
import { Name } from './Friend.styled';

export const Friend = ({ avatar, isOnline, name }) => {
  return (
    <FriendItem>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48"></Avatar>
      <Name>{name}</Name>
    </FriendItem>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

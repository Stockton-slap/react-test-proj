import PropTypes from 'prop-types';
import { Friend } from 'components/Friend/Friend';

export const FriendList = ({ friends }) => {
  return friends.map(({ avatar, id, isOnline, name }) => {
    return <Friend key={id} avatar={avatar} isOnline={isOnline} name={name} />;
  });
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

import { Quantity } from 'components/Profile/Profile.styled';
import { Description } from 'components/Profile/Profile.styled';
import { Avatar } from 'components/Profile/Profile.styled';
import { Name } from 'components/Profile/Profile.styled';
import { Tag } from 'components/Profile/Profile.styled';
import { Location } from 'components/Profile/Profile.styled';
import { Stats } from 'components/Profile/Profile.styled';
import { Item } from 'components/Profile/Profile.styled';
import { Label } from 'components/Profile/Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Description>
      <Avatar src={avatar} alt={username}></Avatar>
      <Name>{username}</Name>
      <Tag>{tag}</Tag>
      <Location>{location}</Location>
      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </Stats>
    </Description>
  );
};

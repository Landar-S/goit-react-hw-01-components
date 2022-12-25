import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Info,
  StatsList,
  StatsItem,
  StatsText,
} from './Profile.styled';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <StatsList>
        <StatsItem>
          <StatsText>Followers</StatsText>
          <BsPeople size={25} />
          <StatsText>{stats.followers}</StatsText>
        </StatsItem>

        <StatsItem>
          <StatsText>Views</StatsText>
          <AiOutlineEye size={25} />
          <StatsText>{stats.views}</StatsText>
        </StatsItem>

        <StatsItem>
          <StatsText>Likes</StatsText>
          <BiLike size={25} />
          <StatsText>{stats.likes}</StatsText>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

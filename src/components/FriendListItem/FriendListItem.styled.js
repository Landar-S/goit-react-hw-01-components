import styled from 'styled-components';

export const FriendStatus = styled.span`
  width: 15px;
  height: 15px;
  background-color: #ff0000;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${({ isOnline }) => isOnline && '#00FF00'};
`;

export const FriendAvatar = styled.img`
  width: 48px;
`;

export const FriendText = styled.p`
  color: tomato;
`;

import styled from 'styled-components';

export const ProfileCard = styled.div`
  padding: ${p => p.theme.space[4]}px;
  width: 350px;
  text-align: center;
  border: black 2px dotted;
  border-radius: ${p => p.theme.radii.normal};
  background-image: radial-gradient(
    circle 506px at 50.6% 16.5%,
    rgba(239, 252, 250, 1) 5.5%,
    rgba(154, 192, 206, 1) 100.2%
  );
`;

export const Description = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Avatar = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  margin-bottom: ${p => p.theme.space[3]}px;
  object-fit: cover;
  border-radius: ${p => p.theme.radii.round};
`;

export const Name = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes[4]}px;
`;

export const Info = styled.p`
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const StatsList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
  gap: ${p => p.theme.space[3]}px;
  align-items: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const StatsText = styled.span`
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.body};
`;

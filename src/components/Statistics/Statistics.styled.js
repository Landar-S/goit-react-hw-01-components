import styled from 'styled-components';

export const StatisticsContainer = styled.section`
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

export const Title = styled.h2`
  padding: ${p => p.theme.space[2]}px;
  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 60px;
  padding: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.borders.normal};
`;

export const StatisticsText = styled.span``;

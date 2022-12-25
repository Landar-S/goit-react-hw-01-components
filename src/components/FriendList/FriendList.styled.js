import styled from 'styled-components';

export const List = styled.ul`
  padding: ${p => p.theme.space[4]}px;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  text-align: center;
  border: black 2px dotted;
  border-radius: ${p => p.theme.radii.normal};
  background-image: radial-gradient(
    circle 506px at 50.6% 16.5%,
    rgba(239, 252, 250, 1) 5.5%,
    rgba(154, 192, 206, 1) 100.2%
  );
`;

export const Item = styled.li`
  padding: ${p => p.theme.space[3]}px;
  display: flex;
  gap: ${p => p.theme.space[4]}px;
  align-items: center;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: ${p => p.theme.radii.normal};
`;

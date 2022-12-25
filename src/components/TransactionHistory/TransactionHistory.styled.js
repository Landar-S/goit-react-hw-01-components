import styled from 'styled-components';

export const TableTransactions = styled.table`
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

export const TableTransactionsHead = styled.thead`
  background: rgb(34 177 229);
  color: #fff;
`;

export const TableTransactionsRows = styled.tr`
  height: 24px;
  font-size: ${p => p.theme.fontSizes[1]}px;
  :nth-child(2n) {
    background: white;
  }
  transition: 250ms linear;
  :hover {
    cursor: pointer;
    box-shadow: 0px 3px 0px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
  }
`;

export const TableTransactionsHeaders = styled.th`
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  vertical-align: middle;
`;

export const TableTransactionsBody = styled.tbody``;

export const TableTransactionsData = styled.td``;

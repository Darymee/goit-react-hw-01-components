import styled from 'styled-components';

export const TransactionTable = styled.table`
  border-collapse: collapse;
  border: 2px solid grey;
  text-align: center;
  box-shadow: 6px 11px 36px 1px rgba(0, 0, 0, 0.39);
`;

export const TransactionTableHead = styled.thead`
  background-color: #3ea3f0;
  text-transform: uppercase;
  color: white;
`;

export const TransactionHeadLine = styled.th`
  padding: 10px;
  border-bottom: 2px solid grey;
  border-left: 2px solid grey;
`;

export const TransactionBodyLine = styled.tr`
  &:nth-child(2n) {
    background-color: #d8f0f0;
  }
  &:hover,
  &:focus {
    background-color: #8db1e6;
    cursor: pointer;
  }
`;

export const TransactionBodyСolumn = styled.td`
  text-transform: capitalize;
  width: 300px;
  padding: 10px;
  border-bottom: 2px solid grey;
  border-left: 2px solid grey;
`;

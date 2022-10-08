import styled from 'styled-components';

export const StatsList = styled.ul`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  border-top: 1px solid grey;
  background-color: #e5e5e5;
`;

export const StatsItem = styled.li`
  padding: 15px 0;
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    border-right: 1px solid grey;
  }
`;

export const LabelBlock = styled.span`
  margin-bottom: 10px;
  color: grey;
`;

export const QuantityBlock = styled.span`
  color: black;
  font-weight: 500;
`;

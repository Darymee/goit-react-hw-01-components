import styled from 'styled-components';

export const StatisticsList = styled.ul`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  border-top: 1px solid grey;
`;

export const StatisticsItem = styled.li`
  padding: 15px 0;
  width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    border-right: 1px solid grey;
  }

  &:nth-child(1) {
    background-color: #2b6ea3;
  }
  &:nth-child(2) {
    background-color: #1a4463;
  }
  &:nth-child(3) {
    background-color: #3ea3f0;
  }
  &:nth-child(4) {
    background-color: #3b9ae3;
  }
  &:nth-child(5) {
    background-color: #3489c9;
  }
`;

export const StatisticsLabel = styled.span`
  color: white;
  font-weight: 500;
  font-size: 18px;
`;

export const StatisticsPercentage = styled.span`
  color: white;
  font-weight: 500;
  font-size: 20px;
`;

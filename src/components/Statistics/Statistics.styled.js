import styled from 'styled-components';

export const StatisticsWrap = styled.section`
  display: flex;
  flex-direction: column;

  margin-bottom: 50px;

  width: 400px;
  align-items: center;
  border: 2px solid grey;
  padding-top: 15px;
  &:hover,
  &:focus {
    box-shadow: 6px 11px 36px 1px rgba(0, 0, 0, 0.39);
    cursor: pointer;
  }
`;

export const StatisticsTitle = styled.h2`
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

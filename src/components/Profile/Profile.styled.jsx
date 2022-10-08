import styled from 'styled-components';

export const ProfileWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  width: 250px;
  flex-wrap: wrap;
  border: 2px solid grey;

  &:hover,
  &:focus {
    box-shadow: 6px 11px 36px 1px rgba(0, 0, 0, 0.39);
    cursor: pointer;
  }
`;

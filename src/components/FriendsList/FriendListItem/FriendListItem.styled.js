import styled from 'styled-components';

export const FriendItem = styled.li`
  width: 200px;
  padding: 10px;
  border: 2px solid grey;
  display: flex;
  align-items: center;
  box-shadow: 6px 11px 36px 1px rgba(0, 0, 0, 0.39);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #b4e1f7;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  display: block;

  margin-right: 20px;

  background-color: ${props => {
    if (props.status) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;

export const FriendAvatar = styled.img`
  margin-right: 25px;
  border-radius: 50%;
  border: 1px solid grey;
`;

export const FriendName = styled.p`
  font-weight: 600;
  font-size: 20px;
`;

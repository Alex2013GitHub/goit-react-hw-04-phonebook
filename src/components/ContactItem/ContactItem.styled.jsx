import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
  width: 500px;
`;

export const ContactInfo = styled.span`
  flex-grow: 1;
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  padding: 5px 15px;
  border: none;
  border-radius: 4px;
  background-color: #696969;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  color: #000;
  text-decoration: none;
  font-size: 18px;
`;

export const List = styled.ul`
margin-top: 20px`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

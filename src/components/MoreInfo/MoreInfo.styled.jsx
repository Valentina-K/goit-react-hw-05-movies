import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  text-decoration: none;
  color: gray;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  margin-top: 20px;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Subtitle = styled.h3`
  margin-bottom: 10px;
`;

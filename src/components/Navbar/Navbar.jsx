import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <h1>Task Manager</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  background: #1e90ff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  li {
    font-size: 16px;
  }
`;

export default Navbar;

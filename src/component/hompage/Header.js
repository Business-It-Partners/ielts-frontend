import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Home, User, Bell } from 'lucide-react';

const HeaderWrapper = styled.header`
  background-color: #2c3e50;
  color: white;
  padding: 0.8rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', Arial, sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  color: #3498db;
  margin-right: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: #2980b9;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  margin: 0 1rem;
  cursor: pointer;
  font-size: 0.95rem;
  white-space: nowrap;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  text-decoration: none;
  color: white;

  &:hover {
    color: #3498db;
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: #3498db;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const AuthSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  background-color: ${props => props.primary ? '#3498db' : 'transparent'};
  border: ${props => props.primary ? 'none' : '2px solid #3498db'};
  color: ${props => props.primary ? 'white' : '#3498db'};
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: bold;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.primary ? '#2980b9' : 'rgba(52, 152, 219, 0.1)'};
    color: ${props => props.primary ? 'white' : '#2980b9'};
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(52, 152, 219, 0.2);
  }
`;

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = (action) => {
    console.log(`Initiating ${action} process`);
    setIsLoggedIn(!isLoggedIn);  // Toggle login state for demo purposes
  };

  const handleNotifications = () => {
    console.log('Opening notifications');
  };

  const handleProfile = () => {
    console.log('Opening user profile');
  };

  return (
    <HeaderWrapper>
      <Nav>
        <Logo to="/">
          <Home size={24} />
        </Logo>
        <NavItem to="/ielts-section-test">IELTS Exam Library</NavItem>
        <NavItem to="/mock-test">Mock Test</NavItem>
        <NavItem to="/prep">IELTS Prep</NavItem>
        <NavItem to="/live-lessons">Live Lessons</NavItem>
        <NavItem to="/courses">IELTS Courses</NavItem>
      </Nav>
      <AuthSection>
        {isLoggedIn ? (
          <>
            <IconButton onClick={handleNotifications} aria-label="Notifications">
              <Bell size={20} />
            </IconButton>
            <IconButton onClick={handleProfile} aria-label="User Profile">
              <User size={20} />
            </IconButton>
          </>
        ) : (
          <>
            <Button onClick={() => handleAuth('sign up')}>Sign Up</Button>
            <Button primary onClick={() => handleAuth('log in')}>Log In</Button>
          </>
        )}
      </AuthSection>
    </HeaderWrapper>
  );
};

export default Header;
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Home, ChevronDown, User, Bell } from 'lucide-react';

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

const Logo = styled(Home)`
  color: #3498db;
  margin-right: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #2980b9;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  margin: 0 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.95rem;
  white-space: nowrap;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #3498db;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #34495e;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  padding: 0.5rem 0;
  z-index: 10;
  display: ${props => props.isOpen ? 'block' : 'none'};
  min-width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.div`
  padding: 0.7rem 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #3498db;
    color: white;
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
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { 
      title: 'IELTS Exam Library', 
      items: ['Practice Tests', 'Sample Essays', 'Vocabulary Lists']
    },
    { 
      title: 'IELTS Tips', 
      items: ['Writing Tips', 'Speaking Tips', 'Reading Tips', 'Listening Tips']
    },
    { 
      title: 'IELTS Prep', 
      items: ['Study Plans', 'Online Courses', 'Mock Tests']
    },
    { 
      title: 'Live Lessons', 
      items: ['Upcoming Classes', 'Recorded Sessions', 'One-on-One Tutoring']
    },
    { 
      title: 'IELTS Courses', 
      items: ['Beginner', 'Intermediate', 'Advanced']
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavItemClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleDropdownItemClick = (navItem, item) => {
    console.log(`Navigating to: ${navItem} - ${item}`);
    setOpenDropdown(null);
  };

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
        <Logo size={24} onClick={() => console.log('Navigating to home')} />
        {navItems.map((item, index) => (
          <NavItem 
            key={index} 
            onClick={() => handleNavItemClick(index)}
            onKeyPress={(e) => e.key === 'Enter' && handleNavItemClick(index)}
            tabIndex={0}
            role="button"
            aria-haspopup="true"
            aria-expanded={openDropdown === index}
          >
            {item.title} <ChevronDown size={16} style={{ marginLeft: '4px' }} />
            <Dropdown isOpen={openDropdown === index} ref={dropdownRef}>
              {item.items.map((subItem, subIndex) => (
                <DropdownItem 
                  key={subIndex}
                  onClick={() => handleDropdownItemClick(item.title, subItem)}
                  onKeyPress={(e) => e.key === 'Enter' && handleDropdownItemClick(item.title, subItem)}
                  tabIndex={0}
                  role="menuitem"
                >
                  {subItem}
                </DropdownItem>
              ))}
            </Dropdown>
          </NavItem>
        ))}
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
import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Home, FileText, BarChart2, HelpCircle, Settings, LogIn, ChevronLeft, Book, Users, Bell, Search, Menu, Phone, MapPin, Clock, Facebook, Twitter, Youtube, LogOut } from 'lucide-react';

const PortalContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;


const Header = styled.header`
  background-color: #bcb913;
  color: #333333;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add elevation */
  position: relative; /* Ensure the shadow is visible */
  z-index: 10; /* Place the header above other elements */
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
`;

const NavItem = styled(Link)`
  color: #333333;
  text-decoration: none;
  &:hover {
    color: #ff0000;
  }
`;


const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Sidebar = styled.nav`
  width: 240px;
  background-color: #f5f5f5;
  color: #333333;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: ${props => props.isOpen ? '280px' : '0'};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
  }
`;

const SidebarGroup = styled.div`
  margin-bottom: 20px;
`;

const SidebarGroupTitle = styled.h2`
  font-size: 12px;
  text-transform: uppercase;
  color: #666666;
  padding: 0 20px;
  margin-bottom: 10px;
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #333333;
  text-decoration: none;
  transition: background-color 0.3s, border-left 0.3s;
  border-left: 3px solid transparent;

  &:hover, &.active {
    background-color: #e6e6e6;
    border-left: 3px solid #ff0000;
  }

  svg {
    margin-right: 10px;
  }
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px;
  background-color: #ffffff;
`;



const StudentPortal = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Check if the user is logged in (e.g., by checking localStorage or a global state)
    const userLoggedIn = localStorage.getItem('userData') !== null;
    setIsLoggedIn(userLoggedIn);
  }, []);

  const handleSignOut = () => {
    // Implement sign out logic here
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
    
    // Reload the browser
    window.location.reload();
  };

  return (
    <PortalContainer>
      <ContentWrapper>
        <Sidebar isOpen={isSidebarOpen}>
          <SidebarGroup>
            <SidebarGroupTitle>Main</SidebarGroupTitle>
            <SidebarLink to="/student-portal" end>
              <Home size={20} />
              Dashboard
            </SidebarLink>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupTitle>Practice</SidebarGroupTitle>
            <SidebarLink to="/student-portal/mock-test">
              <FileText size={20} />
              Mock Test
            </SidebarLink>
            <SidebarLink to="/student-portal/module-wise-test">
              <FileText size={20} />
              Module Wise Test
            </SidebarLink>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupTitle>Analysis</SidebarGroupTitle>
            <SidebarLink to="/student-portal/progress-report">
              <BarChart2 size={20} />
              Progress Report
            </SidebarLink>
          </SidebarGroup>
         
          <SidebarGroup>
            <SidebarGroupTitle>Account</SidebarGroupTitle>
            <SidebarLink to="/student-portal/settings">
              <Settings size={20} />
              Settings
            </SidebarLink>
            {isLoggedIn ? (
              <SidebarLink as="button" onClick={handleSignOut}>
                <LogOut size={20} />
                Sign Out
              </SidebarLink>
            ) : (
              <SidebarLink to="/signin">
                <LogIn size={20} />
                Login / Register
              </SidebarLink>
            )}
          </SidebarGroup>
        </Sidebar>
        <MainContent>
          <Outlet />
        </MainContent>
      </ContentWrapper>
    </PortalContainer>
  );
};

export default StudentPortal;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Home, Book, FileText, Video, BarChart2, HelpCircle, Star, LogIn, Settings, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const SidebarContainer = styled.nav`
  width: ${props => props.collapsed ? '60px' : '250px'};
  background-color: #2c3e50;
  color: #ecf0f1;
  height: 100vh;
  padding-top: 20px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  transition: width 0.3s ease;
  position: relative;
  
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`;

const SidebarItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
  text-decoration: none;
  color: #ecf0f1;

  &:hover {
    background-color: #34495e;
  }

  &.active {
    background-color: #34495e;
    border-left-color: #e74c3c;
  }
`;

const ItemIcon = styled.span`
  margin-right: ${props => props.collapsed ? '0' : '10px'};
  opacity: 0.7;
`;

const ItemText = styled.span`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: ${props => props.collapsed ? 'none' : 'inline'};
`;

const ToggleButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #34495e;
  border: none;
  color: #ecf0f1;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: ${props => props.collapsed ? 'center' : 'flex-start'};
  transition: all 0.3s ease;

  &:hover {
    background-color: #2c3e50;
  }
`;

const ToggleText = styled.span`
  margin-left: 10px;
  display: ${props => props.collapsed ? 'none' : 'inline'};
`;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { path: '/', icon: Home, text: 'Dashboard' },
    // { path: '/coaching-programs', icon: Book, text: 'Coaching Programs' },
    { path: '/mock-test', icon: FileText, text: 'Mock Test' },
    { path: '/module-wise-test', icon: FileText, text: 'Module Wise Test' },
    // { path: '/live-classes', icon: Video, text: 'Live Classes' },
    { path: '/progress-report', icon: BarChart2, text: 'Progress Report' },
    // { path: '/community', icon: Users, text: 'Community' },
    { path: '/help', icon: HelpCircle, text: 'Help' },
    // { path: '/reviews', icon: Star, text: 'Reviews' },
    { path: '/settings', icon: Settings, text: 'Settings' },
    { path: '/login-register', icon: LogIn, text: 'Login / Register' },
  ];

  return (
    <SidebarContainer collapsed={collapsed}>
        
      {menuItems.map(item => (
        <SidebarItem 
          key={item.path} 
          to={item.path}
          className={location.pathname === item.path ? 'active' : ''}
        >
          <ItemIcon collapsed={collapsed}><item.icon size={18} /></ItemIcon>
          <ItemText collapsed={collapsed}>{item.text}</ItemText>
        </SidebarItem>
      ))}
      <ToggleButton onClick={toggleCollapse} collapsed={collapsed}>
        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        <ToggleText collapsed={collapsed}>Collapse</ToggleText>
      </ToggleButton>
    </SidebarContainer>
  );
};

export default Sidebar;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Typography, Avatar, Breadcrumb, Button, Dropdown, Badge } from 'antd';
import {
  DashboardOutlined,
  BookOutlined,
  FileTextOutlined,
  VideoCameraOutlined,
  LineChartOutlined,
  QuestionCircleOutlined,
  StarOutlined,
  SettingOutlined,
  UserOutlined,
  BellOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

// Import your page components

import Dashboard from './pages/Dashboard';
import CoachingPrograms from './pages/CoachingPrograms';
import MockTest from './pages/MockTest';
import Listening from './pages/Listening';
import Writing from './pages/Writing';
import Read from './pages/Read';
import ModuleWiseTest from './pages/ModuleWiseTest';
// import LiveClasses from './pages/LiveClasses';
// import ProgressReport from './pages/ProgressReport';
// import Help from './pages/Help';
// import Reviews from './pages/Reviews';
// import Settings from './pages/Settings';

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

// Updated color theme
const colors = {
  primary: '#C8102E', // IELTS Red
  secondary: '#F0F2F5', // Light grey for background
  text: '#333333',
  sidebarBackground: '#FFFFFF',
  sidebarText: '#333333',
};

const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background: ${colors.primary};
  border-radius: 6px;
  text-align: center;
  line-height: 32px;
  color: #fff;
  font-weight: bold;
`;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledHeader = styled(Header)`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
`;

const StyledSider = styled(Sider)`
  background: ${colors.sidebarBackground};
  .ant-menu {
    background: ${colors.sidebarBackground};
    color: ${colors.sidebarText};
  }
  .ant-menu-item-selected {
    background-color: ${colors.secondary} !important;
    color: ${colors.primary};
  }
  .ant-menu-item:hover {
    color: ${colors.primary} !important;
  }import Read from './pages/Read';

`;

const StyledContent = styled(Content)`
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
`;

const StyledFooter = styled(Footer)`
  text-align: center;
  background: #fff;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const CustomBreadcrumb = () => {
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter((i) => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{pathSnippets[index].replace('-', ' ')}</Link>
        </Breadcrumb.Item>
      );
    });
    const breadcrumbItems = [
      <Breadcrumb.Item key="home">
        <Link to="/">Home</Link>
      </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);

    return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/settings">Profile Settings</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" icon={<LogoutOutlined />}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <Router>
      <StyledLayout>
        <StyledSider style={{backgroundColor:'white'}} collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Logo>{collapsed ? 'IP' : 'IELTS Prep'}</Logo>
          <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link to="/">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BookOutlined />}>
              <Link to="/coaching-programs">Coaching Programs</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<FileTextOutlined />} title="Tests">
              <Menu.Item key="3">
                <Link to="/mock-test">Mock Test</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/module-wise-test">Module Wise Test</Link>
              </Menu.Item>
            </SubMenu>
            {/* <Menu.Item key="5" icon={<VideoCameraOutlined />}>
              <Link to="/live-classes">Live Classes</Link>
            </Menu.Item> */}
            <Menu.Item key="6" icon={<LineChartOutlined />}>
              <Link to="/progress-report">Progress Report</Link>
            </Menu.Item>
            {/* <Menu.Item key="7" icon={<QuestionCircleOutlined />}>
              <Link to="/help">Help</Link>
            </Menu.Item>
    
            <Menu.Item key="9" icon={<SettingOutlined />}>
              <Link to="/settings">Settings</Link>
            </Menu.Item> */}
          </Menu>
        </StyledSider>
        <Layout>
          <StyledHeader>
            <CustomBreadcrumb />
            <HeaderRight>
              <Badge count={5} style={{ marginRight: '24px' }}>
                <Button icon={<BellOutlined />} shape="circle" />
              </Badge>
              <Dropdown overlay={userMenu} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  <Avatar size="large" icon={<UserOutlined />} style={{ marginRight: '8px', backgroundColor: colors.primary }} />
                  <span style={{ color: colors.text }}>John Doe</span>
                </a>
              </Dropdown>
            </HeaderRight>
          </StyledHeader>
          <StyledContent>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/coaching-programs" element={<CoachingPrograms />} />
                            <Route path="/mock-test" element={<MockTest />} />

              <Route path="/reading" element={<Read />} />
              <Route path="/writing" element={<Writing />} />
              <Route path="/listening" element={<Listening />} />
              <Route path="/module-wise-test" element={<ModuleWiseTest />} />
              {/* <Route path="/live-classes" element={<LiveClasses />} /> */}
              {/* <Route path="/progress-report" element={<ProgressReport />} /> */}
              {/* <Route path="/help" element={<Help />} /> */}
              {/* <Route path="/reviews" element={<Reviews />} /> */}
              {/* <Route path="/settings" element={<Settings />} /> */}
            </Routes>
          </StyledContent>
          <StyledFooter>IELTS Preparation ©2023 Created by Your Company</StyledFooter>
        </Layout>
      </StyledLayout>
    </Router>
  );
};

export default App;
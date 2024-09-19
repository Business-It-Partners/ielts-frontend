import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { ShoppingCart } from 'lucide-react';

// Import all the individual components
// import DashboardContent from './DashboardContent';
// import CoachingPrograms from './CoachingPrograms';
import MockTest from './MockTest';
import ModuleWiseTest from './ModuleWiseTest';
import StudentDashboard from './StudentDashboard';
// import LiveClasses from './LiveClasses';
// import ProgressReport from './ProgressReport';
// import Community from './Community';
// import Help from './Help';
// import Reviews from './Reviews';
// import Settings from './Settings';
// import LoginRegister from './LoginRegister';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  height: 60px;
  background-color: #dd4b39;
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: white;
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

const LogoIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  margin-right: 10px;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const Button = styled.button`
  background-color: ${props => props.primary ? '#ff0000' : 'transparent'};
  color: white;
  border: ${props => props.primary ? 'none' : '1px solid white'};
  padding: 8px 16px;
  margin-left: 10px;
  cursor: pointer;
  font-weight: bold;
`;

const CartIcon = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;

const Content = styled.main`
  flex-grow: 1;
  padding: 20px;
  background-color: #f5f5f5;
  overflow-y: auto;
`;

const Dashboard = () => {
  return (
    <Router>
      <AppContainer>
        <Sidebar />
        <MainContent>
          {/* <Header>
            <Logo>
              <LogoIcon />
              <span>IELTS LMS</span>
              <span style={{fontWeight: 'normal', marginLeft: '5px'}}>Preview</span>
            </Logo>
            <HeaderActions>
              <CartIcon>
                <ShoppingCart size={24} />
              </CartIcon>
              <Button>Sign in</Button>
              <Button primary>Sign up</Button>
            </HeaderActions>
          </Header> */}
          <Content>
            <Routes>
              {/* <Route path="/" element={<Navigate replace to="/dashboard" />} /> */}
              <Route path="/dashboard" element={<StudentDashboard />} />
              {/* <Route path="/coaching-programs" element={<CoachingPrograms />} /> */}
              <Route path="/mock-test" element={<MockTest />} />
              <Route path="/module-wise-test" element={<ModuleWiseTest />} />
              {/* <Route path="/live-classes" element={<LiveClasses />} />
              <Route path="/progress-report" element={<ProgressReport />} />
              <Route path="/community" element={<Community />} />
              <Route path="/help" element={<Help />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login-register" element={<LoginRegister />} /> */}
            </Routes>
          </Content>
        </MainContent>
      </AppContainer>
    </Router>
  );
};

export default Dashboard;
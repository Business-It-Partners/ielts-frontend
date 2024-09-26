import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './pages/Hompage';
import StudentPortal from './component/studentPortal/StudentPortal';
import Dashboard from './component/studentPortal/Dashboard';
import MockTest from './component/studentPortal/MockTest';
import ModuleWiseTest from './component/studentPortal/ModuleWiseTest';
import ProgressReport from './component/studentPortal/ProgessReport';
import Listening from './component/aa/Listening';
import Read from './component/aa/Read';
import Header from './component/hompage/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';



const HeaderWrapper = () => {
  const location = useLocation();
  const hideHeaderPaths = ['/listening', '/reading'];
 
  if (hideHeaderPaths.includes(location.pathname)) {
    return null;
  }
 
  return <Header />;
};

const App = () => {
  return (
    <Router>
      <HeaderWrapper />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/listening" element={<Listening />} />
        <Route path="/ielts-section-test" element={<ModuleWiseTest />} />
        <Route path="/mock-test" element={<MockTest />} />
        <Route path="/reading" element={<Read />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/student-portal" element={<StudentPortal />}>
          <Route index element={<Dashboard />} />
          <Route path="mock-test" element={<MockTest />} />
          <Route path="module-wise-test" element={<ModuleWiseTest />} />
          <Route path="progress-report" element={<ProgressReport />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
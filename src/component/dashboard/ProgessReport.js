import React from 'react';
import styled from 'styled-components';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { 
  BookOpen, Headphones, PenTool, Mic, Calendar, Clock, 
  TrendingUp, Target, CheckCircle, AlertCircle
} from 'lucide-react';

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #2c3e50;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.span`
  font-weight: bold;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  font-size: 18px;
  color: #2c3e50;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProgressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const ProgressItem = styled.div`
  text-align: center;
`;

const ProgressLabel = styled.div`
  font-size: 14px;
  color: #7f8c8d;
  margin-bottom: 5px;
`;

const ProgressValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ecf0f1;

  &:last-child {
    border-bottom: none;
  }
`;

const TaskName = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TaskDate = styled.span`
  font-size: 14px;
  color: #7f8c8d;
`;

const QuickLinkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const QuickLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: #ecf0f1;
  border-radius: 5px;
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: #d5dbdb;
  }
`;

const IELTSDashboard = () => {
  const overallProgress = 65;
  const sectionScores = [
    { name: 'Listening', score: 7.5, icon: Headphones, color: '#3498db' },
    { name: 'Reading', score: 7.0, icon: BookOpen, color: '#2ecc71' },
    { name: 'Writing', score: 6.5, icon: PenTool, color: '#f39c12' },
    { name: 'Speaking', score: 7.0, icon: Mic, color: '#e74c3c' },
  ];

  const upcomingTasks = [
    { name: 'Mock Test 3', date: '2023-09-25', icon: Target },
    { name: 'Writing Task 2 Practice', date: '2023-09-27', icon: PenTool },
    { name: 'Vocabulary Quiz', date: '2023-09-30', icon: BookOpen },
  ];

  const recentActivities = [
    { name: 'Completed Listening Practice', status: 'success', icon: CheckCircle },
    { name: 'Missed Speaking Session', status: 'warning', icon: AlertCircle },
    { name: 'Submitted Writing Task', status: 'success', icon: CheckCircle },
  ];

  return (
    <Container>
      <Header>
        <Title>IELTS Preparation Dashboard</Title>
        <UserInfo>
          <Avatar src="https://via.placeholder.com/40" alt="User Avatar" />
          <Username>John Doe</Username>
        </UserInfo>
      </Header>

      <Grid>
        <Card>
          <CardTitle><TrendingUp size={20} /> Overall Progress</CardTitle>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={[{ value: overallProgress }, { value: 100 - overallProgress }]}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                <Cell fill="#3498db" />
                <Cell fill="#ecf0f1" />
              </Pie>
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                {`${overallProgress}%`}
              </text>
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <CardTitle><Target size={20} /> Section Scores</CardTitle>
          <ProgressGrid>
            {sectionScores.map((section, index) => (
              <ProgressItem key={index}>
                <ProgressLabel>{section.name}</ProgressLabel>
                <ProgressValue>{section.score}</ProgressValue>
              </ProgressItem>
            ))}
          </ProgressGrid>
        </Card>

        <Card>
          <CardTitle><Calendar size={20} /> Upcoming Tasks</CardTitle>
          <TaskList>
            {upcomingTasks.map((task, index) => (
              <TaskItem key={index}>
                <TaskName>
                  <task.icon size={16} />
                  {task.name}
                </TaskName>
                <TaskDate>{task.date}</TaskDate>
              </TaskItem>
            ))}
          </TaskList>
        </Card>

        <Card>
          <CardTitle><Clock size={20} /> Recent Activities</CardTitle>
          <TaskList>
            {recentActivities.map((activity, index) => (
              <TaskItem key={index}>
                <TaskName>
                  <activity.icon size={16} color={activity.status === 'success' ? '#2ecc71' : '#e74c3c'} />
                  {activity.name}
                </TaskName>
              </TaskItem>
            ))}
          </TaskList>
        </Card>

        <Card>
          <CardTitle><BookOpen size={20} /> Quick Links</CardTitle>
          <QuickLinkGrid>
            <QuickLink href="#"><Headphones size={16} /> Listening Practice</QuickLink>
            <QuickLink href="#"><BookOpen size={16} /> Reading Materials</QuickLink>
            <QuickLink href="#"><PenTool size={16} /> Writing Samples</QuickLink>
            <QuickLink href="#"><Mic size={16} /> Speaking Tips</QuickLink>
          </QuickLinkGrid>
        </Card>

        <Card>
          <CardTitle><TrendingUp size={20} /> Performance Trend</CardTitle>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={sectionScores}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 9]} />
              <Tooltip />
              <Bar dataKey="score" fill="#3498db" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </Grid>
    </Container>
  );
};

export default IELTSDashboard;
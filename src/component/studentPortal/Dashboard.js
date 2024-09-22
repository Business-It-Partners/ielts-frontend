import React from 'react';
import styled from 'styled-components';
import { BarChart2, Calendar, Book, Clock, Target, Bell } from 'lucide-react';

const DashboardContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  color: #2c3e50;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProgressBar = styled.div`
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #3498db;
  border-radius: 5px;
  width: ${props => props.value}%;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 14px;
  color: #34495e;
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
`;

const IELTSDashboard = () => {
  return (
    <DashboardContainer>
      <Title>IELTS Preparation Dashboard</Title>
      <Grid>
        <Card>
          <CardTitle><BarChart2 size={20} /> Overall Progress</CardTitle>
          <ProgressBar><Progress value={65} /></ProgressBar>
          <p>65% of course completed</p>
          <List>
            <ListItem>Listening: 70%</ListItem>
            <ListItem>Reading: 60%</ListItem>
            <ListItem>Writing: 55%</ListItem>
            <ListItem>Speaking: 75%</ListItem>
          </List>
        </Card>
        
        <Card>
          <CardTitle><Calendar size={20} /> Upcoming Tests</CardTitle>
          <List>
            <ListItem>Mock Test 3: 2 days left</ListItem>
            <ListItem>Writing Task 2: 5 days left</ListItem>
            <ListItem>Speaking Practice: 1 week left</ListItem>
          </List>
          <Button>View All</Button>
        </Card>
        
        <Card>
          <CardTitle><Book size={20} /> Recommended Practice</CardTitle>
          <List>
            <ListItem>Reading: Paragraph Matching</ListItem>
            <ListItem>Writing: Essay Structure</ListItem>
            <ListItem>Listening: Note Completion</ListItem>
          </List>
          <Button>Start Practice</Button>
        </Card>
        
        <Card>
          <CardTitle><Clock size={20} /> Study Time</CardTitle>
          <p>This week: 12 hours</p>
          <p>Average: 10 hours/week</p>
          <Button>Log Study Time</Button>
        </Card>
        
        <Card>
          <CardTitle><Target size={20} /> Goals</CardTitle>
          <List>
            <ListItem>Overall Target: Band 7.5</ListItem>
            <ListItem>Current Estimate: Band 6.5</ListItem>
          </List>
          <Button>Update Goals</Button>
        </Card>
        
        <Card>
          <CardTitle><Bell size={20} /> Notifications</CardTitle>
          <List>
            <ListItem>New speaking tips video available</ListItem>
            <ListItem>Your writing task was evaluated</ListItem>
            <ListItem>3 days left to complete Mock Test 3</ListItem>
          </List>
          <Button>See All</Button>
        </Card>
      </Grid>
    </DashboardContainer>
  );
};

export default IELTSDashboard;
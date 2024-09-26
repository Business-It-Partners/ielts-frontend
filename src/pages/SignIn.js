import React, { useState } from 'react';
import styled from 'styled-components';
import { Eye } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin-bottom: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  &::placeholder {
    color: #aaa;
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
`;

const ForgotPassword = styled(Link)`
  text-align: right;
  font-size: 14px;
  color: #333;
  text-decoration: none;
  margin-bottom: 24px;
  display: block;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #333;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: -8px;
  margin-bottom: 16px;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 16px;
  text-align: center;
  margin-top: 16px;
`;

const HelpLink = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  color: #333;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  color: #00a86b;
  text-decoration: none;
`;

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    
    if (storedUserData && 
        storedUserData.email === formData.email && 
        storedUserData.password === formData.password) {
      setSuccessMessage('Sign in successful!');
      setError('');
      
      // Redirect to dashboard or home page after successful sign in
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      setError('Invalid email or password');
      setSuccessMessage('');
    }
  };

  return (
    <Container>
      <Title>Sign in to your account</Title>
      <Subtitle>
        Don't have an account? <StyledLink to="/signup">Get started</StyledLink>
      </Subtitle>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email address</Label>
        <InputWrapper>
          <Input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </InputWrapper>

        <Label htmlFor="password">Password</Label>
        <InputWrapper>
          <Input 
            type={showPassword ? "text" : "password"} 
            id="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="6+ characters"
            required 
          />
          <PasswordToggle onClick={togglePasswordVisibility}>
            <Eye size={20} />
          </PasswordToggle>
        </InputWrapper>

        <ForgotPassword to="/forgot-password">Forgot password?</ForgotPassword>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SubmitButton type="submit">Sign in</SubmitButton>
      </Form>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </Container>
  );
};

export default SignIn;
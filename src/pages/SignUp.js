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

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const TermsLabel = styled.label`
  font-size: 14px;
  color: #666;
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

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState({});
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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!agreeTerms) newErrors.terms = 'You must agree to the terms and conditions';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Store user data in local storage
      localStorage.setItem('userData', JSON.stringify(formData));
      setSuccessMessage('Account created successfully!');
      // Reset form
      setFormData({ name: '', email: '', password: '' });
      setAgreeTerms(false);
      // Redirect to sign-in page after a short delay
      setTimeout(() => {
        navigate('/signin');
      }, 2000);
    }
  };

  return (
    <Container>
      <HelpLink to="/help">Need help?</HelpLink>
      <Title>Create your account</Title>
      <Subtitle>
        Already have an account? <StyledLink to="/signin">Sign in</StyledLink>
      </Subtitle>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Full name</Label>
        <InputWrapper>
          <Input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </InputWrapper>
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

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
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

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
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

        <CheckboxWrapper>
          <Checkbox 
            type="checkbox" 
            id="terms" 
            checked={agreeTerms}
            onChange={() => setAgreeTerms(!agreeTerms)}
            required 
          />
          <TermsLabel htmlFor="terms">
            I agree to the <StyledLink to="/terms">Terms</StyledLink> and <StyledLink to="/privacy">Privacy Policy</StyledLink>
          </TermsLabel>
        </CheckboxWrapper>
        {errors.terms && <ErrorMessage>{errors.terms}</ErrorMessage>}

        <SubmitButton type="submit" disabled={!agreeTerms}>Create account</SubmitButton>
      </Form>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </Container>
  );
};

export default SignUp;
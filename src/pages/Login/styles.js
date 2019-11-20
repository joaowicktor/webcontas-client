import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  button: {
    border: 0,
    borderRadius: 50,
    boxShadow: '0',
    height: 48,
    padding: '0 30px'
  },
  outlinedButton: {
    borderColor: 'white',
    color: 'white',
    borderRadius: 50,
    boxShadow: '0',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      background: 'white',
      color: '#13b05f'
    }
  }
}));

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f6f6f6;
  width: 100%;
  height: 100%;
`;

export const Logo = styled.img`
  width: 180px;
  align-self: center;
`;

export const Container = styled.div`
  width: 55%;

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 85%;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px;
  width: 55%;
  height: 600px;
  background: #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media (max-width: 425px) {
    width: 100%;
    border-radius: 10px;
  }
`;

export const Signup = styled.div`
  @media (max-width: 425px) {
    display: none;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px;
  width: 45%;
  height: 600px;
  background: rgba(9, 128, 67, 1);
  background: -moz-linear-gradient(45deg, rgba(9, 128, 67, 1) 0%, rgba(19, 176, 95, 1) 100%);
  background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(9, 128, 67, 1)), color-stop(100%, rgba(19, 176, 95, 1)));
  background: -webkit-linear-gradient(45deg, rgba(9, 128, 67, 1) 0%, rgba(19, 176, 95, 1) 100%);
  background: -o-linear-gradient(45deg, rgba(9, 128, 67, 1) 0%, rgba(19, 176, 95, 1) 100%);
  background: -ms-linear-gradient(45deg, rgba(9, 128, 67, 1) 0%, rgba(19, 176, 95, 1) 100%);
  background: linear-gradient(45deg, rgba(9, 128, 67, 1) 0%, rgba(19, 176, 95, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#098043', endColorstr='#13b05f', GradientType=1 );
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
`;

export const Title = styled.h1`
  align-self: center;
  text-align: center;
  color: ${props => (props.textColor ? props.textColor : '#13b05f')};
  font-weight: 700;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled(TextField)`
  width: 100%;
  label.Mui-focused {
    color: #13b05f;
  }
  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-width: 2px;
      border-color: #13b05f;
    }
    &.Mui-focused fieldset {
      border-color: #13b05f;
    }
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 16px;
`;

export const MessageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  background-color: #f8d7da;
  color: #a15e64;
  border-radius: 4px;
  margin-top: 20px;
`;

export const SignUpButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 500;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 50px;
  height: 48px;
  padding: 0 30px;

  &:hover {
    background: #fff;
    color: #13b05f;
  }
`;

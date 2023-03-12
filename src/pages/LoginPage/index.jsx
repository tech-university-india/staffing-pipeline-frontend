import * as React from 'react';
import './LoginPage.css';
import InputComponent from '../../components/InputComponent';
import Footer from '../../components/footer';
import Button from '../../components/Button';
const LoginPage = () => {
  const onSubmit = () => {
    console.log('onSubmit');
  };

  return (
    <div>
      <div className="login-page">
        <div className={'card'}>
          <h1>Hub Capablities and staffing portal</h1>
          <InputComponent placeholder={'email'} />
          <InputComponent placeholder={'password'} />
          <Button buttonText={'login'} handleClick={onSubmit} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;

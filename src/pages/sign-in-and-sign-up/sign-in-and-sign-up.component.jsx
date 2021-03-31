import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

import './sign-in-and-sign-up.styles.scss';


// Using a functional component because, signin and signup will separated with different concerns
function SignInAndSignUpPage(){
  return (
    <div className='sign-in-and-sign-up'>
    <SignIn/>
  </div>
  )
   
  };
  
  export default SignInAndSignUpPage;
  
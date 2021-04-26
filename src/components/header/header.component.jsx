import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils';

// Using the React library special "ReactComponent as Logo to import SVG image."
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
        :
        <Link className="option" to="/signin">
        SIGN IN
        </Link>
      }
    </div>
  </div>
  );
  
  // state here represents the root reducer
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
}); 

// connect helps to accept 2 functions, one of which is mapStateToProps. it connnects a react component to our redux store. 
  export default connect(mapStateToProps)(Header); //We now have access to the current user
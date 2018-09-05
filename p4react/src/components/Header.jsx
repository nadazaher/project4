import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header(props) {
    return (
      <div>
        {/* Start Header */}
        <div className="hero-head">

          <header className="navbar is-info newheader">
            <div className="container ">
              <div className="navbar-brand ">
                <a className="navbar-item ">
                  <h1 className="title is-size-2  has-text-black"
                    onClick={() => props.handleLinks('landing page')}>Event Services</h1>
                </a>

     </div>
     <div className="navbar-end">


                  {
                  props.userInfo
                    ?
                    (
                      <div className="navbar-item has-dropdown is-hoverable"
                      >
                        <a className="navbar-link has-text-black">
                          <FontAwesomeIcon icon="user" />&nbsp;{props.userInfo.username}
                        </a>
                        <div className="navbar-dropdown is-right">
                          <a className="navbar-item has-text-black"
                            onClick={() => props.handleLinks('profile page')}> My Profile</a>
                          <hr className="navbar-divider" />
                          <a className="navbar-item has-text-black"

                            
                            onClick={() => {
                              props.handleLinks('landing page');
                              props.handleLogoutSubmit();
                            }}> Logout</a>

                        </div>
                      </div>
                    )
                    :
                    (
                      <span className="navbar-item" onClick={() => props.handleLinks('login page')}>
                        <a className="button is-light has-text-black is-size-4">
                          <span>Login</span>
                        </a>
                      </span>
                    )
                }

              </div>
    </div>
    </header>
    </div>
    </div>
  );
}

export default Header;
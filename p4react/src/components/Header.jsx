import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header(props) {
    return (
      <div>
        {/* Start Header */}
          <nav className="navbar is-warning is-transparent is-fixed-top">
            <div className="container ">
              <div className="navbar-start ">
                <a className="navbar-item ">
                  <h1 className="title is-size-2  has-text-black"
                    onClick={() => props.handleLinks('landing page')}>Event Services</h1>
                </a>

     </div>
     <div className="navbar-end">


                  {
                  props.isLoggedIn
                  // props.isLoggedIn
                    ?
                    (
                      <div className="navbar-item has-dropdown is-hoverable"
                      >
                        <a className="navbar-link has-text-black">
                          <FontAwesomeIcon icon="user" />
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
                      <span className="navbar-item" onClick={() => props.toggleModal('login_page')}>
                        <a className="button is-light has-text-black is-size-4">
                          <span>Login</span>
                        </a>
                      </span>
                    )
                }

              </div>
    </div>
    </nav>
    </div>
  );
}

export default Header;
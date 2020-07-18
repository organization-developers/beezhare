import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// StyleHomePage
import headerStyle from './header.module.scss';

export default function HeaderComponent() {
  return (
    <>
      <HeaderComp className={`${headerStyle.navigate} fixed-top container-fluid`}>
        <nav className={`${headerStyle.navigate_nav} row`}>
          <div className={`${headerStyle.navigate_nav_right} col-md-3`}>

          </div>

          <div className={`${headerStyle.navigate_nav_middle} col-md-7`}>
            <ul className={`${headerStyle.navigate_nav_middle_ul}`}>
              <li className={`${headerStyle.navigate_nav_middle_ul_li}`}>
                <Link className={`${headerStyle.navigate_nav_middle_ul_li_a}`} to={``}>
                  Home  
                </Link>
              </li>
              <li className={`${headerStyle.navigate_nav_middle_ul_li}`}>
                <Link className={`${headerStyle.navigate_nav_middle_ul_li_a}`} to={``}>
                  About  
                </Link>
              </li>
              <li className={`${headerStyle.navigate_nav_middle_ul_li}`}>
                <Link className={`${headerStyle.navigate_nav_middle_ul_li_a}`} to={``}>
                  Contact Us  
                </Link>
              </li>
            </ul>
          </div>

          <div className={`${headerStyle.navigate_nav_left} col-md-2`}>
            <ButtonSignInHeader type="button">
              Sign In
            </ButtonSignInHeader>
          </div>
        </nav>
      </HeaderComp>
    </>
  );
}

const HeaderComp = styled.header`
  background: transparent;
  padding-top: 10px;
`
const ButtonSignInHeader = styled.button`
  padding: 8px 24px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  background-color: #4D9A1F;
  border-radius: 30px;
  border: none;
`
import React from 'react';
import styled from 'styled-components'

// Assets
import backgroundHomePageImg from '../../assets/home-page/background_header.png'
import topContentImg from '../../assets/home-page/top_content.png'

// Component
import HeaderComponent from '../../components/header-components';

// StyleHomePage
import homePageStyles from './home-page.module.scss';

export default function HomePage() {
  return (
    <>
      <HeaderComponent />

      <HomeComp className={`${homePageStyles.home} container-fluid`}>

        <div className={`${homePageStyles.home_topcontent} row`}>
          <div className={`${homePageStyles.home_topcontent_contentfluid} container`}>
            <div className={`${homePageStyles.home_topcontent_contentfluid_row} row`}>
              <div className={`${homePageStyles.home_topcontent_contentfluid_row_left} col-md-5`}>
                <h1>
                  Membantu Anda Mencari Pekerjaan Dengan Mudah
                </h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <ButtonFindProject type="button">
                  Find Project
                </ButtonFindProject>
              </div>

              <div className={`${homePageStyles.home_topcontent_contentfluid_row_right} d-sm-none d-md-block col-md-7`}>
                <img src={topContentImg} alt="topContent" width="600"/>
              </div>
            </div>
          </div>
        </div>
        
      </HomeComp>
    </>
  );
}

const HomeComp = styled.div`
  background-image: url(${backgroundHomePageImg});
`

const ButtonFindProject = styled.button`
  padding: 8px 24px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  background-color: #4D9A1F;
  border-radius: 30px;
  border: none;
`
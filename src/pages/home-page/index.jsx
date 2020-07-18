import React from 'react';
import styled from 'styled-components'

// Assets
import backgroundHomePageImg from '../../assets/home-page/background_header.png'
import topContentImg from '../../assets/home-page/top_content.png'
import aboutContentImg from '../../assets/home-page/about_content.png'
import vectorLineAbout from '../../assets/home-page/vectorAbout.svg'
import vectorLineFitur from '../../assets/home-page/vectorFitur.svg'
import vektorFiturWorker from '../../assets/home-page/worker.svg'
import vektorFiturInnovation from '../../assets/home-page/innovation.svg'
import vektorFiturDistance from '../../assets/home-page/distance.svg'
import vektorFiturCustomerReview from '../../assets/home-page/customer-review.svg'

// Component
import HeaderComponent from '../../components/header-components';
import SliderHomePage from '../../components/homepage-components/homepage-slider-component';

// StyleHomePage
import homePageStyles from './home-page.module.scss';

export default function HomePage() {
  return (
    <>
      <HeaderComponent />

      <HomeComp className={`${homePageStyles.home} container-fluid`}>

        {/* HOME TOPCONTENT */}
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
                <img className={`img-fluid`} src={topContentImg} alt="topContent" width="600"/>
              </div>
            </div>
          </div>
        </div>
        {/* END HOME TOPCONTENT */}

        {/* HOME ABOUT */}
        <div className={`${homePageStyles.home_about} row`}>
          <div className={`${homePageStyles.home_about_aboutfluid} container`}>
            <div className={`${homePageStyles.home_about_aboutfluid_rowtop} row`}>
              <div className={`${homePageStyles.home_about_aboutfluid_rowtop_h3} col-md-12`}>
                <h3>
                  Beezhare
                </h3>
                <img className={`img-fluid`} src={vectorLineAbout} alt="vector_line"/>
              </div>
            </div>

            <div className={`${homePageStyles.home_about_aboutfluid_rowbottom} row`}>
              <div className={`${homePageStyles.home_about_aboutfluid_rowbottom_left} d-sm-none d-md-block col-md-7`}>
                <img className={`img-fluid`} src={aboutContentImg} alt="about_content"/>
              </div>
              <div className={`${homePageStyles.home_about_aboutfluid_rowbottom_right} col-md-5`}>
                <p>
                  Berdasarkan data dari blabla.com angka pekerja serabutan di indonesia 100% Tak sedikit dari mereka menganggur dalam waktu yang lama.   Gawein.id hadir untuk membantu mempertemukan para pekerja buruh kasar dengan para client yang membutuhkan  jasa mereka.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* END HOME ABOUT */}

        {/* HOME FITUR */}
        <div className={`${homePageStyles.home_fitur} row`}>
          <div className={`${homePageStyles.home_fitur_fiturfluid} container`}>
            <div className={`${homePageStyles.home_fitur_fiturfluid_rowtop} row`}>
              <div className={`${homePageStyles.home_fitur_fiturfluid_rowtop_h3} col-md-12`}>
                <h3>
                  Fitur
                </h3>
                <img className={`img-fluid`} src={vectorLineFitur} alt="vector_line"/>
              </div>
            </div>

            <div className={`${homePageStyles.home_fitur_fiturfluid_rowbottom} row`}>
              <div className={`${homePageStyles.home_fitur_fiturfluid_rowbottom_left} col-md-6`}>
            
                <HomeFiturCard className={`row`}>
                  <div className={`${homePageStyles.home_fitur_fiturfluid_rowbottom_left_text} col-md-8`}>
                    <h4>Find Project</h4>
                    <p>Semakin mudah mencari project dengan harga yang bersaing</p>
                  </div>
                  <div className={`col-md-4`}>
                      <img className={`img-fluid`} src={vektorFiturWorker} alt="icon_worker"/>
                  </div>
                </HomeFiturCard>

                <HomeFiturCard className={`row`}>
                  <div className={`${homePageStyles.home_fitur_fiturfluid_rowbottom_left_text} col-md-8`}>
                    <h4>Find Project</h4>
                    <p>Semakin mudah mencari project dengan mudah</p>
                  </div>
                  <div className={`col-md-4`}>
                      <img className={`img-fluid`} src={vektorFiturInnovation} alt="icon_innovation"/>
                  </div>
                </HomeFiturCard>

              </div>
              <div className={`${homePageStyles.home_fitur_fiturfluid_rowbottom_right} col-md-6`}>
                
                <HomeFiturCard className={`row`}>
                  <div className={`col-md-4`}>
                    <img className={`img-fluid`} src={vektorFiturDistance} alt="icon_distance"/>
                  </div>
                  <div className={`${homePageStyles.home_fitur_fiturfluid_rowbottom_right_text} col-md-8`}>
                    <h4>Find Project</h4>
                    <p>Semakin mudah mencari project dengan harga yang bersaing</p>
                  </div>
                </HomeFiturCard>

                <HomeFiturCard className={`row`}>
                  <div className={`col-md-4`}>
                    <img className={`img-fluid`} src={vektorFiturCustomerReview} alt="icon_customer_rate"/>
                  </div>
                  <div className={`${homePageStyles.home_fitur_fiturfluid_rowbottom_right_text} col-md-8`}>
                    <h4>Find Project</h4>
                    <p>Semakin mudah mencari project dengan harga yang bersaing</p>
                  </div>
                </HomeFiturCard>

              </div>
            </div>
          </div>
        </div>
        {/* END HOME FITUR */}

        {/* HOME TESTIMONI */}
        <div className={`${homePageStyles.home_testimoni} row`}>
          <div className={`${homePageStyles.home_testimoni_testimonifluid} container`}>
            <div className={`${homePageStyles.home_testimoni_testimonifluid_rowtop} row`}>
              <div className={`${homePageStyles.home_testimoni_testimonifluid_rowtop_h3} col-md-12`}>
                <h3>
                  Top Worker
                </h3>
                <img className={`img-fluid`} src={vectorLineAbout} alt="vector_line"/>
              </div>
            </div>

            <SliderHomePage />
          </div>
        </div>
        {/* END HOME TESTIMONI */}
        
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

const HomeFiturCard = styled.div`
  padding: 20px 0px;
  margin: 20px 0px;
`
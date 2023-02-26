import React from 'react'
import Education from '../components/education';
import Certifications from '../components/certifications';
import Languages from '../components/languages';
import Experience from '../components/experience';
import ContactInfo from '../components/contactInfo';
import HardSkills from '../components/hardSkills';
import SoftSkills from '../components/softSkills';

import photo from '../models/applicant.jpg'

const Homepage = ({ dataView }) => {

  /*
    const location = useLocation();
    const history = useHistory();


    const navigate = (path) => {
        history.push(path);
    }

    const navigateProps = (path) => {
        history.push({
            pathname: path,
            search: '?online=true', // Query Params
            state: {
                online: true
            }
        });
    }*/

  return (
    <>
      <div className="main-container bg-light rounded-3">
        <div className="header-container">
          <div className="card mb-3 rounded-3">
            <div className="row g-0 card-bg row-display-block">
              <div className="col-2 bg-ocre m-1 my-photograph">
                <div className="row justify-content-center">
                  <img src={photo} className="img-fluid rounded-circle my-photograph" alt="" />
                </div>
              </div>
              <div className="col row-display-block">
                <div className="card-body pe-3 pb-0">
                  <h5 className="card-title titulo text-center">{dataView?.applicant?.name.toUpperCase()}</h5>
                  <p className="card-text fst-italic text-center small-paragraph">{dataView?.applicant?.bio}</p>
                </div>
              </div>
              <div id="contact-info" className="col-12 col-sm-3 col-md-2 small-thin-paragraph bd-highlight m-1">
                <ContactInfo data={dataView?.contactInfo} />
              </div>
            </div>
          </div>
        </div>
        <div className="personal-data">
          <div className="col mb-0 my-bg-dark">{/*  */}
            <span className="row m-0 p-0">
              <Education nameIcon="icon-date.svg" nameClassIcon="icon-format" data={dataView?.education} ></Education>
            </span>
          </div>
          <div className="col my-bg-dark mb-1">
            <span className="row certifications m-0 p-0">
              <Certifications nameIcon="icon-date.svg" nameClassIcon="icon-format" data={dataView?.certifications} ></Certifications>
            </span>
          </div>
          <div className="col my-bg-dark mb-1">
            <span className="row languages m-0 p-0">
              <Languages nameIcon="icon-date.svg" nameClassIcon="icon-format" data={dataView?.languages} ></Languages>
            </span>
          </div>
        </div>
        <div className="experience-container">
          <Experience nameIcon="icon-date.svg" nameClassIcon="icon-format" data={dataView?.experience} ></Experience>
        </div>
        <div className="footer-container">
          <div className="container m-1 p-1">
            <div className="row gap-3">
              <HardSkills data={dataView?.hardSkills} />
              <SoftSkills data={dataView?.softSkills} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;

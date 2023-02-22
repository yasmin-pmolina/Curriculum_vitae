import photo from './assets/img/applicant.jpg';
import './css/App.css';
import './css/Print.css';
import SvgComponent from './components/basic/svgComponent.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import defaultData from './defaultData.json'
import Education from './components/education';
import Certifications from './components/certifications';
import Languages from './components/languages';
import Experience from './components/experience';
import ContactInfo from './components/contactInfo';
import HardSkills from './components/hardSkills';
import SoftSkills from './components/softSkills';

function App() {
  return (
    <div className="App">
      <div className="main-container bg-light rounded-3">
        <div className="header-container m-0">
          <div className="card mb-3 rounded-3">
            <div className="row g-0 card-bg">
              <div className="col-2 bg-ocre m-1">
                <div className="row justify-content-center">
                  <img src={photo} className="img-fluid rounded-circle my-photograph" alt="" />
                </div>
              </div>
              <div className="col">
                <div className="card-body pe-3 pb-0">
                  <h5 className="card-title titulo">{defaultData?.applicant?.name.toUpperCase()}</h5>
                  <p className="card-text fst-italic small-paragraph">{defaultData?.applicant?.bio.toUpperCase()}</p>
                </div>
              </div>
              <div className="col-4 col-sm-3 col-md-2 small-thin-paragraph align-self-end bd-highlight contact-info">
               <ContactInfo data={defaultData?.contactInfo} />
              </div>
            </div>
          </div>
        </div>
        <div className="personal-data">
          <div className="col mb-0 my-bg-dark">{/*  */}
            <span className="row m-0 p-0">
                <Education nameIcon="icon-date.svg" nameClassIcon="icon-format" data={defaultData?.education} ></Education>
            </span>
          </div>
          <div className="col my-bg-dark mb-1">
            <span className="row certifications m-0 p-0">
                <Certifications nameIcon="icon-date.svg" nameClassIcon="icon-format" data={defaultData?.certifications} ></Certifications>
            </span>
          </div>
          <div className="col my-bg-dark mb-1">
            <span className="row languages m-0 p-0">
                <Languages nameIcon="icon-date.svg" nameClassIcon="icon-format" data={defaultData?.languages} ></Languages>
            </span>
          </div>
        </div>
        <div className="experience-container">
          <Experience nameIcon="icon-date.svg" nameClassIcon="icon-format" data={defaultData?.experience} ></Experience>
        </div>
        <div className="footer-container">
          <div className="container m-1 p-1">
            <div className="row gap-3">
              <HardSkills data={defaultData?.hardSkills} />
              <SoftSkills data={defaultData?.softSkills}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

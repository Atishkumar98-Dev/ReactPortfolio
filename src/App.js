// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import './App.css';

// ./images/main-image2.png

import laptopImage from './images/view-3d-man-using-laptop-removebg-preview.png';
import profileimage from './images/main-image2.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <OpeningTemplate />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}

const Navbar = () => (
  <nav className="navbar fadeInLeft animatedSection sticky-top navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="/">Atish Kumar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 w-100 justify-content-end">
          <li className="nav-item mx-5 text-3xl">
            <a className="nav-link active" href="#main_section_about">About</a>
          </li>
          <li className="nav-item mx-5 text-3xl">
            <a className="nav-link" href="#main_section_experience">Skills</a>
          </li>
          <li className="nav-item mx-5 text-3xl">
            <a className="nav-link" href="#main_section_services">Services</a>
          </li>
          <li className="nav-item mx-5 text-3xl">
            <a className="nav-link" href="#main_section_connect">Connect</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const OpeningTemplate = () => (
  <section className="main_section fadeInLeft">
    <div className="sub_main_section container">
      <div className="sub_section_image">
      <img className="main_image" src={laptopImage} alt="Atish Kumar" />
        <div className="intro">
          <div className="textual_content">
            <p>Hello I'm</p>
            <h1>Atish Kumar</h1>
            <h6>Full Stack Developer</h6>
          </div>
          <div className="clickables">
            <a href="./images/Resume-Updated.pdf" download="Atish-Resume-Python-Developer.pdf" className="btn btn-outline-secondary mx-2">Download CV </a>
            <a href="#main_section_about" className="btn btn-secondary mx-2">About Me </a>
          </div>
          <div className="social_links">
            <a href="https://www.linkedin.com/in/atishkumar98/">
              <i className='bx bxl-linkedin-square'></i>
            </a>
            <a href="https://www.instagram.com/__atishk98__?igsh=MWpidTI4aHZveG96NA==">
              <i className='bx bxl-instagram'></i>
            </a>
            <a href="https://github.com/AtishKumar98">
              <i className='bx bxl-github'></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+918652012693&text=Hi%20there%2C%0D%0A%0D%0AI%20am%20interested%20in%20hiring%20a%20freelance%20developer%20for%20my%20project.%20Please%20let%20me%20know%20if%20you%20are%20available%20and%20interested.%0D%0A%0D%0AThanks%20and%20regards%2C%0D%0A[Your%20Name]">
              <i className='bx bxl-whatsapp'></i>
            </a>
            <a href="mailto:atishkumar31518@gmail.com?subject=Freelance%20Developer%20Opportunity&body=Hi%20there%2C%0D%0A%0D%0AI%20am%20interested%20in%20hiring%20a%20freelance%20developer%20for%20my%20project.%20Please%20let%20me%20know%20if%20you%20are%20available%20and%20interested.%0D%0A%0D%0AThanks%20and%20regards%2C%0D%0A[Your%20Name]">
              <i className='bx bx-envelope'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="main_section_about" id="main_section_about">
    <div className="container main_header">
      <h1>About Me</h1>
    </div>
    <div className="container sub_main_section fadeInLeft">
      <img src={profileimage} alt="Atish Kumar" />
      <div className="about_textual_content">
        <div className="cards_section">
          <div className="card">
            <h3><i className='bx bx-award'></i> Experience </h3>
            <h5>3+ years</h5>
            <h5>Full Stack Developer</h5>
          </div>
          <div className="card">
            <h3><i className='bx bxs-graduation'></i> Education</h3>
            <h5>Bsc. Computer Science</h5>
            <h5>MBA(IT Management)</h5>
          </div>
        </div>
        <p>
          Results-driven and detail-oriented Python Developer with extensive expertise in web development using the Django framework...
        </p>
      </div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section className="main_section_experience fadeInLeft" id="main_section_experience">
    <div className="container main_header">
      <h1>Skills</h1>
    </div>
    <div className="skills container">
      {skills.map((skill, index) => (
        <div key={index} className="progress">
          <div className="progress-bar progress-bar-animated progress-bar-striped bg-dark"
            role="progressbar"
            style={{ width: skill.percentage }}>
            <i className={`bx ${skill.icon}`}></i>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const skills = [
  { icon: 'bxl-python', percentage: '90%' },
  { icon: 'bxl-css3', percentage: '75%' },
  { icon: 'bxl-javascript', percentage: '50%' },
  { icon: 'bxl-html5', percentage: '100%' },
  { icon: 'bxl-docker', percentage: '40%' },
  { icon: 'bxl-postgresql', percentage: '60%' },
  { icon: 'bxl-aws', percentage: '50%' },
  { icon: 'bxl-react', percentage: '70%' },
  { icon: 'bxl-nodejs', percentage: '30%' },
  { icon: 'bxl-django', percentage: '90%' },
  { icon: 'bxl-tailwind-css', percentage: '40%' }
];

const ServicesSection = () => (
  <section className="main_section_services fadeInLeft" id="main_section_services">
    <div className="container main_header">
      <h1>Services</h1>
    </div>
    <div className="container service_textual_content_grid">
      {services.map((service, index) => (
        <div key={index} className="block card cards_section">
          {service}
        </div>
      ))}
    </div>
  </section>
);

const services = [
  "Management Website Development",
  "Landing Page",
  "Ecommerce Development",
  "API Development",
  "Chat Application",
  "Blog Application"
];

const ContactSection = () => (
  <section className="main_section_connect mt-5 fadeInLeft" id="main_section_connect">
    <div className="container main_header">
      <h1>Connect with us</h1>
    </div>
    <div className="container">
      <form onSubmit={submitForm}>
        <div className="form-connect card p-5">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" id="name" className="form-control" placeholder="Your Full Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" id="email" className="form-control" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="inputState" className="form-label">Project</label>
            <select id="inputState" name="inputState" className="form-select">
              <option selected>Choose Project</option>
              {services.map((service, index) => (
                <option key={index}>{service}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-outline-secondary" type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </section>
);

const submitForm = (event) => {
  event.preventDefault();
  // Form submission logic
};

export default App;

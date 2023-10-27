import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { BsPatchCheckFill } from 'react-icons/bs'
import profile1 from '../src/assets/pic14.png'
import profile from '../src/archana2.png'
import emailjs from 'emailjs-com'
import Resume from './assets/Archana (1).pdf'


function App() {


  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_3hsqgfl',
      'template_zrgxc87',
      form.current,
      'FPqpDvPeJaW93y3Mr'

    ).then(result => console.log(result.text));
    e.target.reset();
  }


  useEffect(() => {

    const handleScroll = () => {
      setIsNavbarActive(window.scrollY < 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {

    setIsNavbarActive(!isNavbarActive);
  };

  const toggleDarkMode = () => {

    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  };


  return (
    <>
      <header className={isNavbarActive ? "shadow" : ""}>
        <a href="#" class="logo">Port<span>Folio</span></a>
        <div className="bx bx-menu" id="menu-icon" onClick={toggleNavbar}></div>
        <ul className={`navbar ${isNavbarActive ? "active" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <div className={`bx ${isDarkMode ? "bx-sun" : "bx-moon"}`} id="darkmode" onClick={toggleDarkMode}></div>
        </ul>
      </header>

      <section class="home" id="home">
        <div class="social">
          <a href="#"><i class="bx bxl-instagram" style={{ color: "#ab0e54" }}></i></a>
          <a href="https://www.linkedin.com/in/archana-kumari-9628861a7/" target='_blank'><i class="bx bxl-linkedin" style={{ color: "#0288D1" }}></i></a>
          <a href="github.com/riya0395" target='_blank'><i class="bx bxl-github" style={{ color: "#00BCD4" }}></i></a>
        </div>
        <div class="home1-img ">

          <img src={profile1} alt="" />

        </div>
        <div class="home-text">
          <span>Hello, I'm</span>
          <h1>Archana</h1>
          <h2>Frontend Developer</h2>
          <p>Welcome to my portfolio! I am a dedicated and passionate Frontend Developer who is committed to creating stunning, functional, and user-centric web experiences. I take great pride in my work and approach each project with an unwavering passion for web development.</p>
          <a href={Resume} class="btn-bg">Download CV</a>
        </div>
      </section>

      <section class="about" id="about">
        <div class="heading">
          <h2>About Me</h2>
          <span>Introduction</span>
        </div>
        <div class="about-container">
          <div class="about-img aboutstatus">
            <img src={profile} alt="" />
          </div>
          <div class="about-text">
            <p>
              Hi, I'm Archana, and I'm currently employed at Value Innovation Labs located  as a frontend developer. In this role, I specialize in creating the user interface and overall user experience for websites and web applications. My work involves using HTML, CSS, and JavaScript to build and optimize the visual aspects of websites, ensuring they are both functional and aesthetically pleasing. I also collaborate with designers and back-end developers to bring web projects to life. I'm passionate about creating responsive, user-friendly web solutions and staying up-to-date with the latest front-end technologies to deliver the best user experiences.
            </p>
            <div class="information">
              <div class="info-box">
                <i class="bx bxs-user"></i>
                <span>Archana</span>
              </div>
              <div class="info-box">
                <i class="bx bxs-user"></i>
                <span>+91-8112361879</span>
              </div>
              <div class="info-box">
                <i class="bx bxs-user"></i>
                <span>archanak9187@gmail.com</span>
              </div>
            </div>
            <a href={Resume} class="btn-bg">Download CV</a>
          </div>
        </div>
      </section>

      <section class="skills" id="skills">
        <div class="heading">
          <h2>Skills</h2>
          <span>My Skills</span>
        </div>
        <div className='container experience__container'>
          <div className='experience__frontend'>
            <h3>Frontend Development</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>React.js</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>

          <div className='experience__backend'>
            <h3>Backend Development</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Node.js</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>MYSQL</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="services" id='services'>
        <div class="heading">
          <h2>Services</h2>
          <span>Our Services</span>
        </div>
        <div class="services-container">
          <div class="services-box">
            <i class="bx bx-code-alt"></i>
            <h3>Web Development</h3>
            <a href="#">Learn More</a>
          </div>
          <div class="services-box">
            <i class="bx bx-server"></i>
            <h3>Frontend Development</h3>
            <a href="#">Learn More</a>
          </div>
          <div class="services-box">
            <i class="bx bx-server"></i>
            <h3>Backend Development</h3>
            <a href="#">Learn More</a>
          </div>
          <div class="services-box">
            <i class="bx bx-brush"></i>
            <h3>UI/UX Design</h3>
            <a href="#">Learn More</a>
          </div>
        </div>
      </section>
      <section class="contact" id="contact">
        <div class="heading">
          <h2>Contact</h2>
          <span>Connect With Us</span>
        </div>
        <div class="contact-form">
          <form action="#" onSubmit={sendEmail} ref={form}>
            <input type="text" name='name' placeholder="Your Full Name" required></input>
            <input type="email" name='email' placeholder="Your Email" required></input>
            <textarea id="" name='message' rows="10" cols="30" placeholder="Your Message" required></textarea>
            <button type='submit' class='contact-button' value="Send">Send Message</button>

          </form>
        </div>
      </section>
      <div class="footer">
        <h2>Follow Us</h2>
        <div class="footer-social">
          <a href="https://www.linkedin.com/in/archana-kumari-9628861a7/"><i class="bx bxl-linkedin" style={{ color: "#0288D1" }}></i></a>
          <a href="#"><i class="bx bxl-instagram" style={{ color: "#ab0e54" }}></i></a>
          <a href="github.com/riya0395" target='_blank'><i class="bx bxl-github" style={{ color: "#00BCD4" }}></i></a>
          <a href="#"><i class="bx bxl-youtube" style={{ color: "red" }}></i></a>
        </div>
      </div>
      <div class="copyright">
        &copy; Portfolio | All rights reserved
      </div>
    </>
  );
}

export default App;

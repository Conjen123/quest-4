// contains : html components

// Home done

export function HomeBanner() {
  return (
    <div class="container" id="home">
      <div class="home-text-section">
        <h1 id="left-to-right">Welcome To My Portfolio!</h1>
        <p id="fade-in">By Jennifer Amelinda</p>
        <h2 id="fade-in">I am open for Front-End Developer!</h2>
      </div>
      <div class="home-image" id="down">
        <img src="./assets/home/pexels-divinetechygirl-1181248.jpg" alt="" />
      </div>
    </div>
  );
}

// About me done
export function AboutBanner() {
  function Card({ title, desc, time }) {
    return (
      <div class="card">
        <span class="content">
          <h4>{title}</h4>
          <p>{desc}</p>
        </span>
        <span class="year">{time}</span>
      </div>
    );
  }

  function Tag({ title }) {
    return <span>{title}</span>;
  }

  function AboutMe() {
    return (
      <div class="about-me-section">
        <div class="avatar">
          <img src="./assets/about me/me.png" alt="Profile" />
        </div>
        <div class="about-me-text-section">
          <h1 class="subtitle">ABOUT ME</h1>
          <p>
            My name is Jennifer Amelinda. I’m currently attending BINUS
            University majoring in Information Systems and a first-year student.
            I love learning new things. I am an honest and open-minded person.
          </p>
        </div>
      </div>
    );
  }

  // Education
  const educationList = [
    {
      title: "BINUS University",
      desc: "Information Systems",
      time: "2024 - now",
    },
    {
      title: "Darma Satria Persada",
      desc: "Social Science",
      time: "2018 - 2021",
    },
  ];

  function Education() {
    return (
      <div class="education-section">
        <h1 class="subtitle">EDUCATION</h1>
        {educationList.map((object, index) => (
          <Card
            key={index}
            title={object.title}
            desc={object.desc}
            time={object.time}
          />
        ))}
      </div>
    );
  }

  // Software
  const softwares = ["MS Office", "VS Code", "Figma", "Canva"];

  function Software() {
    return (
      <div class="software-section">
        <h1 class="subtitle">SOFTWARE</h1>
        <div class="tags">
          {softwares.map((software, index) => {
            return <Tag key={index} title={software} />;
          })}
        </div>
      </div>
    );
  }

  const skills = ["Python", "HTML, CSS, JS", "UI/UX"];

  function Skill() {
    return (
      <div class="skills-section">
        <h1 class="subtitle">SKILLS</h1>
        <div class="tags">
          {skills.map((skill, index) => {
            return <Tag key={index} title={skill} />;
          })}
        </div>
      </div>
    );
  }
  return (
    <div class="container" id="about-me">
      <AboutMe />
      <Education />
      <Software />
      <Skill />
    </div>
  );
}

// Portfolio
export function PortfolioBanner() {
  return (
    <div class="container" id="portfolio">
      <div class="title-portfolio">
        <h1 class="subtitle">PROJECTS</h1>
      </div>
      <div class="portfolio-section">
        <div class="box-section">
          <div class="box">
            <div class="project-preview">
              <img src="./assets/portfolio preview/lively.png" alt="" />
            </div>
            <span class="box-label"> UI/UX - Lively </span>
          </div>

          <div class="box">
            <div class="project-preview">
              <img src="./assets/portfolio preview/Starwave.png" alt="" />
            </div>
            <span class="box-label"> UI/UX - Starwave </span>
          </div>

          <div class="box">
            <div class="project-preview">
              <img src="./assets/portfolio preview/BSQ Redesign.png" alt="" />
            </div>
            <span class="box-label"> UXRD Final Project - BSQ Redesign </span>
          </div>

          <div class="box">
            <div class="project-preview">
              <img src="./assets/portfolio preview/LnT Quest.png" alt="" />
            </div>
            <span class="box-label"> Website - BNCC LnT Front-end Quest </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactBanner() {
  function ContactForm() {
    return (
      <div class="container" id="contact">
        <div class="title-contact">
          <h1>Let's connect!</h1>
        </div>
        <div class="contact-section">
          <div class="contact-image">
            <img src="./assets/icons/contact.svg" alt="girl with a laptop" />
          </div>
          <form id="contact-form">
            <div class="input-container">
              <div class="input-box">
                <div class="icon">
                  <img src="./assets/icons/profile.svg" alt="" />
                </div>
                <input
                  id="form-full-name"
                  type="text"
                  placeholder="Full Name"
                />
              </div>

              <div class="input-box">
                <div class="icon">
                  <img src="./assets/icons/email.svg" alt="" />
                </div>
                <input id="form-email" type="text" placeholder="Email" />
              </div>

              <div class="input-box">
                <div class="icon">
                  <img src="./assets/icons/linkedin.svg" alt="" />
                </div>
                <input id="form-linkedin" type="text" placeholder="LinkedIn" />
              </div>

              <div class="input-box">
                <div class="icon">
                  <img src="./assets/icons/comment.svg" alt="" />
                </div>
                <textarea id="form-comment" placeholder="Comment"></textarea>
              </div>
            </div>

            <div class="submit-button">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <ContactForm />
      {/* <Footer /> */}
    </>
  );
}

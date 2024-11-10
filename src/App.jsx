import React from 'react';
import './App.css';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <div className="App"><button className='bisey2'></button>
      
      <DarkModeToggle />
      <section className="header">
        <div>
          <h1>Batuhan Karacan</h1>
          <h2>Software Engineer</h2>
          <p>Hi, I'm Batuhan, I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me.</p>
          <div className="buttons">
            <button>Hire me</button>
            <a href="https://github.com/Batuhan-Karacan"  >
              <img src="https://img.icons8.com/color/48/000000/github.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/nihat-batuhan-karacan-97112217a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
          </div>
        <img src="x" alt="" className="header-image" />
      </section>

      <section className="skills"><div>
      <h2>Skills</h2>
        <div className="container">
          
          <div className="skill">
            <h3>Java Script</h3>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="skill">
            <h3>React.Js</h3>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="skill">
            <h3>Node.Js</h3>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        </div>
      </section>

      <section className="profile"><h2>Profile</h2><div> <div className="container">
          
          <div className="profiles">
            <h3>Profile</h3>
            <h4>Doğum tarihi</h4>
            <h4>İkamit Şehri</h4>
            <h4>Eğitim Durumu</h4>
            <h4>Tercih Ettiği Rol</h4>
          </div>
          <div className="profiles">
          <h6>x</h6>
            <p>06.09.1996</p>
            <p>İstanbul</p>
            <p>Bahçeşehir Üni. Yazılım Müh. Lisans 2025</p>
            <p>Frontend,UI</p>
          </div>
          <div className="profiles">
            <h3>About Me</h3>
            <p>I'm a passionate developer with a strong background in building web applications. I enjoy tackling complex problems and delivering high-quality solutions.</p>
          </div>
          </div>
        </div>
      </section>

      <section className="projects"> <h2>Projects</h2><div>
        <div className="container">
         
          <div className="project">
            <h3>Project One</h3>
            <p>A brief description of project one goes here. It showcases my skills in React and Node.js.</p>
          </div>
          <div className="project">
            <h3>Project Two</h3>
            <p>A brief description of project two goes here. It highlights my ability to create responsive designs.</p>
          </div>
          <div className="project">
            <h3>Pizza</h3>
            <p>A brief description of project three goes here. It demonstrates my expertise in full-stack development.</p>
            <a href="https://github.com/Batuhan-Karacan/fsweb-s4-bonus-challenge-html-pizza" alt="GitHub">Github</a>
            <a href="https://fsweb-s4-bonus-challenge-html-pizza-9d6hlx94s.vercel.app/" alt="GitHub">View</a>
          </div>
        </div>
        </div>
      </section>

      <footer className="footer">
        <div className='footers'> 
          <h2>Let's work together</h2>
          <p>k.batuhan96@icloud.com</p>
        </div>
        <a href="https://github.com/Batuhan-Karacan" alt="GitHub"><img src="https://img.icons8.com/color/48/000000/github.png" alt="GitHub" /></a>

        
      </footer>
    </div>
  );
}

export default App;
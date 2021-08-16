import React from 'react';
import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
  render() {
    return(
      <div class="header">
        <div>
          
        </div>
      </div>
    );
  }
}

class Mainhead extends React.Component {
  render() {
    return(
      <div class="mainHead">
        <h2 style={{color: "orange"}}>Hey There! I'm</h2>
        <h1 style={{fontSize: "60px"}}>Matthew Wu</h1>
        <div>
        <img src="profilepic.png" width="250" height="250" style={{paddingBottom: "25px"}}></img>
        <br></br>
        </div>
      </div>
    );
  }
}

class Buttonmain extends React.Component {
  render() {
    return(
<div style={{textAlign: "end", paddingRight: "130px", paddingBottom: "50px"}}>
        <a class="linkedinButton" href="https://www.linkedin.com/in/matthewwu4/" target="_blank">
        <i class="fab fa-linkedin-in"></i>
        <span style={{marginLeft: "10px"}}>Let's Connect!</span>
        </a>
        <a class="resumeButton" href="https://drive.google.com/file/d/19Nbuz4S0CorYK58yP3j8n5Mn6-RY3fRj/view?usp=sharing" target="_blank" style={{backgroundColor: " rgb(255, 72, 102)"}}>
        <i class="far fa-file-alt"></i>
        <span style={{marginLeft: "10px"}}>Resume</span>
        </a>
        </div>
    );
  }
}

class AboutMe extends React.Component {
  render() {
    return(
      <div class="aboutMe">
        <h1 style={{fontFamily: "'Cabin', sans-serif"}}>About Me</h1>
        <div style={{width: "46%"}}>
        <p>I am currently a Junior at the University of Michigan, Ann Arbor studying Computer Science and am seeking internship opportunities for Summer 2022</p>
        <p>Being an international student who comes from a third world country, programming has always been something that looked unreachable and kind of like magic in a sense. Growing up, no one around me (including myself) really knew what code and programming was, as Computer Science was / still is a relatively small major in South Africa. After coming to college in the U.S I was privileged enough to be exposed to programming and since then my whole life has changed. Not only have I decided to pursue Computer Science as a major, but I have become fully intrigued and fascinated by the concepts, ideas and practicalities of programming. I’ve been spending my time outside of classes trying out web development, IOS development and learning the intricacy of algorithms and data structures (even though Leetcode still beats me every time)</p>
        <p>I am passionate about building relationships with other people so feel free to connect with me :)</p>
        </div>
      </div>
    );
  }
}

class WorkExperience extends React.Component {
  render() {
    return(
      <div>
        <div class="flex" style={{fontFamily: "'Cabin', sans-serif", paddingBottom: "20px"}}>
        <h1>Experience</h1>
        <div style={{width: "45%"}}></div>
        </div>
        <div style={{marginLeft: "12%"}}>
          <div>
            <img src="a2d24.png" style={{height: "60px"}}></img>
            <h3 style={{marginBottom: "10px", lineHeight: "0"}}><b>Software Engineer Intern</b></h3>
            <p><i>A2D24 - [May 2021 - July 2020]</i></p>
            <ul style={{fontFamily: "'Crimson Text', serif"}}>
              <li>Revenue Management and Rules Engine team</li>
              <li>Worked on creating an API and a rules engine for clients which would ultimately allow them to access a database of information about 5,000+ of their customers</li>
            </ul>
          </div>
          <br></br>
          <br></br>
          <div>
            <img src="compu.jpeg" style={{height: "80px"}}></img>
            <h3 style={{marginBottom: "10px", lineHeight: "0"}}><b>Software Developer</b></h3>
            <p><i>Compusophy - [April 2021 - July 2020]</i></p>
            <ul style={{fontFamily: "'Crimson Text', serif"}}>
              <li>Worked for an NFT artist by tracking down 225 of his collectors’ names and their respective ethereum wallet addresses that held a total of 927 of his NFTs using the OpenSea API</li>
            </ul>
          </div>
          <br></br>
          <br></br>
          <div>
            <img src="information.jpg"></img>
            <h3 style={{marginBottom: "10px", lineHeight: "0"}}><b>Research Assistant</b></h3>
            <p><i>University of Michigan : School of Information - [September 2019 - May 2020]</i></p>
            <ul style={{fontFamily: "'Crimson Text', serif"}}>
              <li>Preformed log file analysis on user questions about arrays by parsing and categorizing ± 8000 CSV files using Python</li>
              <li>Research was used and published in Dr Barbara Ericson’s academic papers for her AP CS and AP CSP ebooks</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class PersonalProjects extends React.Component {
  render() {
    return(
      <div style={{paddingBottom: "100px"}}>
        <div class="flex" style={{fontFamily: "'Cabin', sans-serif", paddingBottom: "20px"}}>
        <h1>Personal Projects</h1>
        <div style={{width: "40%"}}></div>
        </div>
        <div class="flex" style={{justifyContent: "space-evenly"}}>
          <div class="personalBox">
          <a href="https://github.com/matthewwu4/Memorize" target="_blank" class="logo" style={{float: "right"}}><i class="fas fa-bookmark"></i></a>
          <h3><b>Nifty Quests</b></h3>
          <span style={{fontFamily: "'Crimson Text', serif"}}>A website that provides secondary marketplace information on NFTs sold on Nifty Gateway with approximately 9,100 visits from the time of launch</span><br></br><br></br>
          <span style={{fontFamily: "'Crimson Text', serif"}}>The website has been visited by approximately 4,500 unique users</span><br></br><br></br>
          </div>
          <div class="personalBox" style={{border: "none"}}>
            
          </div>
          <div class="personalBox" style={{border: "none"}}>
            
          </div>
        </div>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return(
      <div class="footerLogo centerFoot">
        <a href="mailto:mattwu@umich.edu" class="logo"><i class="fas fa-envelope fa-2x"></i></a>
        <a href="https://www.linkedin.com/in/matthewwu4/" target="_blank" class="logo"><i class="fab fa-linkedin fa-2x"></i></a>
        <a href="https://github.com/matthewwu4" target="_blank" class="logo"><i class="fab fa-github fa-2x"></i></a>
      </div>
    );
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);

ReactDOM.render(
  <Mainhead />,
  document.getElementById('mainHead')
);

ReactDOM.render(
  <Buttonmain />,
  document.getElementById('mainButton')
);

ReactDOM.render(
  <AboutMe />,
  document.getElementById('aboutMe')
)

ReactDOM.render(
  <WorkExperience />,
  document.getElementById('experience')
)

ReactDOM.render(
  <PersonalProjects />,
  document.getElementById('pp')
)

ReactDOM.render(
  <Footer />,
  document.getElementById('foot')
)
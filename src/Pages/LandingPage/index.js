import React, { Component } from "react"
import CasePreview from "../../Components/CasePreview"
import "./style.css"

const casesJson = require("../../cases.json")

export default class LandingPage extends Component {

  render() {
    return (
      <main className="wrapper">

        <header className="heading">
          <h1>
            <span className="pink">A</span>nna Erk<span className="purple">e</span>rs.
          </h1>
        </header>

        <section className="container about-me">
          <div className="about-me-background-bottom" />
          <div className="about-me-background-top" />
          <div className="about-me-left">
            <div className="about-me-image">
              <img src={`${process.env.PUBLIC_URL}/images/portrait.png`} alt="Anna Erkers" />
            </div>
          </div>
          <div className="about-me-right">
            <h2>
              Front-end Developer <br />
              + Translator
            </h2>
            <div className="about-me-bio">
              <p>
                Hello! I&apos;m a linguistics
                enthusiast with a knack for
                problem-solving and falling down
                google holes in search of
                everything from cool CSS tricks
                to Warcraft lore.
              </p>
              <p>
                The Internet has been my second
                home for nearly 20 years and as a
                web developer my goal is to
                create an engaging and accessible
                experience for my fellow netizens.
              </p>
            </div>
            <div className="about-me-contact">
              <p>
                <a
                  href="https://github.com/Hilwynn"
                  rel="noopener noreferrer"
                  target="_blank">
                  GitHub
                </a>
                &nbsp;|&nbsp;
                <a
                  href="https://www.linkedin.com/in/anna-erkers-868738118/"
                  rel="noopener noreferrer"
                  target="_blank">
                  LinkedIn
                </a>
                <br />
                anna.erkers@gmail.com
                <br />
                <a
                  href="tel:+4670-228-94-77"
                  rel="nofollow">
                  +4670 - 228 94 77
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="container tech">
          <h2>Tech.</h2>
          <p>
            240+ hours of coding
            <span className="bullet pink">&#9679;</span>
            15 individual tasks
            <span className="bullet pink">&#9679;</span>
            HTML5, CSS3, Flexbox, JavaScript, ES6, JSX, React, APIs
            <span className="bullet pink">&#9679;</span>
            3 sprints with demos at Volumental, Bonnier News and Comprend
          </p>
          <div className="cases">
            {casesJson.cases.map(project =>
              <CasePreview
                image={project.image}
                key={project.key}
                title={project.title}
                url={project.urls.site} />)}
          </div>
        </section>

        <section className="container skills">
          <div className="skills-background-bottom" />
          <div className="skills-background-top" />
          <h2>Skills.</h2>
          <div className="skill-list-wrapper">
            <div className="skill-list">
              <h3>Coding</h3>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript ES6</li>
                <li>React</li>
                <li>SASS</li>
              </ul>
            </div>
            <div className="skill-list">
              <h3>Toolbox</h3>
              <ul>
                <li>Atom</li>
                <li>GitHub</li>
                <li>Command Line</li>
                <li>Postman</li>
                <li>Slack</li>
                <li>Trello</li>
              </ul>
            </div>
            <div className="skill-list">
              <h3>More</h3>
              <ul>
                <li>Concept development</li>
                <li>Agile methodology</li>
                <li>Translation</li>
                <li>Proof-reading</li>
                <li>Text-production</li>
              </ul>
            </div>
            <div className="skill-list">
              <h3>Upcoming</h3>
              <ul>
                <li>Node.js</li>
                <li>Redux</li>
                <li>Grid</li>
                <li>anime.js</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="container studies">
          <h2>Studies.</h2>
          <div className="studies-wrapper">
            <div className="studies-section">
              <h3>Technigo</h3>
              <h4>Stockholm, Sep - Nov 2018</h4>
              <p>
                Full-time twelve-week intensive
                programme in front-end development. Covering everything
                from basic web development skills
                to structuring and building
                larger projects. Main focus on
                JavaScript and React. Total of
                480 coding hours and 6 sprints at
                companies such as Bonnier News and Volumental.
              </p>
            </div>
            <div className="studies-section">
              <h3>Tjejer kodar</h3>
              <h4>Stockholm, Feb - Mar 2018</h4>
              <p>
                One-week online web development
                course with aim to build a
                random choice maker using HTML5,
                CSS3 and jQuery.
              </p>
            </div>
            <div className="studies-section">
              <h3>Stockholm University</h3>
              <h4>Stockholm, 2007 - 2012</h4>
              <p>
                Studies in the fields of Swedish
                and English literature and
                linguistics, as well as
                Translation Theory with a focus
                on translation from English to
                Swedish.
              </p>
            </div>
          </div>
        </section>

      </main>
    )
  }
}

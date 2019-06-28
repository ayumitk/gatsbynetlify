import React, {Component} from 'react'

class AboutMe extends Component{
  render(){
    return (
      <div>
        <h2 className="title">About Me</h2>
        <p>I am a UI/UX developer skilled in HTML, CSS/Sass, JavaScript, Adobe Creative Suite and Sketch as well as template platforms including Wordpress. My extensive experience and background in graphic design allow me to bridge the gap between design and development to create the most beautiful, and highly functional, websites and mobile apps.</p>
        <p>I am currently the lead creative director (REMOTE) for a tech company for pet-lovers based in Japan.</p>
        <div class="columns">
          <div class="column">
            <h3>UI/UX Design</h3>
            <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
            <dl>
              <dt>Things I enjoy designing:</dt>
              <dd>UX, UI, Web, Mobile, Apps, Branding, Logos</dd>
              <dt>Design Tools:</dt>
              <dd>Pen & Paper, Sketch, Adobe Photoshop, Adobe Illustrator, Figma, Invision, Zeplin</dd>
            </dl>
          </div>
          <div class="column">
            <h3>Front-end Dev</h3>
            <p>I tend to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            <dl>
              <dt>Languages I speak:</dt>
              <dd>HTML, CSS/Sass, JavaScript</dd>
              <dt>Dev Tools:</dt>
              <dd>VS Code, React, Gulp, Webpack, npm, Git, Bootstrap, Wordpress</dd>
            </dl>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe
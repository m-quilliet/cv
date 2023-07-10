import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import {BsBootstrap} from 'react-icons/bs'
import {VscGithub} from 'react-icons/vsc'
import {SiReact, SiMysql, SiFigma, SiAdobexd, SiCanva, SiWordpress, SiGit, SiApple,
  SiMamp, SiFirebase, SiPhp, SiCss3, SiJavascript, SiHtml5, SiGraphql,SiTailwindcss} from 'react-icons/si'
import {FaSymfony,FaTrello} from 'react-icons/fa'
import {DiScrum, DiVisualstudio} from 'react-icons/di'
import { Fade } from "react-awesome-reveal"
// import "./tool.css"

export const Tool = () => { 
  return (
    
    <Container className='new d-flex min-vh-100 flex-column justify-content-center align-items-center'>
      <Fade right>
        <Row className='frontend'>
          <Col xs={6}> 
            <h3 style={{ margin:"2rem" , textAlign:"center"}}>Front-end</h3>
            <div className="skillgrid">
              <div>
                <div className="skillemblem">
                  <SiHtml5 />
                </div>
                <p>HTML5</p>
              </div>
              <div>
                <div className="skillemblem">
                  < SiCss3/>
                </div>
                <p>CSS3</p>
              </div>
              <div>
                <div className="skillemblem">
                  < SiJavascript/>
                </div>
                <p>Javascript</p>
              </div>
              <div>
                <div className="skillemblem">
                  <BsBootstrap/>
                </div>
                <p>Bootstrap</p>
              </div>
              <div>
                <div className="skillemblem">
                  <SiTailwindcss/>
                </div>
                <p>Tailwind</p>
              </div>
              <div>
                <div className="skillemblem">
                  <SiReact/>
                </div>
                <p>React</p>
              </div>
            </div>
          </Col>
          
          <Col xs={6}>
            <h3 style={{ margin:"2rem", textAlign:"center" }}>Back-end</h3>
            <div className="skillgrid">
            <div>
                <div className="skillemblem">
                  <SiPhp/>
                </div>
                <p>Php</p>
              </div>
              <div>
                <div className="skillemblem">
                  <FaSymfony/>
                </div>
                <p>Symfony</p>
              </div>
              <div>
                <div className="skillemblem">
                  <SiMysql/>
                </div>
                <p>My Sql</p>
              </div>
              <div>
                <div className="skillemblem">
                  <SiGraphql/>
                </div>
                <p>GraphQl</p>
              </div>
            </div>
          </Col>
        </Row>
      </Fade>

      <Fade left>
        <Row className='backend' >
          <Col xs={6}>
            <h3 style={{ margin:"2rem", textAlign:"center" }}>Cms/Design</h3>
            <div className="skillgrid">
            <div>
                <div className="skillemblem">
                  <SiWordpress/>
                </div>
                <p>Wordpress</p>
              </div>
              <div>
                <div className="skillemblem">
                  <SiFigma/>
                </div>
                <p>Figma</p>
              </div>
              <div>
                <div className="skillemblem">
                  <SiAdobexd/>
                </div>
                <p>Adobe xd</p>
              </div>
              <div>
                <div className="skillemblem">
                  <SiCanva/>
                </div>
                <p>Canva</p>
              </div> 
            </div>
          </Col>
                    
          <Col xs={6}>
            <h3 style={{ margin:"2rem", textAlign:"center" }}>Tools</h3>
            <div className="skillgrid">
              <div>
                <div className="skillemblem">
                  <SiGit/>
                </div>
                <p>Git</p>
              </div>
              <div>
                <div className="skillemblem">
                  <VscGithub/>
                </div>
                <p>Github</p>
              </div>
              <div>
                <div className="skillemblem">
                  <FaTrello/>
                </div>
                <p>Trello</p>
              </div>
              <div>
                <div className="skillemblem">
                  <DiVisualstudio/>
                </div>
                <p>VsCode</p>
              </div>
              <div>
                <div className="skillemblem">
                  <SiApple/>
                </div>
                <p>MacBook Air</p>
              </div>
              <div>
                <div className="skillemblem">
                  <SiMamp/>
                </div>
                <p>Mamp</p>
              </div>
              <div>
                <div className="skillemblem">
                  <SiFirebase/>
                </div>
                <p>Firebase</p>
              </div>
              <div>
                <div className="skillemblem">
                  <DiScrum/>
                </div>
                <p>Méthode Agile</p>
              </div>
            </div>
          </Col>
        </Row>
      </Fade>
    </Container>
  )
}

export default Tool
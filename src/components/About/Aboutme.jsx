import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import canvas from "../../assets/images/canvas.jpeg"
// import communication from "../../assets/images/communication.png"
// import creativite from "../../assets/images/creativite.png"
// import rouleau from "../../assets/images/rouleau.png"
import cat from "../../assets/images/cat.png"
import { Fade } from "react-awesome-reveal"
// import '../About/aboutme.css'

const Me = () => {
  return (
    <Fade direction='right'>
      <Container className="d-flex flex-wrap justify-content-center align-items-center vh-100">
        <Row className="" >
          <Col className=''>
            <img src={canvas} alt="" className="img"/>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center align-items-center m-4">
          <Col className='d-flex flex-column  align-items-center'>
          <Fade direction='down'>
              <h1 className='maib fw-bolder mb-4'>Maibelline QUILLIET</h1>
              <h3>Qui suis-je ?</h3>
              <span className='lorem m-4 px-4'>Développeuse web de formation, je me suis ensuite former en autodidacte sur React.js et Symfony.
              <br/>
              C'est en explorant de nombreuses librairies UI Javascript que j'ai pris conscience de mon appétence pour le Webdesign .
              <br/> Passionnée par l'Ui Design, je veux me former sur les outils de la suite Adobe pour étoffer mes compétences créatives
              et pouvoir réaliser des éléments graphiques complexes.
              <br/> 
              Mon objectif est de devenir une professionnelle complète pour m'épanouir dans le développement et l'intégration front-end.
              </span>
              <h3>Intérets</h3>
                

            </Fade>

          <Col className='d-flex flex-row mt-3'>
            <Fade direction='down'>
              {/* <img src={communication} height="65" alt="" className="communication"/>
              <img src={creativite} height="65" alt="" className="creativite"/>
              <img src={rouleau} height="65" alt="" className="rouleau"/> */}
              <img src={cat} height="65" alt="" className="cat"/>
            </Fade> 
            </Col>

          </Col>
        </Row> 

      </Container>
    </Fade>    
  )
}

export default Me


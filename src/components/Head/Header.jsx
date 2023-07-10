import React from "react";
import { Row, Col, Container} from 'react-bootstrap'
import profil from "../../assets/images/snapchat.png"
import { Fade } from "react-awesome-reveal"
import cv from '../../assets/Cv-WebDesigner.pdf'
// import "./header.css";


export const Header = () => { 
  return (
    <Fade direction="left">
      <Container id="Home" className="home p-5 min-vh-100 justify-content-center align-items-center">
        <Row>
          <Col className="catch-phrase m-4">
            <h1>
              Hi , I am Maibelline <br /> <p>Développeuse Front-end | Webdesigner</p>
            </h1>
            <p>
              Développeuse web et web mobile (bac+2) diplômée depuis juin 2022.
              Passionnée par l'Ui Design, je suis à la recherche d'un contrat de professionnalisation
              pour le titre professionnel de Webdesigner afin de me spécialiser dans tous les aspects du développement et de l'intégration front-end.
            </p> 
            <br/>
            <p>Je serais ravie d'intégrer une équipe de professionnels passionnés et passionnants pour m'accompagner dans ce projet.
            </p>
            <Col className="buttons">
            <a className="a" href={ cv } download><button className="cv" type="submit">Telecharger mon CV</button></a>
            </Col>
          </Col>
        </Row>
      <Row>
        <Col  className="profil">
          <img src={profil} height='500' className="maibelline" alt="maibelline"/>
        </Col> 
      </Row>
    </Container>
    </Fade>
  );
}
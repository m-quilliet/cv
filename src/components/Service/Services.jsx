import React from 'react';
import { Row, Col, Container,Badge, Button, Modal, Carousel} from 'react-bootstrap'
// import { Fade } from "react-awesome-reveal"
// import pins from '../../assets/images/pins.jpeg'
// import movies from '../../assets/images/movies.jpeg'
// import omief from '../../assets/images/omief.jpeg'
import poke from '../../assets/images/poke.jpeg'
// import world from '../../assets/images/world.jpeg'
// import tic from '../../assets/images/tic.jpeg'
// import w1 from '../../assets/images/w1.png'
// import w2 from '../../assets/images/w2.png'
// import w3 from '../../assets/images/w3.png'
// import h4 from '../../assets/images/h4.png'
// import h2 from '../../assets/images/h2.png'
// import h3 from '../../assets/images/h3.png'
// import p1 from '../../assets/images/p1.png'
// import p2 from '../../assets/images/p2.png'
// import p3 from '../../assets/images/p3.png'
// import c1 from '../../assets/images/c1.png'
// import c2 from '../../assets/images/c2.png'
// import c3 from '../../assets/images/c3.png'
// import cv from '../../assets/images/cv.jpeg'
// import jane from '../../assets/images/jane.jpeg'
// import clinique from '../../assets/images/clinique.jpeg'
// import memory from '../../assets/images/memory.jpeg'
import "../Service/service.css"


export const Services = () => { 
  // const [value, setValue] = useState([1, 3]);
  // const handleChange = (val) => setValue(val);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const [show1, setShow1] = useState(false);
  // const handleClose1 = () => setShow1(false);
  // const handleShow1 = () => setShow1(true);

  // const [show2, setShow2] = useState(false);
  // const handleClose2 = () => setShow2(false);
  // const handleShow2 = () => setShow2(true);

  // const [show3, setShow3] = useState(false);
  // const handleClose3 = () => setShow3(false);
  // const handleShow3 = () => setShow3(true);

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
   
      <Container className='d-flex flex-column justify-content-center align-items-center'>
    
        <Row className='portfolio__item d-flex flex-row justify-content-center'>    
          <Col> 
            <img className="portfolio__item-image image" src={poke} alt="" />
          </Col>
          <Col className="desc_item d-flex flex-column justify-content-center">
            <Row className="d-flex flex-column justify-content-center">
              <Col className='mt-2'>
                <Badge  bg="secondary">php 7</Badge>
              </Col>
              <Col>
                <h3>Poke'Mom</h3>
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <Button className='github' variant="primary" onClick={handleShow3}>Voir +</Button>
                  <Modal size="lg" show={show3} onHide={handleClose3}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={p1}
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={p2}
                              alt="Second slide"
                            />
                          </Carousel.Item>
                          {/* <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={p3}
                              alt="Third slide"
                            /> */}
                          {/* </Carousel.Item> */}
                        {/* </Carousel>
                    </Modal.Body>
                  </Modal>
              </Col>
            </Row> */} 
          </Col>
        </Row>
     
      
     
        {/* <Row className='portfolio__item d-flex flex-row justify-content-center'>    
          <Col> 
            <img className="portfolio__item-image image" src={tic} alt="" />
          </Col>
          <Col className="desc_item d-flex flex-column justify-content-center">
            <Row className="d-flex flex-column">
              <Col className='mt-2'>
                <Badge className='m-2' bg="secondary">React</Badge>
              </Col>
              <Col>
                <h3>Morpion</h3>
              </Col>
            </Row>
            <Row>
              <Col className='text-start'>
                <a href="https://github.com/m-quilliet/tic-tac-toe" className="github btn btn-outline-dark" target="_blank" rel="noreferrer">Github</a>
              </Col>
              <Col className='text-end'>
                <a href="https://m-quilliet.github.io/tic-tac-toe/" className="demo btn btn-dark" target="_blank" rel="noreferrer">Demo</a>
              </Col>
            </Row>
          </Col>
        </Row> 
  

        <Row className='portfolio__item d-flex flex-row justify-content-center'>    
          <Col> 
            <img className="portfolio__item-image image" src={pins} alt="" />
          </Col>
          <Col className="desc_item d-flex flex-column justify-content-center">
            <Row className="d-flex flex-column">
              <Col className='mt-2'>
                <Badge  bg="secondary">Symfony 5</Badge>
              </Col>
              <Col>
                <h3>My Pinterest</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className='github' variant="primary" onClick={handleShow2}>Voir +</Button>
                  <Modal size="lg" show={show2} onHide={handleClose2}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={c1}
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={c2}
                              alt="Second slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={c3}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                        </Carousel>
                    </Modal.Body>
                  </Modal>
              </Col>
            </Row>
          </Col>
          </Row>
 
        <Row className='portfolio__item d-flex flex-row justify-content-center'>    
          <Col> 
            <img className="portfolio__item-image image" src={memory} alt="" />
          </Col>
          <Col className="desc_item d-flex flex-column justify-content-center">
            <Row className="d-flex flex-column">
              <Col>
                <Badge className='mt-2' bg="secondary">Javascript</Badge>
              </Col>
              <Col>
                <h3>Memory</h3>
              </Col>
            </Row>
            <Row>
              <Col className='text-start'>
                <a href="https://github.com/m-quilliet/Memo/" className="github btn btn-outline-dark" target="_blank" rel="noreferrer">Github</a>
              </Col>
              <Col className='text-end'>
                <a href= "https://m-quilliet.github.io/Memo/"className="demo btn btn-dark" target="_blank" rel="noreferrer">Demo</a>
              </Col>
            </Row>
          </Col>
        </Row> 

        <Row className='portfolio__item d-flex flex-row justify-content-center'>    
          <Col> 
            <img className="portfolio__item-image image" src={world} alt="" />
          </Col>
          <Col className="desc_item d-flex flex-column justify-content-center">
            <Row className="d-flex flex-column">
              <Col className='mt-2'>
                <Badge  bg="secondary">WordPress</Badge>
              </Col>
              <Col>
                <h3>WordPress </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className='github' variant="primary" onClick={handleShow}>Voir +</Button>
                  <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={w1}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={w2}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={w3}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </Modal.Body>
                  </Modal>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className='portfolio__item d-flex flex-row justify-content-center'>    
          <Col> 
            <img className="portfolio__item-image image" src={clinique} alt="" />
          </Col>
          <Col className="desc_item d-flex flex-column justify-content-center">
            <Row className="d-flex flex-column">
              <Col className='mt-2'>
                <Badge bg="secondary">Php 7</Badge>
              </Col>
              <Col>
                <h3>Hopital</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className='github' variant="primary" onClick={handleShow1}>Voir +</Button>
                  <Modal size="lg" show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                      <Carousel activeIndex={index} onSelect={handleSelect}>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={h4}
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={h2}
                              alt="Second slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={h3}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                        </Carousel>
                    </Modal.Body>
                  </Modal>
              </Col>
            </Row>
          </Col>
        </Row> */}

        {/* <Row className='portfolio__item d-flex flex-row justify-content-center'>    
          <Col> 
            <img className="portfolio__item-image image" src={omief} alt="" />
          </Col>
          <Col className="desc_item d-flex flex-column justify-content-center">
            <Row className="d-flex flex-column">
              <Col className='mt-2'>
                <Badge bg="secondary">React</Badge>
              </Col>
              <Col>
                <h3> (Stage) </h3>
                <h3>Footer Omie</h3>                
              </Col>
            </Row>
            <Row>
              <Col>
                <a href="https://www.omie.fr/le-gout-de-faire-mieux?gclid=CjwKCAiA5sieBhBnEiwAR9oh2gD4WvbuvgxUer60_VtDS-SMzkwCYaApvpY3u4Nx7fKMnRZwUvNJqBoCrHcQAvD_BwE" className="github btn btn-outline-dark" target="_blank" rel="noreferrer">Demo</a>
              </Col>
            </Row>
          </Col>
        </Row>  */}
{/* 
        <Row className='portfolio__item d-flex flex-row justify-content-center'>    
          <Col> 
            <img className="portfolio__item-image image" src={cv} alt="" />
          </Col>
          <Col className="desc_item d-flex flex-column justify-content-center">
            <Row className="d-flex flex-column">
              <Col className='mt-2'>
                <Badge className='m-2' bg="secondary">Bootstrap</Badge>
              </Col>
              <Col>
                <h3>1er CV</h3>
              </Col>
            </Row>
            <Row>
              <Col className='text-start'>
                <a href= "https://github.com/m-quilliet/Maibelline_Quilliet_cv_Portfolio/blob/main/index.html" className="github btn btn-outline-dark" target="_blank" rel="noreferrer">Github</a>
              </Col>
              <Col className='text-end'>
                <a href= "https://m-quilliet.github.io/Maibelline_Quilliet_cv_Portfolio/" className="demo btn btn-dark" target="_blank" rel="noreferrer">Demo</a>
              </Col>
            </Row>
          </Col>
        </Row>  */}

        {/* <Row className='portfolio__item d-flex flex-row justify-content-center'>    
          <Col> 
            <img className="portfolio__item-image image" src={movies} alt="" />
          </Col>
          <Col className="desc_item d-flex flex-column justify-content-center">
            <Row className="d-flex flex-column">
              <Col className='mt-2'>
                <Badge className='m-2' bg="secondary">Javascript/Json</Badge>
              </Col>
              <Col>
                <h3>Data Movies</h3>
              </Col>
            </Row>
            <Row>
              <Col className='text-start'>
                <a href="https://github.com/m-quilliet/Data_Movies/blob/main/index.html" className="github btn btn-outline-dark" target="_blank" rel="noreferrer">Github</a>
              </Col>
              <Col className='text-end'>
                <a href="https://m-quilliet.github.io/Data_Movies/" className="demo btn btn-dark" target="_blank" rel="noreferrer">Demo</a>
              </Col>
            </Row>
          </Col>
        </Row>  */}

        {/* <Row className='portfolio__item d-flex flex-row justify-content-center'>    
          <Col> 
            <img className="portfolio__item-image image" src={jane} alt="" />
          </Col>
          <Col className="desc_item d-flex flex-column justify-content-center">
            <Row className="d-flex flex-column">
              <Col>
                <Badge className='mt-2' bg="secondary">vite.js</Badge>
              </Col>
              <Col>
                <h3>Portfolio</h3>
              </Col>
            </Row>
            <Row>
              <Col className='text-start'>
                <a href="https://github.com/m-quilliet/vitejs-portfolio/" className="github btn btn-outline-dark" target="_blank" rel="noreferrer">Github</a>
              </Col>
              <Col className='text-end'>
                <a href= "https://m-quilliet.github.io/vitejs-portfolio/"className="demo btn btn-dark" target="_blank" rel="noreferrer">Demo</a>
              </Col>
            </Row>
          </Col>
        </Row>  */}
      
    </Container>



  )
}

export default Services



import React from 'react';
import Footer from '../../components/Footer'
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import boook from "../../images/boook.jpg"
import copy from "../../images/copy.jpg" 
import newspaper from "../../images/newspaper.jpg"
import magazine from "../../images/magazine.jpg"
import bottle from "../../images/bottle.jpg"
import plastic from "../../images/plastic.jpg"
import jute from "../../images/jute.jpg"
import copper from "../../images/copper.jpg"
import computer from "../../images/computer.jpg"
import generator from "../../images/generator.jpg"
import steel from "../../images/steel.jpg"
import './3rwaste.css'


export const Rwaste = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
  };
  return(
    <section className="Rwaste" id="Rwaste">
      <Container>
        <Row>
          <Col>
            <div className="Waste-box"><h3><b>Waste Type=Glass,Plastic and Jute</b></h3>
              <Carousel responsive={responsive} infinite={true} className="waste-slider">

              <div className="item">
                  <img src={bottle} alt="Images" />
                  <h5>Name:Beer Bottle<br/>
                  Cost:40</h5>
                </div>
                <div className="item">
                  <img src={plastic} alt="Images" />
                  <h5>Name:Plastic Bottle<br/>
                  Cost:30</h5>
                </div>
                <div className="item">
                  <img src={jute} alt="Images" />
                  <h5>Name:Jute bags<br/>
                  Cost:45
                  </h5>
                </div>
                
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="Waste-box"><h3><b>Waste Type=Paper waste</b></h3>
              <Carousel responsive={responsive} infinite={true} className="waste-slider">

              <div className="item">
                  <img src={boook} alt="Images" />
                  <h5>Name:Books<br/>
                  Cost:25</h5>
                </div>
                <div className="item">
                  <img src={copy} alt="Images" />
                  <h5>Name:Copy<br/>
                  Cost:25</h5>
                </div>
                <div className="item">
                  <img src={newspaper} alt="Images" />
                  <h5>Name:Newspaper<br/>
                  Cost:25
                  </h5>
                </div>
                <div className="item">
                  <img src={magazine} alt="Images" />
                  <h5>Name:Magazine<br/>
                   Cost:25
                  </h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="Waste-box"><h3><b>Waste Type=Metal & E-waste</b></h3>
              <Carousel responsive={responsive} infinite={true} className="waste-slider">

              <div className="item">
                  <img src={copper} alt="Images" />
                  <h5>Name:Copper Items<br/>
                  Cost:300</h5>
                </div>
                <div className="item">
                  <img src={steel} alt="Images" />
                  <h5>Name:Steel Items<br/>
                  Cost:300</h5>
                </div>
                <div className="item">
                  <img src={computer} alt="Images" />
                  <h5>Name:Computer Parts<br/>
                  Cost:250
                  </h5>
                </div>
                <div className="item">
                  <img src={generator} alt="Images" />
                  <h5>Name:Generator<br/>
                   Cost:250
                  </h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </section>

  )
}
export default Rwaste;
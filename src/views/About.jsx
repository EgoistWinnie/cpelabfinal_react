/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col , Carousel } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import Winnie from "assets/img/Winnie.jpg";
import PondD from "assets/img/PondD.jpg";

class About extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={6}>
              <Card
                title="Meet our Team"
                category="Developer Information"
                content={
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Winnie}
                            alt="Teerapat"
                            />
                            <Carousel.Caption>
                            <h3>Teerapat Leethochawalit</h3>
                            <p>610610589</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={PondD}
                            alt="Nontagorn"
                            />

                            <Carousel.Caption>
                            <h3>Nontagorn Naplong</h3>
                            <p>610612056</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default About;

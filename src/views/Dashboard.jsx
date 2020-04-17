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
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { thArray } from "variables/Variables.jsx";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      item: []
    };
  }

  fetchAllEvents() {
    fetch(`http://localhost:5000/api/v3/events`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          item: data.event,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }
  componentDidMount(){
    this.fetchAllEvents();
  }
  render() {
    const event = this.state.item;
    const eventcount = Object.keys(event).length;
    return (
      <div className="content">
        <Grid fluid>
        <Row>
            <Col lg={6} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph text-warning" />}
                statsText="Members"
                statsValue="0"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={6} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Events ongoing"
                statsValue={eventcount}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                    {event.map((event) => {
                          return <tr key={event._id}>
                                  <td>{event.date}</td>
                                  <td>{event.name}</td>
                                  <td>{event.details}</td>
                                  </tr>
                        })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;

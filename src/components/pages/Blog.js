import React, { Component } from 'react';
import AppNavBar from '../layout/AppNavBar';
import {
  Col,
  Card,
  CardTitle,
  Collapsible,
  CollapsibleItem,
  Icon,
  Button
} from 'react-materialize';

export default class Blog extends Component {
  render() {
    return (
      <div id="blog-container">
        <AppNavBar isBlog="active" />
        <div className="container">
          <div className="row">
            <Col s={12} m={8}>
              <Card
                header={
                  <CardTitle image="./project-images/asteroid-plot.png" />
                }
              >
                <h3 className="blue-grey-text">Asteroid Data</h3>
                <i>
                  March 2<sup>nd</sup> 2019
                </i>
                <hr />
                <p>
                  I found asteroid data from
                  <a href="https://sbn.psi.edu/pds/archive/asteroids.html">
                    {' '}
                    here
                  </a>{' '}
                  and I compiled it into a csv file. From this I created a
                  Python script to load the data into two arrays and plotted the
                  data, years in the x-axis and distance in AU for the y-axis.
                </p>
              </Card>
              <Collapsible popout>
                <CollapsibleItem header="Comments" icon="insert_comment">
                  <div className="row">
                    <Icon>face</Icon> <i>John 03/03/2019 2:15PM</i>
                    <Card>
                      <p>Interesting stuff!</p>
                    </Card>
                  </div>
                  <div className="row">
                    <Icon>face</Icon> <i>David 03/03/2019 7:34PM</i>
                    <Card>
                      <p>I was doing some stuff similar for my data.</p>
                    </Card>
                  </div>
                  <div className="row">
                    <Button waves="purple" className="light-blue darken-1">
                      <Icon left>arrow_forward</Icon>Add a coment
                    </Button>
                  </div>
                </CollapsibleItem>
              </Collapsible>
              <Card>
                <h3>First Blog Post</h3>
                <i>
                  March 1<sup>st</sup> 2019
                </i>
                <hr />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  quaerat minima aperiam quas inventore doloremque optio cumque
                  consectetur ipsam quibusdam ea quis excepturi, laudantium sed
                  quos eveniet voluptatum adipisci voluptates id, odio sapiente
                  dolorum quia incidunt. Asperiores repellendus omnis atque
                  fugit dicta vel, tempora ut error enim iure quae beatae!
                </p>
              </Card>
              <Collapsible popout>
                <CollapsibleItem header="Comments" icon="insert_comment">
                  <i>Nothing to show yet...</i>
                </CollapsibleItem>
              </Collapsible>
            </Col>
            <Col s={12} m={4}>
              <i>Latest Posts:</i>
              <p>Asteroid Data</p>
              <p>First Post</p>
            </Col>
          </div>
        </div>
      </div>
    );
  }
}

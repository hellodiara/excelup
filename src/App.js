import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
    Button,
    Card,
    CardBody,
    CardDeck,
    CardImg, 
    CardSubtitle,
    CardText,
    CardTitle,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
} from 'reactstrap';

class App extends Component {
  render() {
    return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image" />
        <CardBody>
          <CardTitle>test</CardTitle>
          <CardSubtitle>test</CardSubtitle>
          <CardText>test</CardText>
          <Button>More</Button>
        </CardBody>
      </Card>
    </CardDeck>
    );
  }
}

export default App;

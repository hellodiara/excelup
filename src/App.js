import React, { Component } from 'react';
import logo from './icons/logo.svg';
import './App.css';
import type { User } from './types';
import Profile from './components/Profile';
import DATA from './data';

import {
    Button,
    Card,
    Badge,
    CardBody,
    CardDeck,
    CardFooter,
    CardImg, 
    CardLink,
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

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faStroopwafel, faFacebook)

class App extends Component {
  render() {
    return (
    <CardDeck>
      <Card body className="text-center">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image" />
        <CardBody>
          <CardTitle>Name</CardTitle>
          <CardSubtitle className="text-muted">Company</CardSubtitle>
          <Badge color="secondary">Title</Badge>
          <CardText>test</CardText>
          <p className="social-icons">
            <a href="/"><FontAwesomeIcon className="font-awesome" icon="stroopwafel"/></a>
            <a href="/"><FontAwesomeIcon className="font-awesome" icon="stroopwafel"/></a>
            <a href="/"><FontAwesomeIcon className="font-awesome" icon="stroopwafel"/></a>
            <a href="/"><FontAwesomeIcon className="font-awesome" icon="facebook"/></a>

          </p>
          <Button>More</Button>
        </CardBody>
        <CardFooter>
          <Badge color="primary"><CardLink className="text-muted" href="#">Industry</CardLink></Badge>
        </CardFooter>
      </Card>
    </CardDeck>
    );
  }
}

export default App;

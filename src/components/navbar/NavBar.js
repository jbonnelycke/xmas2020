import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';

const NavBar = () => {
  return (
    <Box bgcolor="text.secondary" color="background.paper" height="5em" width="100%" p={2}>
      <Row classname="md-3" style={{ justifyContent: 'center' }}>
        <Col
          xs={{ span: 6, order: 1 }}
          md={{ span: 2, order: 2 }}
          style={{ margin: 'auto', color: 'white', padding: '2em', textDecoration: 'none' }}
          as={NavLink}
          to="/"
        >
          <img src={process.env.PUBLIC_URL + '/Logo.png'} className="photo" alt="logo" />
        </Col>
        <Col
          xs={{ span: 6, order: 1 }}
          md={{ span: 2, order: 2 }}
          style={{ margin: 'auto', color: 'white', padding: '2em', textDecoration: 'none' }}
          as={NavLink}
          to="/cool"
        >
          katherine bein cool
        </Col>
        <Col
          xs={{ span: 12, order: 0 }}
          md={{ span: 4, order: 3 }}
          style={{ margin: 'auto', color: 'white', padding: '2em', textDecoration: 'none' }}
          as={NavLink}
          to="/anime"
        >
          anime debut >_>?
        </Col>
        <Col
          xs={{ span: 6, order: 1 }}
          md={{ span: 2, order: 4 }}
          style={{ margin: 'auto', color: 'white', padding: '2em', textDecoration: 'none' }}
          as={NavLink}
          to="/onlyfans"
        >
          onlyfans
        </Col>
      </Row>
    </Box>
  );
};
export default NavBar;

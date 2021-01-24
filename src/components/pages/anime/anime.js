import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './anime.css';
import Box from '@material-ui/core/Box';

function anime() {
    return (
        <div>
            <Box bgcolor="warning.main" color="warning.contrastText" width="25em" marginLeft="5em" p={2}>
                <Row>
                    <Col md={2} xs={{ span: 4, order: 1 }} style={{ padding: '3em', margin: 'auto' }}>
                        <img src={process.env.PUBLIC_URL + '/katherineandl2.gif'} alt="katherine and l 1" />
                        <p>omg L you don't have to do that sugoi neeee</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={2} xs={{ span: 4, order: 1 }} style={{ padding: '3em', margin: 'auto' }}>
                        <img src={process.env.PUBLIC_URL + '/katherinefruit.gif'} alt="katherine and kyo" />
                        <p>kyo-kun ga suki desu.....</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={2} xs={{ span: 4, order: 1 }} style={{ padding: '3em', margin: 'auto' }}>
                        <img src={process.env.PUBLIC_URL + '/katherinelight.gif'} alt="katherine and l 2" />
                        <p>L wa ichiban otoko no ko desuuuu uwu</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={2} xs={{ span: 4, order: 1 }} style={{ padding: '3em', margin: 'auto' }}>
                        <img src={process.env.PUBLIC_URL + '/midorikatherine.gif'} alt="katherine and bakugo" />
                        <p>watashi wa bakugo-kun to suwaritai....T^T</p>
                    </Col>
                </Row>
            </Box>
        </div>
    );
}
export default anime;
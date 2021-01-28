import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Box from '@material-ui/core/Box';

function cool() {
    return (
        <div>
            <Box bgcolor="warning.main" color="warning.contrastText" width="25em" height="100%" marginLeft="5em" paddingBottom="5%" p={2}>
                <Row>
                    <Col md={2} xs={{ span: 4, order: 1 }} style={{ padding: '3em', margin: 'auto' }}>
                        <img src={process.env.PUBLIC_URL + '/christmas.png'} alt="the nerds at Xmas 2019" />
                        <p>Katherine we love you so much! I want to thank you personally for being such
                            an awesome friend through the years. From our humble beginnings as having
                            our own special language to our adventures with The 1975 to our newfound
                            anime bond, you have quickly become a friend I would be honored to have
                            around for the rest of my days. Idk if that sounded weird. Regardless, I
                            love you lots. You're an amazing friend always giving such sage advice,
                            supporting me through my own personal journey. Such an incredible
                            person surely has an incredible future ahead of them. <br></br><br></br>
                            As Yagami Light once said, "In this world, there are very few people
                            who actually trust each other." I can easily say you're one of those people
                            for me. Love ya'! Excited for our next anime date.
                        </p>
                    </Col>
                </Row>
            </Box>
        </div>
    );
}
export default cool;
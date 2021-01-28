import React from 'react';
import './home.css';
import Box from '@material-ui/core/Box';

function home() {
    return (
        <div>
            <Box bgcolor="warning.main" color="warning.contrastText" width="25em" height="100%" marginLeft="5em" paddingBottom="40%" p={2}>
                <a href="https://www.youtube.com/watch?v=EEpeNe95zfU" target="_blank" rel="noreferrer" style={{textDecoration: 'none', color: 'black'}}><h1>Katherine's Koolest Korner</h1></a>

                <p>This is where any individual can go to understand why Katherine Obo is the coolest
                    person on the planet and is very fun to be around and why she makes Jack Bone happy.
                    <br></br><br></br>
                    If you are a potential employer, please hire Katherine she is really kewl and likes
                    anime and has a dope record collection. 11/10 would hire for the vibes alone. She
                    also reads a lot which shows how smart and awesome she is. 
                </p>
            </Box>
        </div>
    );
}
export default home;
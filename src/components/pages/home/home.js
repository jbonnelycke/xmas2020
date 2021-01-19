import React from 'react';
import './home.css';
import Box from '@material-ui/core/Box';

function home() {
    return (
        <div>
            <Box bgcolor="warning.main" color="warning.contrastText" width="40%" marginLeft="5em" p={2}>
                <h1>Katherine's Koolest Korner</h1>

                <p>Katherine is one of my closest friends and is amazing...</p>
            </Box>
        </div>
    );
}
export default home;
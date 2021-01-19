import React from 'react';
import './anime.css';
import Box from '@material-ui/core/Box';

function anime() {
    return (
        <div>
            <Box bgcolor="warning.main" color="warning.contrastText" width="40%" marginLeft="5em" p={2}>
                <p>background<br></br></p>
                <h1>Anime {'>'}_{'>'}</h1>
            </Box>
        </div>
    );
}
export default anime;
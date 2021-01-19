import React from 'react';
//import fan from '/assets/fan.gif';
import Box from '@material-ui/core/Box';

function onlyfans() {
    return (
        <div>
            <Box bgcolor="warning.main" color="warning.contrastText" width="40%" height="100%" marginLeft="5em" paddingBottom="4%" p={2}>
                <img src={process.env.PUBLIC_URL + '/fan.gif'} alt="onlyfans" />
            </Box>
        </div>
    );
}
export default onlyfans;
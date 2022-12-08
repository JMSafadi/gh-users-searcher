import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import LocationInformation from '../components/LocationInformation';
import PaperInformation from '../components/PaperInformation'

const Description = (props) => {

    const { userState } = props
    const { bio } = userState

    return (
        <>
            <Stack sx={{
                justifyContent: 'center'
            }}>
                {bio !== null
                ? <Typography variant='body1' className='bio'>{bio}</Typography>
                :<Typography variant='body1' className='bio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, odio vitae interdum posuere, nisl eros mattis sapien, ut consequat tortor nisl non elit. </Typography>}
            </Stack>
            <PaperInformation userState={userState} />
            <LocationInformation userState={userState} />
        </>
    );
}

export default Description;

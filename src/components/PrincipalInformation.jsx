import { Typography, Stack } from '@mui/material';
import React, { Fragment } from 'react';

const PrincipalInformation = (props) => {

    const { userState } = props
    const { 
        name,
        login,
        created_at,
     } = userState

    return (
        <>
            <Stack direction='row' sx={{
                justifyContent: 'space-between'
            }}>
                <Typography variant='h4' className='name'>{name}</Typography>
                <Typography variant='subtitle2' className='createdAt'>{created_at}</Typography>
            </Stack>
            <Typography variant='caption' className='login'>{`@${login}`}</Typography>
        </>
    );
}

export default PrincipalInformation;

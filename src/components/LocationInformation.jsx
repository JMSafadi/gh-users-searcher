import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = (props) => {

    const { userState } = props
    const {
        location,
        twitter_username,
        blog,
        company
     } = userState

    return (
        <>
            <Grid container className='locationInfo' spacing={1.5} sx={{
                marginTop: '10px',
            }}>
                <Grid item xs={6}>
                    <Stack direction='row' spacing={2}>
                        <LocationOnIcon/>
                        <Typography className='locationText'>{location}</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack direction='row' spacing={2}>
                        <TwitterIcon/>
                        {twitter_username !== null
                        ? <Typography className='locationText'>{`@${twitter_username}`}</Typography>
                        : <Typography className='locationText'>Not avaiable</Typography>
                        }
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack direction='row' spacing={2}>
                        <LanguageIcon/>
                        {blog !== null
                        ? <a target='_blank' href={blog}><Typography className='locationText'>{blog}</Typography></a>
                        : <Typography className='locationText'>Not avaiable</Typography>
                        }
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack direction='row' spacing={2}>
                        <BusinessIcon/>
                        {company !== null
                        ? <Typography className='locationText'>{company}</Typography>
                        : <Typography className='locationText'>Not avaiable</Typography>
                        }
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
}

export default LocationInformation;

import React from 'react';
import { Slider, Grid, IconButton, Tooltip } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const SocialMediaSlider = () => {
    // Data for social media profiles
    const socialMediaProfiles = [
        { name: 'Facebook', icon: <Facebook />, link: 'https://www.facebook.com/' },
        { name: 'Twitter', icon: <Twitter />, link: 'https://twitter.com/' },
        { name: 'Instagram', icon: <Instagram />, link: 'https://www.instagram.com/' },
        // Add more social media profiles as needed
    ];

    return (
        <>
            <Slider
                sx={{ width: '80%', margin: '0 auto' }}
                min={0}
                max={socialMediaProfiles.length - 1}
                step={1}
                marks={socialMediaProfiles.map((profile, index) => ({
                    value: index,
                    label: profile.name,
                }))}
                getAriaValueText={(value) => socialMediaProfiles[value].name}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => socialMediaProfiles[value].name}
                aria-labelledby="social-media-slider"
            />
            <Grid container justifyContent="space-between">
                {socialMediaProfiles.map((profile, index) => (
                    <Grid item key={index}>
                        <Tooltip title={profile.name} arrow>
                            <IconButton href={profile.link} target="_blank" rel="noopener noreferrer">
                                {profile.icon}
                            </IconButton>
                        </Tooltip>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default SocialMediaSlider;

import React from "react";
import {Box, Typography} from "@mui/material";

export const Header = () => (
    <Box textAlign={'left'}>
        <Typography sx={{fontSize: 45, fontWeight: "bold"}} variant={'h1'} component={'div'} gutterBottom>
            Saltext
        </Typography>
    </Box>
);
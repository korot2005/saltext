import React from 'react';
import {Header, Panel} from "./components";
import {Box} from "@mui/material";
import './App.css';


function App() {
    return (
        <div className={'app'}>
            <Box display={'flex'} flexDirection={'column'} width={'600px'}>
                <Header/>
                <Panel/>
            </Box>
        </div>
    );
}

export default App;

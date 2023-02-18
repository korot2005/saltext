import React from 'react';
import {TextField, Button, Paper} from "@mui/material";
import {textEncoder} from "../../helpers/TextDecoder";

export const Panel = () => {
    const [inputTextArea, setTextArea] = React.useState('');
    const [outputText, setOutputText] = React.useState('');

    const decoder = () => {
        let text_dec = textEncoder(inputTextArea)
        setOutputText(text_dec);
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setTextArea(value);
    };

    return (
        <Paper elevation={2} sx={{
            width: '100%',
            padding: '20px 25px',
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'space-between',
            alignContent: 'center',
            gap: 2
        }}>
            <TextField
                id="textarea"
                label="Text to encoding/decoding"
                multiline
                rows={4}
                sx={{width: '100%'}}
                value={inputTextArea}
                onChange={onChange}
            />
            <TextField
                disabled
                id="output"
                label="Result"
                multiline
                rows={4}
                color={"success"}
                sx={{width: '100%', input: { color: 'red' } }}
                value={outputText}
            />
            <Button variant={'outlined'} onClick={decoder}>Decode/Encode</Button>
        </Paper>
    );
};
import React, {useState} from 'react';
import './App.css';
import {Box, Tab, Tabs} from "@mui/material";
import CounterForm from "./CounterForm";

const App = () => {
    const [value, setValue] = useState(0);
    return (
        <>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={(_, nV) => setValue(nV)} aria-label="basic tabs example">
                    <Tab label="New Value"/>
                    <Tab label="Saved"/>
                </Tabs>
            </Box>
            {value === 0 && (
                <CounterForm onSubmit={(v) => console.log(v)}/>
            )}

        </>
    );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import {Box, Tab, Tabs} from "@mui/material";
import CounterForm from "./CounterForm";
import ChartTab from "./ChartTab";

const App = () => {
    const [value, setValue] = useState(0);

    const [dataSaved, setDataSaved] = useState<number[]>([]);
    return (
        <>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={(_, nV) => setValue(nV)} aria-label="basic tabs example"
                      variant="fullWidth">
                    <Tab label="New Value"/>
                    <Tab label="Saved"/>
                </Tabs>
            </Box>
            {value === 0 && (
                <CounterForm onSubmit={(v) => setDataSaved((s) => [...s, v])}/>
            )}
            {value === 1 && (
                <ChartTab data={dataSaved}/>
            )}

        </>
    );
}

export default App;

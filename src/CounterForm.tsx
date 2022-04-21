import * as React from 'react';
import {Button, TextField} from "@mui/material";
import {useState} from "react";

type CounterFormProps = { onSubmit: (value: number) => void };

const CounterForm = (props: CounterFormProps) => {
    const [formValue, setFormValue] = useState('');

    const [isInvalid, setIsInvalid] = useState(false)

    const onChange = (value: string) => {
        isInvalid && setIsInvalid(false);
        setFormValue(value)
    }

    const onButtonClick = () => {
        const value = parseInt(formValue)
        if (value.toString() === formValue) {
            setFormValue('');
            props.onSubmit(value)
        } else {
            setIsInvalid(true)
        }

    }

    return (
        <div className='Center'>
            <TextField
                placeholder='How many birds?'
                value={formValue}
                onChange={(e) => onChange(e.target.value)}
                error={isInvalid}
                helperText={isInvalid ? 'Number is not valid' : ' '}
            />
            <Button onClick={onButtonClick} disabled={isInvalid}>
                SEND
            </Button>

        </div>
    );
};

export default CounterForm;
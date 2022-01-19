import React from 'react';
import InputWrapper from './InputWrapper';

export default function Header(props) {
    return (
        <header>
            <h1>Things To Do For Today</h1>
            <InputWrapper {...props}/>
        </header>
    );
}

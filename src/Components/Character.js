import React from 'react';

const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid'
};

const character = (props) => {
    return (
        <p style={style}>{props.name}</p>
    )
};

export default character;
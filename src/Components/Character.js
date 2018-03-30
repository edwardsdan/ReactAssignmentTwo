import React from 'react';

const character = (props) => {

    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid'
    };

    return (
        <div style={style} onClick={props.clicked}>
            {props.name}
        </div>
    )
};

export default character;
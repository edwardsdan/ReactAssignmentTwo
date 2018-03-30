import React from 'react';

const validation = (props) => {

    let validationMessage = <p>Input is too short</p>;

    if (props.check >= 5) {
        validationMessage = <p>Input is long enough</p>;
    }

    return (
        <div>
            {validationMessage}
        </div>
    )
};

export default validation;
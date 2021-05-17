import React from 'react';

function getButtonText() {
    return 'Submit your response';
}

const Button = () => {
    const buttonText = { text: 'Hi there'};
    return (
        <button className='button' style={{backgroundColor: 'blue'}}>{buttonText.text}</button>
    );
}

export default Button;
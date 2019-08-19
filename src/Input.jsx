import React from 'react';
import { darken } from 'polished';
import styled from 'styled-components';

const I = styled.input`
    box-sizing: border-box;
    width: ${({width}) => width || '300px'};
    height: 40px;
    border-radius: 25px;
    padding: 0 20px;
    font-size: 12px;
    border: ${({themeColor}) => `${themeColor} 1px solid`};

    &:focus {
        border: ${({themeColor}) => `${darken(0.2, themeColor)} 1px solid`};
        outline: none;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }
`;

const InputWrapper = styled.div`
     width: ${({width}) => width || '300px'};
     position: relative;
`;

const ErrorMsg = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    min-height: 40px;
    padding: 0px 16px;
    color: #fff;
    top: 46px;
    border-radius: 4px;
    text-align: justify;
    font-size: 12px;
    background: ${({themeColor}) => themeColor};

    div {
        position: absolute;
        height: 10px;
        width: 10px;
        transform: rotate(45deg);
        left: 20px;
        top: -4px;
        border-radius: 2px;
        background: inherit;
    }
`;

const getColor = {
    primary: "#042f4b",
    secondary: "#ed1250",
    error: "#ed281a"
  };

function Input(props) {
    const { variant, error, errorMsg, customStyles } = props;
    const color = getColor[variant || 'primary'];

    if (error) {
        return (
            <InputWrapper {...customStyles}>
                <I type="text" themeColor={getColor.error} {...props} width="100%" {...customStyles} />
                <ErrorMsg themeColor={getColor.error}><div></div><p>{errorMsg}</p></ErrorMsg>
            </InputWrapper>
        );
    }

    return (
        <I type="text" themeColor={color} {...props} {...customStyles} />
    );
}

export default Input;

import React from 'react';
import styled from 'styled-components';

const C = styled.div`
    box-sizing: border-box;
    min-width: ${({width}) => width || '400px'};
    min-height:  ${({height}) => height || '400px'};
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    border-radius: 8px;
`;  

function Card(props) {
    const { children, customStyles } = props;

    return(
        <C {...props} {...customStyles}>
            {children}
        </C>
    )
}

export default Card;

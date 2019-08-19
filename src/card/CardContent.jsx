import React from 'react';
import styled from 'styled-components';

const CC = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 16px;
`

function CardContent(props) {
    const {children} = props;
    
    return (
        <CC {...props}>
            {children}
        </CC>
    )
}

export default CardContent;

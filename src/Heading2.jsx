import React from 'react';
import styled from 'styled-components';

const H = styled.h2`
    box-sizing: border-box;
    margin: 8px 0;
    font-size: 36px;
`;

function Heading2({ children }) {
    return (
        <H>{children}</H>
    )
}



export default Heading2;

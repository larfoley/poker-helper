import React from 'react';
import styled from 'styled-components'

const Box = styled.div`
   ${'' /* border: 1px solid #eee; */}
   padding: 1em;
   margin-bottom: 1em;
   background-color: ${props => props.theme.box_bgColor};
   color: ${props => props.theme.box_color || "red"};
   box-shadow: inset 0 1px 0 0 rgba(200,200,200,0.1), 0 1px 1px 0 rgba(0,0,0,0.3)
`;

export default props => <Box>{props.children}</Box>

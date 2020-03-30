import React from 'react';
import styled from '@emotion/styled';

const MessageError = styled.p`
  background-color: #b7322c;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  font-family: 'Bebas Neue',cursive;
`;

const Error = ({message}) => {
  return ( 
    <MessageError>{message}</MessageError>
   );
}
 
export default Error;
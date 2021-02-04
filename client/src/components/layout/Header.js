import React from 'react'
import styled from 'styled-components'
import logo from '../../logo.png'
function Header() {
  return (
    <StyledHeader>
        <img src={logo} alt="Logo"/>
    </StyledHeader>
  );
}

export default Header;

let StyledHeader = styled.header`
    width: 100%;
    background: #68000D;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    box-sizing: border-box;
    h1{
        margin: 0;
        padding: 0;
    }
`
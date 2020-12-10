import React from 'react';
import styled from 'styled-components';

import Logo from './Logo.jsx';

const Header = () => {

    return (
        <HeaderStyled className='Header'>
            <Logo />
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.div`
    padding: 20px;
    text-align: center;
    position: relative;
`;
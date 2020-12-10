import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = () => {

    return (
        <LogoStyled className='Logo'>
            <Link to='/'>
                <img src='/assets/img/frenchie_logo2.png' alt='Pardon MY Frenchie'/>
                <h1>Pardon My Frenchie</h1>
            </Link>
        </LogoStyled>
    );
}

export default Logo;

const LogoStyled = styled.div`

    a {
        text-decoration: none;
        color: #000;
    }
    
    img {
        max-width: 600px;
        width: 80%;
    }
`;
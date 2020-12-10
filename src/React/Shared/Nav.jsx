import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Nav = () => {

    return (
        <NavStyled className='Nav'>
            <NavLink to='/' exact>Home</NavLink>
            <NavLink to='/pups' exact>Pups</NavLink>
            <NavLink to='/shop' exact>Shop</NavLink>
            <NavLink to='/contact' exact>Contact</NavLink>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    padding-top:20px;
    padding-bottom:20px;
    border-bottom: 1px solid #eee;

    a {
        color: black;
        display: box;
        flex: 0 0 150px;

        margin-right: 5px;
        font-size: 11px;
        text-align: center;
        text-decoration: none;
        height: 40px;
        line-height: 40px;

        &:hover {
            border-bottom: 1px solid #FF65E1;
        }

        &:visited {
            color: black;
        }

        &.active {
            border-bottom: 1px solid #FF65E1;
            color: #FF65E1;
        }

        &:last-child {
            margin-right: 0px;
        }
    }
    
`;
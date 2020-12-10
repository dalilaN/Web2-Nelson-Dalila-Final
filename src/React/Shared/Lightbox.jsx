import React, {useEffect} from 'react';
import styled from 'styled-components';
import keycode from 'keycode';

/* Components ---------------------------*/
//import Button from 'React/Shared/UniversalForm/Controls/Button.jsx'

const Lightbox = ({
    children, 
    isOpen,
     onClose, 
     headerText
}) => {

    //When the component mounts for the first time MOUNTING IS EXISTENCE DISMOUNTING LEAVES EXISTENCE 
    useEffect(() => {
        const handleKeyDown = (e) => {
            switch(keycode(e)) {
                case 'esc':
                    e.stopPropagation();
                    onClose();
                    break;
                defualt:
                    return false;
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        //dismount
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [onClose]);

    const stopBubbling = (e) => {
        e.stopPropagation();
    }

    if(!isOpen) {return '';}

    return (
        <LightboxStyled className='Lightbox' onClick={ onClose }>
            <div className="theLight" onClick={ stopBubbling }>
                <header>
                    <h2>{ headerText }</h2>
                </header>
                <button  className='closeLightbox' onClick={ onClose }>
                    X
                </button>
                <div className="content">
                    { children }
                </div>
            </div>
        </LightboxStyled>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`
    outline: solid 1px red;

    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;

    background-color: rgba(0, 0, 0, .75);

    .theLight {
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, .5);

        width: 50%;

        header {
            background-color: #000;
            color: #fff;
            padding: 10px;

            h2 {
                color: #fff;
                margin: 0px;
                font-size: 20px;
            }
        }

        .closeLightbox {
            position: absolute;
            right: 0px; top: 0px;
            margin: 0px;
        }

        .content {
            padding: 0px;
            min-height: 100px;
            float: left; 

            h2 {
                background-color: none;
            }

            img {
                float: left;
                margin-left: 0px;
                margin-right: 20px;
                width: auto;
                height: 500px;
            }
        }

    }
`;
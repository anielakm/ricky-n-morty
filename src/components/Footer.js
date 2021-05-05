import React from 'react';
import styled from 'styled-components'

function getCurrentYear(){
    let date = new Date();
    return date.getFullYear();
}

const FooterContainer = styled.footer`
    background-color: var(--blue);
    color: white;
    text-align: center;
    padding: 10px 0;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: .2em;

    a {
        color: white;
        text-decoration: none
    }
`

const Footer = () => (

    <FooterContainer>
        <div className="container">
            <p>&copy; {getCurrentYear()} <a href="https://anielakm.pl">Aniela Katana-Matłok</a></p>
        </div>
    </FooterContainer>

)

export default Footer;
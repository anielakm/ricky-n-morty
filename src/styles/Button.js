import styled from 'styled-components'

const Button = styled.button`

background-color: var(--blue);
border: 2px solid var(--blue);
outline: none;
border-radius: 7px;
color: var(--white);
text-transform: uppercase;
padding: 15px 75px;
cursor: pointer;
transition: all .3s;
display: block;
margin: 50px auto 90px;
font-size: 12px;
letter-spacing: .2em;

&:disabled, &:disabled:hover {
    opacity: .5;
    background-color: var(--gray-dark);
    border-color: var(--gray-dark);
    cursor: not-allowed;
    color: var(--white)
}

&:hover {
    background-color: transparent;
    color: var(--blue);
}
`

export default Button;
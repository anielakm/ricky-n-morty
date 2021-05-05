import styled from 'styled-components'

const ButtonSmall = styled.button`
    color: var(--white);
    /* background-color: var(--blue); */
    background-color: transparent;
    /* border: 1px solid var(--blue); */
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    border-radius: 4px;
    /* padding: 4px 15px; */
    padding: 5px 0;
    cursor: pointer;
    white-space: nowrap;
    margin-left: 30px;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: .2em;
    transition: all .3s;
    color: var(--blue);

    &:hover {
        background-color: transparent;
        color: var(--blue);
        svg {
            path { stroke: var(--blue)}
        }
    }

    svg{
        margin-left: 8px;
        
        width: 16px;
        height: auto;

        &.filter {
            width: 24px;
        }

        path{
            stroke: var(--blue)
        }
    }
`

export default ButtonSmall;
import styled from 'styled-components'

const ButtonSmall = styled.button`
    color: var(--white);
    background-color: var(--blue);
    border: 1px solid var(--blue);
    outline: none;
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 4px 12px;
    cursor: pointer;
    white-space: nowrap;
    margin-left: 10px;
    text-transform: lowercase;
    font-size: 14px;
    letter-spacing: .1em;
    transition: all .3s;

    &:hover {
        background-color: transparent;
        color: var(--blue);
        svg {
            path { stroke: var(--blue)}
        }
    }

    svg{
        margin-left: 8px;
        path{
            stroke: var(--white)
        }
    }
`

export default ButtonSmall;
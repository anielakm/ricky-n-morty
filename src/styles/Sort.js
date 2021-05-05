import styled from 'styled-components'
import Arr from '../images/arr-down.svg'
const Sort = styled.div`

    margin-bottom: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    
    select {
        border: 1px solid var(--blue);
        padding: 5px 30px 5px 10px;
        min-width: 150px;
        color: var(--gray-dark);
        outline: none;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: .1em;
        margin-left: 7px;
        background-color: transparent;

        &:focus, &:active {
            outline: none
        }
    }

    select {
        -webkit-appearance: none;
        background-image: url('${Arr}');
        background-repeat: no-repeat;
        background-size: 13px;
        background-position: 95% 50%;
    }

`

export default Sort;
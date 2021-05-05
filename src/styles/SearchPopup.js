import styled from 'styled-components'
import Arr from '../images/arr-down.svg'

const SearchPopup = styled.aside`

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 110px;
    background-color: var(--white);
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.025);

    transform: translateY(-161px);
    transition: all .5s;



    &.active {
        transform: translateY(0)
    }

    @media (max-width: 767.9px){
        position: fixed;
        z-index: 99999999;
        height: 100vh;
        margin: 0;
        width: 100vw;
        transform: translateY(-100vh);
        padding: 30px;


    }

    .container {
        position: relative;
        @media (max-width: 767.9px){height: 100%}
    }
    
    .close {
        position: absolute;
        top: 0;
        right: 30px;
        transition: all .3s;
        cursor: pointer;
        font-size: 20px;

        &:hover {
            transform: rotate(90deg);
        }

        path{
            stroke: var(--blue)
        }
        
    }
    
    form {
        display: flex;
        width: 100%;
        margin: 40px 0 20px;
        justify-content: space-between;

        @media (max-width: 767.9px){
            flex-direction: column;
            align-items: center;
            
        }

        input, select {
            width: 23%;

            @media (max-width: 767.9px){
                width: 100%;
                max-width: 330px;
                margin: 10px 0;
            }
        }

        input[type='text'], select {
            border: 1px solid var(--blue);
            padding: 15px;
            color: var(--gray-dark);
            outline: none;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: .1em;

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

        input[type='submit']{
            background-color: var(--blue);
            border: 2px solid var(--blue);
            outline: none;
            border-radius: 7px;
            color: var(--white);
            text-transform: uppercase;
            padding: 15px 75px;
            cursor: pointer;
            transition: all .3s;

            &:hover {
                background-color: transparent;
                color: var(--blue);
            }
        }
    }


`

export default SearchPopup;
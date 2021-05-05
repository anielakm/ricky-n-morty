import styled from 'styled-components'

const SearchBar = styled.div`

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 15px;
    font-size: 14px;
    width: 100%;

    @media (max-width: 767.9px){
        justify-content: center;
    }
    

    .results, .clear {
        opacity: 0;
        z-index: -1;

        @media (max-width: 767.9px){
            opacity: 1;
            z-index: 1;
            display: none;
        }
    }

    .results {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
        font-weight: 600;

        @media (max-width: 767.9px){
            justify-content: center;
            margin-bottom: 30px;
            font-size: 18px;
            display: none;
        }
    
    }

    .buttons {
        display: flex;
        justify-content: flex-end;

        @media (max-width: 767.9px){
            width: 100%
        }
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0 0 0 10px;
        display: flex;
        font-weight: 400;
        text-transform: uppercase;
        

        li {
            margin-right: 7px;
            span {
                color: var(--blue);
                
                
            }
        }
        li:after {
            content: ',';
        }
        li:last-of-type:after {
            content: ''
        }
    }

    &.active {
        .results, .clear {
            @media (min-width: 768px){
                opacity: 1;
                z-index: 0;
            }

            @media (max-width: 767.9px){
                display: flex;
            }
        }

    }

`

export default SearchBar;
import styled from 'styled-components'

const SearchBar = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    font-size: 14px;
    width: 100%;

    .results, .clear {
        opacity: 0;
        z-index: -1;
    }

    &.active {
        .results, .clear {
            opacity: 1;
            z-index: 0;
        }
    }

    .results {
        display: flex;
        align-items: flex-end;
        font-weight: 600;
        
    }

    .buttons {
        display: flex;
        justify-content: flex-end;
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

`

export default SearchBar;
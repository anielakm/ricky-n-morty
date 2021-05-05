import styled from 'styled-components'

const Character = styled.article`

    position: relative;

    button {
        border: none;
        outline: none;
        position: absolute;
        top: 0;
        right: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        cursor: pointer;
        transition: all .3s;


        .fill{
            display: none;
        }
        &:hover .fill {
            display: inline-block;
        }
        &:hover .outline{
            display: none;
        }

        svg {
           
            fill: var(--blue);
            font-size: 20px;
            transition: all .3s;
        
        }
    }

    .character-info {
        padding: 15px;
        h2 {
            margin: 5px 0 20px;
            font-size: 18px;
            font-weight: 600;
        }
        h3 {
            margin: 5px 0;
            font-size: 15px;
            font-weight: 400;
            display: flex;
            align-items: flex-start;
            svg { 
                width: 15px;
                min-width: 15px;
                height: auto;
                /* fill: var(--blue); */
                margin-right: 5px;}
            &:last-child {
                margin-bottom: 0;
            }
        }
    }


`

export default Character;
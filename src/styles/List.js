import styled from 'styled-components'

const List = styled.section`
  margin: 50px 0 30px ;

    ul.characters-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        
        li {
            /* max-width: 19%; 
            margin-right: calc((100% - 19%*5)/4); */
            margin-bottom: 28px;
            background-color: var(--white);
            box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.025);
            transition: all .3s;

            @media (max-width: 599.9px){
                max-width: 48%; 
                margin-right: calc((100% - 48%*2));
                &:nth-child(2n+2){
                    margin-right: 0;
                }
            }
            @media (min-width: 600px) and (max-width: 859.9px){
                max-width: 32%; 
                margin-right: calc((100% - 32%*3)/2);
                &:nth-child(3n+3){
                    margin-right: 0;
                }
            }
            @media (min-width: 860px)and (max-width: 1099.9px){
                max-width: 24%; 
                margin-right: calc((100% - 24%*4)/3);
                &:nth-child(4n+4){
                    margin-right: 0;
                }
            }
            @media (min-width: 1100px){
                max-width: 19%; 
                margin-right: calc((100% - 19%*5)/4);
                &:nth-child(5n+5){
                    margin-right: 0;
                }
            }

            :hover {
                transform: scale(1.05);
            }

            
        }
    }


`

export default List;
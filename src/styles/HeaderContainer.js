import styled from 'styled-components'

const HeaderContainer = styled.header`

    z-index: 999;
    position: relative;

    .navbar {
        position: relative;
        z-index: 999999;
        background-color: var(--white)
    }

    .container {

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-top: 20px;
        padding-bottom: 20px;

        @media (min-width: 768px){
            justify-content: space-between;
            flex-direction: row;
        }


        h1 {
            margin: 0 0 20px;
            position: relative;
            z-index: 99;
            cursor: pointer;

            @media (min-width: 768px){margin: 0;}

            img {
                max-width: 170px;
                height: auto;
            }
        }

        nav {
            position: relative;
            z-index: 99;

            ul {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                align-items: center;

                li {
                    margin: 0 30px;
                    position: relative;
                    text-transform: uppercase;
                    letter-spacing: .2em;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all .3s;
                    font-weight: 500;

                    &.active {
                        color: var(--blue);
                    }

                    &:hover{
                        color: var(--blue);
                
                    }


                    &.search {
                        font-size: 18px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    &:before {
                        content: '|';
                        position: absolute;
                        right: -30px;
                        font-size: 12px;
                    }

                    &:last-child{
                        @media (min-width: 768px){margin-right: 0;}
                        

                        &:before {
                            display: none;
                        }
                    }


                }
                
            }
        }

    }
    

`
export default HeaderContainer;
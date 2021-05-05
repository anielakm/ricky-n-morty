import React from 'react';
import Logo from '../images/logo.svg'
import styled from 'styled-components'
// import {BiSearch} from 'react-icons/bi'
import {GrClose} from 'react-icons/gr'
import Arr from '../images/arr-down.svg'

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
        right: 0;
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



const Header = ({isCurrentPageIndex, handleChangePage, handleSearch}) => (

    <HeaderContainer>
        <div className="navbar">

            <div className="container">
                <h1 onClick={()=>handleChangePage(true)}><img src={Logo} alt=""/></h1>

                <nav>
                    <ul>
                      
                        <li onClick={()=>handleChangePage(true)} className={isCurrentPageIndex ? 'active' : ''} >all characters</li>
                        <li onClick={()=>handleChangePage(false)} className={isCurrentPageIndex ? '' : 'active'}>favorites</li>
                    </ul>
                </nav>

            </div>


        </div>
        

        <SearchPopup className="search-popup">
            <div className="container">
                <form action="" >

                    <GrClose className="close" onClick={()=>{
                        document.querySelector('.search-btn').classList.remove('active');
                        document.querySelector('.search-popup').classList.remove('active');
                    }}
                    />

                    <input type="text" id="name" placeholder="character's name ..."/>

                    <select name="" id="species">
                        <option value="species" >Choose species</option>
                        <option value="alien">Alien</option>
                        <option value="animal">Animal</option>
                        <option value="human">Human</option>
                        <option value="humanoid">Humanoid</option>
                        <option value="mythological creature">Mythological Creature</option>
                        <option value="poopybutthole">Poopybutthole</option>
                        <option value="unknown">Unknown</option>
                        
                    </select>

                    <select name="" id="gender">
                        <option value="gender" >Choose gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>

                    <input type="submit" value="submit" onClick={(e)=> {
                        e.preventDefault(); 
                        let name, species, gender;
                        name = document.querySelector('#name').value;
                        document.querySelector('#species').value !=='species' ? species = document.querySelector('#species').value : species = '';
                        document.querySelector('#gender').value !== 'gender' ? gender = document.querySelector('#gender').value : gender = '';
                        
                        handleSearch(name, species, gender);

                        document.querySelector('.search-btn').classList.remove('active');
                        document.querySelector('.search-popup').classList.remove('active');

                        }}/>

                </form>
            </div>
        </SearchPopup>
    </HeaderContainer>

);

export default Header;
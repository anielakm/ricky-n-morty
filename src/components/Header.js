import React from 'react';
import Logo from '../images/logo.svg'
import {GrClose} from 'react-icons/gr'
import SearchPopup from '../styles/SearchPopup'
import HeaderContainer from '../styles/HeaderContainer'


const Header = ({isCurrentPageIndex, handleChangePage, handleSearch}) => (

    <HeaderContainer>
        <div className="navbar">

            <div className="container">
                <h1 onClick={()=>handleChangePage(true)}><img src={Logo} alt=""/></h1>

                <nav>
                    <ul>
                      
                        <li onClick={()=>handleChangePage(true)} className={isCurrentPageIndex ? 'active' : ''} >all characters</li>
                        <li onClick={()=>
                            {handleChangePage(false);
                                document.querySelector('.search-btn').classList.remove('active');
                                document.querySelector('.search-popup').classList.remove('active');
                            }} className={isCurrentPageIndex ? '' : 'active'}>favorites</li>
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
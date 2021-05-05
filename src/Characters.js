import React from 'react';
import SingleCharacter from './components/SingleCharacter'
import {GrClose} from 'react-icons/gr'
import {BiSearch} from 'react-icons/bi'
import List from './styles/List'
import Button from './styles/Button'
import ButtonSmall from './styles/ButtonSmall'
import SearchBar from './styles/SearchBar'


const Characters = ({characters, loadmore, nextPage, handleFav, isCharacterInFav, fetchData, searchName, searchGender, searchSpecies, searchActive, error}) => (

    <List>

        <div className="container">

            <SearchBar className={searchActive ? 'active' : ''}>
                <div className="results">
                {error === 'There is nothing here' ? 'There is no results for:' : 'Results for:' }
                    <ul>
                        {searchName ? (<li>name: <span>{searchName}</span></li>) : null}
                        {searchGender ? <li>gender: <span>{searchGender}</span></li> : null}
                        {searchSpecies ? <li>species: <span>{searchSpecies}</span></li> : null}
                    </ul>
                </div>
            
                <div className="buttons">

                    <ButtonSmall onClick={()=>fetchData()} className={searchActive ? 'active clear' : 'clear'}>clear filters <GrClose/></ButtonSmall>

                    <ButtonSmall  
                        className="search-btn"
                        onClick={()=>{
                            document.querySelector('.search-btn').classList.add('active');
                            document.querySelector('.search-popup').classList.add('active');
                        }} > 
                        Search 
                    <BiSearch / >
                    </ButtonSmall>

                </div>

            </SearchBar>
            

            <ul className="characters-list">

                {characters ? (characters.map((character) => (
                    <li key={character.id}><SingleCharacter character={character} handleFav={handleFav} isCharacterInFav={isCharacterInFav} /></li>
                ))) : null}

            </ul>

            <Button disabled={!nextPage} onClick={loadmore}>Load more</Button>

        </div>
   
    </List>

)

export default Characters;
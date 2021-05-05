import React from 'react'
import { IoMdPlanet } from 'react-icons/io'
import { BiFemaleSign, BiMaleSign, BiMinus } from 'react-icons/bi'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import Character from '../styles/Character'


const gender = (gender) => {
    if(gender ==='Male'){
        return <BiMaleSign />
    }
    else if(gender === 'Female'){
       return <BiFemaleSign />
    }
    else {
      return  <BiMinus />
    }
}

const SingleCharacter = ({character, handleFav, isCharacterInFav}) => (
    
    <Character>

        <img src={character.image} alt=""/>

        <div className="character-info">

            <h2>{character.name}</h2>
            <h3><svg id="_x33_0" enableBackground="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="54" r="3"/><path d="m32 47c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"/><path d="m32 15c3.86 0 7-3.14 7-7s-3.14-7-7-7-7 3.14-7 7 3.14 7 7 7zm0-10c1.654 0 3 1.346 3 3h-2c0-.551-.449-1-1-1z"/><path d="m20 20c.83 0 1.601-.255 2.241-.689l8.759 5.255v20.492c.329-.036.662-.058 1-.058s.671.022 1 .059v-16.493l8.641-5.185c.706.382 1.502.619 2.359.619 2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5c0 1.136.395 2.172 1.036 3.012l-7.036 4.222v-9.293c-.329.037-.662.059-1 .059s-.671-.022-1-.059v5.293l-7.433-4.46c.268-.537.433-1.134.433-1.774 0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4z"/><path d="m57 31c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm1 6c0-.551-.449-1-1-1v-2c1.654 0 3 1.346 3 3z"/><path d="m55 46c-1.11 0-2.07.613-2.589 1.512l-4.559-2.605 3.36-2.4c-.46-.483-.862-1.022-1.191-1.608l-3.298 2.356-.643-3.855c1.147-.704 1.92-1.959 1.92-3.4 0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4c.052 0 .099-.013.15-.015l.761 4.564-5.705 4.075c.4.535.744 1.113 1.018 1.731l5.836-4.168 6.005 3.431c.286 1.358 1.492 2.382 2.935 2.382 1.654 0 3-1.346 3-3s-1.346-3-3-3z"/><path d="m13 37c0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6 6-2.691 6-6zm-7 0h-2c0-1.654 1.346-3 3-3v2c-.551 0-1 .449-1 1z"/><path d="m19.85 39.985c.051.002.098.015.15.015 2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4c0 1.441.773 2.696 1.92 3.4l-.642 3.855-3.298-2.356c-.329.586-.731 1.124-1.191 1.608l3.36 2.4-4.559 2.605c-.52-.899-1.48-1.512-2.59-1.512-1.654 0-3 1.346-3 3s1.346 3 3 3c1.443 0 2.649-1.024 2.935-2.382l6.005-3.431 5.836 4.168c.274-.618.619-1.195 1.018-1.731l-5.705-4.075z"/></svg> {character.species}</h3>
            <h3>{gender(character.gender)} {character.gender}</h3>
            <h3><IoMdPlanet /> {character.origin.name}</h3>

        </div>
        
        <button onClick={()=> {handleFav(character);}}>
            {isCharacterInFav(character) ? <AiFillHeart/> : (<span><AiOutlineHeart className="outline" /><AiFillHeart className="fill"/></span>) }
        </button>
       

    </Character>

)

export default SingleCharacter;
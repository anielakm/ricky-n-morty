import React from 'react';
import SingleCharacter from './components/SingleCharacter'
import styled from 'styled-components'
import {AiOutlineHeart} from 'react-icons/ai'
import List from './styles/List'
import Sort from './styles/Sort'

const NoFav = styled.div`

    text-align: center;
    font-size: 20px;
    min-height: calc(100vh - 59px - 178px);
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        margin-bottom: -3px;
        fill: var(--blue)
        
    }

`

class Favorites extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            favCharacters: props.characters,
            characters: props.characters
        }
    }

   

    handleSort(value,characters){
        console.log(value, characters)
        let tmp = [];
        if(value === 'az'){
            tmp =  characters.sort(function(a, b){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            })

            this.setState({favCharacters: tmp})
            
        }
        else if(value === 'za'){
            tmp =  characters.sort(function(a, b){
                if(a.name > b.name) { return -1; }
                if(a.name < b.name) { return 1; }
                return 0;
            })

            this.setState({favCharacters: tmp})
    
        }
        else {
       
            tmp =  characters.sort(function(a, b){
                if(a.id < b.id) { return -1; }
                if(a.id > b.id) { return 1; }
                return 0;
            })

            this.setState({favCharacters: tmp})
        }
    }

    componentDidMount(){
        this.handleSort('default',this.state.favCharacters)
    }

    render(){
        const{ handleFav, isCharacterInFav} = this.props;
        return(
            <List>

                <div className="container">

                    <Sort className="filters">
                    
                        Sort:
                        <select name="sort" id="sort" onChange={(e)=>this.handleSort(e.target.value,this.state.favCharacters)}>
                            <option value="default">Default</option>
                            <option value="az">A-Z</option>
                            <option value="za">Z-A</option>
                        </select>
              

                    </Sort>
                        {
                            this.state.favCharacters.length > 0 ? (
                                <ul className="characters-list">
                
                                {this.state.favCharacters.map((character) => (
                                    <li key={character.id}><SingleCharacter character={character} handleFav={handleFav} isCharacterInFav={isCharacterInFav} /></li>
                                ))}
                
                            </ul>
                            ) : (<NoFav><p>There is no favourite characters yet. <br/>Use <AiOutlineHeart /> to add them to the list.</p></NoFav>)
                        
                        }
                    
                        

                </div>

    
        </List>
        )
    }


}


export default Favorites;
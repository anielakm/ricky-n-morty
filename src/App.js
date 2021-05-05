import React from 'react';
import Header from './components/Header'
import Global from './styles/Global'
import Characters from './Characters'
import Favorites from './Favorites'
import Footer from './components/Footer'


class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      isLoading: true,
      data: [],
      error: null,
      isCurrentPageIndex: true,
      favCharacters: [],
      nextPage: '',
      isLoadingMore: false,
      searchName: '',
      searchGender: '',
      searchSpecies: '',
      searchActive: false,
  
    }
    this.handleChangePage = this.handleChangePage.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFav = this.handleFav.bind(this);
    this.isCharacterInFav = this.isCharacterInFav.bind(this);
    this.fetchData = this.fetchData.bind(this);
  
   }
  
  handleChangePage(value){
    this.setState(({isCurrentPageIndex: value}))
  }

  fetchData() {

    this.setState({
      searchName: '',
      searchGender: '',
      searchSpecies: '',
      searchActive: false
    })
    // Where we're fetching data from
    fetch(`https://rickandmortyapi.com/api/character`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          data: data.results,
          nextPage: data.info.next,
          isLoading: false,
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }

  handleFav(character){

    if(this.state.favCharacters.length > 0){

      //check if character is on list
      let index;
      index = this.state.favCharacters.indexOf(character)

      //if character is on list
      if(index > -1){
       let tmp = this.state.favCharacters.filter(item=>{
         return item.id !== character.id;
       })

       this.setState(({favCharacters: tmp}))

      }
      //if it's not
      else{

        this.setState((state)=>({favCharacters: [...state.favCharacters, character]}))

      }

     

    }else {

      this.setState((state)=>({favCharacters: [...state.favCharacters, character]}))

    }
    
    
  }


  isCharacterInFav(character){

    //check if character is on list
    let tmp;
    
    tmp = this.state.favCharacters.filter(item=>{
      return item.id === character.id
    })

    //if character is on list
    if(tmp.length > 0){return true} else {return false}

  }

  handleSearch(name, species, gender){
  
    this.setState({ isLoading: true});

    let api = 'https://rickandmortyapi.com/api/character/?';

    if(name){
      api = api + 'name=' + name + '&';
    }
    if(species){
      api = api + 'species=' + species + '&';
    }
    if(gender){
      api = api + 'gender=' + gender +'&';
    }

    this.setState({
      searchName: name ? name : '',
      searchSpecies: species ? species : '',
      searchGender: gender ? gender : '',
      searchActive: name || species || gender ? true : false,
    })

    api = api.substr(0,api.length-1);

    fetch(`${api}`)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data =>
      data.results ? 
      this.setState({
        data: data.results,
        nextPage: data.info.next,
        isLoading: false,
      }) : 
      this.setState({error: data.error})
    )
    .then(this.setState({isLoading: false}))


  }

  loadMore(){

    
    this.setState(()=>({isLoadingMore: true}))

    //load more characters
    fetch(`${this.state.nextPage}`)
    .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState((state)=>({
          data: [...state.data, ...data.results],
          nextPage: data.info.next,
          isLoading: false,
        }))
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false, isLoadingMore: false }));

      console.log(this.state.data)

  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return(
      <>
        <Global/>
        <Header isCurrentPageIndex={this.state.isCurrentPageIndex} handleChangePage={this.handleChangePage} handleSearch={this.handleSearch}/>

        {this.state.isCurrentPageIndex ? 
          <Characters 
            characters={this.state.data} 
            loadmore={this.loadMore} 
            nextPage={this.state.nextPage} 
            handleFav={this.handleFav} 
            isCharacterInFav={this.isCharacterInFav} 
            fetchData={this.fetchData} 
            searchName={this.state.searchName} 
            searchGender={this.state.searchGender} 
            searchSpecies={this.state.searchSpecies} 
            searchActive={this.state.searchActive} 
            error = {this.state.error}
          /> : 
          <Favorites 
            characters={this.state.favCharacters} 
            handleFav={this.handleFav} 
            isCharacterInFav={this.isCharacterInFav}
          />}
        
        <Footer/>
        
        {/* {!this.state.isLoading ? console.log(this.state.data) : <h3>Loading...</h3>} */}
      </>
    )

}
}

export default App;
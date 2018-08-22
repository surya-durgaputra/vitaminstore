import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Card from './components/Card'
import Loading from './components/Loading'
import Navigation from './components/Navigation'
import data from './data/data.json'

//let Spinner = require('react-spinkit')

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      toggleLogo: true,
      loading: true,
      cards: [],
    }
    this.toggleLogo = this.toggleLogo.bind(this)
    this.showBack = this.showBack.bind(this)
    this.showFront = this.showFront.bind(this)
    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }
  toggleLogo(event){
    this.setState(prevState=>({
      toggleLogo: !prevState.toggleLogo
    }))
  }

  showBack(card){
    let cards = this.state.cards;
    cards[card.id].animation = 'card card-flip'
    this.setState({
      cards,
    })
  }

  showFront(card){
    let cards = this.state.cards;
    cards[card.id].animation = 'card'
    this.setState({
      cards,
    })
  }

  //when I click openNav, I will make myNav take 100% width
  openNav(){
    document.getElementById("myNav").style.width="100%"
  }

  closeNav(){
    document.getElementById("myNav").style.width="0%"
  }

  
  componentWillMount() {
    this.setState({
      cards: data,
    })
    
  }
  

  componentDidMount(){
    setTimeout(()=>this.setState({loading: false}), 500)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* we open navigation through logo click and close it with navigation click */}
          <img src={logo} 
            className={this.state.toggleLogo ? 'static-logo' : 'static-logo animated jello'} 
            alt="logo"
            onMouseEnter={this.toggleLogo}
            onMouseLeave={this.toggleLogo}
            onClick={this.openNav} 
          />
          <h1 
            className={this.state.toggleLogo ? 'menu-hidden' : 'menu animated bounceInDown'}
            onClick={this.openNav}
          >Menu</h1>
          <Navigation closeNav={this.closeNav}></Navigation>
        </header>
        {
          this.state.loading ? <Loading/> : 
          <div className="Grid animated bounceInUp">
          {
            this.state.cards.map(card=>(
              <Card 
                duration={150} 
                key={card.id} 
                card={card} 
                showBack={this.showBack}
                showFront={this.showFront}
              />
            ))
          }
          </div>
        }
        
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceFinder from './components/FaceFinder/FaceFinder.js';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkInput from './components/ImageLinkInput/ImageLinkInput.js';
import Rank from './components/Rank/Rank.js';
import './App.css';

const app = new Clarifai.App({
  apiKey: '2a7601a0f2b7488189316c04b9738561',
})
const particlesOptions = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area : 600
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input:'',
      imageUrl:'',
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSumbit = () => {
    this.setState({imageUrl:this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(
      function(response) {
        console.log(response)
      },
      function(err) {
        // there was an error
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
        params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkInput onInputChange={this.onInputChange} 
                        onButtonSubmit={this.onButtonSumbit}/>
        <FaceFinder imageUrl={this.state.imageUrl}/> 
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'; 
import '../styles/MemeGen.css';

class MemeGenComponent extends Component {
  state = { 
    tweetText: '',
    topText: '',
    bottomText: '',
    randomImg: 'http://i.imgflip.com/1bij.jpg',
    allMemeImgs: []
   }

   componentDidMount(){
     fetch('http://i.imgflip.com/get_memes')
      .then(res => res.json())
      .then(res => {
        const {memes} = res.data
        this.setState({ allMemeImgs: memes })
      })
   }

   HandleChange = (ev) => {
     const {name, value} = ev.target
     this.setState({
       [name]: value
     })
   }
   
   Generate = (ev) => {
     ev.preventDefault()
     const rNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
     const rMemeImg = this.state.allMemeImgs[rNum].url
     this.setState({ randomImg: rMemeImg })
   }

  render() { 
    return ( 
      <div className="container">

        {/* DROPDOWN */}

        {/* Tweet style */}
        <div id="tweetStyle">
          <form className="text-left">
            <label htmlFor="tweetText" className="form-label">Tweet text</label>
            <input 
              type="text" 
              className="form-control"
              name="tweetText"
              id="tweetText"
              placeholder="what you want as the tweet..."
              value={ this.state.tweetText }
              onChange={ this.HandleChange }
            />
            <br/>
            <button className="btn btn-sm btn-danger float-right mb-4">Generate</button>
          </form>
          <div className="tweetMeme text-left mt-5">
            <p className="lead">{ this.state.tweetText }</p>
            <img src={ this.state.randomImg } alt="tweet" id="tweetImg"/>
          </div>
          <button className="dlBtn float-right my-4">Download</button>
        </div>

        {/* Meme style */}
        <div id="memeStyle">
          <form className="text-left" onSubmit={ this.Generate }>
            <label htmlFor="topText" className="form-label">Top text</label>
            <input 
              type="text" 
              className="form-control" 
              name="topText"
              id="topText" 
              placeholder="what you want at the top..."
              value={ this.state.topText }
              onChange={ this.HandleChange }
            />
            <br/>
            <label htmlFor="bottomText" className="form-label">Bottom text</label>
            <input 
              type="text" 
              className="form-control" 
              name="bottomText"
              id="bottomText" 
              placeholder="what you want at the bottom..."
              value={ this.state.bottomText }
              onChange={ this.HandleChange }
            />
            <br/>
            <button className="btn btn-sm btn-danger float-right">Generate</button>
          </form>
          <div className="picMeme my-5">
            <img id="memeImg" src={ this.state.randomImg } alt="meme"/>
            <h3 className="text-center upText">{ this.state.topText }</h3>
            <h3 className="text-center downText">{ this.state.bottomText }</h3>
          </div>
        </div>
      </div>
     );
  }
}
 
export default MemeGenComponent;

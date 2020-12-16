import React, { Component } from 'react'; 
import '../styles/MemeGen.css';
import * as htmlToImage from 'html-to-image';
import toPng from 'html-to-image';

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

   styles = {
     modalBody: {
       backgroundColor: '#eee'
     }
   }

   TweetConverter = () => {
     const node = document.getElementById('tweetStyleImg');
     const modalBody = document.getElementById('modalBody');
     htmlToImage.toPng(node)
      .then((dataUrl) => {
        const img = new Image();
        // img.width=520;
        // img.height=420;
        img.src = dataUrl;
        modalBody.appendChild(img)
      })
      .catch((err) => {
        console.error('Did not find node.', err);
      })
   }

   MemeConverter = () => {
     const node = document.getElementById('finalMemeImg');
     const modalBody = document.getElementById('modalBody');
     htmlToImage.toPng(node)
      .then((dataUrl) => {
        const img = new Image();
        // img.width=520;
        // img.height=420;
        img.src = dataUrl;
        modalBody.appendChild(img)
      })
      .catch((err) => {
        console.error('Did not find node.', err);
      })
   }

   ClearImg = () => {
     const modalBody = document.getElementById('modalBody');
     modalBody.removeChild(modalBody.lastChild);
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

  ShowTweetStyle = () => {
    const tweetStyle = document.getElementById('tweetStyle');
    const memeStyle = document.getElementById('memeStyle');
    tweetStyle.style.display = 'block';
    memeStyle.style.display = 'none';
  }

  ShowMemeStyle = () => {
    const memeStyle = document.getElementById('memeStyle');
    const tweetStyle = document.getElementById('tweetStyle');
    memeStyle.style.display = 'block';
    tweetStyle.style.display = 'none';
  }

  render() { 
    return ( 
      <div className="container">

        {/* Modal */}
        <div 
          className="modal fade" 
          id="resultModal" 
          tabIndex="-1" 
          aria-labelledby="resultModalLabel" 
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-danger text-light">
              <div className="modal-header">
                <h5 className="modal-title" id="resultModalLabel">Generated Image</h5>
                <button 
                  type="button" 
                  onClick={ this.ClearImg }
                  className="btn-close" 
                  data-bs-dismiss="modal" 
                  aria-label="Close"
                >
                </button>
              </div>
              <div 
                id="modalBody" 
                className="modal-body container text-center"
                style={ this.styles.modalBody }
              >
                {/*  */}
              </div>
              {/* <div className="modal-footer">
                <a href="" dowload="meme.png" onClick={ this.ClearImg }>  
                <button type="button" className="btn btn-primary">Download</button>
                </a>
              </div> */}
            </div>
          </div>
        </div>

        {/* Dropdown */}
        <div className="dropdown text-center">
          <button 
            className="btn btn-lg bg-danger text-light dropdown-toggle my-5" 
            type="button" 
            id="dropdownMenuButton" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            Choose Meme Style
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li onClick={ this.ShowTweetStyle } className="dropdown-item">Tweet</li>
            <li onClick={ this.ShowMemeStyle } className="dropdown-item">Text On Pic</li>
          </ul>
        </div>

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
            <button className="btn btn-sm bg-danger text-light float-end mb-4">Generate</button>
          </form>
          <div id="tweetStyleImg">
            <div className="tweetMeme text-left mt-5">
              <p className="lead">{ this.state.tweetText }</p>
              <img src={ this.state.randomImg } alt="tweet" id="tweetImg"/>
            </div>
          </div>
          <button 
            onClick={ this.TweetConverter } 
            className="btn btn-sm bg-danger text-light float-end my-4"
            data-bs-toggle="modal" 
            data-bs-target="#resultModal"
          >
            Use this
          </button>
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
            <button className="btn btn-sm bg-danger text-light float-end">Generate</button>
          </form>
          <div id="finalMemeImg">
            <div className="picMeme my-5">
              <img id="memeImg" src={ this.state.randomImg } alt="meme"/>
              <h3 className="text-center upText">{ this.state.topText }</h3>
              <h3 className="text-center downText">{ this.state.bottomText }</h3>
            </div>
          </div>
          <button 
            onClick={ this.MemeConverter } 
            className="btn btn-sm bg-danger text-light float-end my-4"
            data-bs-toggle="modal" 
            data-bs-target="#resultModal"
          >
            Use this
          </button>
        </div>
      </div>
     );
  }
}
 
export default MemeGenComponent;

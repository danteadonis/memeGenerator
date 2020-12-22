import React, { Component } from 'react';

class HeaderComponent extends Component {
  state = {
    imgSrc: 'yao_ming_meme.png'
  }

   styles = {
     header: {
       fontFamily: 'Mali'
     },
     yaoMing: {
      width: '50px',
      height: '50px'
     }
   }

  render() { 
    return ( 
      <header style={ this.styles.header }>
        <div className="bg-danger">
          <div className="container d-flex justify-content-center">
            <img 
              style={ this.styles.yaoMing } 
              src={ this.state.imgSrc } 
              alt="b!tch please"
              className="mx-2 mt-1"
            />
            <div className="text-light mx-1">
              <h4>Quick Meme-er</h4>
              <h5 className="lead">...a meme generator</h5>
            </div>
          </div>
        </div>
        <p className="text-center mt-2">Generate an image you'd like to use, type in your joke/pun, click 'Use This', download your new meme.
        <br />
        It's that easy!</p>
      </header>
     );
  }
}
 
export default HeaderComponent;

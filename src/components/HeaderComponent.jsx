import React, { Component } from 'react';

class HeaderComponent extends Component {
  state = { 
    img: '../src/yao ming meme.png'
   }

   styles = {
     yaoMing: {
      width: '70px',
      height: '70px'
     }
   }

  render() { 
    return ( 
      <header>
        <div className="bg-danger">

          {/* RANDOMIZE BG-COLOR */}

          <div className="container d-flex justify-content-center">
            <img 
              style={ this.styles.yaoMing } 
              src={ this.state.img } 
              alt="b!tch please"
              className="mr-2"
            />
            <div className="text-light ml-2">
              <h4>Quick Meme-er</h4>
              <h5 className="lead">...a meme generator</h5>
            </div>
          </div>
        </div>
      </header>
     );
  }
}
 
export default HeaderComponent;

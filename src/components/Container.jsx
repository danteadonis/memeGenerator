import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import MemeGenComponent from '../components/MemeGenComponent';
import FooterComponent from '../components/FooterComponent';

class Container extends Component {
  state = { 
    bgColors: [
      {color: 'bg-danger'},
      {color: 'bg-info'},
      {color: 'bg-success'},
      {color: 'bg-warning'},
      {color: 'bg-primary'},
      {color: 'bg-secondary'},
      {color: 'bg-dark'}
    ]
   }

   componentDidMount(){
     this.RandomizeColor();
   }

  RandomizeColor = () => {
    const bgDanger = document.querySelectorAll('.bg-danger');
    const randNum = Math.floor(Math.random() * this.state.bgColors.length);
    const randColor = this.state.bgColors[randNum].color;

    console.log(`Theme in use: ${randColor}`);

    for(let i = 0; i < bgDanger.length; i++){
      bgDanger[i].classList.remove('bg-danger');
      bgDanger[i].classList.add(randColor);
    }
  }

  render() { 
    return ( 
      <div>
        <HeaderComponent />
        <MemeGenComponent />
        <FooterComponent />
      </div>
     );
  }
}
 
export default Container;

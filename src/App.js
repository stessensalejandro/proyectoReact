import React, { Component } from 'react';
import './App.css';
import Hola from './Hola';
import Button from './Button';
import MiSelect from './MiSelect';
import Form from './Form';
import Item from './Item';
class App extends Component {
  constructor(props) {
      super(props);
     this.state = {
        counter: 0,
      }
    }
    componentDidMount() {
       const increment = document.querySelector('.js-increment');
       const decrement = document.querySelector('.js-decrement');
       const doblar=document.querySelector('.js-doblar');

       if(increment && decrement) {
         increment.addEventListener('click', this.onIncrementClick);
         decrement.addEventListener('click', this.onDecrementClick);
         doblar.addEventListener('click', this.onDoblar);
       }

     }

     onIncrementClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  onDecrementClick = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  onDoblar = () => {
    this.setState({
      counter: this.state.counter * 2,
    });
  }
  render() {
    return (
      <div>
      <div>
        <Form> </Form>

      </div>
             <div className="App">
                     <div className='counter'>
                       <div className='counter__state'>
                         {this.state.counter}
                       </div>
                       <div className='coutner__buttons'>
                         <Button
                           className='js-increment'
                           primary={true}
                         >
                           +
                         </Button>
                         <Button
                           className='js-decrement'
                           primary={false}
                         >
                           -
                         </Button>
                         <Button
                           className='js-doblar'
                           primary={false}
                         >
                           Duplicar
                         </Button>
                       </div>
                     </div>
                   </div>
                   <div class="selectMes">
                   <MiSelect />
                   </div>

      </div>
    );
  }
}

export default App;

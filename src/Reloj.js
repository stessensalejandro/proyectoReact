import React from "react";
import Button from './Button';
import Form from './Form';
import './Item.css';
import './Reloj.css';
class Reloj extends React.Component
{
  constructor(args)
  {super(args);

    this.state = { date: new Date() };

  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.pulso(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  pulso() {
      this.setState({
        date: new Date()
      });
    }


    render() {
      return (
        <div id="contenedorReloj">
        <h3> Hora actual </h3>
        <div id="contenedorReloj">{this.state.date.toLocaleTimeString()}</div>
        </div>
      );
    }

}
export default Reloj

import React from "react";
import Button from './Button';
import './Item.css'
class Item extends React.Component
{
  constructor(args)
  {super(args)
  }

  render(){

    let name=this.props.name
    let language=this.props.language
    let genero=this.props.genero
return(
  <li>
  Nombre: {this.props.name}
  Idioma: {this.props.language}
  Genero: {this.props.genero}
  Sobre:  {this.props.sobre}  <input type="button" id="botonEliminar"/> 
  </li>
  )
}

}
export default Item

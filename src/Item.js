import React from "react";
import Button from './Button';
import Form from './Form';
import './Item.css'
class Item extends React.Component
{
  constructor(args)
  {super(args)
  }

  render(){
    let key=this.props.key
    let name=this.props.name
    let language=this.props.language
    let genero=this.props.genero
return(
  <div>
  <td scope="col">{this.props.name}</td>
  <td scope="col">{this.props.language}</td>
  <td scope="col">{this.props.genero}</td>
  <td scope="col">{this.props.sobre}</td>
  <td lass = "text-left" scope="col"><input type="button" id="botonEliminar" value="X" onClick={()=>this.props.borrarOp(this.props.id)}/> </td>


  </div>)
}

}
export default Item

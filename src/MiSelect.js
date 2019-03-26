import React from "react";

class MiSelect extends React.Component
{
  constructor(args)
  {super(args)
    this.state={
    mes:"enero",
    dias:31}
    this.cambioMes = this.cambioMes.bind(this);
  }


  render(){
    return(
      <div className="form-group">
                <select
                  id="select"
                  className="form-control"
                  dias={this.state.dias}
                  text={this.state.mes}
                  onChange={this.cambioMes}>
                    <option value="31">enero</option>
                    <option value="28">febrero</option>
                    <option value="31">marzo</option>
                    <option value="30">abril</option>
                    <option value="31">mayo</option>
                    <option value="30">junio</option>
                    <option value="31">julio</option>
                    <option value="30">agosto</option>
                    <option value="30">setiembre</option>
                    <option value="31">octubre</option>
                    <option value="30">noviembre</option>
                    <option value="31">diciembre</option>
                </select>
                 <p>Mes {this.state.mes}  de tiene :{this.state.dias} dias</p>

              </div>
  )
}
cambioMes(e) {
  var indice=e.target.selectedIndex;
  var select = document.getElementById("select").options;
  console.log(select[indice].text);
var seleccionado=select[indice].text;

  this.setState({
      dias:e.target.value,
      mes:seleccionado
  })
}
}
export default MiSelect

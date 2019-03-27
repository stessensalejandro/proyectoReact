import React from "react";
import './Form.css';
import Item from './Item';
class Form extends React.Component{
  constructor(args){
    super(args)
    this.state= {
      id:"",
      name:"",
      language:"",
      genero:"",
      sobre:"",
      terminos:"",
      guardar:"",
      borrarOp:"",
      lista:[]}
  }
onChange(e)
{
  if (e.target.name==='terminos')
  {
    this.setState({[e.target.name]: e.target.checked

  })
}
else {

  this.setState({[e.target.name]: e.target.value
  })

}

}

guardar(e)
{
  const nameInput=document.getElementById("name")
  const nameLanguage=document.getElementById("language")
  const generoRadio=document.getElementById("genero")
  const sobreTextArea=document.getElementById("sobre")
  console.log(document.getElementById("terminos").value)

if (document.getElementById("terminos").value=="true")
{
  let nuevo=
  {
    id:new Date().getTime(),
    name:nameInput.value,
    language:nameLanguage.value,
    genero:generoRadio.value,
    sobre:sobreTextArea.value

  }
  let lista=this.state.lista
  lista.unshift(nuevo)
  console.log(this.validar());
  if (!this.validar())
  {
    return ;
  }
  this.setState({
  guardar:'guardado correctamente',
  lista:lista,
  language:nameLanguage.value,
  genero:generoRadio.value,
  sobre:sobreTextArea.value

})
}
else {
  alert('Por Favor, acepte los terminos y condiciones')
}

}
validar()
{
  if (this.state.terminos != true)
  {
    this.setState({
    guardar:'Por favor acepte los terminos y condiciones'


  })
  return false
}
else {
  return true
}
}
borrar(id)
{
console.log("me estoy metiendo a borrar ");
console.log(id);

var listaNueva = this.state.lista.filter((elemento)=>elemento.id !== id);
      this.setState({
        lista: listaNueva
      })
}

  render(){
    return(
  <form>
  <div class="form-group">
  <label htmlfor="username"> Nombre </label>
  <input value={this.state.name} name="name" id="name" type="text" onChange={this.onChange.bind(this)} />
  </div>

  <div class="form-group" className="form-group">
  <label htmlfor="idioma"> Idioma </label>
          <select
            id="language"
            name="language"
            value={this.state.language}
            className="form-control"
            onChange={this.onChange.bind(this)}>
              <option value="ES">Español</option>
              <option value="EN">Ingles</option>
              <option value="FR">Frances</option>
          </select>
  </div>

<div class="form-radio">
  <label htmlfor="Genero"> Genero </label>
  <input value="h" name="genero" id="genero" type="radio" onChange={this.onChange.bind(this)}/> Hombre
  <input value="m" name="genero" id="genero" type="radio" onChange={this.onChange.bind(this)}/> Mujer
</div>

<div class="form-group">
<label htmlfor="sobre"> Sobre ti </label>
<textarea value={this.state.sobre}
onChange={this.onChange.bind(this)}
name="sobre"
id="sobre"/>
</div>


<div class="form-check">
<input value={this.state.terminos} name="terminos" id="terminos" type="checkbox" onChange={this.onChange.bind(this)}/>
aceptar terminos y condiciones
</div>


<div class="form-group">
<input type="button" value="Guardar" name="guardar" id="guardar" onClick={this.guardar.bind(this)}/>
</div>
<span> {this.state.guardar} </span>


<table border="1" class="table">
    <thead> </thead>
    <tbody>
{this.state.lista.map(user => {
  return <Item
          key={user.id}
          id={user.id}
          name={user.name}
          language={user.language}
          genero={user.genero}
          sobre={user.sobre}
          borrarOp={this.borrar.bind(this)}   />
})}

</tbody>
</table>


  </form>

  )



}
}
export default Form

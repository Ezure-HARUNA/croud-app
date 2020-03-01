import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"

const Li = styled.li`
list-style: none;
.paper {
    margin-top: 10px;
    padding: 15px;
}
.textField {
    display: block;
}
`

const EditForm =(props)=>{
  //const handleIsDone = this.props.handleIsDone
  let todo
  if (props.isEdit === true){
    todo=
    <form onSubmit={(e)=>{
        e.preventDefault()
        props.handleEditComplete(e, props.id)}}>
        <TextField className="textField" type="text" label="名前" name="name" placeholder={props.name} />
        <TextField className="textField" type="text" label="年齢" name="age" placeholder={props.age} />
        <Button type="submit" variant="contained">編集完了</Button>
    </form>
  } else{
    todo=
    <div>
       <p>{props.name}</p>
       <p>{props.age}</p>
    </div>
  }
  return (
    
      <Li>
          <Paper className="paper">
              {todo}
          </Paper>
      </Li>
  )
 
}

export default EditForm
/*
export default class EditForm extends React.Component {
    render() {
        //const buttonText = this.props.isDone ? "戻す" : "完了" 
        //const id = this.props.id
        const handleIsDone = this.props.handleIsDone
        let todo
        if (this.props.isEdit === true) {
            todo = 
            <form onSubmit={(e)=>{
                e.preventDefault()
                this.props.handleEditComplete(e, this.props.id)}}>
                <TextField className="textField" type="text" label="name" name="name" placeholder={this.props.name} />
                <TextField className="textField" type="text" label="age" name="age" placeholder={this.props.age} />
                <Button type="submit" variant="contained">編集完了</Button>
            </form>
        } else {
            todo = 
            <div>
               <p>{this.props.name}</p>
              <p>{this.props.age}</p>
            </div>
        }
        return (
            <Li>
                <Paper className="paper">
                    {todo}
                </Paper>
            </Li>
        )
    }
}
*/
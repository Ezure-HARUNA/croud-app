import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { StylesProvider } from '@material-ui/styles';
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
  let info
  const handleEditComplete=(e)=> {
    e.preventDefault(e)
    const editedInfos = props.usersInfo.slice()

		props.setUsersInfo(editedInfos)
	}
  if (props.isEdit === true){
    info=
    <form onSubmit={(e)=>{
        handleEditComplete(e)}}>
        <TextField className="textField" type="text" label="名前" name="name" placeholder={props.name} />
        <TextField className="textField" type="text" label="年齢" name="age" placeholder={props.age} />
        <Button type="submit"  variant="contained">編集完了</Button>
    </form>
  } 
  
  else{
    info=
    <div>
       <p>{props.pTagName}</p>
       <p>{props.pTagAge}</p>
       <Button onClick={props.handleIsDone} variant="contained" startIcon={<DoneIcon />}>{props.isDoneState}</Button>
       <Button onClick={props.handleDelete} variant="contained" startIcon={<DeleteIcon />}>削除</Button>
       <Button onClick={props.handleIsEdit} variant="contained" startIcon={<EditIcon />}>編集</Button>

    </div>
  }
  
  
  return (
    
      <Li>
          <Paper className="paper">
              {info}
          </Paper>
      </Li>
  )
 
}

export default EditForm


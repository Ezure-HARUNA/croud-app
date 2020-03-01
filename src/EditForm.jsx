import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
//import { Button } from '@material-ui/core';
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
const StyledButton = styled(Button)`
background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
  margin:5px;
`;

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
        <StyledButton injectFirst type="submit"  variant="contained">編集完了</StyledButton>
    </form>
  } 
  
  else{
    info=
    <div>
       <p>{props.pTagName}</p>
       <p>{props.pTagAge}</p>
       <StyledButton injectFirst onClick={props.handleIsDone} variant="contained" startIcon={<DoneIcon />}>{props.isDoneState}</StyledButton>
       <StyledButton injectFirst onClick={props.handleDelete} variant="contained" startIcon={<DeleteIcon />}>削除</StyledButton>
       <StyledButton injectFirst onClick={props.handleIsEdit} variant="contained" startIcon={<EditIcon />}>編集</StyledButton>

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


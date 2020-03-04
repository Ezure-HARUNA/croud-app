import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
//import DoneIcon from '@material-ui/icons/Done';
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

  let info
  const handleEditComplete=(e)=> {
　　
    e.preventDefault()
    //前のステートのコピー

　　const newEdit =props.usersInfo.slice()
    //山田太郎を変更したと仮定して、変更後の値を取り出す
    const name =e.target.name.value
    const age =e.target.age.value
    //該当する部分を変更する(連想は配列の書き換え)
    //連想配列を書き換える時は、「連想配列名.キー＝書き換え内容」
    newEdit[props.id].name=name
    newEdit[props.id].age=age
    newEdit[props.id].setIsEdit=false

    //newEditは[{} , {}] (usersInfo)
    //newEditの該当する部分は[{ここ} , {}]　ここを取り出す
    //ここ,に該当するのはnewEditの配列の一個目の要素
    //newEdit配列の一個目の要素である連想はいつのnameとageを変更

    //更新
    props.setUsersInfo(newEdit)
    
    
    //submitが起きたときに変更後の値に更新
	}
  if (props.isEdit === true){
    info=
    <form type="submit" id="target" injectFirst onSubmit={(e)=>{
      handleEditComplete(e)}}>
        <TextField className="textField" type="text" label="編集前の名前"  name="name" defaultValue={props.name} placeholder={props.name} />
        <TextField className="textField" type="text" label="編集前の年齢" defaultValue={props.age} name="age" placeholder={props.age} />
        <StyledButton type="submit" onSubmit={props.handleIsEdit} variant="contained">編集完了</StyledButton>
    </form>
  } 
 //onClick={props.handleIsEdit} 
  else{
    info=
    <div>
       <p>{props.name}</p>
       <p>{props.age}</p>
       {/* <StyledButton injectFirst onClick={props.handleIsDone} variant="contained" startIcon={<DoneIcon />}>{props.isDoneState}</StyledButton> */}
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


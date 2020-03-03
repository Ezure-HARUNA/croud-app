import React from "react"
import styled from "styled-components"
import EditForm from "./EditForm"
//import Button from '@material-ui/core/Button';
//import DoneIcon from '@material-ui/icons/Done';
//import DeleteIcon from '@material-ui/icons/Delete';
//import EditIcon from '@material-ui/icons/Edit';

//一重線のスタイル
/*
const P = styled.p`
text-decoration: line-through;
`
*/

const Container =styled.form`
padding:20px;

`

const Item = (props) => {
　　
    //デフォルトはまだ完了していない状態なのでfalseに
    const[isDone, setIsDone] =React.useState(false)

    //完了・戻すの切り替え
    const handleIsDone =() => {
        if (isDone){   //setIsDone === trueと同じ意味
            setIsDone(false)
        } else {
            setIsDone(true)
        }
    }
    
    /*
    //完了・戻すの切り替え（表示）
    let isDoneState
    if (isDone) {
        isDoneState ="戻す"　//trueは完了状態なので、戻すボタンを表示
    } else {
        isDoneState = "完了"
    }
    */

    /*
    //完了したものに一重線をひく
    let pTagName
    if (isDone) {
        pTagName=<P>{props.userInfo.name}</P>  
    } else {
        pTagName=<p>{props.userInfo.name}</p>
    }

    let pTagAge
    if (isDone) {
        pTagAge=<P>{props.userInfo.age}</P>
    } else {
        pTagAge=<p>{props.userInfo.age}</p>
    }
    */
    

    //削除ボタンの処理
    const handleDelete =() =>{
        //usersInfoをコピーする
        const deleteUsersInfo =props.usersInfo.slice()
        //usersInfoの該当する部分を削除する
        deleteUsersInfo.splice(props.id, 1)
        //setUsersInfoでusersInfoを更新する
        props.setUsersInfo(deleteUsersInfo)
    }


    //編集機能
    
    const[isEdit, setIsEdit] =React.useState(false)
    const handleIsEdit =(e) => {
        if (isEdit){   //setEdit === trueと同じ意味
            setIsEdit(false)
        } else {
            setIsEdit(true)  
        }
        e.preventDefault()
        //const editInfos = props.usersInfo.slice()

        /////////????????////////
        /*
        editInfos.isEdit = true
        //editTodosでsetUsersInfoを更新
        props.setUsersInfo(editInfos)
        */
    
    }


    
   
　　　
    
    
        


    return (
        <Container>
            {/* {pTagName} */}
            {/* {pTagAge} */}
            {/* 編集 */}
            {/* {editIt ? <EditForm changeText={changeText} value={props.desc}/> : <p>{props.desc}</p>} */}
            {/* <p>{userInfo}</p> */}
            {/* <Button onClick={handleIsDone} type="submit" variant="contained" startIcon={<DoneIcon />} */}
            {/* > {isDoneState}</Button> */}
            {/* <Button variant="contained" onClick={handleDelete} startIcon={<DeleteIcon />}>削除</Button> */}
            {/* <Button  variant="contained" onClick={handleIsEdit} startIcon={<EditIcon />}>編集</Button> */}
            {/* 編集追加　 onClick={toggleEditForm} */}
            <EditForm
                //pTagName={pTagName}
                //pTagAge={pTagAge}
                isEdit={isEdit}
                handleIsDone={handleIsDone}
                handleDelete={handleDelete}
                handleIsEdit={handleIsEdit}
                //isDoneState={isDoneState}
                editName={props.userInfo.name}
                editAge={props.userInfo.age}
                id={props.id}
                usersInfo={props.usersInfo}
                setUsersInfo={props.setUsersInfo}
                userInfo={props.userInfo}
                
                //handleEditComplete={handleEditComplete}

            >
                
            </EditForm>
        </Container>
    )
}



export default Item
import React from "react"
import styled from "styled-components"
import EditForm from "./EditForm"

//一重線のスタイル
const P = styled.p`
text-decoration: line-through;
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
    

    //完了・戻すの切り替え（表示）
    let isDoneState
    if (isDone) {
        isDoneState ="戻す"　//trueは完了状態なので、戻すボタンを表示
    } else {
        isDoneState = "完了"
    }

    //完了したものに一重線をひく
    let pTagName
    if (isDone) {
        pTagName=<P>{props.name}</P>
    } else {
        pTagName=<p>{props.name}</p>
    }

    let pTagAge
    if (isDone) {
        pTagAge=<P>{props.age}</P>
    } else {
        pTagAge=<p>{props.age}</p>
    }
    

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
        const editInfos = props.usersInfo.slice()

        /////////????????////////
        editInfos.isEdit = true
        //editTodosでsetUsersInfoを更新
        props.setUsersInfo(editInfos)
    }


    /////////??????????????//////////
    const handleEditComplete=(e, id)=> {
		const editedTodos = this.state.todos.slice()
		const title = e.target.title.value
		const desc = e.target.desc.value
		editedTodos[id].title = title
		editedTodos[id].desc = desc
		editedTodos[id].isEdit = false
		this.setState({
			todos : editedTodos
		})
	}
　　　
    
    
        


    return (
        <li>
            {pTagName}
            {pTagAge}
            {/* 編集 */}
            {/* {editIt ? <EditForm changeText={changeText} value={props.desc}/> : <p>{props.desc}</p>} */}
            {/* <p>{userInfo}</p> */}
            <button onClick={handleIsDone}>{isDoneState}</button>
            <button onClick={handleDelete}>削除</button>
            <button onClick={handleIsEdit} >編集</button>
            {/* 編集追加　 onClick={toggleEditForm} */}
            <EditForm
                name={props.name}
                age={props.age}
                isEdit={isEdit}
                handleIsDone={handleIsDone}
                handleDelete={handleDelete}
                handleIsEdit={handleIsEdit}
                handleEditComplete={handleEditComplete}
            >
                
            </EditForm>
        </li>
    )
}

export default Item
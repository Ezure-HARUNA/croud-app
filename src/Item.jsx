import React from "react"
import styled from "styled-components"
//import EditForm from "./EditForm"

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
    let pTagComplete
    if (isDone) {
        pTagComplete=<P>{props.nameInfo}{props.ageInfo.age}</P>
    } else {
        pTagComplete=<p>{props.nameInfo.name}{props.ageInfo.age}</p>
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
    //onClickとonSubmitを使う？
    //const [editIt, setEditIt] = React.useState(false);
    //const toggleEditForm = () => setEditIt(!editIt);
    //const changeText = props.changeText;
    

    return (
        <li>
            {pTagComplete}
            {/* 編集 */}
            {/* {editIt ? <EditForm changeText={changeText} value={props.desc}/> : <p>{props.desc}</p>} */}
            {/* <p>{userInfo}</p> */}
            <button onClick={handleIsDone}>{isDoneState}</button>
            <button onClick={handleDelete}>削除</button>
            <button >編集</button>
            {/* 編集追加　 onClick={toggleEditForm} */}
        </li>
    )
}

export default Item
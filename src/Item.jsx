import React from "react"
import styled from "styled-components"

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
        pTagComplete=<P>{props.userInfo}</P>
    } else {
        pTagComplete=<p>{props.userInfo}</p>
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


    return (
        <li>
            {pTagComplete}
            {/* <p>{userInfo}</p> */}
            <button onClick={handleIsDone}>{isDoneState}</button>
            <button onClick={handleDelete}>削除</button>
            {/* 編集 */}
        </li>
    )
}

export default Item
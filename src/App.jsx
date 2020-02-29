import React from "react"
import Form from "./Form"
import List from "./List"


const App = () => {
    const[usersInfo, setUsersInfo] =React.useState({
        name:"山田太郎", age:20
        
})
    //編集
    /*
    const[userInfo, setUserInfo] =React.useState()
    const changeText = (pos, value) => {
        const newTodos = usersInfo.map((e, i) => i === pos ? value : e);
        setUserInfo(newTodos);
    }
    */

    return (
        <>
            <h2>ユーザー情報管理用クラウドアプリ</h2>
            <Form usersInfo={usersInfo} setUsersInfo={setUsersInfo}></Form>
            <List usersInfo={usersInfo} setUsersInfo={setUsersInfo} ></List> 
            {/* 後で編集追加 　changeText={changeText}*/}
        </>
    )
}

export default App
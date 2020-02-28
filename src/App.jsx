import React from "react"
import Form from "./Form"
import List from "./List"


const App = () => {
    const[usersInfo, setUsersInfo] =React.useState([
        "山田太郎 20歳" , 
        "佐藤花子 30歳"
        
    ])

    return (
        <>
            <h2>ユーザー情報管理用クラウドアプリ</h2>
            <Form usersInfo={usersInfo} setUsersinfo={setUsersInfo}></Form>
            <List usersInfo={usersInfo} setUsersInfo={setUsersInfo}></List> 
        </>
    )
}

export default App
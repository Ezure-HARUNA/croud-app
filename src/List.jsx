import React from "react"
import Item from "./Item"

const List = (props) =>{
    
    
   

    const items =props.usersInfo.map((userInfo, id) => {
        return (
            <Item 
                userInfo={userInfo} 
                id={id} 
                usersInfo={props.usersInfo} 
                setUsersInfo={props.setUsersInfo}
                name={props.name}
                age={props.age}
                
                > 
            </Item>
            //後で編集用にchangeText={value => props.changeText(id, value)}追加する
        )
    })
    
    return (
        <ul>
            {items}
        </ul>

    )
}

export default List
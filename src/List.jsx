import React from "react"
import Item from "./Item"

const List = (props) =>{
    
    
   

    const items =props.usersInfo.map(([nameInfo,ageInfo, id) => {
        return (
            <Item userInfo={userInfo} id={id} nameInfo={props.userInfo.name} ageInfo={props.userInfo.age} 
                 usersInfo={props.usersInfo} setUsersInfo={props.setUsersInfo}> 
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
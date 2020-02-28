import React from "react"
import Item from "./Item"

const List = (props) =>{
    
    const items =props.usersInfo.map((userInfo, id) => {
        return (
            <Item userInfo={userInfo} id={id} usersInfo={props.usersInfo} setUsersInfo={props.setUsersInfo}></Item>
        )
    })
    
    return (
        <ul>
            {items}
        </ul>

    )
}

export default List
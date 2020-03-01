import React from "react"
//import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


const Form = (props) => {
    const handleSubmit =(e) =>{
        e.preventDefault()
        //入力値を取り出す
        const name = e.target.name.value
        const age = e.target.age.value

        //usersInfoをコピー
        const newUsersInfo=props.usersInfo.slice()
        //titleの追加
        newUsersInfo.push({
            name:name,
            age:age,
        })
        //setUsersInfoでnewUsersInfoを更新
        props.setUsersInfo(newUsersInfo)
    }
    
    
    return (
        <form type="submit" onSubmit={(e)=>{handleSubmit(e)}}> 
            {/* <imput type="submit" title="text"></imput> */}
            {/* 名前 */}
            <TextField  name="name" id="standard-basic" label="name" />

            {/* 年齢（選択） */}
            <InputLabel name="age" id="demo-simple-select-autowidth-label">age</InputLabel>
            <Select>
                <MenuItem value="">
                    <em>-</em>
                </MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={21}>21</MenuItem>
                <MenuItem value={22}>22</MenuItem>
                <MenuItem value={23}>23</MenuItem>
                <MenuItem value={24}>24</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={26}>26</MenuItem>
                <MenuItem value={27}>27</MenuItem>
                <MenuItem value={28}>28</MenuItem>
                <MenuItem value={29}>29</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={31}>31</MenuItem>
            </Select>
            <Button type="submit" variant="contained" color="primary" startIcon={<PersonAddIcon />}
      >        追加
            </Button>
        </form>
    )
}

export default Form
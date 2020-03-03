import React from "react"
import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
//import MenuItem from '@material-ui/core/MenuItem';
//import InputLabel from '@material-ui/core/InputLabel';
//import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
 

const StyledButton = styled(Button)`
background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
  margin-left:10px;
  margin-top:-15px;
`;

/*
const StyledSelect = styled(Select) `
width:195px;
`
*/

const Form = (props) => {
    const handleSubmit =(e) =>{
        e.preventDefault()
        //入力値を取り出す
        const name = e.target.name.value

        const age =e.target.age.value

        //usersInfoをコピー
        const newUsersInfo=props.usersInfo.slice()
        //titleの追加
        newUsersInfo.push(
           { name: name, age: age}
        )
        //setUsersInfoでnewUsersInfoを更新
        props.setUsersInfo(newUsersInfo)
    }

    //onChangeは変更ごとの呼び出されてしまう

    /*
    const handleSelectChange =(e) =>{
        e.preventDefault()
        console.log(e);
        //入力値を取り出す
        const age = e.target.age.value

        //usersInfoをコピー
        const newUsersInfo=props.usersInfo.slice()
        //titleの追加
        newUsersInfo.push(
            age
        )
        //setUsersInfoでnewUsersInfoを更新
        props.setUsersInfo(newUsersInfo)
    }
    */
    
    
    return (
        <form type="submit" onSubmit={(e)=>{handleSubmit(e)}}> 
            {/* <imput type="submit" title="text"></imput> */}
            {/* 名前 */}
            <TextField  name="name" id="standard-basic" label="名前" />

            {/* 年齢（選択） */}
            <TextField name="age" label="年齢"　id="standard-basic"/>
            {/* <InputLabel  id="demo-simple-select-autowidth-label">年齢</InputLabel>
            <StyledSelect name="age" label="age" onChange={(e)=>{handleSelectChange(e)}}>
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
            </StyledSelect> */}
        
            <StyledButton type="submit" variant="contained"  startIcon={<PersonAddIcon />}
      >        追加
            </StyledButton>
            
        </form>
    )
}

export default Form
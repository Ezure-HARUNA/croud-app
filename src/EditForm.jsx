import React from "react"


const EditForm = (props) => {
    const [value, setValue] = React.useState(props.value);
    const handleChange = () => props.changeText(value);
    return (
        <div>
          <input
            type="text"
            value={value}
            placeholder="React編集"
            onChange={e => setValue(e.target.value)}
          />
          <button type="button" onClick={handleChange}>
            実行
          </button>
        </div>
      );
  };
  export default EditForm;
import React, { useEffect, useState } from 'react';
import { Mention, MentionsInput } from "react-mentions";
import { Button, Icon } from '@mdsol/onex-design';
import style from './AddDrawer.scss';

const AddDrawer = ({
  handleCancelButtonClick,
  handleCheckButtonClick,
  textValue,
  setTextValue,
  placeholder,
  maxLength,
}) => {
  const [data, setData] = useState([{
    "id": "184155cd-8dfb-4424-aa15-25806339d8ce",
    "display": "Nandish Dhadd",
    "email": "ndhadd@mdsol.com"
},
{
    "id": "8e53fc1e-de3a-4218-9752-5e13579fc4ea",
    "display": "Shubham Rathod",
    "email": "srathod@mdsol.com"
},
{
    "id": "414b2574-6cf5-4e5f-82fd-2346083b0d8a",
    "display": "Omkar Sawant",
    "email": "osawant@mdsol.com"
}]);
  useEffect(()=>{
    // getUsers().then((response) => {
    //   setData(response.data);
    // });
  })

  return (
    <>
      <MentionsInput 
        className="drawer_textarea"
        dataTestId="drawer_textarea"
        errorMessage={`Cannot exceed ${maxLength} characters'`}
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        placeholder={placeholder}>
        <Mention style={style.drawer_textarea__mention} data={data} />
      </MentionsInput>
      <div className="add-drawer-btns">
        <Button
          buttonType="icon"
          size="sm"
          dataTestId="add-drawer-check-btn"
          onClick={handleCheckButtonClick}
          disabled={!textValue.trim().length || textValue.length > maxLength}
        >
          <Icon>check</Icon>
        </Button>
        <Button
          buttonType="icon"
          variant="secondary"
          buttonStyle="ghost"
          size="sm"
          className="ms-2"
          dataTestId="add-drawer-cancel-btn"
          onClick={handleCancelButtonClick}
        >
          <Icon>close</Icon>
        </Button>
      </div>
    </>
  );
};

export default AddDrawer;

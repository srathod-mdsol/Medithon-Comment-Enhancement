import React from 'react';
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
  const data = [
    {
      id: "Avatar",
      display: "Avatar Aang",
    },
    {
      id: "Spiderman",
      display: "Peter Parker",
    },
  ];

  return (
    <>
      <MentionsInput 
        className="add-drawer-text-area"
        dataTestId="add-drawer-text-area"
        errorMessage={`Cannot exceed ${maxLength} characters'`}
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        placeholder={placeholder}>
        <Mention style={style.mentions__mention} data={data} />
        <Mention className={style.mentions__mention} data={data} trigger={"?email"} />
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

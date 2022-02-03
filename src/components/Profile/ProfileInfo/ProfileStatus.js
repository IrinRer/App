import { useState } from "react";

const ProfileStatus = (props) => {
  const [editMode, setMode] = useState(false);

  const changeMode = () => {
      setMode(!editMode);
  }

  return (
    <>
      {!editMode ? (
        <div>
          <span onClick={() => changeMode()}>{props.status}</span>
        </div>
      ) : (
        <div>
          <input value={props.status} autoFocus={true} onBlur={() => changeMode()}/>
        </div>
      )}
    </>
  );
};

export default ProfileStatus;

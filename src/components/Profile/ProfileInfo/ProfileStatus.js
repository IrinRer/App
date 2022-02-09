import { useState, useEffect } from "react";
import classes from "./ProfileInfo.module.scss";


const ProfileStatus = ({ status, updateStatus }) => {
  const [editMode, setMode] = useState(false);
  const [statusLocal, setStatusLocal] = useState(status);

  useEffect(() => {
    setStatusLocal(status);
  }, [status]);

  const changeMode = () => {
    setMode(!editMode);
    updateStatus(statusLocal);
  };

  const onChangeStatus = (e) => {
    setStatusLocal(e.target.value);
  };

  return (
    <>
      {!editMode ? (
        <div className={classes.wrapper__status}>
          <p>Status:&nbsp;</p>
          <p onClick={() => changeMode()} className={classes.span_status}>
            {status || "No status"} </p>
        </div>
      ) : (
        <div>
          <input
            value={statusLocal}
            autoFocus={true}
            onBlur={() => changeMode()}
            onChange={(e) => onChangeStatus(e)}
            className={classes.input_status}
          />
        </div>
      )}
    </>
  );
};

export default ProfileStatus;

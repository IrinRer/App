import classes from "./ProfileInfo.module.scss";
import { useState, useEffect } from "react";

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
        <div>
          <p>
            Status:&nbsp;
            <span onClick={() => changeMode()} className={classes.span_status}>
              {status || "No status"}
            </span>
          </p>
        </div>
      ) : (
        <div>
          <input
            value={statusLocal}
            autoFocus={true}
            onBlur={() => changeMode()}
            onChange={(e) => onChangeStatus(e)}
            className={classes.input_status}/>
        </div>
      )}
    </>
  );
};

export default ProfileStatus;

import { useState, useEffect} from "react";

const ProfileStatus = ({status, updateStatus}) => {
  const [editMode, setMode] = useState(false);
  const [statusLocal, setStatusLocal] = useState(status);

  useEffect(() => {
    setStatusLocal(status)
  }, [status]);

  const changeMode = () => {
      setMode(!editMode);
      updateStatus(statusLocal);
  }

  const onChangeStatus = (e) => {
    setStatusLocal(e.target.value);
  }


  return (
    <>
      {!editMode ? (
        <div>
          <span onClick={() => changeMode()}>{status || 'No status'}</span>
        </div>
      ) : (
        <div>
          <input value={statusLocal} autoFocus={true} onBlur={() => changeMode()}
          onChange={(e) => onChangeStatus(e)}/>
        </div>
      )}
    </>
  );
};

export default ProfileStatus;

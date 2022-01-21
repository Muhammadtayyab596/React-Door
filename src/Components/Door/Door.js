import DoorOpen from "../../Images/DoorOpen.png"
import DoorClose from "../../Images/DoorClose.png"
import LockClose from "../../Images/LockClose.png"
import LockOpen from "../../Images/LockOpen.png"
import { useState } from 'react';
import "./Door.css"

function Door() {
    const [isDoorOn, setDoorState] = useState(false)
    const doorSource = isDoorOn ? DoorOpen : DoorClose;
    const lockSource = isDoorOn ? LockClose : LockOpen;

    function toggleBtn() {
        setDoorState(!isDoorOn)
}

    return (
        <div className ="mainCard">
            <img width="100%" height="420px" src ={doorSource}  />
            <div className = "toggleBtn">
                 <img onClick={toggleBtn}  width="70px" height="70px" src={lockSource} />
            </div>
            
        </div>
    )
}
export default Door;
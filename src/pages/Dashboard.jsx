import { useState } from "react";
import OnlineMode from "../components/OnlineMode";

const Dashboard = () => {
    const [isOnline, setIsOnline]= useState(false);
  return (
    <div>
    <h2>Welcome User!</h2>
    <OnlineMode isOnline={isOnline} setIsOnline={setIsOnline}/>

    <h3>System Notifications:</h3>
    {isOnline && (
        <p>
            Your application is offline. You won't be able to share or stream music to other devices.
        </p>
    )}
    </div>
  )
}

export default Dashboard
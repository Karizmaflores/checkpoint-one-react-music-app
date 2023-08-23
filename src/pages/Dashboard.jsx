import { useState } from "react";
import OnlineMode from "../components/OnlineMode";
import Volume from "../components/Volume";
import Quality from "../components/Quality";

const Dashboard = () => {
    const [isOnline, setIsOnline]= useState(false);
    const [volume, setVolume]= useState(20);
    const [quality, setQuality] = useState(3);
  return (
    <div>
    <h2>Welcome User!</h2>
    <div style={{display:"flex", gap:"10px"}}>
    <OnlineMode isOnline={isOnline} setIsOnline={setIsOnline}/>
    <Volume volume={volume} setVolume={setVolume}/>
    <Quality quality={quality} setQuality={setQuality} />
    </div>

    <h3>System Notifications:</h3>
    {isOnline && (
        <p>
            Your application is offline. You won't be able to share or stream music to other devices.
        </p>
    )}
    {volume >= 80 && (
      <p>
          Listening to music at a high volume could cause long-term hearing loss.
      </p>
    )}
    {quality < 2 && (
      <p>
        Music quality is degraded. Increase quality if your connection allows it.
      </p>
    )}
    </div>
  )
}

export default Dashboard
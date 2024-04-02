import { useEffect, useState } from "react";
import { FaBan, FaClock } from "react-icons/fa";

const TimerPage = () => {
  const [globalTimer, setGlobalTimer] = useState(900); // 15 minuti in secondi
  const [localTimer, setLocalTimer] = useState(120);   // 2 minuti in secondi
  const [globalDisplay, setGlobalDisplay] = useState("15:00");
  const [localDisplay, setLocalDisplay] = useState("02:00");

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    setGlobalDisplay(formatTime(globalTimer));
    setLocalDisplay(formatTime(localTimer));
  }, [globalTimer, localTimer]);

  const startGlobalTimer = () => {
    console.log("Global timer started");
    const globalInterval = setInterval(() => {
      setGlobalTimer(prevTimer => {
        if (prevTimer <= 0) {
          clearInterval(globalInterval);
          clearInterval(localInterval);
          console.log("Global timer finished");
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    const localInterval = setInterval(() => {
      setLocalTimer(prevTimer => {
        if (prevTimer <= 1) {
          console.log("Local timer finished, restarting...");
          return 120; // Riavvia il timer locale a 02:00
        }
        console.log("Local timer tick");
        return prevTimer - 1;
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(globalInterval);
      clearInterval(localInterval);
      console.log("Global timer finished");
    }, globalTimer * 1000);
  };

  return (
    <>
    {/*Second Container*/}
    <div className="w-screen h-screen p-5 flex flex-col">
        {/* Card User Container*/}
        <div className=" flex flex-row w-full justify-between">
            <div className="flex flex-col gap-3">
                 <p className="text-md text-green-custom font-bold">Next:</p>
                 {/* Card User Container*/}
                 <div className="flex flex-row items-center gap-3 bg-green-custom px-10 py-2 rounded-lg">
                    <div className="w-16 h-16">
                    <img src="src/assets/fotoProva.png" className="w-full h-full object-fill rounded-full"/>
                    </div>
                    <p className="font-semibold text-white-custom">Name Person</p>
                 </div>
            </div>
            {/* Time Riunione Container*/}
            <div className="border-2 border-green-custom rounded-md p-5 h-fit"> 
                <p className="flex flex-row items-center font-bold text-lg gap-3"><FaClock className="text-green-custom"/>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
            </div>
        </div>

        {/* User Container */}
        <div className=" flex flex-col justify-center items-center ">
            {/* foto user */}
            <div className="">
                <p> foto che sono solo</p>
            </div>
             {/* info speack user */}
             <div className="">
              <p> foto che sono solo</p>
             </div>
             {/* Timer user */}
             <div className="">
             <p> foto che sono solo</p>
             </div>
             {/* Button finish user */}
             <div className="">
             <button 
              className={`border-2 p-3 rounded-lg focus:outline-none font-bold text-lg gap-3 ${isClicked ? 'border-red-600 focus:border-red-600 text-red-600' : 'border-blue-night-custom focus:border-blue-night-custom text-blue-night-custom'}`} 
              onClick={startGlobalTimer}
             >
                 <p className="flex flex-row items-center font-bold text-lg gap-3"><FaBan/> Cliccami che sono solo</p>
            </button>
             </div>
        </div>

    </div>
    </>
  )
}

export default TimerPage;
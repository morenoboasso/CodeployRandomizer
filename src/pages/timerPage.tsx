import { useEffect, useState } from "react";
import { FaBan, FaClock } from "react-icons/fa";

interface Codeployer {
  name: string;
  photoUrl: string;
}

const TimerPage = () => {
  /* Timer */
  const [globalTimer, setGlobalTimer] = useState(900);
  const [localTimer, setLocalTimer] = useState(120);
  const [globalDisplay, setGlobalDisplay] = useState("15:00");
  const [localDisplay, setLocalDisplay] = useState("02:00");
  const [timerStarted, setTimerStarted] = useState(false);
  /* CodePloyers */
  const [codeployers, setCodeployers] = useState<Codeployer[]>([]);
  const [currentCodeployerIndex, setCurrentCodeployerIndex] = useState(0);

  /* Formattazione timer */
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    setGlobalDisplay(formatTime(globalTimer));
    setLocalDisplay(formatTime(localTimer));
  }, [globalTimer, localTimer]);

  /* API CodePloyers */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("codeployers.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Data received:", data);
        const shuffledCodeployers = shuffleArray(data);
        setCodeployers(shuffledCodeployers);
        setCurrentCodeployerIndex(0);
      } catch (error) {
        console.error("Error fetching codeployers:", error);
      }
    };
    fetchData();
  }, []);

  /* Estrazione casuale TUTTI codeployers senza ripetizioni */
  const shuffleArray = (array: []) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  /* Gestione button -> 1° click per start, dal 2° cambio persona */
  const handleTimerButtonClick = () => {
    if (!timerStarted) {
      startGlobalTimer();
      setTimerStarted(true);
    } else {
      setCurrentCodeployerIndex(
        (prevIndex) => (prevIndex + 1) % codeployers.length
      );
      setLocalTimer(120);
    }
  };

  /* Start timer globale */
  const startGlobalTimer = () => {
    const globalInterval = setInterval(() => {
      setGlobalTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(globalInterval);
          clearInterval(localInterval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    /* Timer locale con estrazione */
    const localInterval = setInterval(() => {
      setLocalTimer((prevTimer) => {
        if (prevTimer <= 1) {
          setCurrentCodeployerIndex(
            (prevIndex) => (prevIndex + 1) % codeployers.length
          );
          return 120;
        }
        return prevTimer - 1;
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(globalInterval);
      clearInterval(localInterval);
    }, globalTimer * 1000);
  };

  /* Card con speaker successivo */
  const getNextCodeployer = () => {
    const nextIndex = (currentCodeployerIndex + 1) % codeployers.length;
    return codeployers[nextIndex];
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
                <img
                  src={getNextCodeployer()?.photoUrl}
                  className="w-full h-full object-fill rounded-full"
                />
              </div>
              <p className="font-semibold text-white-custom">{getNextCodeployer()?.name}</p>
            </div>
          </div>
          {/* Time Riunione Container*/}
          <div className="border-2 border-green-custom rounded-md p-5 h-fit">
            <p className="flex flex-row items-center font-bold text-lg gap-3">
              <FaClock className="text-green-custom" />
              {globalDisplay}
            </p>
          </div>
        </div>

        {/* User Container */}
        <div className=" flex flex-col justify-center items-center ">
          {/* foto user */}
          <div className="">
            <img
              src={codeployers[currentCodeployerIndex]?.photoUrl}
              className="w-20 h-20 object-fill rounded-full"
              alt="codeployer"
            />
          </div>
          {/* info speack user */}
          <div className="">
            <p>{codeployers[currentCodeployerIndex]?.name}</p>
          </div>
          {/* Timer user */}
          <div className="">
            <p>{localDisplay}</p>
          </div>
          {/* Button finish user */}
          <div className="">
            <button
              className={`border-2 p-3 rounded-lg focus:outline-none font-bold text-lg gap-3 `}
              onClick={handleTimerButtonClick}
            >
              <p className="flex flex-row items-center font-bold text-lg gap-3">
                <FaBan />
                {timerStarted ? "Passa la parola" : "Inizia ora la riunione!"}
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimerPage;

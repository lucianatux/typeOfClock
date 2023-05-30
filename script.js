function App(){

  const [breakLength, setBreakLength] = React.useState(5);
  const [sessionLength, setSessionLength] = React.useState(25);
  const [timeLeft, setTimeLeft] = React.useState(25 * 60);
  const [timerRunning, setTimerRunning] = React.useState(false);
  const timerRef = React.useRef(null);
  const [timerLabel, setTimerLabel] = React.useState("Session");
  const audioRef = React.useRef(null);

  React.useEffect(() => {
    if (timerRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            // Timer finished, switch to break or session time
            if (timerLabel === "Session") {
              setTimerLabel("Break");
              return breakLength * 60;
            } else {
              setTimerLabel("Session");
              return sessionLength * 60;
            }
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [timerRunning, breakLength, sessionLength, timerLabel]);


  React.useEffect(() => {
    if (timeLeft === 0) {
      const audio = document.getElementById("beep");
      audio.play();
    }
  }, [timeLeft]);
  
  
  // Controlador de evento para el botón de reset
  const handleReset = () => {
    // Stop and rewind the audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    // Reset other states and values
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setTimerLabel("Session");
    setTimerRunning(false);
  };
  

  const handleBreakDecrement = () => {
    if (breakLength > 1 && !timerRunning) {
      setBreakLength((prevLength) => prevLength - 1);
    }
  };

  const handleBreakIncrement = () => {
    if (breakLength < 60 && !timerRunning) {
      setBreakLength((prevLength) => prevLength + 1);
    }
  };

  const handleSessionDecrement = () => {
    if (sessionLength > 1 && !timerRunning) {
      setSessionLength((prevLength) => {
        const newTimeLeft = (prevLength - 1) * 60;
        setTimeLeft(newTimeLeft);
        return prevLength - 1;
      });
    }
  };

  const handleSessionIncrement = () => {
    if (sessionLength < 60 && !timerRunning) {
      setSessionLength((prevLength) => {
        const newTimeLeft = (prevLength + 1) * 60;
        setTimeLeft(newTimeLeft);
        return prevLength + 1;
      });
    }
  };

  const handleStartStop = () => {
    setTimerRunning((prevState) => !prevState);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

    return <div className="main-wrapper">
        <div className="wrapper">
            <div className="title-wrapper">
                    <h2 id="title">Countdown Timer</h2>
                    <i className="fa fa-clock-o clock"></i>
            </div>
            <div className="length-control-wrapper">
                <div className="break length-control">
                    <div id="break-label">Break Label</div>
                    <div className="controls">
                        <button id="break-decrement" onClick={handleBreakDecrement} disabled={timerRunning}>
                            <i className="fa fa-arrow-down fa-2x"></i>
                        </button>
                        <div id="break-length">{breakLength}</div>
                        <button id="break-increment" onClick={handleBreakIncrement} disabled={timerRunning}>
                            <i className="fa fa-arrow-up fa-2x"></i>
                        </button>
                    </div>                
                </div>
                <div className="session length-control">
                    <div id="session-label">Session Length</div>
                    <div className="controls">
                        <button id="session-decrement" onClick={handleSessionDecrement} disabled={timerRunning}>
                            <i className="fa fa-arrow-down fa-2x"></i>
                        </button>
                        <div id="session-length">{sessionLength}</div>
                        <button id="session-increment" onClick={handleSessionIncrement} disabled={timerRunning}>
                            <i className="fa fa-arrow-up fa-2x"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="timer-wrapper">
                <div id="session">
                    <div id="timer-label">{timerLabel}</div>
                    <div id="time-left">{formatTime(timeLeft)}</div>
                </div>
                <div className="timer-control">
                    <button id="start_stop" onClick={handleStartStop}>
                        <i className="fa fa-play fa-2x"></i>
                        <i className="fa fa-pause fa-2x"></i>
                    </button>
                    <button id="reset" onClick={handleReset}>
                        <i className="fa fa-refresh fa-2x"></i>
                    </button>
                </div>
            </div>
            
        </div>
        <audio id="beep" ref={audioRef} src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        <p>by LuSCC</p>
    </div>
}

ReactDOM.render(<App/>, document.getElementById('root'));
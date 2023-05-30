function App(){
    return <div className="main-wrapper">
        <div className="wrapper">
            <div className="title-wrapper">
                    <h1 id="title">Clock</h1>
                    <i className="fa fa-clock-o clock"></i>
            </div>
            <div className="length-control-wrapper">
                <div className="break length-control">
                    <div id="break-label">Break Label</div>
                    <div className="controls">
                        <button id="break-decrement">
                            <i className="fa fa-arrow-down fa-2x"></i>
                        </button>
                        <div id="break-length">5</div>
                        <button id="break-increment">
                            <i className="fa fa-arrow-up fa-2x"></i>
                        </button>
                    </div>                
                </div>
                <div className="session length-control">
                    <div id="session-label">Session Length</div>
                    <div className="controls">
                        <button id="session-decrement">
                            <i className="fa fa-arrow-down fa-2x"></i>
                        </button>
                        <div id="session-length">25</div>
                        <button id="session-increment">
                            <i className="fa fa-arrow-up fa-2x"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="timer-wrapper">
                <div id="session">
                    <div id="timer-label">Session</div>
                    <div id="time-left">11:11</div>
                </div>
                <div className="timer-control">
                    <button id="start_stop">
                        <i className="fa fa-play fa-2x"></i>
                        <i className="fa fa-pause fa-2x"></i>
                    </button>
                    <button id="reset">
                        <i className="fa fa-refresh fa-2x"></i>
                    </button>
                </div>
            </div>
            
        </div>
        <p>by LuSCC</p>
    </div>
}

ReactDOM.render(<App/>, document.getElementById('root'));
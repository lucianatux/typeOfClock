function App(){
    return <div className="wrap">
        <div className="container">
            <h2 id="title">Clock</h2>
            <i className="fa fa-clock-o"></i>
            <div className="break length-control">
                <div id="break-label">Break Label</div>
                <div className="controls">
                    <div id="break-decrement">
                    <i className="fa fa-arrow-down fa-2x"></i>
                    </div>
                    <div id="break-length">5</div>
                    <div id="break-increment">
                    <i className="fa fa-arrow-up fa-2x"></i>
                    </div>
                </div>                
            </div>
            <div className="session length-control">
                <div id="session-label">Session Length</div>
                <div className="controls">
                    <div id="session-decrement"></div>
                    <div id="session-length">25</div>
                    <div id="session-increment"></div>
                </div>
            </div>
        </div>
    </div>
}

ReactDOM.render(<App/>, document.getElementById('root'));
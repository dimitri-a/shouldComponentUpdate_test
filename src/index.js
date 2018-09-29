import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


class Dumb extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 }
        console.log("Dumb props passed on from App:", props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.data !== nextProps.data;
    }

    render() {
        console.log('Dumb is rendering',this.props.data);
        return (
            <div>
                hi there from Dumb {++this.state.counter}<br/>
                {this.props.data}
            </div>
        );
    }
}


class App extends React.Component {
    constructor() {
        super();
        this.state = { time: Date.now() ,constant:'bla'}

        console.log('constructor');
    }

    componentDidMount() {
        console.log('this.componentDidMount');
        setInterval(this.callMe, 1000)
    }

    callMe = () => {
        this.setState({ time: Date.now() });
    };


    render() {
        console.log('render App');
        return (
            <div className="App">
            {this.state.time}
                <Dumb data={this.state.constant} />
            </div>
        );
    }
}



ReactDOM.render(
    <App />,
    document.getElementById("root")
);

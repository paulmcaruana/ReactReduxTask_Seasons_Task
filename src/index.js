import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {  //changed from a functional app component in last commit
    constructor(props) {
        super(props); //this must be done every time we define a constructor function inside a class

        //THIS IS THE ONLY TIME we do direct assignment to 
        //this.state
        this.state = { lat: null, errorMessage: '' }; //javascript object assigned to this.state

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // we called setState!!
                this.setState({ lat: position.coords.latitude});

                //we did not 
                //this.state.lat = position.coords.latitude
            },
            (err) => {
                this.setState({ errorMessage: err.message});
            }
        );
    }
    // React says we have to define render!!
    render() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }

        return <div>Loading!</div>;
        
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
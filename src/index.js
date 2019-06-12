import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';


class App extends React.Component { //creating a class based component instead of functional component 
    //adding React.Component functionality to App class by using extends

    //constructor automatically comes with props from React.Component class
    /*constructor (props) { //js specific function. First func called when instance of class is created
        super(props); //reference to parents constructor 

        this.state = { lat: null, errorMessage: '' }; //initializing state. State is a js obj with relavent data for a component. In this case we need data related to geolocation on it
        // updating state causes the component to almost instantly rerender. As opposed to functional component which won't rerender which would be bad considering that geolocation takes a couple seconds to return a position. The rendered app would lack the data
    }*/

    state = { lat: null, errorMessage: ''}; //alternate way to initializing state w/o constuctor function

    componentDidMount() {//React lifecycle method that will be called when component is initially rendered to the browser
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),//changing the state of the component. set state comes from react
            (err) => this.setState({ errorMessage: err.message})
        );
    } //componentDidMount is good for initial data loading on component. Can do inside constructor or this func but better to do here by convention

    /*componentDidUpdate() {//lifecycle method that'll be called everytime the component is updated
        console.log('My component just updated!')
    } */

    renderContent () {
        if(this.state.errorMessage && !this.state.lat) {
            return (
                <div>
                    Error: {this.state.errorMessage} 
                </div>
                );
        }

        if(!this.state.errorMessage && this.state.lat) { //passing state as a prop for SeasonDisplay
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner message="Please accept location request" />

    }

    //we need to have the render() method for react to work with class components
    render() { 
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
) //video 55 explains the basics of the app lifecyle very well
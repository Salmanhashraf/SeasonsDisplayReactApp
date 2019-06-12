import React from 'react';

const Spinner = (props) => {
    return(
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
}

Spinner.defaultProps = { //default prop if we forget to specify a prop
    message: 'Loading...'
}

export default Spinner;
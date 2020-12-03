//Higher Order Component (HOC) - A component that renders another component
// Goal of a higher order component to reuse code.
// by Performing Render hijacking, Prop manipulation, Abstract state
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Name</h1>
    <p>The info is: {props.name} </p>
    </div>
);

const withAdimWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>This is some private info</p>}
        <WrappedComponent {...props} />
        </div>
    )
}

const AdminInfo = withAdimWarning(Info)

ReactDOM.render(<AdminInfo isAdmin={true} name='Shubham'/>, document.getElementById('app'))
var React = require('react');
var ReactDOM = require('react-dom');

//Create component

class TodoComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>Helloooooooooo</h1>
                <p>net ninja</p>
                <p>{this.props.msg}</p>
            </div>
        );
    }
};

//Add to html

ReactDOM.render(<TodoComponent msg='The ninja likes cheese'/>, document.getElementById('todo-wrapper'));
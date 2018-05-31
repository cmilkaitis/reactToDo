var React = require('react');
var ReactDOM = require('react-dom');

//Create component

class TodoComponent extends React.Component{
    render(){
        return(
            <h1>Helloooooooooo</h1>
        );
    }
};

//

ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));
var React = require('react');
var ReactDOM = require('react-dom');

//Create component

class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todos: ['first thing', 'second', 'another', 'one more']
        }
    }

    render(){
        return(
            <div id="todo-list">
                <p>The busiest people have the most leisure...</p>
                <ul>
                    <li>{this.state.todos[0]}</li>
                    <li>{this.state.todos[1]}</li>
                    <li>{this.state.todos[2]}</li>
                    <li>{this.state.todos[3]}</li>
                </ul>
            </div>
        );
    }
};



//Add to html

ReactDOM.render(<TodoComponent  />, document.getElementById('todo-wrapper'));
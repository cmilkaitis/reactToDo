var React = require('react');
var ReactDOM = require('react-dom');

//Create component

class TodoComponent extends React.Component{
    render(){
        return(
            <div>
                <p><strong>Cheese name:</strong> {this.props.cheese.name}</p>
                <p><strong>Cheese smell factor:</strong> {this.props.cheese.smellFactor}</p>
                <p><strong>Cheese price:</strong> {this.props.cheese.price}</p>
            </div>
        );
    }
};

var myCheese = {name: 'Camembert', smellFactor: 'Extreme', price: '3.50'};

//Add to html

ReactDOM.render(<TodoComponent msg='The ninja likes cheese' cheese={myCheese} />, document.getElementById('todo-wrapper'));
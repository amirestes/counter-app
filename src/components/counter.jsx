// import { getByPlaceholderText } from '@testing-library/react';
import React, { Component } from 'react';


class Counter extends Component {
    state = {
        value: this.props.value
        //imageUrl: 'https://picsum.photos/200',
        //tags: ['tag1', 'tag2', 'tag3']

    };

    // constructor() { 
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = product => {
        this.setState({ value: this.state.value + 1 });
    };


    render() { 
        return (
            <div>
                <h4>{this.props.id}</h4>
                {/* <img src={this.state.imageUrl} alt="" /> */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                onClick={() => this.handleIncrement()} 
                className="btn btn-secondary btn-sm">Increment</button>
                {/* <ul>
                    { this.state.tags.map(tag => <li key={ tag }>{ tag } </li>) }
                </ul> */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;
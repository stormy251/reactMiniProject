import React, {Component} from 'react'; // this needs to still be imported because we are using JSX dom

class SearchBar extends Component {

    constructor(){
        super();

        // This is the only time in which you should access state methods or variables directly, other times
        // you should access the variables via the setState or getState methods.
        this.state = {
            term:''
        }
    }

    render(){
        return (
            <div>
                <input
                value={this.state.term}
                onChange={(event) => this.setState({term:event.target.value})} />
            </div>
        );
    }

}

export default SearchBar;

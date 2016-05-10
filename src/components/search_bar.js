import React, {Component} from 'react'; // this needs to still be imported because we are using JSX dom

class SearchBar extends Component {

    constructor(){
        super();
    }

    render(){
        return (
            <input onChange={(event) => console.log(event.target.value)} />
        );
    }

}

export default SearchBar;

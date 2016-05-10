//  importing of dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import youtubeAPI from 'youtube-api-search';

// Importing components
import SearchBar from './components/search_bar.js';

const API_KEY = "AIzaSyCwvvTsbaHiHAFi89AT6tVTWIrKXJkruAE";

const App = () => {
    return (
        <div>
            <h1>Test</h1>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);

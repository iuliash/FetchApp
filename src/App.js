import React from 'react';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import './App.css'
import PostsList from './PostsList'
import reducers from './reducer'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Provider store={createStore(reducers)}>
                    <PostsList/>
                </Provider>
            </div>
        )
    }
}

export default App;
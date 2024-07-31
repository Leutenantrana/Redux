import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import './index.css'
import {createStore} from 'redux'
import noteReducer from './reducer/noteReducer'
import {Provider} from 'react-redux'
const store = createStore(noteReducer)




const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp =()=>{
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  )
}
renderApp()
store.subscribe(renderApp)



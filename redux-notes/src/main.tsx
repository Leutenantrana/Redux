import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import './index.css'
import noteReducer,{setNotes} from './reducer/noteReducer'
import filterReducer from './reducer/filterReducer'
import {Provider} from 'react-redux'
import store from './store'


console.log(store.getState())
store.subscribe(()=> console.log(store.getState()))



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



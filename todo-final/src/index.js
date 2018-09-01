import React                 from 'react'
import ReactDOM              from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

/**
 * CSS
 */
 import './styles/generic/generic.css'

 /**
  * Router
  */
import Router from './router'

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();

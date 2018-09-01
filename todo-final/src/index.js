import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import Router from './router'

/**
 * CSS
 */

 import './styles/generic/generic.css'

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();

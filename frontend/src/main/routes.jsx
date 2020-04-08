import React from 'react'
import { Route, Redirect} from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <BrowserRouter>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </BrowserRouter>
)

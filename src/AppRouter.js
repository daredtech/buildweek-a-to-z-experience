import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginForm from './LoginForm';

const AppRouter = () => {
    return(
        <div className='page-view'>
            <BrowserRouter>
            <Switch>
                {/* login */}
                <Route path='/login' component={LoginForm}/>

            </Switch>
            </BrowserRouter>

        </div>
    )

}

export default AppRouter;
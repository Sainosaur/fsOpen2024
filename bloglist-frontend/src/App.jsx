import { useState, useEffect } from 'react'
import Login from './components/Login'
import RenderBlog from './components/RenderBlog'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { logOut} from './stores/user'
import Users from './components/Users'

const App = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>blogs</h2>
            {user ? <p>{`${String(user.name)} logged in`}<button onClick={() => {
                    // reloads the window to repeat the user checking process and return to a login screen
                    dispatch(logOut())
                }}>Log Out</button></p> : null}
            <Router>
                <Routes>
                    <Route path='/' Component={user === null ? Login : RenderBlog}/>
                    <Route path='/users' Component={Users} />
                </Routes>

            </Router>
        </div>
    )
}

export default App
import { useState, useEffect } from 'react'
import Login from './components/Login'
import RenderBlog from './components/RenderBlog'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route, Link } from 'react-router-dom'
import { logOut} from './stores/user'
import Users from './components/Users'
import User from './components/User'
import BlogPage from './components/BlogPage'

const Menu = ({user}) => {
    const padding = {
        paddingRight : 5
    }
    return (
        <div>
            <Link to='/' style={padding}>Home</Link>
            <Link to='/users'>Users</Link>
            {user ? <p style={padding}>{`${String(user.name)} logged in`}<button onClick={() => {
                    // reloads the window to repeat the user checking process and return to a login screen
                    dispatch(logOut())
                }}>Log Out</button></p> : null}
        </div>

    )
}

const App = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    return (
        <>
            <h2>blogs</h2>
            <Menu user={user} />
                <Routes>
                    <Route path='/' Component={user === null ? Login : RenderBlog}/>
                    <Route path='/users' Component={Users} />
                    <Route path='/users/:id' Component={User} />
                    <Route path='/blogs/:id' Component={BlogPage} />
                </Routes>

        </>
    )
}

export default App
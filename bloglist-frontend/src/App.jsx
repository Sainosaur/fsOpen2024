import { useState, useEffect } from 'react'
import Login from './components/Login'
import RenderBlog from './components/RenderBlog'
import { useSelector } from 'react-redux'


const App = () => {
    const user = useSelector(state => state.user)

    return (
        <div>
            <h2>blogs</h2>
            {user === null ? <Login /> : <RenderBlog />}
        </div>
    )
}

export default App
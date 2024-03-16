import { useState, useEffect } from 'react'
import Login from './components/Login'
import RenderBlog from './components/RenderBlog'

const App = () => {
    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('user')))

    return (
        <div>
            <h2>blogs</h2>
            {user === null ? <Login setUser={setUser} /> : <RenderBlog setUser={setUser} user={user}/>}
        </div>
    )
}

export default App
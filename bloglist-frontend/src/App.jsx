import Login from './components/Login'
import RenderBlog from './components/RenderBlog'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import { logOut} from './stores/user'
import Users from './components/Users'
import User from './components/User'
import BlogPage from './components/BlogPage'
import { Navbar, NavbarItem, NavbarContent, Button, Chip, Card } from '@nextui-org/react'
const Menu = ({user}) => {    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const padding = {
        paddingRight : 5
    }
    return (
        <div>
            <Navbar maxWidth='full' shouldHideOnScroll>
                <NavbarContent justify='start'>
                    <Chip>                   
                        Blog App
                    </Chip>
                </NavbarContent>
                <NavbarContent>
                    <NavbarItem >
                        <Button justify='center' color={ location.pathname == '/' ? 'primary' : null} onClick={() => navigate('/')} >Home</Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button color={ location.pathname == '/users' ? 'primary' : null} onClick={() => navigate('/users')} to='/users'>Users</Button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarItem justify='end'>
                {user ? <p style={padding}>{`${String(user.name)} logged in`}<Button variant="bordered" onClick={() => {
                    // reloads the window to repeat the user checking process and return to a login screen
                    dispatch(logOut())
                }}>Log Out</Button></p> : null}
                </NavbarItem>
            </Navbar>



        </div>

    )
}

const App = () => {
    const user = useSelector(state => state.user)
    return (
        <>
            <Menu user={user} />
                <Card>
                    <Routes>
                            <Route path='/' Component={user === null ? Login : RenderBlog}/>
                            <Route path='/users' Component={Users} />
                            <Route path='/users/:id' Component={User} />
                            <Route path='/blogs/:id' Component={BlogPage} />
                    </Routes>
                </Card>
        </>
    )
}

export default App
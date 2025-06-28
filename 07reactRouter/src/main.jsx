import { render } from 'preact'
import './index.css'
import { App } from './app.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path:"home",
                element:<Home/>
            },{
                path:"about",
                element:<About/>
            },{
                path:"contact",
                element:<Contact/>
            },{
                path:"user/:userid",
                element:<User/>
            },{
                loader:githubInfoLoader,
                path:"github",
                element:<Github/>,
                
            }
        ]
    }
])

render(<RouterProvider router={router}/>, document.getElementById('app'))

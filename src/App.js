
import React, { lazy, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar';
import Body from './components/Body'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import RestrauntMenus from './components/RestaurantMenus'

import UserContext from './utils/userContext';
import { Provider } from 'react-redux'; //providing Provider for cartSlice.js
import appStore from './utils/appStore'  // importing appStore redux config
import Cart from '../src/components/Cart'
import Footer from './components/Footer'
import Blog from './components/Blog'
import Login from './components/Login';

// const Grocery = lazy(() => import('./components/Grocery'));
const App = () => {



    const [userName, setUserName] = useState()



    useEffect(() => {
        const data = {
            name: "Prakash"
        }
        setUserName(data.name)


    }, [])



    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <Provider store={appStore}>

                <Navbar />
                <Outlet />
            </Provider>
            <Footer />
        </UserContext.Provider >




    );
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/cart',
                element: <Cart />
            },

            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurants/:resId',
                element: <RestrauntMenus />

            },
            {
                path: '/blog',
                element: <Blog />

            },
            {
                path: '/login',
                element: <Login />

            },
        ]

    },

])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)







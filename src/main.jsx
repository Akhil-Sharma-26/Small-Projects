import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, Outlet, createRoutesFromElements, Route } from 'react-router-dom'
import HomePage from './Pages/Home_Page.jsx'
import About from './Pages/About_Page.jsx'
import Contact from './Pages/Contact_Me.jsx'
import User, { githubAPIcall } from './Pages/User_Page.jsx'
import { Login, Profile } from './components/index.js'
import Theme from './Pages/Theme_Changer.jsx'
import TodoList from '../src/components/TodosList.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children:[
//       {
//         path: '',
//         element: <HomePage />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact-me',
//         element: <Contact/> 
//       }
//     ]
//   }
// ])
// Both above and below are right things... just different syntax
import { Provider } from 'react-redux'
import { store } from '../src/store/store.js'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<HomePage/>  }/>
      <Route path='/about' element={<About/>  }/>
      <Route path='/contact-me' element={<Contact/>  }/>
      <Route 
      loader={githubAPIcall}
      path='/users/:id' 
      element={<User/>  }/>
      <Route path='/login' element={<Login/>  }/>
      <Route path='/profile' element={<Profile/>  }/>
      <Route path='/theme-changer' element={<Theme/>  }/>
      <Route path='/todo' element={<TodoList/>  }/>
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)

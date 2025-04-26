import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Rootlayout from './layouts/RootLayout'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import About from './pages/About'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PageNotFound from './pages/PageNotFound'
import PrivateRoute from './components/PrivateRoute'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path='/post/:id' element={<PostDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
        <Route path='/admin/create' element={<PrivateRoute><CreatePost /></PrivateRoute>} />
        <Route path='/admin/edit/:id' element={<PrivateRoute><EditPost /></PrivateRoute>} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App

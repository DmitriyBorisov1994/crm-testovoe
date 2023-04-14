import { Navigate } from 'react-router'
import { useAppSelector } from '../redux/hooks'
import { selectLogin } from '../redux/selectors/authSelectors'
import { Outlet } from 'react-router-dom'

const RequireAuth = () => {
   const login = useAppSelector(selectLogin)
   if (!login) return (
      <Navigate to='/login' />
   )
   return (
      <Outlet />
   )
}

export default RequireAuth
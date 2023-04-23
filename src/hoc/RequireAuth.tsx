import { Navigate } from 'react-router'
import { useAppSelector } from '../redux/hooks'
import { selectLogin } from '../redux/selectors/authSelectors'

type RequireAuthProps = {
   children: JSX.Element
}

const RequireAuth = ({ children }: RequireAuthProps) => {
   const login = useAppSelector(selectLogin)
   if (!login) return (
      <Navigate to='/login' />
   )
   return (
      children
   )
}

export default RequireAuth
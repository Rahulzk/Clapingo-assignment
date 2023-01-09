import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/login.scss'

const Login = () => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({ type: 'setUserToLocalStorage', payload: { userid, password } })
    navigate('/')
  }


  return (
    <div className='login'>
        <form className='login-wrapper' onSubmit={(e)=>handleLogin(e)}>
          <input type="text" name="userid" placeholder='userId' required onChange={(e)=>setUserid(e.target.value)}/>
          <input type="password" name="password" placeholder='password' required onChange={(e)=>setPassword(e.target.value)}/>
          <button className='btn btn-primary' type='submit' >Login</button>
        </form>
    </div>
  )
}

export default Login
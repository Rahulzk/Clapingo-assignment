import { Box } from '@mui/material'
import {BsFillPersonFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import '../styles/header.scss'

const Header = () => {
  return (
    <Box className='header'>
      <div className="logo-image"> 
      </div>
      <div className="header-item">
        <p>Plans & Pricing</p>
        <p>Teach with us</p>
        <p>Affiliate program</p>
        <p>Kids</p>
      </div>
      <div className="login-btn">
        <Link to='/login'>
          <button className='btn'>
            <BsFillPersonFill />
            <span>Login</span>
          </button>
        </Link>
      </div>
    </Box>
  )
}

export default Header
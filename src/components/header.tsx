import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            Home
          </Link>
          <Link className='navbar-brand' to='/teams'>
            Teams
          </Link>
          <Link className='navbar-brand' to='/teams'>
            Teams
          </Link>
          <Link className='navbar-brand' to='/teams'>
            Teams
          </Link>
          <Link className='navbar-brand' to='/teams'>
            Teams
          </Link>
          <Link className='navbar-brand' to='/teams'>
            Teams
          </Link>
          <Link className='navbar-brand' to='/teams'>
            Teams
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header

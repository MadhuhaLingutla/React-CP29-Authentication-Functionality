// Write your JS code

import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="nav-container">
    <li className="nav-item">
      <Link className="nav-link" to="/">
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/about">
        About
      </Link>
    </li>
  </ul>
)

export default withRouter(Header)

// Write your JS code here

import './index.css'

const Header = () => (
  <nav>
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="image"
      />
      <div className="elements">
        <li className="list-item">Home</li>
        <li className="list-item">Products</li>
        <li className="list-item">Cart</li>
        <button className="button" type="button">
          Logout
        </button>
      </div>
    </div>
  </nav>
)

export default Header

// Write your JS code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="content">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <p className="description">
          Fashion is part of the daily air jhkfj kjdshf fafa jafl ;fd foiusef;
          hf flkhf ls dhc fffsodd d;doddsuf ksdfh asfiN,cIfaoi fkdjhfiffjif S
          FHKJDI KSFHDI KEFKUHF KSFH
        </p>
        <button type="button">Shop Now</button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="should be clothes that get you noticed"
        className="image"
      />
    </div>
  </>
)

export default Home

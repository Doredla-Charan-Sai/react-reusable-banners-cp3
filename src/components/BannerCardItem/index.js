// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerListItem} = props
  const {headerText, description, className} = bannerListItem
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="card-main-head">{headerText}</h1>
        <p className="card-para">{description}</p>
        <button className="card-button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem

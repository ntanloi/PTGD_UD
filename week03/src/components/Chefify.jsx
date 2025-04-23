import chefify from "../assets/chefify.png";
import avatar from "../assets/avatar.png";
import list from '../assets/list_filter.png';
import slider from '../assets/slider.png'
import rating5 from '../assets/rating_5.png'
import rating4 from '../assets/rating_4.png'
import rating3 from '../assets/rating_3.png'
import rating2 from '../assets/rating_2.png'
import rating1 from '../assets/rating_1.png'
import nothing from '../assets/nothing.png'
import chefifywhite from '../assets/chefifywhite.png'

export default function Chefify() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-left">
          <img src={chefify} alt="" />
          <input type="text" placeholder="budding" />
        </div>
        <div className="header-center">
          <a href="#">What to cook</a>
          <a href="#">Recipes</a>
          <a href="#">Ingredients</a>
          <a href="#">Occassions</a>
          <a href="#">About us</a>
        </div>
        <div className="header-right">
          <button>Your Recipe Box</button>
          <img src={avatar} alt="" />
        </div>
      </div>

      <div className="menu">
        <div className="menu-box">
          <div className="menu-title">
            <img src={list} />
            <p>FILTERS</p>
          </div>
          <div className="menu-section">
            <p>Types</p><span>icon</span>
          </div>
          <div className="menu-checkbox-row">
            <div><input type="checkbox" /><span>Pan-fried</span></div>
            <div><input type="checkbox" /><span>Stir-fried</span></div>
          </div>
          <div className="menu-checkbox-row">
            <div><input type="checkbox" /><span>Grilled</span></div>
            <div><input type="checkbox" /><span>Roasted</span></div>
          </div>
          <div className="menu-checkbox-row">
            <div><input type="checkbox" /><span>Sauteed</span></div>
            <div><input type="checkbox" /><span>Baked</span></div>
          </div>
          <div className="menu-checkbox-row">
            <div><input type="checkbox" /><span>Steamed</span></div>
            <div><input type="checkbox" /><span>Stewed</span></div>
          </div>

          <div className="divider"></div>

          <div className="menu-section">
            <p>Time</p><span>icon</span>
          </div>
          <div className="menu-time"><p>30 mins</p><p>50 mins</p></div>
          <img src={slider} alt="" />

          <div className="divider"></div>

          <div className="menu-section">
            <p>Rating</p><span>icon</span>
          </div>
          {[rating5, rating4, rating3, rating2, rating1].map((img, index) => (
            <div className="menu-rating" key={index}>
              <input type="checkbox" /><img src={img} />
            </div>
          ))}
          <div className="divider"></div>
          <div className="menu-apply">
            <button>Apply</button>
          </div>
        </div>
      </div>

      <div className="content">
        <p className="no-results">Sorry, no results were found for “budding”</p>
        <img src={nothing} alt="" />
        <p className="alt-text">We have all your Independence Day sweets covered.</p>
        <div className="alt-tags">
          <button>Sweet Cake</button>
          <button>Black Cake</button>
          <button>Pozole Verder</button>
          <button>Healthy food</button>
        </div>
      </div>

      <div className="footer">
        <div className="footer-left">
          <div>
            <p>About us</p>
            <p>Welcome to our website, a wonderful place to explore and learn how to cool like a pro</p>
            <div className="footer-subscribe">
              <input type="text" placeholder="Enter your email" />
              <button>Send</button>
            </div>
          </div>
          <div className="footer-bottom">
            <img src={chefifywhite} />
            <p>2021 Chefify Company</p>
            <a href="#">Term of Servical Privacy Policy</a>
          </div>
        </div>
        <div className="footer-middle">
          <div>
            <p>Learn More</p>
            <a href="#">Our Cooks</a>
            <a href="#">See Our Features</a>
            <a href="#">FAQ</a>
          </div>
          <div>
            <p>Shop</p>
            <a href="#">Gift Subscription</a>
            <a href="#">Send US Feedback</a>
          </div>
        </div>
        <div className="footer-right">
          <p>Recipes</p>
          <a href="#">What to Cook This Week</a>
          <a href="#">Pasta</a>
          <a href="#">Dinner</a>
          <a href="#">Healthy</a>
          <a href="#">Vegetarian</a>
          <a href="#">Vegan</a>
          <a href="#">Chirtmas</a>
        </div>
      </div>
    </div>
  );
}
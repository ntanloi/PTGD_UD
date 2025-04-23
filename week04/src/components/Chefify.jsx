import { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { MdNavigateNext } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import { Recipe } from "./Recipe";
import chefify from "../assets/chefify.png";
import avatar from "../assets/avatar.png";
import chefifywhite from "../assets/chefifywhite.png";

function Chefify() {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    fetch('https://67cd6670dd7651e464ee43e8.mockapi.io/Recipe')
      .then(res => res.json())
      .then(data => setRecipeList(data));
  }, []);

  return (
    <div className="chefify-container">
      <div className="chefify-header">
        <div className="chefify-header-left">
          <img src={chefify} alt="" />
          <input type="text" placeholder="cakescasca" />
        </div>
        <div className="chefify-nav">
          <a href="#">What to cook</a>
          <a href="#">Recipes</a>
          <a href="#">Ingredients</a>
          <a href="#">Occassions</a>
          <a href="#">About us</a>
        </div>
        <div className="chefify-user">
          <button>Your Recipe Box</button>
          <img src={avatar} alt="" />
        </div>
      </div>

      <div className="chefify-content">
        <div className="breadcrumb">
          <p>Home</p>
          <MdNavigateNext size="28px" />
          <p className="breadcrumb-active">Your Recipe Box</p>
        </div>

        <div className="user-info">
          <p>Emma Gonzalez's Recipe Box</p>
          <div className="user-profile">
            <img src={avatar} width="164" height="164" />
            <div className="user-description">
              <p>
                Emma Gonzalez is a deputy editor at Chefify...
              </p>
              <div className="user-actions">
                <p>6.5k Subcribes</p>
                <button>Share <RiShareForwardLine size={20} /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="table-item">
          <div className="tab-buttons">
            <button className="active">Saved Recipes</button>
            <button>Folders</button>
            <button>Recipes by Genevene</button>
          </div>
          <div className="recipe-list">
            {recipeList.map((data, index) => (
              <Recipe key={index} item={data} />
            ))}
          </div>
        </div>
      </div>

      <div className="chefify-footer">
        <div className="footer-main">
          <div className="footer-about">
            <p>About us</p>
            <p>Welcome to our website...</p>
            <div className="subscribe-form">
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
        <div className="footer-column">
          <p>Learn More</p>
          <a href="#">Our Cooks</a>
          <a href="#">See Our Features</a>
          <a href="#">FAQ</a>
        </div>
        <div className="footer-column">
          <p>Shop</p>
          <a href="#">Gift Subscription</a>
          <a href="#">Send US Feedback</a>
        </div>
        <div className="footer-column">
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

export default Chefify;

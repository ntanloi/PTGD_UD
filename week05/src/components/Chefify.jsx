import chefify from "../assets/chefify.png";
import avatar from "../assets/avatar.png";
import slider from '../assets/slider.png';
import chefifywhite from '../assets/chefifywhite.png';
import { useEffect, useState } from 'react';
import { Recipe } from './Recipe';
import { FaBars } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const Chefify = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8; // 8 recipes per page as shown in the image
  const totalPages = 9; // Hardcoded as per image ("Trang 5 / 9")

  useEffect(() => {
    fetch('https://67cd6670dd7651e464ee43e8.mockapi.io/Recipe')
      .then(res => res.json())
      .then(data => {
        setRecipeList(data);
      });
  }, []);

  // Pagination logic
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipeList.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      {/* header */}
      <div className="header">
        <div className="header-search">
          <img src={chefify} className="w-auto h-auto" alt="Chefify Logo" />
          <input type="text" className="w-full rounded-lg bg-gray-400 border-0 ps-5 py-1" placeholder="Salad" />
        </div>
        <div className="header-nav">
          <div className="header-nav-links">
            <a href="#" className="text-[var(--gray)] text-base">What to cook</a>
            <a href="#" className="text-[var(--gray)] text-base">Recipes</a>
            <a href="#" className="text-[var(--gray)] text-base">Ingredients</a>
            <a href="#" className="text-[var(--gray)] text-base">Occasions</a>
            <a href="#" className="text-[var(--gray)] text-base">About Us</a>
          </div>
          <div className="header-actions">
            <button className="text-[var(--lightpink)] text-base bg-[var(--pink)] rounded-md p-2">Your Recipe Box</button>
            <img className='userAvatar' src={avatar} alt="User Avatar" />
          </div>
        </div>
      </div>
      {/* menu */}
      <div className="menu">
        <div className="menu-filter">
          <div className="filter-header">
            <FaBars className="hamburger-icon" />
            <h3 className="font-bold text-lg text-start">FILTERS</h3>
          </div>
          <div className="filter-section">
            <div className="filter-type-header">
              <h4 className="font-bold text-md">Type</h4>
              <span>icon</span>
            </div>
            <div className="filter-type-options">
              <div className="filter-column">
                <div className="filter-option">
                  <input type="checkbox" />
                  <span>Stir-fried</span>
                </div>
                <div className="filter-option">
                  <input type="checkbox" />
                  <span>Roasted</span>
                </div>
                <div className="filter-option">
                  <input type="checkbox" />
                  <span>Baked</span>
                </div>
                <div className="filter-option">
                  <input type="checkbox" />
                  <span>Stewed</span>
                </div>
              </div>
              <div className="filter-column">
                <div className="filter-option">
                  <input type="checkbox" />
                  <span>Pan-fried</span>
                </div>
                <div className="filter-option">
                  <input type="checkbox" />
                  <span>Grilled</span>
                </div>
                <div className="filter-option">
                  <input type="checkbox" />
                  <span>Sauteed</span>
                </div>
                <div className="filter-option">
                  <input type="checkbox" />
                  <span>Steamed</span>
                </div>
              </div>
            </div>
            <div className="filter-time">
              <div className="filter-time-header">
                <h4 className="font-bold text-md">Time</h4>
                <span>icon</span>
              </div>
              <div className="time-labels">
                <span>30 minutes</span>
                <span>50 minutes</span>
              </div>
              <img src={slider} className="px-[1rem] mt-3" alt="Time Slider" />
            </div>
            <div className="filter-rating">
              <div className="filter-rating-header">
                <h4 className="font-bold text-md">Rating</h4>
                <span>icon</span>
              </div>
              <div className="filter-rating-options">
                <div className="rating-option">
                  <input type="checkbox" />
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                </div>
                <div className="rating-option">
                  <input type="checkbox" />
                  <div className="stars">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                    <FaStar className="star-icon gray" />
                  </div>
                </div>
                <div className="rating-option">
                  <input type="checkbox" />
                  <div className="stars">
                    {[...Array(3)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <FaStar key={i + 3} className="star-icon gray" />
                    ))}
                  </div>
                </div>
                <div className="rating-option">
                  <input type="checkbox" />
                  <div className="stars">
                    {[...Array(2)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                    {[...Array(3)].map((_, i) => (
                      <FaStar key={i + 2} className="star-icon gray" />
                    ))}
                  </div>
                </div>
                <div className="rating-option">
                  <input type="checkbox" />
                  <div className="stars">
                    <FaStar className="star-icon" />
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i + 1} className="star-icon gray" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="apply-button">
              <button className="apply-button-btn">Apply</button>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="content">
        <div className="content-header">
          <h1 className="content-title">Salad (32)</h1>
          <select className="rounded-md border-1 w-30 p-1">
            <option>A-Z</option>
          </select>
        </div>
        <div className="recipe-list">
          {currentRecipes.map((item, index) => (
            <Recipe key={index} item={item} />
          ))}
        </div>
        <div className="pagination">
          <button
            className="pagination-arrow"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <MdNavigateBefore size={24} />
          </button>
          <span className="pagination-text">Trang {currentPage} / {totalPages}</span>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((page) => (
            <button
              key={page}
              className={`pagination-number ${currentPage === page ? 'active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="pagination-arrow"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <MdNavigateNext size={24} />
          </button>
        </div>
      </div>
      {/* footer */}
      <div className="footer">
        <div className="footer-about">
          <div className="footer-about-content">
            <h2 className="font-bold">About Us</h2>
            <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
            <div className="footer-email">
              <input type="text" placeholder="Enter your email" className="p-4 bg-white border-0 rounded-md text-gray-700 flex-[6]" />
              <button className="footer-email-btn">Send</button>
            </div>
          </div>
          <div className="footer-bottom">
            <img src={chefifywhite} alt="Chefify White Logo" />
            <p>2023 Chefify Company</p>
            <p>Terms of Service | Privacy Policy</p>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-links-content">
            <div className="links-section">
              <h2 className="font-bold">Learn More</h2>
              <p>Our Cooks</p>
              <p>Seen Our Features</p>
              <p>FAQ</p>
            </div>
            <div className="links-section">
              <h2 className="font-bold">Shop</h2>
              <p>Gift Subsciption</p>
              <p>Send us Feedback</p>
            </div>
          </div>
        </div>
        <div className="footer-recipes">
          <div className="footer-recipes-content">
            <h2 className="font-bold">Recipes</h2>
            <p>What to Cook This Week</p>
            <p>Pasta</p>
            <p>Dinner</p>
            <p>Dinner</p>
            <p>Healthy</p>
            <p>Vegetarian</p>
            <p>Vegan</p>
            <p>Christmas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefify;
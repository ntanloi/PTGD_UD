import { CiBookmark } from "react-icons/ci";

export function Recipe({ item }) {
  return (
    <div className="recipe-container">
      <img src={item.img} height="176px" width="auto" className="recipe-image" alt={item.name} />
      <div className="recipe-details">
        <div className="recipe-header">
          <p className="recipe-title">{item.name}</p>
          <button className="bookmark-button">
            <CiBookmark size={25} />
          </button>
        </div>
        <p className="recipe-time">{item.time} minutes</p>
      </div>
    </div>
  );
}
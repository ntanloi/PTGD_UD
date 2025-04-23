import { CiBookmark } from "react-icons/ci";

export function Recipe({ item }) {
  return (
    <div className="recipe-container">
      <img
        src={item.img}
        height="176px"
        width="273px"
        className="recipe-img"
        alt={item.name}
      />
      <div className="recipe-content">
        <div className="recipe-header">
          <p className="recipe-name">{item.name}</p>
          <button className="bookmark-btn">
            <CiBookmark size={25} />
          </button>
        </div>
        <p className="recipe-time">{item.time} minutes</p>
      </div>
    </div>
  );
}

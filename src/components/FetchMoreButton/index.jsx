import "./index.css"

const FetchMoreButton = ({ onClick }) => {  
    return (
      <div>
        <button className="loadMore_button" onClick={onClick}>Load more</button>
      </div>
    );
};

export default FetchMoreButton
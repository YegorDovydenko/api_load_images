import Header from "./Header";
import ContentList from "./ContentList";
import { useLoadContent } from "../hooks/useLoadContent";
import "./App.css";

const App = () => {
  const {imgList, nothingFound, getContent, FetchMore} = useLoadContent();

  return (
    <div className="App">
      <Header onSearch={getContent} />
      <div className="main">
        <h1>Simple content list</h1>
        {
          imgList.length > 0
          ?
          <>
            <ContentList content={imgList} />
            <FetchMore  />
          </>
          : 
          <h2>{nothingFound}</h2>
        }
      </div>      
    </div>
  );
};

export default App;

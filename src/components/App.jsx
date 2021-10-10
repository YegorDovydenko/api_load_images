import Header from "./Header";
import ContentList from "./ContentList";
import { useLoadContent } from "../hooks/useLoadContent";
import "./App.css";

const App = () => {
  const {imgList, getContent, FetchMore} = useLoadContent();

  return (
    <div className="App">
      <Header onSearch={getContent} />
      <div className="main">
        <h1>Simple content list</h1>
        <ContentList content={imgList} />
        <FetchMore  />
      </div>      
    </div>
  );
};

export default App;

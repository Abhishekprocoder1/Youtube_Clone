import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Appcontext } from "./Context/Contextapi";

import Header from "./Component/Header";
import Feed from './Component/Feed';
import VideoDetails from './Component/VideoDetails'
import SearchResult from './Component/SearchResult'

function App() {
  return (
    <Appcontext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header/>
          <Routes>
            <Route path="/" element={<Feed/>}/>
            <Route path="/searchResult/:searchQuery" element={<SearchResult/>}/>
            <Route path="/video/:id" element={<VideoDetails/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Appcontext>
  );
}

export default App;

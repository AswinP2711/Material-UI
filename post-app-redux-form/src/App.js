import { Route, Routes } from "react-router";
import "./App.css";
import AddPost from "./app/features/post/addPost";
import EditPost from "./app/features/post/editPost";
import PostOptions from "./app/features/post/postOptions";
import Home from "./app/home";
import Header from "./app/navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/postoption" element={<PostOptions />} />
        <Route path="/editpost/:postId" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;

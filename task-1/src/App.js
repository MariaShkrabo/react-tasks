import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home.component";
import User from "./routes/user/User.component";
import Post from "./routes/post/Post.component";
import Navigation from "./routes/navigation/Navigation.component";
import UsersPage from "./routes/usersPage/UsersPage.component";

const App = () => { 
  return (
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path="user-list" element={<UsersPage/>}></Route>
          <Route path="user-list/user" element={<User/>}></Route>
          <Route path="user-list/user/post" element={<Post/>}></Route>
          <Route path="post" element={<Post/>}></Route>
        </Route>
      </Routes>
  );
}

export default App;

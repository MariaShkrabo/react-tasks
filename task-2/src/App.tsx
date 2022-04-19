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
          <Route index element={<Home />} />
          <Route path="user-list" element={<UsersPage/>} />
          <Route path="user-list/user" element={<User/>} />
          <Route path="user-list/user/post" element={<Post/>} />
          <Route path="post" element={<Post/>} />
        </Route>
      </Routes>
  );
}

export default App;

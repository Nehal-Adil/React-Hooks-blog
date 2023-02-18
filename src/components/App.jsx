import {Routes, Route} from 'react-router-dom';
import {Navbar, Home, CreatePost, PostDetail } from "./";

// import firebase from "firebase/compat/app"
// import 'firebase/compat/firestore';
// import { firestore } from "./Firebase";

function App() {

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path='/' component={<Home />} />
        <Route path='/post/:postId' component={<PostDetail />} />
        <Route path='/create-post' component={<CreatePost />} />
      </Routes>
    </div>
  )
}

export default App;

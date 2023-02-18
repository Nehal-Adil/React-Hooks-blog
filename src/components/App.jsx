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
        <Route path='/' element={<Home />} />
        <Route path='/post/:postId' element={<PostDetail />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
    </div>
  )
}

export default App;

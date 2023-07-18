import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css'
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import AddPostPage from './pages/AddPostPage';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/:id' exact element={<PostPage />} />
            <Route path='/add' exact element={<AddPostPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

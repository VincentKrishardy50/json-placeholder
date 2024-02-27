import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Post from './pages/post.jsx';
import Album from './pages/album.jsx';
import Comment from './pages/comment.jsx';
import Photo from './pages/photo.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/post",
    children: [
      {
        path: ":userId",
        children: [
          {
            path: "",
            element: <Post />
          },
          {
            path: "comments",
            children: [
              {
                path: ":postId",
                element: <Comment />,
              },
            ]
          },
        ]
      },
    ]
  },
  {
    path: "/albums",
    children: [
      {
        path: ":userId",
        children: [
          {
            path: "",
            element: <Album />
          },
          {
            path: "photos",
            children: [
              {
                path: ":albumId",
                element: <Photo />,
              },
            ]
          },
        ]
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

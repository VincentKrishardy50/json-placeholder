import { Button, Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import Header from "../components/header";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import UserDetail from "../components/user_detail";
import PostList from "../components/post_list";
import MySpinner from "../components/own_spinner";

export default function Post() {
  const [detail, setDetail] = useState({});
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const userDetailURL =
    "https://jsonplaceholder.typicode.com/users/" + useParams().userId;
  const userPostsURL =
    "https://jsonplaceholder.typicode.com/posts?userId=" + useParams().userId;

  useEffect(() => {
    axios.get(userDetailURL).then(
      (response) => {
        setDetail(response.data);
        setLoading(false)
      },
      (error) => {
        console.error('Error fetching data:', error);
        setLoading(false)
      }
    );

    axios.get(userPostsURL).then(
      (response) => {
        setPosts(response.data);
        setLoading(false)
      },
      (error) => {
        console.error('Error fetching data:', error);
        setLoading(false)
      }
    );
  }, []);
  return (
    <div className="container" style={{ maxWidth: "900px" }}>
      <div className="mt-5">
        <Header />
        <Link to="../../">
          <Button color="secondary">Back</Button>
        </Link>

        <div className="mb-5 mt-5">
          <div className="text-center">
            <h5>User Information</h5>
          </div>
          {loading ? <MySpinner/> : <UserDetail detail={detail}/>}
          
        </div>

        <div className="mb-5">
          <div className="text-center mb-5">
            <h5>Post List</h5>
          </div>
          {loading ? <MySpinner/> : <PostList posts={posts} />}
          
        </div>
      </div>
    </div>
  );
}

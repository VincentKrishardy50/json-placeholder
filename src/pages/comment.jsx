import { Button } from "reactstrap";
import Header from "../components/header";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import PostDetail from "../components/post_detail";
import CommentList from "../components/comment_list";
import MySpinner from "../components/own_spinner";

export default function Comment() {
  const [comment, setComment] = useState([]);
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const postURL =
    "https://jsonplaceholder.typicode.com/posts/" + useParams().postId;
  const allCommentURL =
    "https://jsonplaceholder.typicode.com/comments/?postId=" + useParams().postId;

  useEffect(() => {
    axios.get(postURL).then(
      (response) => {
        setPost(response.data);
        setLoading(false)
      },
      (error) => {
        console.error('Error fetching data:', error);
        setLoading(false)
      }
    );

    axios.get(allCommentURL).then(
      (response) => {
        setComment(response.data);
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
        <div className="mb-5">
          <div className="text-center">
            <h5>Post Detail</h5>
          </div>
          {loading ? <MySpinner/> : <PostDetail post={post} />}
          
        </div>

        <div className="mb-5">
          <div className="text-center mb-5">
            <h5>Comment List</h5>
          </div>
          {loading ? <MySpinner/> :<CommentList comment={comment} />}
          
        </div>
      </div>
    </div>
  );
}

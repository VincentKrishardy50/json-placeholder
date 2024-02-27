import { Link } from "react-router-dom";
import {
    Card,
    CardBody,
    CardTitle,
    CardText
  } from "reactstrap";

export default function PostList({posts}) {
  return (
    <>
      {posts.map((post, index) => (
        <Card key={index} className="mt-3">
          <CardBody>
            <CardTitle tag="h5">{post.title}</CardTitle>
            <CardText>{post.body}</CardText>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-2">
              <Link
                to={`comments/${post.id}`}
                style={{ textDecoration: "none" }}
              >
                View Comments
              </Link>
            </div>
          </CardBody>
        </Card>
      ))}
    </>
  );
}

import {
    Card,
    CardHeader,
    CardBody,
    CardText
  } from "reactstrap";
export default function PostDetail({post}){
    return(
        <Card className="mt-3">
            <CardHeader>{post.title}</CardHeader>
            <CardBody>
              <CardText>{post.body}</CardText>
            </CardBody>
          </Card>
    )
}
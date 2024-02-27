import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
  } from "reactstrap";

export default function CommentList({comment}) {
  return (
    <>
      {comment.map((item, index) => (
        <Card className="mt-3">
          <CardBody>
            <CardTitle tag="h5">{item.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {item.email}
            </CardSubtitle>
            <CardText>{item.body}</CardText>
          </CardBody>
        </Card>
      ))}
    </>
  );
}

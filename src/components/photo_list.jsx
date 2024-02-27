import {
    Card,
    CardBody,
    CardTitle,
    CardImg,
  } from "reactstrap";

export default function PhotoList({photos}) {
  return (
    <div className="row">
      {photos.map((photo, index) => (
        <div key={index} className="col-sm-4 mt-3">
          <Card>
            <CardImg
              alt="Card image cap"
              src={photo.thumbnailUrl}
              top
              width="100%"
            />
            {console.log(photo.thumbnailUrl)}
            <CardBody>
              <CardTitle tag="h5">{photo.title}</CardTitle>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}

import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function AlbumList({albums}) {
  return (
    <div className="row">
      {albums.map((album, index) => (
        <div key={index} className="col-sm-4 mt-3">
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">{album.title}</CardTitle>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
                <Link
                  to={`photos/${album.id}`}
                  style={{ textDecoration: "none" }}
                >
                  View Photos
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}

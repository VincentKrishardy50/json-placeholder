import { Button } from "reactstrap";
import Header from "../components/header";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import UserDetail from "../components/user_detail";
import PhotoList from "../components/photo_list";
import MySpinner from "../components/own_spinner";

export default function Photo() {
  const [detail, setDetail] = useState({});
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const userDetailURL =
    "https://jsonplaceholder.typicode.com/users/" + useParams().userId;
  const allPhotosURL =
    "https://jsonplaceholder.typicode.com/photos/?albumId=" + useParams().albumId;

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

    axios.get(allPhotosURL).then(
      (response) => {
        setPhotos(response.data);
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
          {loading ? <MySpinner/> : <UserDetail detail={detail} />}
          
        </div>

        <div className="mb-5">
          <div className="text-center mb-5">
            <h5>Photo List</h5>
          </div>
          {loading ? <MySpinner/> : <PhotoList photos={photos} />}
        </div>
      </div>
    </div>
  );
}

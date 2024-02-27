import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Header from "../components/header";
import MySpinner from "../components/own_spinner";

export default function User() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        setData(response.data);
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

      {loading ? <MySpinner/> : data.map((item, index) => (
          <Card key={index} className="mt-3">
            <CardHeader>{item.name}</CardHeader>
            <CardBody>
              <div className="row">
                <div className="col-sm">
                  <label className="form-label">
                    <strong>Username</strong>
                  </label>
                  <div className="col-sm-12">{item.username}</div>
                </div>
                <div className="col-sm">
                  <label className="form-label">
                    <strong>Email</strong>
                  </label>
                  <div className="col-sm-12">{item.email}</div>
                </div>
                <div className="col-sm">
                  <label className="form-label">
                    <strong>Website</strong>
                  </label>
                  <div className="col-sm-12">{item.website}</div>
                </div>
                <div className="col-sm">
                  <label className="form-label">
                    <strong>Phone</strong>
                  </label>
                  <div className="col-sm-12">{item.phone}</div>
                </div>
              </div>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5">
                <Link to={`/post/${item.id}`}>
                  <Button color="primary" size="sm">
                    View Post
                  </Button>
                </Link>

                <Link to={`/albums/${item.id}`}>
                  <Button color="primary" size="sm">
                    View Album
                  </Button>
                </Link>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

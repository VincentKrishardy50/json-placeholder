import {
    Card,
    CardHeader,
    CardBody,
  } from "reactstrap";

export default function UserDetail({detail}){
    return(
          <Card className="mt-3">
            <CardHeader>{detail.name}</CardHeader>
            <CardBody>
              <div className="row">
                <div className="col-sm">
                  <label className="form-label">
                    <strong>Username</strong>
                  </label>
                  <div className="col-sm-12">{detail.username}</div>
                </div>
                <div className="col-sm">
                  <label className="form-label">
                    <strong>Email</strong>
                  </label>
                  <div className="col-sm-12">{detail.email}</div>
                </div>
                <div className="col-sm">
                  <label className="form-label">
                    <strong>Website</strong>
                  </label>
                  <div className="col-sm-12">{detail.website}</div>
                </div>
                <div className="col-sm">
                  <label className="form-label">
                    <strong>Phone</strong>
                  </label>
                  <div className="col-sm-12">{detail.phone}</div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm">
                  <label className="form-label">
                    <strong>Address</strong>
                  </label>
                  <div className="col-sm-12">
                    {detail.address?.street +
                      " " +
                      detail.address?.city +
                      " " +
                      detail.address?.zipcode}
                  </div>
                </div>
                <div className="col-sm">
                  <label className="form-label">
                    <strong>Company</strong>
                  </label>
                  <div className="col-sm-12">
                    {detail.company?.name +
                      " " +
                      detail.company?.catchPhrase +
                      " " +
                      detail.company?.bs}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
    )
}
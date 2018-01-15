import React from "react";

const CardStyle = {
  width: "18rem"
};

const Films = props => (
  <div className="container">
    <div className="row">
      <div className="col-md-2">
      <div className="card" style={CardStyle}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.director}</h6>
          <p className="card-text">{props.description}</p>
          <a href="#" className="card-link" />
          <a href="#" className="card-link">
            Another link
          </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Films;

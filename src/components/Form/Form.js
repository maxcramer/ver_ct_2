import React, { useState } from "react";

// import FileUploader from "../FileUploader/FileUploader";

import "./Form.css";

function Form(props) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: new Date().getTime().toString(),
      title: title,
      image: image,
      artist: artist,
      year: year,
    });
    setTitle("");
    setArtist("");
    setYear("");
    setImage("");
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            required
            value={title}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="text"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <div className="form-group files">
            <label>Upload Your File </label>
            <input type="file" className="form-control" multiple="" />
          </div>
        </div>
        <div>
          <label>Artist</label>
          <input
            type="text"
            required
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <div>
          <label>Year</label>
          <input
            type="date"
            required
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

export default Form;

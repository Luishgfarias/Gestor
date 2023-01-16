import React, { useState, useRef } from "react";
import './style.scss';

const FileUpload = (props: any) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  return (
    <div className="inputCamp">
      <label htmlFor="input">
        <img src="upload.png" alt="" width={25} height={25}/>
        <h5>UPLOAD FILES</h5>
      </label>
      <input type="file" ref={fileInputField} name='input' id="input"/>
    </div>
  )
}

export default FileUpload;
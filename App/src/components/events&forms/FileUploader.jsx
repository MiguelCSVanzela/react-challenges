import { useState } from "react";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleUpload = (e) => {
    let file = e.target.files[0];
    setFile(file);

    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    } else {
      setPreview(null);
    }
  };
  return (
    <div>
      <h2>Insira um arquivo</h2>
      <form>
        <input onChange={handleUpload} type="file" />
        {file && <p>Arquivo escolhido: {file.name} </p>}
        {preview && (
          <img src={preview} alt="Preview" style={{ width: "200px" }} />
        )}
      </form>
    </div>
  );
};

export default FileUploader;

import { useState } from "react";

const UploadPage = () => {
  const [files, setFiles] = useState<FileList>();

  const onFileChange = (e: React.FormEvent<HTMLInputElement>) => {
    const temp = e.currentTarget.files;
    temp ? setFiles(temp) : null; //set the file here if it exists
  };

  const UploadImages = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Uploaded");
    if (!files) return;
    // const {url, fields} :{ url:string, fields:any} = await createPresignedUrl
  };
  return (
    <div className="bg- flex h-screen w-screen flex-col items-center justify-center gap-y-10">
      <div className="hidden h-[300px] w-[300px] bg-white"></div>
      <form onSubmit={UploadImages} className="flex ">
        <input
          onChange={onFileChange}
          className="hidden"
          id="img"
          multiple
          type="file"
          accept="image/*"
        ></input>
        <label htmlFor="img">Click me to upload image</label>

        <button type="submit" className="h-10 w-[100px] bg-green-400">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadPage;

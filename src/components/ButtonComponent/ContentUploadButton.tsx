const ContentUploadButton = () => {
  return (
    <div className={`flex items-center rounded-3xl py-2 content-upload-button`}>
      <div className="rounded-3xl absolute">
        <img src={`icons/icon (27).png`} alt="event" className="m-auto" />
        <img src={`icons/icon (26).png`} alt="event" />
      </div>
      <p className="font-sans m-auto text-center font-medium">Upload</p>
    </div>
  );
};

export default ContentUploadButton;

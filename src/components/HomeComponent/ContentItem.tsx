import React from "react";
import { ContentItemButton, ContentUploadButton } from "../ButtonComponent";

function ContentItem() {
  return (
    <div className="content-item flex justify-between items-center p-2 px-4 rounded-md mt-3 relative">
      <img
        src={"images/item_picture.jpg"}
        alt="Item picture"
        className="rounded-md cursor-pointer"
        width={90}
        height={70}
      />
      <div className="rounded-md px-6 p-1 description">
        <p className="text-sm text-white font-semibold">Cheetah Run 5k 2024</p>
        <p className="text-xs text-white">Fota Wildlife Park</p>
        <p className="text-xs text-white">May 16th 2024</p>
      </div>
      <ContentItemButton name="View Map" icon="icon (23).png" />
      <ContentItemButton name="Event Setup" />
      <ContentUploadButton />
    </div>
  );
}

export default ContentItem;

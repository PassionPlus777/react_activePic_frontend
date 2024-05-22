import { FC } from "react";
import { ContentItemButton, ContentUploadButton } from "../ButtonComponent";

interface ContentItemDataTypes {
  event: any;
}

const ContentItem: FC<ContentItemDataTypes> = ({ event }) => {
  return (
    <div className="content-item flex justify-between items-center p-2 px-4 rounded-md mt-3 relative">
      <img
        src={`https://cms.activepix.com/siteAssets/${event.image.filename}`}
        alt="Item picture"
        className="rounded-md cursor-pointer"
        width={90}
        height={70}
      />
      <div className="rounded-md px-6 p-1 description max-w-48">
        <p className="text-sm text-white font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
          {event.name}
        </p>
        <p className="text-xs text-white whitespace-nowrap overflow-hidden text-ellipsis">
          {event.location}
        </p>
        <p className="text-xs text-white whitespace-nowrap overflow-hidden text-ellipsis">
          {event.date}
        </p>
      </div>
      <ContentItemButton name="View Map" icon="icon (23).png" />
      <ContentItemButton name="Event Setup" />
      <ContentUploadButton />
    </div>
  );
};

export default ContentItem;

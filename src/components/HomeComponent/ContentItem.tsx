import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ContentItemButton } from "../ButtonComponent";

interface ContentItemDataTypes {
  event: any;
}

const ContentItem: FC<ContentItemDataTypes> = ({ event }) => {
  const navigate = useNavigate();
  const eventSetup = (event: any) => {
    console.log(event);

    navigate("/event");
  };

  return (
    <div className="content-item flex flex-col lg:flex-row justify-between items-center p-2 px-4 rounded-md mt-3 relative">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center rounded-md cursor-pointer w-[90px] h-[65px] overflow-hidden">
          <img
            src={`https://cms.activepix.com/siteAssets/${event?.image?.filename}`}
            alt="Item picture"
          />
        </div>

        <div className="rounded-md px-6 p-1 description w-[200px] h-[65px]">
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
      </div>
      <div className="lg:flex lex flex-col hidden lg:flex-row">
        <ContentItemButton name="View Map" icon="icon (23).png" />
        <ContentItemButton
          name="Event Setup"
          onClick={() => eventSetup(event)}
        />
        <ContentItemButton name="Upload" />
      </div>
    </div>
  );
};

export default ContentItem;

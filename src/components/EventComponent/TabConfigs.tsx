import InitialSetup from "./InitialSetup";
import GallerySetup from "./GallerySetup";
import SponsorSetup from "./SponsorSetup";
import ParticipantSetup from "./ParticipantSetup";
import Activition from "./Activation";
import ImageUpload from "./ImageUpload";
import Statistics from "./Statistics";

const TabConfigs = (
  setEventData: any,
  setKey: any,
  eventData: any,
  dispatchCreateRace: any
) => [
  {
    key: "1",
    label: "INITIAL SETUP",
    children: <InitialSetup setEventData={setEventData} setKey={setKey} />,
  },
  {
    key: "2",
    label: "GALLERY SETUP",
    children: (
      <GallerySetup
        setEventData={setEventData}
        setKey={setKey}
        eventData={eventData}
      />
    ),
  },
  {
    key: "3",
    label: "SPONSOR SETUP",
    children: (
      <SponsorSetup
        setEventData={setEventData}
        setKey={setKey}
        eventData={eventData}
      />
    ),
  },
  {
    key: "4",
    label: "PARTICIPANT SETUP",
    children: (
      <ParticipantSetup
        setEventData={setEventData}
        setKey={setKey}
        eventData={eventData}
        dispatchCreateRace={dispatchCreateRace}
      />
    ),
  },
  {
    key: "5",
    label: "ACTIVATION",
    children: <Activition />,
  },
  {
    key: "6",
    label: "IMAGE UPLOADS",
    children: <ImageUpload />,
  },
  {
    key: "7",
    label: "STATISTICS",
    children: <Statistics />,
  },
];

export default TabConfigs;

import { SidebarButton } from "../ButtonComponent";
import HeaderComponent from "../HeaderComponent";

import buttonItems from "../HomeComponent/SiceBarConfig";

function SideBarComponent() {
  const logOut = () => {
    localStorage.removeItem("axios_token");
    location.reload();
  };
  return (
    <>
      <div>
        <div className="hidden lg:block">
          <HeaderComponent />
        </div>
        <div className="flex flex-col justify-center mt-4 mx-2">
          {buttonItems.map((item, index) => (
            <SidebarButton key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="set-icon mb-4 mx-2">
        <SidebarButton name="Setting" icon="icon (17).png" />
        <div onClick={logOut}>
          <SidebarButton name="Log Out" icon="icon (19).png" />
        </div>
      </div>
    </>
  );
}

export default SideBarComponent;

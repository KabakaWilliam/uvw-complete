import { Profile } from "@prisma/client";
import { useRecoilState } from "recoil";
import SelectedUserState from "y/atoms/SelectedUserState";

const ProfileSidebarWidget = (props: Profile) => {
  const [selectedUser, setSelectedUser] = useRecoilState(SelectedUserState);

  const selectUserHandler = () => {
    setSelectedUser(props);
  };
  return (
    <div
      onClick={() => selectUserHandler()}
      className="item_direction flex h-[100px] w-[100%] cursor-pointer border border-r-0 border-t-0 border-black hover:bg-[#2f5a70]"
    >
      <div className="flex h-[100%]  w-[30%] items-center justify-center">
        <img
          className="h-[80%] w-[80%] border border-black object-cover"
          //   src={individualData.profilePhoto}
          src={props.MainProfileImage}
          alt=""
        />
      </div>
      <div className="flex h-[100%] w-[70%] flex-col justify-center pl-[2%]">
        <div className="w-full truncate font-sans text-[24px] font-bold text-[#59D6F6]">
          {props.FullName}
        </div>
        <div className="flex w-full gap-x-4 font-sans text-[18px] font-bold text-[#CCCCCC] ">
          <span className="w-[40%] truncate">
            {/* {individualData.industry}  */}
            {props.Job}
          </span>
          <span className="rotate-90 border border-b-[0.5px] border-[#CCCCCC]  font-normal"></span>
          <span className=" truncate">{props.Age} yo </span>
          <span className=" truncate">{props.Flag}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebarWidget;

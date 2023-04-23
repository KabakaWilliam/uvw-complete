import {
  Admin_Administrators_Icon,
  Admin_Bangladesh_Flag,
  Admin_Dropdown_Button_Icon,
  Admin_Full_Fields_Result_Icon,
  Admin_Home_Icon,
  Admin_Missing_Fields_Result_Icon,
  Admin_Profiles_Icon,
  Admin_Published_Result_Icon,
  Admin_Search_Icon,
  Admin_Settings_Icon,
  Admin_Unpublished_Result_Icon,
  Refresh_Icon,
} from "y/components/Icons/Admin_Column_Icons";
import UVW_Admin_Logo from "y/components/Icons/UVW_Admin_Logo";

import fake_results from "src/utils/Fake_Admin_Search_Data.json";
import { useState } from "react";
import { ADMIN_SEARCH_BUTTON_OPTIONS } from "y/utils/Admin_Consts";

const Panel = () => {
  return (
    <>
      <div className="flex h-screen w-screen border border-black bg-white font-sans ">
        <First_Column />
        <Second_Column />
        <Third_Column />
      </div>
    </>
  );
};

export default Panel;

const First_Column = () => {
  return (
    <section className="h-full w-[23%] border-r border-black bg-[#E2E2E2] ">
      {/* lefft col */}
      <section className="flex h-[25%] min-h-[248px] w-full flex-col items-center justify-end  bg-[#E2E2E2] pt-[106px]">
        <UVW_Admin_Logo />
        <div className="h-[52px] w-full"></div>
        <h2 className="flex h-[29px] w-[208px] flex-col  border-b border-[#AAAAAA] text-xl font-bold text-[#4A4A4A]">
          Admin Panel
        </h2>
      </section>
      <section className="flex  h-[54%] w-full items-center justify-center">
        <div className="h-[185px] w-[240px] ">
          <button className="flex h-[39px] w-full items-center gap-x-8 border-b border-[#AAAAAA] font-medium text-[#AAAAAA] ">
            <Admin_Home_Icon />
            Home
          </button>
          <button className="flex h-[39px] w-full items-center gap-x-8 border-b border-[#AAAAAA] font-bold text-[#4A4A4A] ">
            <Admin_Profiles_Icon />
            Profiles
          </button>
          <button className="flex h-[39px] w-full items-center gap-x-8 border-b border-[#AAAAAA] font-medium text-[#AAAAAA] ">
            <Admin_Administrators_Icon />
            Administrators
          </button>
          <button className="flex h-[39px] w-full items-center gap-x-8 font-medium text-[#AAAAAA] ">
            <Admin_Settings_Icon />
            Settings
          </button>
        </div>
      </section>
      <section className="h-[21%] w-full ">
        <div className="flex w-full pl-20 pr-[42px]">
          <div className="flex h-[67px] w-[277px]">
            <img
              src="/temp_admin_pic.jpg"
              alt=""
              className="h-[67px] w-[67px] rounded-lg border border-black object-cover"
            />
            <div className="w-3" />
            <div className="flex h-full w-[198px] flex-col justify-center">
              <div className="font-bold text-[#4A4A4A]">Marcela Pizarro</div>
              <div className="text-[#777777]">Administrator</div>
            </div>
          </div>
        </div>
        <div className="h-[27px]" />
        <button className="flex h-[40px] w-full items-center border-y border-black  pl-20 font-bold">
          <div className="">Logout</div>
        </button>
      </section>
    </section>
  );
};

const Second_Column = () => {
  return (
    <section className="h-full w-[23%] border-r border-black bg-[#E2E2E2]">
      <section className="flex h-max w-full flex-col items-center gap-y-4   ">
        <div className="flex w-[360px] justify-start pt-[47px] text-xl font-bold text-[#4A4A4A]">
          Search
        </div>
        <Admin_Search_Component />
      </section>
      <Searched_Results_Container />
    </section>
  );
};
const Third_Column = () => {
  return (
    <section className="h-full w-[54%] border-r border-black">
      <Preview_Container />
      <Editing_Container />
    </section>
  );
};

const Admin_Search_Component = () => {
  const [buttonOptions, setButtonOptions] = useState(
    ADMIN_SEARCH_BUTTON_OPTIONS
  );

  const filter_click_helper = (index: number) => {
    const updatedButtonOptions = buttonOptions.map((option, i) =>
      i === index
        ? { ...option, selected: true }
        : { ...option, selected: false }
    );
    setButtonOptions(updatedButtonOptions);
  };
  return (
    <form className="h-[79px] w-full border border-black ">
      <section className="flex h-[40px] w-full  bg-[#4A4A4A] px-[15px]">
        <input
          className="h-full w-[90%] bg-transparent font-bold text-white outline-none placeholder:font-medium placeholder:text-[#BABABA]"
          type="text"
          placeholder="Name"
        />
        <button className="flex h-full w-[10%] items-center justify-end">
          <Admin_Search_Icon />
        </button>
      </section>
      <section className="flex h-[39px] w-full items-center px-[15px]">
        {buttonOptions.map((option, index) => (
          <>
            <button
              key={Math.random()}
              onClick={() => filter_click_helper(index)}
              type="button"
              className={
                "flex h-[28px] w-[110px] items-center justify-start gap-x-[7px] " +
                (option.selected ? "text-black" : "text-[#BABABA]")
              }
            >
              <div>{option.label}</div>
              <Admin_Dropdown_Button_Icon />
            </button>
            {option.label != "Condition" ? (
              <div className="pr-3">
                <div className="h-[28px] border border-black" />
              </div>
            ) : null}
          </>
        ))}
      </section>
    </form>
  );
};

const Searched_Results_Container = () => {
  return (
    <section className="h-max w-full bg-white">
      {fake_results.map((result) => (
        <Searched_Profile_Row_Result {...result} key={Math.random()} />
      ))}
    </section>
  );
};

interface searched_result {
  Flag: string;
  Name: string;
  Industry: string;
  Published: boolean;
  Missing_Data: boolean;
}
const Searched_Profile_Row_Result = (props: searched_result) => {
  return (
    <button className="flex h-10 w-full items-center border border-b-black px-[15px]">
      <Admin_Bangladesh_Flag />
      <div className="w-[10px]" />
      <section className="flex h-[19px] w-[122px] items-center truncate font-bold">
        {/* Linus Garner Smithasdfsa */}
        {props.Name}
      </section>
      <div className="w-[21px]" />
      <section className="flex w-[106px] justify-start truncate font-medium text-[#4A4A4A]">
        {/* Construction */}
        {props.Industry}
      </section>
      <div className="w-[19px]" />

      <section className="flex items-center gap-x-[6px]">
        {props.Published ? (
          <Admin_Published_Result_Icon />
        ) : (
          <Admin_Unpublished_Result_Icon />
        )}
        {props.Missing_Data ? (
          <Admin_Missing_Fields_Result_Icon />
        ) : (
          <Admin_Full_Fields_Result_Icon />
        )}
      </section>
    </button>
  );
};

// third column
const Preview_Container = () => {
  const [collapsed, set_collapsed] = useState(false);
  return (
    <section
      className={`w-full bg-[#4A4A4A] px-[50px] ${
        collapsed ? "h-max" : "h-[51%]"
      }`}
    >
      <div className={`flex h-[25%] w-full `}>
        <div className="flex h-full w-[30%] items-center justify-start gap-x-[18px] text-xl font-extrabold text-[#E2E2E2]">
          Preview
          <button>
            <Refresh_Icon />
          </button>
        </div>
        <div className="flex  h-full w-[40%] items-center justify-center text-sm text-[#E2E2E2]">
          <div className="flex gap-x-[18px] md:hidden">
            Expand
            <Admin_Dropdown_Button_Icon />
          </div>
        </div>
        <div className="flex h-full w-[30%] items-center justify-end">
          <button className="h-[41px] w-[171px] border border-black bg-[#2D6E41] font-semibold text-[#E2E2E2]">
            Publish
          </button>
        </div>
      </div>
      <div
        className={
          collapsed ? `hidden` : `h-[69%] w-full border border-[#59D6F6]`
        }
      ></div>
    </section>
  );
};
const Editing_Container = () => {
  return <section className="h-[49%] w-full"></section>;
};

import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import MegaphoneIcon from "y/components/Icons/Megaphone";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

import { api } from "y/utils/api";
import { scrollToTop } from "y/utils/helpers";
import ProfileSidebarWidget from "y/components/ProfileSidebarWidget";

import FakeProfiles from "../utils/fakeData.json";
import { useRecoilState } from "recoil";
import SelectedUserState from "y/atoms/SelectedUserState";
import Carousel from "y/components/Carousel";
import { useEffect } from "react";

const Header = () => {
  return (
    <div className="flex  h-[5vh] w-screen items-center justify-center gap-x-3 bg-[#59D6F6] py-[15px] text-[#0F3649] ">
      <MegaphoneIcon />

      <span>UNITED VOICES OF THE WORLD</span>
    </div>
  );
};

const HeroWindow = () => {
  return (
    <section className="h-[95vh] w-screen">
      <GlobeBG />
      <HeroCopy />
    </section>
  );
};

const GlobeBG = () => {
  return (
    <>
      <div className="absolute z-0 h-[95vh] w-screen">
        <img
          src={"/globe4.jpg"}
          className="h-[100%] w-[100%] object-cover opacity-[0.8] "
        />
      </div>
    </>
  );
};

const HeroCopy = () => {
  return (
    <section className="z-40 flex h-[35vh]  w-screen flex-col items-center gap-y-10">
      <div className="z-40 flex flex-col items-center justify-start gap-y-0 pt-[65px] text-[#59D6F6] ">
        <span className="flex h-[55.64px] w-[285.68px] items-center justify-center text-[60px]">
          STORIES
        </span>
        <span className="flex h-[42.65px] w-[278.71px] items-center justify-center text-[30px]">
          OF OUR PEOPLE
        </span>
      </div>
      <>
        {/* {numBubbles.map((person) => (
              <FaceBubble key={Math.random()} imgLink={person} />
            ))} */}
      </>
      <button
        onClick={() => scrollToTop()}
        className="font-regular z-40 h-[45px] w-[150px] rounded-sm border-[1px] border-[#59D6F6] font-sans text-[20px] text-[#59D6F6] hover:bg-[#59D6F6] hover:text-black"
      >
        Explore
      </button>
    </section>
  );
};

const Navbar = () => {
  return (
    <nav className="borderContainers flex min-h-[7vh] w-screen items-center justify-center gap-x-[15px] bg-[#0F3649] font-sans md:border-t">
      <div className=" text-[14px] font-bold text-[#CCCCCC] md:text-[18px]">
        Occupation
      </div>
      <div className="flex h-[45px]  w-[260px] items-center justify-end rounded-[7px] bg-[#CCCCCC] md:w-[306px]">
        <div className="flex h-full w-[79%] items-center justify-center font-bold text-black md:w-[80%]">
          All
        </div>
        <div className="flex h-full w-[21%] items-center justify-center md:w-[20%]">
          <button className=" flex h-[41px] w-[51px] items-center justify-center rounded-[7px] bg-[#0F3649]">
            <AdjustmentsHorizontalIcon className="h-[15px] w-[18px] text-[#CCCCCC]" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const ProfileSidebar = () => {
  return (
    <section className="borderContainers list_container h-full  w-[100%] overflow-y-scroll border-l-black  md:w-[20%]  md:border">
      {FakeProfiles.AllProfiles.map((profileData) => (
        <ProfileSidebarWidget {...profileData} key={profileData.id} />
      ))}{" "}
    </section>
  );
};

const ProfileBio = () => {
  const [selectedUser, setSelectedUser] = useRecoilState(SelectedUserState);

  return (
    <section className="borderContainers h-full px-[3%] py-[40px] md:w-[47%] md:border-y  md:border-r">
      <div className="h-full w-full overflow-y-scroll  ">
        <div className="text-[50px] leading-[50px] text-[#59D6F6]">
          {selectedUser.FullName == "" ? "Linus Gordon" : selectedUser.FullName}
        </div>
        <div className="h-[15px]  " />
        <div className="flex gap-x-[27px] font-sans text-[18px]">
          <div className="flex h-[35px] w-max cursor-pointer items-center justify-center  gap-x-[10px] rounded-[22px] border border-[#59D6F6] px-[18px] text-[#CCCCCC] hover:bg-[#0d4451]">
            {selectedUser.Country} {selectedUser.Flag}
          </div>
          <div className="flex h-[35px] w-max cursor-pointer items-center justify-center gap-x-[10px] rounded-[22px] border border-[#59D6F6] px-[18px] text-[#CCCCCC] hover:bg-[#0d4451]">
            {selectedUser.Job}
          </div>
        </div>
        <div className="h-[40px]  " />

        <div className=" font-sans text-[18px] text-[#CCCCCC]">
          {selectedUser.Description}
        </div>
      </div>
    </section>
  );
};
const ProfileMedia = () => {
  const items = [
    {
      type: "image",
      url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    },
    { type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    {
      type: "image",
      url: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    },
    { type: "video", url: "/video2.mp4" },
    { type: "image", url: "/image3.jpg" },
  ] as Array<{ type: "image" | "video"; url: string }>;

  return (
    <section className="borderContainers h-full overflow-y-scroll  px-[3%] py-[40px] font-sans md:w-[53%] md:border-y">
      <div className="h-max w-full border border-[#59D6F6] p-[14px]">
        <div className=" bg-  flex h-[448px] w-full overflow-x-scroll">
          <Carousel items={items} />
        </div>
        <div className="h-2" />
        <div className=" w-full  px-[2%] text-[18px] text-[#C6C6C6]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          magna mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris et magna mauris. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Mauris et magna mauris.
        </div>
      </div>
    </section>
  );
};

const ProfileDataSection = () => {
  return (
    <section className="hidden h-full md:flex  md:w-[80%]">
      <ProfileBio />
      <ProfileMedia />
    </section>
  );
};

const DataTable = () => {
  return (
    <section className="flex h-[93vh] w-screen">
      <ProfileSidebar />
      <ProfileDataSection />
    </section>
  );
};

const Feed = () => {
  return (
    <section className="h-screen w-screen bg-[#0F3649]">
      <Navbar />
      <DataTable />
    </section>
  );
};

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [selectedUser, setSelectedUser] = useRecoilState(SelectedUserState);

  // ON PAGE LOAD, SELECT THE FIRST PROFILE
  useEffect(() => {
    if (FakeProfiles.AllProfiles[0])
      setSelectedUser(FakeProfiles.AllProfiles[0]);
  }, []);

  return (
    <>
      <Head>
        <title>UVW</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <main>
        <Header />
        <HeroWindow />
        <Feed />
      </main>
    </>
  );
};

export default Home;

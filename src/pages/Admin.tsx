import Head from "next/head";
import MegaphoneIcon from "y/components/Icons/Megaphone";

const AdminSidebar = () => {
  return (
    <section className="h-full w-[16%] bg-[#0f3649] px-[32px] pb-10 pt-[66px] ">
      <section className="flex h-[147px] w-full items-center justify-center gap-x-4 bg-[#5fa4c7] font-sans ">
        <MegaphoneIcon />

        <span className="text-white">Admin Panel</span>
      </section>
    </section>
  );
};

const AdminContainerWrapper = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <section className="h-full w-[84%] bg-[#0b202a] pb-10 pl-[85px] pr-[155px] pt-[66px] ">
      <div className="h-full w-full bg-red-400">{children}</div>
    </section>
  );
};

const Admin = () => {
  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <main className="flex h-screen w-screen">
        <AdminSidebar />
        <AdminContainerWrapper></AdminContainerWrapper>
      </main>
    </>
  );
};

export default Admin;

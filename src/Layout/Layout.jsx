import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <main className="w-full flex justify-center items-center">
      <div className="max-w-[1250px] w-full px-[32px]">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default Layout;

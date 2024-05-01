import ThemeController from "./themeController/ThemeController";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex flex-col justify-between bg-base-100 sm:mt-10 sm:flex-row">
        <h1 className="mx-auto text-5xl">Cats shop</h1>
        <ThemeController className="mr-3" />
      </div>
    </>
  );
};

export default Navbar;

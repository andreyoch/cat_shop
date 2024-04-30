import ThemeController from "./themeController/ThemeController";

const Navbar = () => {
  return (
    <>
      <div className="navbar mt-10 flex justify-between bg-base-100">
        <h1 className="mx-auto text-5xl">Cats shop</h1>
        <ThemeController className="mr-3" />
      </div>
    </>
  );
};

export default Navbar;

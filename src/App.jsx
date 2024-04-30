// import { useState, useEffect } from "react";
import Navbar from "./navbar/Navbar";
const App = () => {
  // const [count, setCount] = useState(0);
  // const [theme, setTheme] = useState("light");

  // function handleButtonClick() {
  //   setCount(count + 1);
  // }
  // function toggleTheme() {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  // }

  // useEffect(() => {
  //   document.querySelector("html").setAttribute("data-theme", theme);
  // }, [theme]);
  return (
    <>
      {/* <div className="text-center mt-10">
        <h1 className="mb-10">You clicked on button {count} times</h1>
        <button
          className="btn btn-accent btn-outline"
          onClick={handleButtonClick}
        >
          Click me
        </button>
        <button className="btn btn-primary ml-3" onClick={toggleTheme}>
          Change theme
        </button>
      </div>

      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> */}

      <Navbar />
    </>
  );
};

export default App;

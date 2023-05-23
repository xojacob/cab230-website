import { Fragment, useState, useEffect } from "react";
import "../App.css";
import { searchMovies } from "./api";
import Movie from "./Movie";
import SearchBar from "./SearchBar";
import OverlayButton from "./OverlayButton";
import OverlaySearchButton from "./OverlaySearchButton";
import RegisterField from "./RegisterField";
import LoginField from "./LoginField";
import styles from "./style";
import Person from "./Person";
import { invalidateToken, tokenRefresh } from "./loginAPI";
function App() {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchPeople, setSearchPeople] = useState("");
  const [searchID, setSearchID] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginToken, setLoginToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [loggedOut, setLoggedOut] = useState(true);
  const [counter, setCounter] = useState(600);
  //console.log(counter);
  //console.log("refresh: " + refreshToken);
  const handleTokenRefresh = async () => {
    try {
      const { bearerToken: loginT, refreshToken: refreshT } =
        await tokenRefresh(refreshToken);
      const { token: lt } = loginT;
      const { token: rt } = refreshT;
      //console.log("refresh token " + refreshToken);
      setLoginToken(lt);
      setRefreshToken(rt);
      setCounter(600);
    } catch (error) {
      // Handle the error here
    }
  };

  // Create a timer for our refresh token
  useEffect(() => {
    if (loginToken !== "" && loggedOut == false) {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      if (counter === 0) {
        clearInterval(timer);
        handleTokenRefresh();
      }
      return () => {
        clearInterval(timer);
      };
    }
  }, [counter, loginToken]);
  const isLoggedIn = (token) => {
    if (token != "") {
      setLoginOpen(!loginOpen);
      setLoggedOut(!loggedOut);
      setLoginToken(token);
    }
  };

  // Create a logout useEffect

  useEffect(() => {
    if (refreshToken !== "" && loggedOut == true) {
      invalidateToken(refreshToken);
    }
  }, [refreshToken, loggedOut]);

  const toggleLoginOverlay = () => {
    setLoginOpen(!loginOpen);
  };
  const toggleRegisterOverlay = () => {
    setRegisterOpen(!registerOpen);
  };
  const toggleSearchOverlay = () => {
    setSearchOpen(!searchOpen);
  };
  return (
    <div className="">
      <div className="top-0 flex w-full justify-between items-center fixed bg-[#17153B] h-16 z-10 border-b-2 border-violet-900">
        <h1 className="font-poppins w-auto md:text-5xl sm:text-3xl xs:text-2xl xxs:text-2xl/6 ">
          Movie List
        </h1>
        <div className="">
          <button
            onClick={toggleSearchOverlay}
            className={`${styles.searchButtonGradient2} flex font-poppins w-full xxs:hidden mx-auto sm:block border-none`}
          >
            Open Search Menu
          </button>
          <button
            onClick={toggleSearchOverlay}
            className={`${styles.searchButtonGradient2} font-poppins w-full sm:hidden border-none`}
          >
            Search
          </button>
          <OverlaySearchButton
            isOpen={searchOpen}
            onClose={toggleSearchOverlay}
          >
            <SearchBar
              title={setSearchTitle}
              year={setSearchYear}
              movieid={setSearchID}
              personid={setSearchPeople}
            />
          </OverlaySearchButton>
        </div>
        <Fragment>
          {loggedOut && (
            <div className="top-0 justify-end items-center flex pr-3 ">
              <button
                onClick={toggleLoginOverlay}
                className="font-poppins w-auto hover:border-[#d4a94d] bg-transparent border-2"
              >
                Login
              </button>
              <OverlayButton
                isOpen={loginOpen}
                onClose={toggleLoginOverlay}
                btnName={"Login"}
              >
                <LoginField
                  isLoggedIn={isLoggedIn}
                  refreshToken={setRefreshToken}
                />
              </OverlayButton>
              <h1 className="text-2xl pb-2 px-2"> | </h1>
              <button
                onClick={toggleRegisterOverlay}
                className="font-poppins w-auto hover:border-[#5BDB88] border-2 bg-[#3EAA64]"
              >
                Register
              </button>
              <OverlayButton
                isOpen={registerOpen}
                onClose={toggleRegisterOverlay}
                btnName={"Register"}
              >
                <RegisterField />
              </OverlayButton>
            </div>
          )}
          {!loggedOut && (
            <div className="top-0 justify-end items-center flex pr-3 md:w-[225px]">
              <button
                onClick={setLoggedOut}
                className="font-poppins w-auto hover:border-[#ecc673] bg-[#cd9432] border-2"
              >
                Logout
              </button>
            </div>
          )}
        </Fragment>
      </div>
      <div></div>
      <div className="items-center mt-20">
        {searchPeople && (
          <Person personSearch={searchPeople} token={loginToken} />
        )}

        {!searchPeople && (
          <Movie
            titleSearch={searchTitle}
            yearSearch={searchYear}
            idSearch={searchID}
          />
        )}
      </div>
    </div>
  );
}

export default App;

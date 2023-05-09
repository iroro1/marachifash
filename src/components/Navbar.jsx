import { colors } from "@/config/colors";
import { addEllipses } from "@/config/utility";
import { ClickAwayListener } from "@mui/base";
import {
  Designtools,
  HambergerMenu,
  Home,
  InfoCircle,
  Logout,
  People,
  Setting,
  Setting2,
  ShoppingBag,
  User,
} from "iconsax-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  FaGoogle,
  FaMailBulk,
  FaPhone,
  FaRegAddressBook,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import Container from "./Container";
import Logo from "./Logo";
import SelectLang from "./SelectLang";
import SelectTheme from "./SelectTheme";

const Navbar = () => {
  const router = useRouter();

  const { theme, lang } = useSelector((a) => a.applicationStore);
  const [showHam, setShowHam] = useState(false);
  const [showDD, setShowDD] = useState(false);

  const { data: isAuthenticated, status } = useSession();

  console.log(isAuthenticated, "LOGIN DATA");
  console.log(showDD, "LOGIN DATA");

  return (
    <nav
      style={{
        background: colors[theme].navBg,
        color: colors[theme].navBgText,
        zIndex: 999,
      }}
      className={`w-full fixed`}
    >
      <div
        style={{
          background: colors[theme].navTopBg,
          color: colors[theme].navTopText,
        }}
        className="w-full py-2 text-sm"
      >
        <Container>
          <div className="flex justify-between items-center text-[12px] z-50">
            <div className=" hidden lg:flex w-[100%]">
              <span className="flex items-center">
                <FaRegAddressBook />{" "}
                <span className="ml-1">Weija, Accra, Ghana</span>
              </span>
              <span className="flex items-center mx-3">
                <FaPhone />
                <span className="ml-1">+233-345-3456-5677</span>
              </span>
              <span className="mx-3 flex items-center">
                <FaMailBulk />
                <span className="ml-1">info@tribalthreadz.com</span>
              </span>
            </div>
            <div className="flex z-50 justify-between w-full lg:w-[150px]">
              <div className="">
                <SelectTheme />
              </div>
              <div className="ml-4">
                <SelectLang />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div
          style={{
            color: colors[theme].navBgText,
          }}
          className="py-3 relative flex justify-between items-center"
        >
          <div className="flex items-center">
            <h1 className="flex items-center gap-3 ">
              <Logo />
              <span className="text-sm md:text-md">Tribal Trendz</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm ">
            <div className="flex border-r border-r-white gap-2 pr-2">
              <Link
                className={
                  router.pathname === "/"
                    ? "font-bold flex items-center gap-1"
                    : "font-normal d flex items-center gap"
                }
                href={"/"}
              >
                <Home variant="Bold" size={14} />{" "}
                {lang === "en" ? "Home" : "Maison"}
              </Link>
              <Link
                className={
                  router.pathname === "/about"
                    ? "font-bold flex items-center gap-1"
                    : "font-normal flex items-center gap-1"
                }
                href={"/about"}
              >
                <InfoCircle variant="Bold" size={14} />{" "}
                {lang === "en" ? "About" : "À propos"}
              </Link>
              <Link
                className={
                  router.pathname === "/designers"
                    ? "font-bold flex items-center gap-1"
                    : "font-normal flex items-center gap-1"
                }
                href={"/inspire"}
              >
                <Designtools variant="Bold" size={14} />{" "}
                {lang === "en" ? "Inspire" : "Créatrices"}
              </Link>
              <Link
                className={
                  router.pathname === "/designers"
                    ? "font-bold flex items-center gap-1"
                    : "font-normal flex items-center gap-1"
                }
                href={"/designers"}
              >
                <People variant="Bold" size={14} />{" "}
                {lang === "en" ? "Designers" : "Créatrices"}
              </Link>
            </div>
            <div>
              <input
                name="search"
                placeholder={
                  lang === "en"
                    ? "Look for items..."
                    : "Rechercher des articles"
                }
                type={"search"}
                className="text-[12px]  outline-[#FCAE1F] rounded-md py-[5px]   px-1 border border-[#ddd]"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              {isAuthenticated ? (
                <div className="relative">
                  <div
                    className="flex items-center w-[100px]"
                    onClick={() => setShowDD(true)}
                  >
                    <img
                      width={30}
                      height={30}
                      className="rounded-[50%] mr-2"
                      src={isAuthenticated.user.image}
                    />
                    <span className="text-[12px]">
                      {addEllipses(
                        isAuthenticated.user.name.split(" ")[0],
                        10,
                        1
                      )}
                    </span>
                  </div>
                  {showDD && (
                    <ClickAwayListener onClickAway={() => setShowDD(false)}>
                      <div
                        style={{
                          background: colors[theme].navTopBg,
                          color: colors[theme].navTopText,
                        }}
                        className="absolute p-2 rounded-lg shadow-mg z-20 top-10 right-0 w-[200px] h-[200px] shadow-md"
                      >
                        <div className="relative h-full w-full">
                          <div className="flex items-center">
                            <img
                              width={40}
                              height={40}
                              className="rounded-[50%] shadow-sm border border-slate-300 mr-2"
                              src={isAuthenticated.user.image}
                            />
                            <div>
                              <h4 className="text-[12px] leading-[3px]">
                                {addEllipses(isAuthenticated.user.name, 15, 0)}
                              </h4>
                              <small className="text-[10px] opacity-70">
                                {addEllipses(isAuthenticated.user.email, 25, 0)}
                              </small>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center hover:bg-slate-200 text-[12px] gap-2 py-3 px-1">
                              <User size={12} />
                              Profile
                            </div>
                            <div className="flex items-center hover:bg-slate-200 text-[12px] gap-2 py-3 px-1">
                              <Setting2 size={12} />
                              Settings
                            </div>
                          </div>
                          <span
                            onClick={() => signOut()}
                            className="h-[35px] absolute bottom-0 w-full flex items-center gap-1 py-2 px-2 text-[12px] bg-red-500 text-white rounded-md animate font-semibold cursor-pointer hover:scale-105 z-0"
                          >
                            <Logout color="#fff" size={16} />{" "}
                            <span>
                              {lang === "en" ? "Logout" : "Se déconnecter"}
                            </span>
                          </span>
                        </div>
                      </div>
                    </ClickAwayListener>
                  )}
                </div>
              ) : (
                <div className="relative z-0">
                  <span
                    onClick={() => signIn("google")}
                    className="h-[35px] flex items-center gap-1 py-2 px-2 text-[12px] bg-white text-black rounded-md animate font-semibold cursor-pointer hover:scale-105 z-0"
                  >
                    <FaGoogle color="#4285f4" size={12} />{" "}
                    <span>{lang === "en" ? "Login" : "Connexion"}</span>
                  </span>
                </div>
              )}
            </div>
            <div>
              <ShoppingBag className="cursor-pointer w-[17px] sm:w-[24px]" />
            </div>
          </div>

          <HambergerMenu
            onClick={() => setShowHam(!showHam)}
            className="md:hidden cursor-pointer w-[17px] sm:w-[24px]"
          />
          {showHam && (
            <ClickAwayListener onClickAway={() => setShowHam(!showHam)}>
              <div className="flex lg:hidden flex-col absolute items-start p-3 rounded gap-2 text-sm top-[60px] shadow-md bg-white text-slate-800 h-[170px] w-full md:w-1/2 right-0">
                <div className="flex flex-col border-r border-r-white gap-2 pr-2 min-w-full">
                  <Link
                    className={
                      router.pathname === "/"
                        ? "font-bold flex items-center gap-1"
                        : "font-normal d flex items-center gap"
                    }
                    href={"/"}
                  >
                    <Home variant="Bold" size={14} />{" "}
                    {lang === "en" ? "Home" : "Maison"}
                  </Link>
                  <Link
                    className={
                      router.pathname === "/about"
                        ? "font-bold flex items-center gap-1"
                        : "font-normal flex items-center gap-1"
                    }
                    href={"/about"}
                  >
                    <InfoCircle variant="Bold" size={14} />{" "}
                    {lang === "en" ? "About" : "À propos"}
                  </Link>
                  <Link
                    className={
                      router.pathname === "/designers"
                        ? "font-bold flex items-center gap-1"
                        : "font-normal flex items-center gap-1"
                    }
                    href={"/inspire"}
                  >
                    <Designtools variant="Bold" size={14} />{" "}
                    {lang === "en" ? "Inspire" : "Créatrices"}
                  </Link>
                  <Link
                    className={
                      router.pathname === "/designers"
                        ? "font-bold flex items-center gap-1"
                        : "font-normal flex items-center gap-1"
                    }
                    href={"/designers"}
                  >
                    <People variant="Bold" size={14} />{" "}
                    {lang === "en" ? "Designers" : "Créatrices"}
                  </Link>
                </div>
                <div className="min-w-full">
                  <input
                    name="search"
                    placeholder={
                      lang === "en"
                        ? "Look for items..."
                        : "Rechercher des articles"
                    }
                    type={"search"}
                    className="text-[12px]  outline-[#FCAE1F] rounded-md py-[5px]   px-1 border border-[#ddd] min-w-full"
                  />
                </div>
              </div>
            </ClickAwayListener>
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

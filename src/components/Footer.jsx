import { colors } from "@/config/colors";
import React from "react";
import { FaMailBulk, FaPhone, FaRegAddressBook } from "react-icons/fa";
import { useSelector } from "react-redux";
import Container from "./Container";
import Logo from "./Logo";

const Footer = () => {
  const dt = new Date();
  const { theme } = useSelector((a) => a.applicationStore);

  return (
    <div
      style={{
        background: colors[theme]?.bodyBg,
        color: colors[theme]?.bodyBgText,
        borderTop: "1px solid #aaaa",
      }}
      className="pt-10 -mt-6"
    >
      {/* Footer with sitemap and contact us */}
      <Container>
        <div className="flex items-center justify-between">
          <Logo size="big" />
          <div className="flex-col flex justify-start items-start">
            <div className="flex items-center">
              <FaRegAddressBook />{" "}
              <div className="ml-2">Weija, Accra, Ghana</div>
            </div>
            <div className="flex items-center ">
              <FaPhone />
              <div className="ml-2">+233-345-3456-5677</div>
            </div>
            <div className=" flex items-center">
              <FaMailBulk />
              <div className="ml-2">info@tribalthreadz.com</div>
            </div>
          </div>
        </div>
      </Container>
      <div className="bordet-t mt-4 border-t-[#ccc] border-t ">
        <Container>
          <div className="py-4 flex flex-col md:flex-row md:justify-between md:items-center">
            <p>Copyright &copy; {dt.getFullYear()}. Tribal Trendz</p>
            <a
              className="font-bold"
              href="https://ojigboleo.netlify.app/"
              target={"_blank"}
            >
              Created by Leo
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

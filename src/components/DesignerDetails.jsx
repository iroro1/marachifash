import { colors } from "@/config/colors";
import { useSelector } from "react-redux";
import Container from "./Container";
import DesignerCard from "./DesignerCard";
import Footer from "./Footer";

const DesignerDetails = () => {
  const { theme } = useSelector((a) => a.applicationStore);

  return (
    <div
      style={{
        background: colors[theme]?.bodyBg,
        color: colors[theme]?.bodyBgText,
      }}
      className=" min-h-[100vh] w-full pt-[90px]"
    >
      <Container>
        <h1 className="text-2xl mt-5"> Designer Details</h1>
      </Container>
      <Footer />
    </div>
  );
};

export default DesignerDetails;

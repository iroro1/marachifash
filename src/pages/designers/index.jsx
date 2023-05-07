import Container from "@/components/Container";
import DesignerCard from "@/components/DesignerCard";
import { colors } from "@/config/colors";
import { useSelector } from "react-redux";
import axios from "axios";

const designers = ({ designerList = [] }) => {
  // eslint-disable-next-line
  const { theme } = useSelector((a) => a.applicationStore);

  return (
    <div
      style={{
        background: colors[theme]?.bodyBg,
        color: colors[theme]?.bodyBgText,
      }}
      className=" min-h-[100vh] w-full py-[90px]"
    >
      <Container>
        <h1 className="text-2xl mt-5"> Designers</h1>

        <div>{/* <span>All</span> */}</div>
        <div className="md:flex gap-5 flex-wrap flex justify-center">
          {designerList.map((item) => (
            // eslint-disable-next-line
            <DesignerCard data={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default designers;
export async function getStaticProps() {
  let designerList = [];
  try {
    const { data } = await axios.get("http://localhost:3000/api/designers/");
    designerList = data.data || null;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      designerList,
    },
  };
}

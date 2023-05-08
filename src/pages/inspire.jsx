import Container from "@/components/Container";
import { useSelector } from "react-redux";
import { colors } from "@/config/colors";
import DesignerCard from "@/components/DesignerCard";
import axios from "axios";
import { useEffect } from "react";

const inspire = ({ designList = [] }) => {
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
        <h1 className="text-2xl mt-10">Inspire US</h1>
        {designList?.length > 0 ? (
          <div className="md:flex gap-5 flex-wrap flex justify-center">
            {designList?.map((item) => (
              // eslint-disable-next-line
              <DesignerCard data={item} />
            ))}
          </div>
        ) : (
          <span>Loading ....</span>
        )}
      </Container>
    </div>
  );
};

export default inspire;

export async function getStaticProps() {
  let designList = [];
  try {
    const { data } = await axios.get(
      "https://tribal-trends.netlify.app/api/designers/"
    );
    designList = data.data || [];
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      designList,
    },
  };
}

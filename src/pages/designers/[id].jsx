import Container from "@/components/Container";
import RatingComp from "@/components/RatingComp";
import WorkCard from "@/components/WorkCard";
import { colors } from "@/config/colors";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const designerDetail = ({ details }) => {
  // eslint-disable-next-line
  const { theme } = useSelector((a) => a.applicationStore);
  // eslint-disable-next-line
  const starsFn = (arr) => {
    const len = arr?.length;
    let totalRate = 0;
    arr?.forEach((itm) => (totalRate += +itm?.rating));
    return (totalRate / len).toFixed(1);
  };

  let refresh;
  if (typeof window !== "undefined") {
    refresh = window.sessionStorage.getItem("refreshTTDesigner");
  }

  useEffect(() => {
    if (!details?.name) {
      if (refresh === null) {
        window.sessionStorage.setItem("refreshTTDesigner", 1);
        window.location.reload();
      }
      return () => {
        clearTimeout();
      };
    }
  }, []);
  return (
    <div
      style={{
        background: colors[theme]?.bodyBg,
        color: colors[theme]?.bodyBgText,
      }}
      className=" min-h-[100vh] w-full pt-[90px]"
    >
      <Container>
        <h1 className="text-2xl mt-5">
          {" "}
          Meet <b>{details?.name}</b>
        </h1>
        <div className="h-[400px] flex gap-5">
          <img
            className="rounded-[50%] transition-all duration-500 hover:scale-90 shadow-md border-8 borrder-[#fff] object-cover w-[300px] h-[300px]"
            src={details?.imgSrc}
            alt="designer Profile Image"
          />

          <div className="w-1/2">
            <ul>
              <li>
                <b>Country :</b> <span>{details?.country}</span>
              </li>
              <li>
                <b>Date Joined :</b>{" "}
                <span>{details?.dateJoined?.split("T")[0]}</span>
              </li>
              <li>
                <b>Number of Published works :</b>{" "}
                <span>{details?.works?.length}</span>
              </li>
              <li className="flex items-center gap-2">
                <b>Designer Rating:</b>{" "}
                <span>
                  <RatingComp stars={starsFn(details?.works)} />
                </span>
                ({starsFn(details?.works)} Star
                {starsFn(details?.works) !== 1 && "s"})
              </li>
              <li>
                <b>My Journey :</b> <span>{details?.myJourney || " N/A"}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex overflow-auto no-scrollbar gap-3 pb-8">
          {details?.works?.map((work) => (
            <WorkCard key={work._id} data={work} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default designerDetail;

export async function getStaticPaths({ params }) {
  return {
    paths: [
      {
        params: { id: "1" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  let details = {};
  try {
    const { data } = await axios.get(
      "https://tribal-trends.netlify.app/api/designers/" + params.id
    );
    details = data.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      details,
    },
  };
}

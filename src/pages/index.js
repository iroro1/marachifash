import DesignerCard from "@/components//DesignerCard";
import Container from "@/components/Container";
import { colors } from "@/config/colors";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home({ topRated = [] }) {
  const { theme, lang } = useSelector((a) => a.applicationStore);

  return (
    <div
      style={{
        background: colors[theme]?.bodyBg,
        color: colors[theme]?.bodyBgText,
      }}
      className=" min-h-[100vh] w-full pt-[90px]"
    >
      <Container>
        <div className="flex flex-col lg:flex-row mt-4 lg:h-[50vh] items-center z-0">
          <div className="w-full lg:w-1/2 lg:mr-5">
            <h1 className="text-3xl font-semibold mb-3">Tribal Trendz</h1>
            <p className="text-sm">
              {lang === "en"
                ? `At Tribal Trendz, we celebrate diversity and inclusivity and believe that fashion can be a powerful tool for cultural exchange
          and appreciation. We strive to create a community that values
          sustainability, ethical practices, and cultural preservation.
          Explore our collection today and join us in our mission to make
          fashion more conscious and meaningful.`
                : `Chez Tribal Trendz, nous célébrons la diversité et l'inclusivité et
        croient que la mode peut être un puissant outil d'échange culturel
        et appréciation. Nous nous efforçons de créer une communauté qui valorise
        durabilité, pratiques éthiques et préservation culturelle.
        Explorez notre collection aujourd'hui et rejoignez-nous dans notre mission de faire
        mode plus consciente et significative.
        `}
            </p>

            <Link href={"/designers"}>
              <div
                style={{
                  background: colors[theme].actionBg,
                  color: colors[theme].actionBtn,
                }}
                className="h-[35px] mt-2 w-[190px] flex justify-center items-center gap-2 py-2 px-4 text-sm text-black rounded-md animate font-semibold cursor-pointer hover:scale-105 z-0"
              >
                {lang === "en" ? "Rep your tribe" : "Représentez votre tribu"}
              </div>
            </Link>
          </div>
          <div className=" mt-5 lg:mt-0 w-full lg:w-1/2 relative flex justify-center items-center z-0 ">
            <img
              className="w-[70%] mr-0 rounded-md h-[300px] mx-auto blur"
              src="https://images.pexels.com/photos/3620411/pexels-photo-3620411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <img
              className="w-[90%] rounded-md h-[200px] object-cover hover:rotate-2 transition-all duration-1000  top-3 z-0 -ml-[150px]"
              src="https://images.pexels.com/photos/4244305/pexels-photo-4244305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
        </div>
      </Container>
      <div
        style={{
          background: colors[theme]?.section2Bg,
          color: colors[theme]?.section2Text,
        }}
        className="w-full min-h-[500px] pb-5"
      >
        <Container>
          <div className="pt-10 ">
            <div className="mb-5  lg:flex gap-3">
              <div className="lg:w-1/3">
                <p className="text-[12px] font-thin break-words">
                  <b>Tribal Trendz </b>
                  {lang === "en"
                    ? `
                is a fashion brand that offers a unique
                and trendy collection of clothing and accessories inspired by
                tribal and ethnic cultures from around the world. Our mission
                is to bring these diverse and rich traditions to the forefront
                of fashion, while also promoting sustainable and ethical
                practices. Our clothing line includes a variety of
                styles, from bohemian dresses and skirts to printed tops and
                jackets. Each piece is carefully crafted with attention to
                detail and quality, using eco-friendly materials and ethical
                production methods. We believe in making a positive impact on
                the environment and society, and that's why we use sustainable
                fabrics like organic cotton, hemp, and bamboo, and partner
                with local artisans to support their livelihoods. Our
                accessories range from handcrafted jewelry made with natural
                materials like wood, stone, and shells to woven bags and hats
                that showcase traditional weaving techniques from different
                parts of the world. These accessories are the perfect addition
                to any outfit and add a unique touch of culture and heritage.
                `
                    : `
                est une marque de mode qui propose une collection unique et tendance de vêtements et d'accessoires inspirés des cultures tribales et ethniques du monde entier. Notre mission est de mettre ces traditions diverses et riches au premier plan de la mode, tout en promouvant des pratiques durables et éthiques.
Notre ligne de vêtements comprend une variété de styles, des robes et jupes bohèmes aux hauts et vestes imprimés. Chaque pièce est soigneusement fabriquée avec une attention aux détails et à la qualité, en utilisant des matériaux respectueux de l'environnement et des méthodes de production éthiques. Nous croyons qu'il est important d'avoir un impact positif sur l'environnement et la société, et c'est pourquoi nous utilisons des tissus durables comme le coton biologique, le chanvre et le bambou, et nous collaborons avec des artisans locaux pour soutenir leurs moyens de subsistance.
Nos accessoires vont des bijoux fabriqués à la main avec des matériaux naturels comme le bois, la pierre et les coquillages aux sacs et chapeaux tissés qui mettent en valeur les techniques de tissage traditionnelles de différentes parties du monde. Ces accessoires sont le complément parfait à n'importe quelle tenue et ajoutent une touche unique de culture et d'héritage.`}
                </p>
              </div>
              <div className="mt-5 lg:mt-0 lg:w-2/3">
                <img
                  src="https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="rounded shadow-sm"
                />
              </div>
            </div>

            <h1 className="mb-3 mt-[100px]">
              {lang === "en"
                ? "Top Rated Designers"
                : "Designers les mieux notés"}
            </h1>
            <div className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar">
              {topRated.map((person) => (
                // eslint-disable-next-line
                <div>
                  <DesignerCard data={person} />
                </div>
              ))}
            </div>
          </div>
          <div className="my-10 ">
            <h1 className="mb-3">
              {lang === "en"
                ? "Premium Designers"
                : "Concepteurs haut de gamme"}
            </h1>
            <div className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar">
              {topRated.map((person) => (
                // eslint-disable-next-line
                <div>
                  <DesignerCard data={person} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  let topRated = [];
  const apiUrl = "http://localhost:3000/api/designers/";
  try {
    const { data } = await axios.get(apiUrl);
    topRated = data.data.slice(0, 5) || null;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      topRated,
    },
  };
}

import Container from "@/components/Container";
import { colors } from "@/config/colors";
import { useSelector } from "react-redux";
const about = () => {
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
        <h1 className="text-2xl mt-10">About US</h1>

        <div className="md:flex gap-5">
          <p className="w-full md:w-1/2">
            {lang === "en"
              ? `Welcome to Tribal Trendz, your ultimate destination for fashion that
      is rooted in culture and tradition. We are a brand that celebrates the
      richness and diversity of tribal fashion, and we are passionate about
      bringing these unique styles to the modern world. Our story began with
      a love for the vibrant and colorful clothing of tribal communities
      around the world. We realized that these styles were not just
      beautiful but also had a rich cultural significance that deserved to
      be celebrated and shared with the world. At Tribal Trendz, we are
      committed to working with artisans and craftspeople from tribal
      communities to create fashion that is both authentic and contemporary.
      Our products are made with the highest quality materials and designed
      with a deep respect for the traditional techniques and motifs that
      inspire them. We believe that fashion should be sustainable and
      ethical, which is why we prioritize fair trade and eco-friendly
      practices in all aspects of our business. By supporting Tribal Trendz,
      you are not only getting unique and stylish clothing, but you are also
      contributing to the preservation and empowerment of tribal communities
      around the world. Thank you for choosing Tribal Trendz, and we hope
      you enjoy our collections as much as we do!`
              : `
      Bienvenue chez Tribal Trendz, votre destination ultime pour la mode qui
      est enraciné dans la culture et la tradition. Nous sommes une marque qui célèbre la
      richesse et diversité de la mode tribale, et nous sommes passionnés par
      apportant ces styles uniques au monde moderne. Notre histoire a commencé avec
      un amour pour les vêtements vibrants et colorés des communautés tribales
      autour du monde. Nous avons réalisé que ces styles n'étaient pas seulement
      belle mais avait aussi une riche signification culturelle qui méritait d'être
      être célébré et partagé avec le monde. Chez Tribal Trendz, nous sommes
      engagé à travailler avec des artisans et des artisans de la tribu
      communautés pour créer une mode à la fois authentique et contemporaine.
      Nos produits sont fabriqués avec des matériaux de la plus haute qualité et conçus
      avec un profond respect pour les techniques et les motifs traditionnels qui
      les inspirer. Nous pensons que la mode doit être durable et
      éthique, c'est pourquoi nous privilégions le commerce équitable et respectueux de l'environnement
      pratiques dans tous les aspects de nos activités. En soutenant Tribal Trendz,
      vous obtenez non seulement des vêtements uniques et élégants, mais vous êtes également
      contribuer à la préservation et à l'autonomisation des communautés tribales
      autour du monde. Merci d'avoir choisi Tribal Trendz, et nous espérons
      vous appréciez nos collections autant que nous !
      `}
          </p>
          <img
            className=" md:w-1/2 h-[400px] rounded-[16px] object-top object-cover"
            src="https://images.pexels.com/photos/6954222/pexels-photo-6954222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};

export default about;

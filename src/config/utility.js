// import translate from "google-translate-api";
export const starsFn = (arr) => {
  const len = arr?.length;
  let totalRate = 0;
  arr?.forEach((itm) => (totalRate += +itm?.rating));
  return (totalRate / len).toFixed(1);
};

// export const translatorFn = async (text, ln = "en") => {
//   translate(text, { to: ln })
//     .then((res) => {
//       return { txt: res.text, from: res.from.language.iso };
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };
export const addEllipses = (txt, maxLength, numOfDots = 3) => {
  let dots = "";
  for (let i = 0; i < numOfDots; i++) {
    dots += ".";
  }
  return txt?.length < maxLength ? txt : txt?.slice(0, maxLength) + dots;
};

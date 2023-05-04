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

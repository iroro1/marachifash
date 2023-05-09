// import { TickCircle } from "iconsax-react";
// import { v4 as uuidv4 } from 'uuid';

// export const checkDob = (calDate, ageLimit) => {
//   /***
//    * Takes date and an optional ageLimit and returns a boolean if the date inputted is allowed or not to use a certain feature
//    */
//   const today = Date();
//   const currYear = Number(today.split(" ")[3]);
//   const dob = Number(calDate.split("-")[0]);
//   return currYear - dob >= ageLimit || 13 ? true : false;
// };

// export const diffBetweenDates = (lowerDate, higherDate) => {
//   const date1 = new Date(lowerDate);
//   const date2 = new Date(higherDate);
//   const diffTime = date2 - date1;
//   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//   return {
//     days: diffDays,
//     time: diffTime,
//   };
// };
// export const emailDomain = (email) => {
//   /***
//    * Returns the domain of an email with whole domain like @gmail.com or @yahoo.com
//    */
//   return email.split("@")[1];
// };
// export const getOS = () => {
//   let userAgent = window.navigator.userAgent,
//     platform = window.navigator.platform,
//     macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
//     windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
//     iosPlatforms = ["iPhone", "iPad", "iPod"],
//     os = null;

//   if (macosPlatforms.indexOf(platform) !== -1) {
//     os = "Mac OS";
//   } else if (iosPlatforms.indexOf(platform) !== -1) {
//     os = "iOS";
//   } else if (windowsPlatforms.indexOf(platform) !== -1) {
//     os = "Windows";
//   } else if (/Android/.test(userAgent)) {
//     os = "Android";
//   } else if (!os && /Linux/.test(platform)) {
//     os = "Linux";
//   }

//   return os;
// };
// export const subDomain = () => {
//   /***
//    * Returns SubDomains off the URL
//    */
//   return window.location.host.split(".")[1];
// };

// export const checkErrors = (err, name) => {
//   /***
//    * Checks Errors on an Error object. It takes the error object and the name of the field and returns a boolean
//    */
//   let hasError = false;
//   err[name] !== undefined ? (hasError = true) : (hasError = false);
//   return hasError;
// };

// export const validationLCustom = (name, val, schema) => {
//   /***
//    * Used to validated custom made schema for authentication on signup
//    */
//   return schema[name](val);
// };

// export const checkInputOnlyNum = (evt) => {
//   /***
//    * Used with Input fields and accepts the event on the input and checks that only numbers are entered in the field
//    */
//   let theEvent = evt || window.event;
//   let key = "";
//   // Handle paste
//   if (theEvent.type === "paste") {
//     key = evt.clipboardData.getData("text/plain");
//   } else {
//     // Handle key press
//     key = theEvent.keyCode || theEvent.which;
//     key = String.fromCharCode(key);
//     console.log(theEvent)
//   }
//   let regex = /[0-9]|\./;
//   if (!regex.test(key)) {
//     if (theEvent.preventDefault) theEvent.preventDefault();
//     theEvent.returnValue = false;
//     return false
//   }
//   return true
// };

// export const capitalize = (txt) => {
//   /***
//    * Takes a text and Capitalizes the text.
//    */
//   return txt
//     .split(" " || "-" || "" || "_")
//     .map(
//       (d) => `${d.slice(0, 1).toString().toUpperCase()}${d.slice(1, d.length)}`
//     )
//     .join(" ");
// };

// export const scrollToTop = (x, y) => {
//   /***
//    *  Makes the window scroll to the Top by default
//    */
//   const { history } = window;
//   if ("scrollRestoration" in history) {
//     history.scrollRestoration = "manual";
//   }
//   window.scrollTo(x || 0, y || 0);
// };

// export const getSession = (id) => {
//   /***
//    * Reduces typing for sessionStorage
//    */
//   sessionStorage.getItem(id);
// };
// export const endSession = (id) => {
//   /***
//    * Reduces typing for sessionStorage
//    */
//   sessionStorage.removeItem(id);
// };
// export const setSession = (id, val) => {
//   /***
//    * Reduces typing for sessionStorage
//    */
//   sessionStorage.setItem(id, val);
// };

// export const returnURL = () => {
//   /***
//    * Returns the current URL. Can be used for deep linking. When the user needs to know the page they where on before being redirected to login.
//    */
//   return window.location.href.split(window.location.origin)[1];
// };

// export const formatDateDisplay = (date) => {
//   /***
//    * Takes a default JS date and returns the useful part
//    */
//   return date.toString().slice(0, 16);
// };

// export const joinStringsAndLower = (txt, sep) => {
//   /***
//    * Takes a text with spaces and a separator we want to introduce, remove the spaces,,introduce the separator and return the lowercased formatted text
//    */
//   return txt.split(" ").join(sep).toLowerCase();
// };
// export const removeSpaces = (txt) => {
//   /***
//    * Takes a text and strips off spaces
//    */
//   return txt && txt.split(" ").join("");
// };
// export const removeSeparators = (txt, sep) => {
//   /***
//    * Takes a text and strips off spaces
//    */
//   return txt && txt.split(sep).join(" ");
// };

// export const closeOnClickOut = (id, state, setState, type) => {
//   /***
//    * It takes the Id of the element You want to close when a mouse is clicked out and the state and setState  that controls the display of the element.
//    * Should be run in useEffect and add state to rerender condition.
//    * It has type of modal which takes the overlay Id you want to tap on to close modal. If type not supplied, the default function is to close the element when you click out of it.
//    */
//   console.log(id,state,)
//   window.onclick = function (e) {
//     if (type === "modal") {
//       if (state) {
//         if (e.target.id === id) setState(false);
//       }
//     } else {
//       if (state) {
//         if (!e.target.matches(`#${id}`)) setState(false);
//       }
//     }

//     e.stopPropagation();
//   };
// };

// export const calcFontSize = (
//   size,
//   appSize = localStorage.getItem("kobo-font")
// ) => {
//   /***
//    * Takes number and app font size and return the correct number per the current app font size. Tis is used for dynamic resizing.
//    */
//   return size + appSize / 22;
// };
// export const cilResponsiveNumber = (width, xs, s, m, l, xl) => {
//   /***
//    * Takes browser width and returns different digits depending on screen size.
//    */
//   let ans = 0;
//   if (width < 360) ans = +xs;
//   else if (width >= 360 && width < 768) ans = +s;
//   else if (width >= 768 && width < 1280) ans = +m;
//   else if (width >= 1280 && width <= 1440) ans = +l;
//   else ans = +xl;
//   return ans;
// };

// export const scrollToID = (id) => {
//   const el = document.getElementById(id);
//   el.scrollIntoView();
// };

// export const addEllipses = (txt, maxLength, numOfDots = 3) => {
//   let dots = "";
//   for (let i = 0; i < numOfDots; i++) {
//     dots += ".";
//   }
//   return txt?.length < maxLength ? txt : txt?.slice(0, maxLength) + dots;
// };

// export function getFlagEmoji(countryCode) {
//   const codePoints = countryCode
//     .toUpperCase()
//     .split("")
//     .map((char) => 127397 + char.charCodeAt());
//   return String.fromCodePoint(...codePoints);
// }

// export const boolCheck = (dt) => {
//   if (typeof dt === "boolean") return "";
//   else return dt;
// };
// export const nullCheckObjects = (dt) => {
//   const nArr = {};
//   Object.entries(dt).forEach((itm) => {
//     if (itm[1] === null) nArr[itm[0]] = "";
//     else nArr[itm[0]] = itm[1];
//   });
//   return nArr;
// };

// export const copyToClipBoard = (txt) => {
//   navigator.clipboard.writeText(txt);
// };

// export const isEmailValid = (val) => {
//   // check for @
//   let atSymbol = val.indexOf("@");
//   if (atSymbol < 1) return false;

//   let dot = val.lastIndexOf(".");
//   if (dot <= atSymbol + 2) return false;

//   // check that the dot is not at the end
//   if (dot === val.length - 1) return false;

//   return true;
// };

// export const currencyFormatter = (num) => {
//   return new Intl.NumberFormat("en", {
//     style: "currency",
//     currency: "NGN",
//   }).format(num);
// };

// export const allowOnlyNumbersFn = (e) => {
//   let regex = /^[0-9-!.@#$%*?]/;
//   let key = String.fromCharCode(e.charCode ? e.which : e.charCode);
//   if (!regex.test(key)) {
//     e.preventDefault();
//     return false;
//   }
// };

// export const dateSubtracter = (minus) => {
//   let d = new Date();
//   d.setDate(d.getDate() - minus);
//   let ans = d.toLocaleString();
//   ans = ans.split(",")[0].split("/");
//   let ansMain = ans[2] + "-" + ans[0] + "-" + ans[1];
//   return ansMain;
// };

// export const statusShow = (status) => {
//   if (status === "open") {
//     return (
//       <div
//         style={{
//           background: "#EFFDF6",
//           border: "1px solid #B7F1D2",
//           width: "72px",
//           height: "32px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           borderRadius: "8px",
//         }}
//       >
//         <TickCircle variant="Bold" color="#42936D" size={16.67} />
//         <span className="text-[#285D48] font-semibold text-[12px] ml-[7.67px]">
//           Open
//         </span>
//       </div>
//     );
//   } else {
//     return (
//       <div
//         style={{
//           border: "1px solid #EBD6FE",
//           borderRadius: "8px",
//           background: "#F7F3FF",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//         className='w-[59px] h-[32px]'
//       >
//         <span className='text-[#5C1D97] text-[12px] font-semibold'>
//           {capitalize(status) || "Closed"}
//         </span>
//       </div>
//     );
//   }
// };

// export const serialNumberTableGen = (
//   activePage = 1,
//   pageSize = 10,
//   i,
//   type = "paginated"
// ) => {
//   if (type === "paginated") {
//     if (activePage === 1) return i + 1;
//     else return activePage * pageSize - 9 + i;
//   } else {
//     return i + 1;
//   }
// };

// export const subtractDateFromToday=(date)=>{
//   let date1 = new Date();
//   let date2 = new Date(date);

//   let Difference_In_Time = date1.getTime() - date2.getTime();

//   // To calculate the no. of days between today and date
//   let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
//   return Difference_In_Days
// }

// export const isValidURL = (string) => {
//   var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
//   return (res !== null)
// };

// export const sortArrObjsFn=(arr,col,dir="asc")=>{
//   const a = arr.sort(function(a, b) {
//     if(dir==="asc"){
//       return a[col] - b[col];
//     } else return b[col] - a[col];
//   });

//   return a
// }

// export const appId=(identifier,preId)=>{
//   let id={
//     id: `${preId.toUpperCase()}-${uuidv4()}`,
//     mainId: identifier
//   }
//   return id
// }

// export const todaysDateFn=()=>{
//   const dt = new Date();
//   const yr = dt.getFullYear();
//   const month = dt.getUTCMonth();
//   const dy = dt.getDate();
//   return `${yr}-${month + 1}-${dy}`;

// }

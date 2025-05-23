<<<<<<< HEAD
// "use client";
// import { TwosomeTwColors, TwosomeTwFontSizes } from "@/common/tailstyles";
// import SgCoffeeCard from "./sgCoffeeCard";
// import coffeeMenu from "./coffeemenu";
// import desertMenu from "./desertmenu";
// import deliMenu from "./delimenu";
// import React, { useEffect, useState } from "react";
// import { fetchMenuItems } from "@/firebase/firestore";
=======
"use client";
import { TwosomeTwColors, TwosomeTwFontSizes } from "@/common/tailstyles";
import SgCoffeeCard from "./sgCoffeeCard";
import React, { useEffect, useState } from "react";
import { fetchMenuItems } from "@/firebase/firestore";
>>>>>>> origin/my-LHB

// type menuprops = {
//   title: string;
//   text: string;
// };

// interface MenuItem {
//   menu: string;
//   id: string;
//   ename: string;
//   pricename: string;
//   explanation: string;
//   imgurl: string;
//   details: string;
// }

// const SgCoffee = ({ title, text }: menuprops) => {
//   const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

//   useEffect(() => {
//     const loadMenu = async () => {
//       const fetchedMenu = await fetchMenuItems(); // fetchedMenu 타입을 명시적으로 MenuItem[]로 지정
//       setMenuItems(fetchedMenu);
//     };

//     loadMenu();
//   }, []);

//   const name =
//     text == "디저트이야기"
//       ? menuItems.filter((v) => v.menu == "desert")
//       : text == "델리이야기"
//       ? menuItems.filter((v) => v.menu == "deli")
//       : menuItems.filter((v) => v.menu == "drink");
//   console.log(name);
//   return (

//     <div className="max-w-[1215px]  flex flex-col items-center md:items-start">

//     <div className="max-w-[1215px] flex flex-col items-center md:items-start mb-20">

//       <h2
//         className={`${TwosomeTwFontSizes["fontSize-40px"]} font-black tracking-tighter ml-8 md:ml-0 mb-8 `}
//       >
//         시그니처 커피&음료
//       </h2>
//       <div
//         className="flex flex-col items-end ml-10  md:ml-0   gap-10 md:flex-row justify-between
//         "
//       >
//         <SgCoffeeCard
//           img={
//             "https://www.twosome.co.kr/resources/images/content/img_t_menu01@3x.png"
//           }
//           name={"스페니쉬 연유 라떼"}
//           text1="Spanish Condensed Milk Café Latte"
//           text2="평화로운 유럽 초원의 감성을 담은 부드럽고 달콤한 스페니쉬 연유라떼"
//           text3="스페니쉬 라떼 : 야외 활동이 많은 스페인 목동들이 피곤함을 해소하기 위해 즐겨 마시던 커피"
//         />
//         <SgCoffeeCard
//           img={
//             "https://www.twosome.co.kr/resources/images/content/img_t_menu02@3x.png"
//           }
//           name={"롱블랙"}
//           text1="Long Black"
//           text2="아메리카노보다 진하고 부드러운 플레이버를 느낄 수 있는 에스프레소"
//           text3="롱블랙 : 호주와 뉴질랜드를 시작으로 유럽에서 즐기는 커피로 아메리카노보다 진한 풍미로 즐기는 커피"
//         />
//         <SgCoffeeCard
//           img={
//             "https://www.twosome.co.kr/resources/images/content/img_t_menu03@3x.png"
//           }
//           name={"허니 레몬티"}
//           text1="Honey Lemon Tea"
//           text2="진한 TWG 프렌치 얼그레이의 향과 달콤한 꿀, 상큼한 레몬이 녹아든 향긋한 티"
//           text3=""
//         />
//         <SgCoffeeCard
//           img={
//             "https://www.twosome.co.kr/resources/images/content/img_t_menu04@3x.png"
//           }
//           name={"스트로베리 피치 프라페"}
//           text1="Strawberry Peach Frappe"
//           text2="딸기와 복숭아의 상큼함이 조화롭게 어우러져 달콤하고 시원하게 즐길 수 있는 과일 프라페"
//           text3=""
//         />
//       </div>

//       <div className="max-w-[1215px] flex flex-col items-center md:items-start mb-20">
//         {/* 타이틀 */}
//         <h2
//           className={`${TwosomeTwFontSizes["fontSize-40px"]} font-black tracking-tighter ml-8 md:ml-0 mb-8`}
//         >
//           {title}
//         </h2>

//         {/* 커피 카드 리스트 */}
//         <div className="grid grid-cols-1 items-start ml-10 md:ml-0 md:h-130 gap-10 md:grid-cols-4 justify-between">
//           {name.map((v, index) => (
//             <SgCoffeeCard key={index} {...v} />
//           ))}
//         </div>

//       <div className="grid grid-cols-1 items-start ml-4 md:ml-0 md:h-130 gap-10 md:grid-cols-4 justify-between">
//         {name.map((v, index) => (
//           <SgCoffeeCard key={index} {...v} />
//         ))}

//     <>
//       <div className="max-w-[1215px]  flex flex-col items-center max-md:items-start">
//         <h2
//           className={`${TwosomeTwFontSizes["fontSize-40px"]} font-black tracking-tighter ml-8 md:ml-0 mb-8 `}
//         >
//           시그니처 커피&음료
//         </h2>
//         <div
//           className="flex flex-col items-end ml-10  md:ml-0   gap-10 md:flex-row justify-between
//         "
//         >
//           <SgCoffeeCard
//             img={
//               "https://www.twosome.co.kr/resources/images/content/img_t_menu01@3x.png"
//             }
//             name={"스페니쉬 연유 라떼"}
//             text1="Spanish Condensed Milk Café Latte"
//             text2="평화로운 유럽 초원의 감성을 담은 부드럽고 달콤한 스페니쉬 연유라떼"
//             text3="스페니쉬 라떼 : 야외 활동이 많은 스페인 목동들이 피곤함을 해소하기 위해 즐겨 마시던 커피"
//           />
//           <SgCoffeeCard
//             img={
//               "https://www.twosome.co.kr/resources/images/content/img_t_menu02@3x.png"
//             }
//             name={"롱블랙"}
//             text1="Long Black"
//             text2="아메리카노보다 진하고 부드러운 플레이버를 느낄 수 있는 에스프레소"
//             text3="롱블랙 : 호주와 뉴질랜드를 시작으로 유럽에서 즐기는 커피로 아메리카노보다 진한 풍미로 즐기는 커피"
//           />
//           <SgCoffeeCard
//             img={
//               "https://www.twosome.co.kr/resources/images/content/img_t_menu03@3x.png"
//             }
//             name={"허니 레몬티"}
//             text1="Honey Lemon Tea"
//             text2="진한 TWG 프렌치 얼그레이의 향과 달콤한 꿀, 상큼한 레몬이 녹아든 향긋한 티"
//             text3=""
//           />
//           <SgCoffeeCard
//             img={
//               "https://www.twosome.co.kr/resources/images/content/img_t_menu04@3x.png"
//             }
//             name={"스트로베리 피치 프라페"}
//             text1="Strawberry Peach Frappe"
//             text2="딸기와 복숭아의 상큼함이 조화롭게 어우러져 달콤하고 시원하게 즐길 수 있는 과일 프라페"
//             text3=""
//           />
//         </div>
//         <div className="max-w-[1215px] flex flex-col items-center md:items-start mb-20">
//           {/* 타이틀 */}
//           <h2
//             className={`${TwosomeTwFontSizes["fontSize-40px"]} font-black tracking-tighter ml-8 md:ml-0 mb-8`}
//           >
//             {title}
//           </h2>

//           {/* 커피 카드 리스트 */}
//           <div className="grid grid-cols-1 items-start ml-10 md:ml-0 md:h-130 gap-10 md:grid-cols-4 justify-between">
//             {name.map((v, index) => (
//               <SgCoffeeCard key={index} {...v} />
//             ))}
//           </div>
//         </div>

//       </div>
//     </>
//   );
// };

// export default SgCoffee;

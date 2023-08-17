// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";
  
  // Analytics Cards imports
  import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
  import { keyboard } from "@testing-library/user-event/dist/keyboard";
  
  // Recent Card Imports
  import img1 from "../imgs/img1.png";
  import img2 from "../imgs/img2.png";
  import img3 from "../imgs/img3.png";
  
  // Sidebar Data
  export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
    },
    {
      icon: UilClipboardAlt,
      heading: "Washlist",
    },
    {
      icon: UilUsersAlt,
      heading: "Currency Converter",
    },
    {
      icon: UilPackage,
      heading: 'Rate Alert'
    },
    {
      icon: UilChart,
      heading: 'Future Orders'
    },
  ];
  
  // Analytics Cards Data
  export const cardsData = [
    {
      title: "Total Investment",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "45,000,00",
      png: UilUsdSquare,
      series: [
        {
          name: "Total Investment",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Global One Account (G1A)",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "39,000.00",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Global One Account (G1A)",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Master Foreign Currency Account-i (MFCA-i)",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "6,000.00",
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
  
  // Recent Update Card Data
  export const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      noti: "has buy ordered RM20,000,00",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "James Bond",
      noti: "has sell ordered RM14,456.00",
      time: "30 minutes ago",
    },
  ];
  
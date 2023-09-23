//Sideabr import
import{
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilTimesCircle,
    UilCheck,
    // UilSignOutAlt,
    UilPlaneFly,
    UilMoneyWithdrawal,
    UilRupeeSign,
    UilRefresh,
    UilTruck,
} from "@iconscout/react-unicons";

import dp from '../imgs/dp.png'

//Sidebar Data
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders",
    },
    {
        icon: UilPackage,
        heading: "Products",
    },
    {
        icon: UilChart,
        heading: "Analytics",
    },
    {
        icon: UilUsersAlt,
        heading: "Profile",
    },
];


//Cards
export const CardsData = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: UilRupeeSign,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
            boxShadow: "0px 10px 20px 0px #fdc0c7",
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: "Expenses",
        color: {
            backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%",
            boxShadow: "0px 10px 20px 0px #f9d59b",
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20],
            }
        ],
    },
]

//Recent Updates Card Data
export const UpdatesData=[
    {
        img: dp,
        name: "Yash Jaiswal",
        noti: "Has ordered Apple Iphone 15.",
        time: "25 seconds ago" ,
    },
    {
        img: dp,
        name: "Sakshi Gupta",
        noti: "Has ordered Boatstone 650.",
        time: "45 minutes ago" ,
    },
    {
        img: dp,
        name: "Pragyan Prakhar",
        noti: "Has ordered JBL 15W Bluetooth.",
        time: "2 hours ago" ,
    },
]

//Analytics Card 2
export const CardsStat2 = [
    {
        title: "PO induction pending",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 13,
        value: "13",
        time: "Journey",
        png: UilClipboardAlt,
    },
    {
        title: "In transit",
        color: {
            backGround: "linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
            boxShadow: "0px 10px 20px 0px #fdc0c7",
        },
        barValue: 80,
        value: "80",
        png: UilTruck,
    },
    {
        title: "In process @Customs",
        color: {
            backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%",
            boxShadow: "0px 10px 20px 0px #f9d59b",
        },
        barValue: 60,
        value: "60",
        png: UilRefresh,
    },
]

//Analytics Card 1

export const CardsStat1 = [
    {
        title: "Total consignments",
        color: {
            backGround: "linear-gradient(180deg, #333333 0%, #555555 100%)",
            boxShadow: "0px 10px 20px 0px #737570",
        },
        barValue: 723,
        value: "25,970",
        png: UilRupeeSign,
    },
]

//Analytics Card 3

export const CardsStat3 = [
    {
        title: "Custom cleared",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 723,
        value: "723",
        png: UilCheck,
    },
    {
        title: "Customs detained",
        color: {
            backGround: "linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
            boxShadow: "0px 10px 20px 0px #fdc0c7",
        },
        barValue: 20,
        value: "20",
        png: UilTimesCircle,
    },
    {
        title: "Despatched",
        color: {
            backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%",
            boxShadow: "0px 10px 20px 0px #f9d59b",
        },
        barValue: 723,
        value: "723",
        png: UilPlaneFly,
    },
]
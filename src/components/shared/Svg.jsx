// eslint-disable-next-line react/prop-types
const Svg = ({ name, theme = "#000" }) => {
  const svgs = [
    {
      name: "profile",
      svg: (
        <svg
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill={theme}
          className={"w-[17px]"}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>profile [#1341]</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-180.000000, -2159.000000)"
                fill={theme}
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M134,2008.99998 C131.783496,2008.99998 129.980955,2007.20598 129.980955,2004.99998 C129.980955,2002.79398 131.783496,2000.99998 134,2000.99998 C136.216504,2000.99998 138.019045,2002.79398 138.019045,2004.99998 C138.019045,2007.20598 136.216504,2008.99998 134,2008.99998 M137.775893,2009.67298 C139.370449,2008.39598 140.299854,2006.33098 139.958235,2004.06998 C139.561354,2001.44698 137.368965,1999.34798 134.722423,1999.04198 C131.070116,1998.61898 127.971432,2001.44898 127.971432,2004.99998 C127.971432,2006.88998 128.851603,2008.57398 130.224107,2009.67298 C126.852128,2010.93398 124.390463,2013.89498 124.004634,2017.89098 C123.948368,2018.48198 124.411563,2018.99998 125.008391,2018.99998 C125.519814,2018.99998 125.955881,2018.61598 126.001095,2018.10898 C126.404004,2013.64598 129.837274,2010.99998 134,2010.99998 C138.162726,2010.99998 141.595996,2013.64598 141.998905,2018.10898 C142.044119,2018.61598 142.480186,2018.99998 142.991609,2018.99998 C143.588437,2018.99998 144.051632,2018.48198 143.995366,2017.89098 C143.609537,2013.89498 141.147872,2010.93398 137.775893,2009.67298"
                    id="profile-[#1341]"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      ),
    },
    {
      name: "codes",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"w-[28px] -mr-1"}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M9 8L5 11.6923L9 16M15 8L19 11.6923L15 16"
              stroke={theme}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      name: "alert",
      svg: (
        <svg
          viewBox="-0.5 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"w-[25px] h-[25px]"}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M10.8809 16.15C10.8809 16.0021 10.9101 15.8556 10.967 15.7191C11.024 15.5825 11.1073 15.4586 11.2124 15.3545C11.3175 15.2504 11.4422 15.1681 11.5792 15.1124C11.7163 15.0567 11.8629 15.0287 12.0109 15.03C12.2291 15.034 12.4413 15.1021 12.621 15.226C12.8006 15.3499 12.9399 15.5241 13.0211 15.7266C13.1024 15.9292 13.122 16.1512 13.0778 16.3649C13.0335 16.5786 12.9272 16.7745 12.7722 16.9282C12.6172 17.0818 12.4204 17.1863 12.2063 17.2287C11.9922 17.2711 11.7703 17.2494 11.5685 17.1663C11.3666 17.0833 11.1938 16.9426 11.0715 16.7618C10.9492 16.5811 10.8829 16.3683 10.8809 16.15ZM11.2408 13.42L11.1008 8.20001C11.0875 8.07453 11.1008 7.94766 11.1398 7.82764C11.1787 7.70761 11.2424 7.5971 11.3268 7.5033C11.4112 7.40949 11.5144 7.33449 11.6296 7.28314C11.7449 7.2318 11.8697 7.20526 11.9958 7.20526C12.122 7.20526 12.2468 7.2318 12.3621 7.28314C12.4773 7.33449 12.5805 7.40949 12.6649 7.5033C12.7493 7.5971 12.813 7.70761 12.8519 7.82764C12.8909 7.94766 12.9042 8.07453 12.8909 8.20001L12.7609 13.42C12.7609 13.6215 12.6809 13.8149 12.5383 13.9574C12.3958 14.0999 12.2024 14.18 12.0009 14.18C11.7993 14.18 11.606 14.0999 11.4635 13.9574C11.321 13.8149 11.2408 13.6215 11.2408 13.42Z"
              fill={theme}
            ></path>
            <path
              d="M12 21.5C17.1086 21.5 21.25 17.3586 21.25 12.25C21.25 7.14137 17.1086 3 12 3C6.89137 3 2.75 7.14137 2.75 12.25C2.75 17.3586 6.89137 21.5 12 21.5Z"
              stroke="#E7000B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      name: "loading",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"w-[40px] mx-auto animate-spin"}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4.97498 12H7.89998"
              stroke={theme}
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M11.8 5V8"
              stroke={theme}
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M18.625 12H15.7"
              stroke={theme}
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M11.8 19V16"
              stroke={theme}
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M6.97374 16.95L9.04203 14.8287"
              stroke={theme}
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M6.97374 7.05001L9.04203 9.17133"
              stroke={theme}
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M16.6262 7.05001L14.5579 9.17133"
              stroke={theme}
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M16.6262 16.95L14.5579 14.8287"
              stroke={theme}
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      name: "share",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"w-[22px]"}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23 5.5C23 7.98528 20.9853 10 18.5 10C17.0993 10 15.8481 9.36007 15.0228 8.35663L9.87308 10.9315C9.95603 11.2731 10 11.63 10 11.9971C10 12.3661 9.9556 12.7247 9.87184 13.0678L15.0228 15.6433C15.8482 14.6399 17.0993 14 18.5 14C20.9853 14 23 16.0147 23 18.5C23 20.9853 20.9853 23 18.5 23C16.0147 23 14 20.9853 14 18.5C14 18.1319 14.0442 17.7742 14.1276 17.4318L8.97554 14.8558C8.1502 15.8581 6.89973 16.4971 5.5 16.4971C3.01472 16.4971 1 14.4824 1 11.9971C1 9.51185 3.01472 7.49713 5.5 7.49713C6.90161 7.49713 8.15356 8.13793 8.97886 9.14254L14.1275 6.5682C14.0442 6.2258 14 5.86806 14 5.5C14 3.01472 16.0147 1 18.5 1C20.9853 1 23 3.01472 23 5.5ZM16.0029 5.5C16.0029 6.87913 17.1209 7.99713 18.5 7.99713C19.8791 7.99713 20.9971 6.87913 20.9971 5.5C20.9971 4.12087 19.8791 3.00287 18.5 3.00287C17.1209 3.00287 16.0029 4.12087 16.0029 5.5ZM16.0029 18.5C16.0029 19.8791 17.1209 20.9971 18.5 20.9971C19.8791 20.9971 20.9971 19.8791 20.9971 18.5C20.9971 17.1209 19.8791 16.0029 18.5 16.0029C17.1209 16.0029 16.0029 17.1209 16.0029 18.5ZM5.5 14.4943C4.12087 14.4943 3.00287 13.3763 3.00287 11.9971C3.00287 10.618 4.12087 9.5 5.5 9.5C6.87913 9.5 7.99713 10.618 7.99713 11.9971C7.99713 13.3763 6.87913 14.4943 5.5 14.4943Z"
              fill={theme}
            ></path>
          </g>
        </svg>
      ),
    },
    {
      name: "open_new_tab",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000000"
          strokeWidth="1.492"
          className={"w-[30px]"}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M5 12V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H12M8.11111 12H12M12 12V15.8889M12 12L5 19"
              stroke={theme}
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      name: "code",
      svg: (
        <svg
          width="196px"
          height="196px"
          viewBox="-1.44 -1.44 26.88 26.88"
          fill="none"
          className={
            "opacity-10 absolute top-1/2 -translate-y-1/2 -rotate-[200deg] w-[120px] left-0"
          }
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000000"
          strokeWidth="0.9359999999999999"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="0.048"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M14.9615 5.27473C15.1132 4.7437 14.8058 4.19021 14.2747 4.03849C13.7437 3.88677 13.1902 4.19426 13.0385 4.72529L9.03847 18.7253C8.88675 19.2563 9.19424 19.8098 9.72528 19.9615C10.2563 20.1133 10.8098 19.8058 10.9615 19.2747L14.9615 5.27473Z"
              fill="#0F0F0F"
            ></path>
            <path
              d="M5.7991 7.39879C6.13114 7.84012 6.04255 8.46705 5.60123 8.7991L2.40894 11.2009C1.87724 11.601 1.87723 12.399 2.40894 12.7991L5.60123 15.2009C6.04255 15.533 6.13114 16.1599 5.7991 16.6012C5.46705 17.0426 4.84012 17.1311 4.39879 16.7991L1.20651 14.3973C-0.388615 13.1971 -0.388621 10.8029 1.2065 9.60276L4.39879 7.20093C4.84012 6.86889 5.46705 6.95747 5.7991 7.39879Z"
              fill="#0F0F0F"
            ></path>
            <path
              d="M18.2009 16.6012C17.8689 16.1599 17.9575 15.533 18.3988 15.2009L21.5911 12.7991C22.1228 12.399 22.1228 11.601 21.5911 11.2009L18.3988 8.7991C17.9575 8.46705 17.8689 7.84012 18.2009 7.39879C18.533 6.95747 19.1599 6.86889 19.6012 7.20093L22.7935 9.60276C24.3886 10.8029 24.3886 13.1971 22.7935 14.3973L19.6012 16.7991C19.1599 17.1311 18.533 17.0426 18.2009 16.6012Z"
              fill="#0F0F0F"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      name: "users",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={
            "opacity-10 absolute top-1/2 -translate-y-1/2 -rotate-[20deg] w-[120px] left-0"
          }
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <circle
              cx="9"
              cy="9"
              r="4"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></circle>
            <path
              d="M16 19C16 15.6863 12.866 13 9 13C5.13401 13 2 15.6863 2 19"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <path
              d="M15 13C17.2091 13 19 11.2091 19 9C19 6.79086 17.2091 5 15 5C13.8053 5 12.7329 5.52375 12 6.35418"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <path
              d="M22 19C22 15.6863 18.866 13 15 13C14.1928 13 12.897 12.7069 12 11.7655"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      name: "visits",
      svg: (
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 100 100"
          xmlSpace="preserve"
          className={
            "opacity-10 absolute top-1/2 -translate-y-1/2 -rotate-[40deg] w-[120px] left-0"
          }
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M30,58c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h20c0.5,0,0.9,0.2,1.3,0.5C54.5,49,59,46.6,64,46.1V26 c0-3.3-2.7-6-6-6H26c-3.3,0-6,2.7-6,6v34c0,3.3,2.7,6,6,6h20c0-2.8,0.6-5.5,1.7-8H30z M28,30c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v2 c0,1.1-0.9,2-2,2H30c-1.1,0-2-0.9-2-2V30z M28,42c0-1.1,0.9-2,2-2h24c1.1,0,2,0.9,2,2v2c0,1.1-0.9,2-2,2H30c-1.1,0-2-0.9-2-2V42z"></path>
            <path d="M66,52c-7.7,0-14,6.3-14,14s6.3,14,14,14s14-6.3,14-14S73.7,52,66,52z M73.9,62.5c0,0-8.9,9.7-8.9,9.7 c-0.4,0.4-0.8,0.6-1.4,0.6c-0.5,0-1-0.2-1.4-0.6l-4.8-4.7c-0.4-0.4-0.4-1,0-1.3l1.4-1.3c0.4-0.4,1-0.4,1.4,0l3.4,3.4l7.5-8.4 c0.4-0.4,1-0.4,1.4,0l1.4,1.3C74.2,61.5,74.2,62.2,73.9,62.5z"></path>{" "}
          </g>
        </svg>
      ),
    },
  ];

  const foundSvg = svgs.find((sg) => sg.name === name);

  return foundSvg ? foundSvg.svg : null;
};

export default Svg;

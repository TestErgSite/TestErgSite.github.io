import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { useMediaQuery } from "react-responsive";
import './EnneaCircle.scss';

export const EnneaCircle = () => {
  const { t } = useTranslation();

  const DefaultEnneaCircle = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileEnneaCircle = useMediaQuery({ query: "(max-width: 428px)" });

  const clickHandler = (e) => {
    const id = e.target.id;
    setActiveColor({
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7: true,
      8: true,
      9: true,
      ...{
        [id]: !activeColor,
      },
    });
  };

  const [activeColor, setActiveColor] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  });

  return (
    <>
      {MobileEnneaCircle && (
        <svg
          onClick={(e) => clickHandler(e)}
          className="ennea-circle"
          width="327"
          height="336"
          viewBox="0 0 327 336"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.998 79.5887L48.6504 92.0747C64.0662 65.553 88.4089 44.8994 117.604 34.1888L109.033 10.6572C74.3392 23.4491 45.3709 48.0495 26.998 79.5887Z"
            fill={activeColor[8] ? "#DB2B1E4d" : "#DB2B1E"}
            id="8"
          />
          <path
            d="M26.5314 80.3955C13.208 103.58 5.58984 130.464 5.58984 159.135C5.58984 168.268 6.36297 177.22 7.84737 185.929L32.667 181.535C31.4024 174.159 30.7437 166.572 30.7437 158.828C30.7437 134.803 37.0831 112.295 48.185 92.8822L26.5314 80.3955Z"
            fill={activeColor[7] ? "#6694D14d" : "#6694D1"}
            id="7"
          />
          <path
            d="M61.3697 279.731C33.9146 256.394 14.5373 223.843 8.00659 186.847L32.8276 182.452C38.3736 213.492 54.6611 240.747 77.7258 260.255L61.3697 279.731Z"
            fill={activeColor[6] ? "#6F619A4d" : "#6F619A"}
            id="6"
          />
          <path
            d="M62.0813 280.332C89.3983 303.278 124.592 317.155 163.034 317.335V291.715C147.745 291.629 133.072 288.959 119.427 284.12C104.321 278.828 90.4742 270.889 78.4393 260.854L62.0813 280.332Z"
            fill={activeColor[5] ? "#1C5F934d" : "#1C5F93"}
            id="5"
          />
          <path
            d="M163.966 291.717V317.336C202.475 317.295 237.753 303.51 265.16 280.62L248.684 261C225.731 280.146 196.201 291.676 163.966 291.717Z"
            fill={activeColor[4] ? "#0BA45D4d" : "#0BA45D"}
            id="4"
          />
          <path
            d="M249.397 260.402L265.873 280.021C293.484 256.685 312.985 224.055 319.56 186.948L294.329 182.48C288.817 213.541 272.499 240.855 249.397 260.402Z"
            fill={activeColor[3] ? "#667D354d" : "#667D35"}
            id="3"
          />
          <path
            d="M294.488 181.562L319.72 186.029C321.216 177.289 321.995 168.303 321.995 159.134C321.995 130.359 314.321 103.384 300.907 80.1416L278.793 92.8941C282.75 99.8158 286.102 107.131 288.777 114.767C293.697 128.638 296.375 143.572 296.375 159.134C296.375 166.779 295.729 174.272 294.488 181.562Z"
            fill={activeColor[2] ? "#b7cf324d" : "#B7CF32"}
            id="2"
          />
          <path
            d="M300.439 79.3362L278.328 92.087C262.917 65.567 238.58 44.9128 209.392 34.1979L218.035 10.4678C252.865 23.1714 281.968 47.762 300.439 79.3362Z"
            fill={activeColor[1] ? "#f1a0184d" : "#F1A018"}
            id="1"
          />
          <path
            d="M109.908 10.3375L118.479 33.8709C132.525 28.8304 147.677 26.0855 163.485 26.0855C179.304 26.0855 194.464 28.8337 208.517 33.8799L217.159 10.1512C200.488 4.18256 182.521 0.931641 163.792 0.931641C144.869 0.931641 126.724 4.25025 109.908 10.3375Z"
            fill={activeColor[9] ? "#9B49334d" : "#9B4933"}
            id="9"
          />
          <path
            d="M161.171 41.9229L60.0898 223.59H266.91L161.171 41.9229Z"
            stroke="#E2E2E2"
            strokeWidth="0.904167"
          />
          <path
            d="M123.906 273.432L41.9231 138.346L236.167 63.3506L198.902 273.432L279.021 138.346L85.7094 63.3506L123.906 273.432Z"
            stroke="#E2E2E2"
            strokeWidth="0.904167"
          />
          <path
            d="M163.36 22.264C167.992 22.264 170.416 18.616 170.416 14.008C170.416 9.544 168.52 5.728 163.816 5.728C160.24 5.728 157.912 8.152 157.912 11.104C157.912 14.512 160.408 16.288 163.288 16.288C165.16 16.288 166.84 15.112 167.584 14.032C167.584 14.2 167.584 14.344 167.584 14.512C167.584 17.128 166.264 19.768 163.36 19.768C161.848 19.768 160.912 19.24 160.072 18.376L158.776 20.488C159.856 21.568 161.392 22.264 163.36 22.264ZM164.032 13.864C162.304 13.864 160.768 12.976 160.768 11.008C160.768 9.736 161.872 8.224 163.96 8.224C166.432 8.224 167.392 10.264 167.536 11.992C166.744 13.144 165.4 13.864 164.032 13.864Z"
            fill="white"
          />
          <path
            d="M252.09 54.5602L261.862 41.8804L259.923 40.3861L253.431 41.2614L253.683 43.6073L257.411 43.0559L249.866 52.8462L252.09 54.5602Z"
            fill="white"
          />
          <path
            d="M299.003 140.725L301.428 140.245L300.049 133.276C304.061 136.862 307.177 139.01 310.073 138.437C313.205 137.817 314.397 134.817 313.796 131.78C313.363 129.59 312.077 127.545 310.131 126.486L308.635 128.446C309.96 129.211 310.993 130.475 311.357 132.311C311.641 133.747 311.167 135.309 309.519 135.635C307.259 136.082 304.74 134.11 298.919 128.925L296.753 129.354L299.003 140.725Z"
            fill="white"
          />
          <path
            d="M280.005 229.744C278.407 233.077 279.154 236.017 281.599 237.189C283.828 238.258 285.909 236.86 286.713 235.515C286.257 237.133 286.594 239.317 288.52 240.241C290.944 241.403 293.422 240.009 294.916 236.893C296.068 234.491 295.934 232.271 295.165 230.544L292.962 231.086C293.503 232.622 293.485 234.104 292.779 235.576C292.001 237.199 290.686 238.165 289.344 237.522C288.024 236.889 288.052 235.332 288.861 233.644C289.131 233.081 289.536 232.237 289.682 231.988L287.41 230.899C287.327 231.126 286.923 231.97 286.632 232.576C285.647 234.631 284.491 235.488 283.063 234.803C281.721 234.16 281.384 232.641 282.297 230.737C283.034 229.2 284.441 227.985 285.97 227.573L284.957 225.411C283.191 225.763 281.24 227.169 280.005 229.744Z"
            fill="white"
          />
          <path
            d="M207.65 288.205L208.969 291.58L206.98 292.358L207.88 294.66L209.869 293.883L213.477 303.115L217.076 301.709L219.514 289.882L218.693 287.78L211.585 290.558L210.266 287.183L207.65 288.205ZM212.484 292.861L217.022 291.087L215.175 299.746L212.484 292.861Z"
            fill="white"
          />
          <path
            d="M113.986 286.315C110.653 285.019 107.548 286.052 106.339 289.161C105.156 292.203 106.728 294.849 109.233 295.823C110.664 296.38 112.121 296.277 113.115 295.839L111.436 300.156L104.278 297.373L103.382 299.677L113.157 303.478L116.402 295.135L114.754 293.876C113.467 294.405 112.259 294.399 110.984 293.903C109.15 293.19 108.395 291.686 109.021 290.076C109.587 288.622 111.225 287.92 113.104 288.65C114.781 289.303 115.88 290.451 116.443 291.983L118.637 290.777C117.986 288.875 116.558 287.316 113.986 286.315Z"
            fill="white"
          />
          <path
            d="M46.6676 226.875C44.9515 223.738 41.7287 222.847 39.1178 224.275C36.1279 225.911 35.7771 228.92 37.1592 231.447C38.069 233.11 39.8859 234.031 41.179 234.145C41.0641 234.235 40.9378 234.304 40.7904 234.385C38.3269 235.732 35.4095 235.55 34.1311 233.213C33.394 231.865 33.4195 230.812 33.7955 229.649L31.2881 229.516C30.8799 230.97 30.9853 232.663 31.9413 234.411C34.1641 238.474 38.5279 238.85 42.5916 236.628C46.487 234.497 48.925 231.002 46.6676 226.875ZM44.5469 228.199C45.7332 230.368 44.4137 232.157 42.9782 233.133C41.576 232.97 40.2898 232.169 39.6333 230.969C38.7925 229.432 38.8345 227.658 40.5611 226.714C41.6981 226.092 43.5334 226.346 44.5469 228.199Z"
            fill="white"
          />
          <path
            d="M30.1659 134.796L17.4356 126.172L15.5227 125.826L13.4644 137.185L15.8968 137.625L17.3774 129.455L29.6181 137.819L30.1659 134.796Z"
            fill="white"
          />
          <path
            d="M77.9132 54.2619C80.4615 52.2223 81.7315 49.2385 79.9469 47.0087C78.6721 45.416 76.4644 45.3078 74.5418 46.0167C75.5872 44.4422 76.0702 42.5493 74.7955 40.9566C72.9509 38.6519 69.7727 39.5971 67.5804 41.3518C65.3506 43.1364 63.7695 46.0003 65.6141 48.3051C66.8889 49.8977 68.8229 49.8561 70.5882 49.181C69.4753 50.9017 69.0973 53.0794 70.372 54.6721C72.1716 56.9206 75.3462 56.3165 77.9132 54.2619ZM71.8845 46.7294C71.0113 47.2131 69.0399 48.0532 68.0951 46.8727C67.2553 45.8234 67.7722 44.3952 69.14 43.3005C70.4704 42.2357 71.9959 42.0292 72.8357 43.0785C73.7805 44.2589 72.5477 45.9834 71.8845 46.7294ZM76.3535 52.3132C74.9295 53.453 73.2279 53.7082 72.3581 52.6214C71.3233 51.3285 72.6572 49.308 73.3692 48.5844C74.2124 48.0632 76.4761 47.2044 77.5109 48.4973C78.3807 49.5841 77.7401 51.2034 76.3535 52.3132Z"
            fill="white"
          />
        </svg>
      )}
      {DefaultEnneaCircle && (
        <div className="ennea-circle-wrapper">
          <div className="ennea-circle-text"></div>
          <svg
            onClick={(e) => clickHandler(e)}
            className="ennea-circle"
            width="351"
            height="359"
            viewBox="0 0 351 359"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.9795 84.4301L52.221 97.8325C68.7682 69.3643 94.8976 47.1948 126.235 35.6981L117.036 10.4395C79.7952 24.1702 48.7008 50.5761 28.9795 84.4301Z"
              fill={activeColor[8] ? "#DB2B1E4d" : "#DB2B1E"}
              id="8"
            />
            <path
              d="M28.4786 85.2957C14.1773 110.182 6 139.039 6 169.814C6 179.618 6.82987 189.227 8.42321 198.575L35.0644 193.858C33.707 185.94 33 177.797 33 169.484C33 143.696 39.8047 119.537 51.7214 98.6988L28.4786 85.2957Z"
              fill={activeColor[7] ? "#6694D14d" : "#6694D1"}
              id="7"
            />
            <path
              d="M65.8739 299.262C36.4038 274.211 15.6043 239.271 8.59424 199.56L35.237 194.843C41.1901 228.16 58.6729 257.417 83.4305 278.356L65.8739 299.262Z"
              fill={activeColor[6] ? "#6F619A4d" : "#6F619A"}
              id="6"
            />
            <path
              d="M66.6377 299.907C95.9596 324.537 133.736 339.432 175 339.626V312.125C158.589 312.033 142.838 309.168 128.193 303.973C111.978 298.293 97.1144 289.771 84.1963 278.999L66.6377 299.907Z"
              fill={activeColor[5] ? "#1C5F934d" : "#1C5F93"}
              id="5"
            />
            <path
              d="M176 312.127V339.627C217.336 339.583 255.203 324.786 284.621 300.216L266.936 279.156C242.298 299.707 210.601 312.083 176 312.127Z"
              fill={activeColor[4] ? "#0BA45D4d" : "#0BA45D"}
              id="4"
            />
            <path
              d="M267.701 278.513L285.387 299.572C315.024 274.523 335.956 239.499 343.014 199.668L315.931 194.873C310.014 228.213 292.499 257.532 267.701 278.513Z"
              fill={activeColor[3] ? "#667D354d" : "#667D35"}
              id="3"
            />
            <path
              d="M316.102 193.887L343.186 198.683C344.791 189.301 345.627 179.655 345.627 169.814C345.627 138.927 337.39 109.971 322.992 85.0237L299.255 98.7121C303.503 106.142 307.101 113.994 309.972 122.191C315.253 137.079 318.127 153.109 318.127 169.814C318.127 178.02 317.434 186.063 316.102 193.887Z"
              fill={activeColor[2] ? "#b7cf324d" : "#B7CF32"}
              id="2"
            />
            <path
              d="M322.49 84.1591L298.755 97.8458C282.213 69.3793 256.091 47.2091 224.76 35.7078L234.038 10.2361C271.424 23.8721 302.663 50.2675 322.49 84.1591Z"
              fill={activeColor[1] ? "#f1a0184d" : "#F1A018"}
              id="1"
            />
            <path
              d="M117.975 10.0962L127.175 35.3568C142.251 29.9464 158.515 27 175.484 27C192.463 27 208.737 29.9499 223.821 35.3665L233.097 9.89617C215.203 3.48952 195.917 0 175.814 0C155.502 0 136.025 3.56218 117.975 10.0962Z"
              fill={activeColor[9] ? "#9B49334d" : "#9B4933"}
              id="9"
            />
            <path
              d="M173 44L64.5 239H286.5L173 44Z"
              stroke="#E2E2E2"
              strokeWidth="0.904167"
            />
            <path
              d="M133 292.5L45 147.5L253.5 67L213.5 292.5L299.5 147.5L92 67L133 292.5Z"
              stroke="#E2E2E2"
              strokeWidth="0.904167"
            />
            <path
              d="M174.36 21.264C178.992 21.264 181.416 17.616 181.416 13.008C181.416 8.544 179.52 4.728 174.816 4.728C171.24 4.728 168.912 7.152 168.912 10.104C168.912 13.512 171.408 15.288 174.288 15.288C176.16 15.288 177.84 14.112 178.584 13.032C178.584 13.2 178.584 13.344 178.584 13.512C178.584 16.128 177.264 18.768 174.36 18.768C172.848 18.768 171.912 18.24 171.072 17.376L169.776 19.488C170.856 20.568 172.392 21.264 174.36 21.264ZM175.032 12.864C173.304 12.864 171.768 11.976 171.768 10.008C171.768 8.736 172.872 7.224 174.96 7.224C177.432 7.224 178.392 9.264 178.536 10.992C177.744 12.144 176.4 12.864 175.032 12.864Z"
              fill="white"
            />
            <path
              d="M271.147 55.9528L280.918 43.2729L278.979 41.7787L272.487 42.654L272.74 44.9999L276.467 44.4485L268.923 54.2388L271.147 55.9528Z"
              fill="white"
            />
            <path
              d="M322.35 148.819L324.775 148.339L323.396 141.37C327.408 144.956 330.524 147.104 333.42 146.531C336.551 145.911 337.744 142.911 337.143 139.873C336.71 137.684 335.424 135.639 333.478 134.58L331.982 136.54C333.307 137.305 334.34 138.569 334.704 140.405C334.988 141.841 334.514 143.403 332.866 143.729C330.606 144.176 328.087 142.204 322.266 137.019L320.1 137.447L322.35 148.819Z"
              fill="white"
            />
            <path
              d="M302.241 245.875C300.643 249.207 301.39 252.147 303.835 253.319C306.064 254.388 308.145 252.99 308.949 251.646C308.493 253.264 308.83 255.448 310.756 256.371C313.18 257.533 315.658 256.14 317.152 253.023C318.304 250.621 318.17 248.401 317.401 246.675L315.199 247.216C315.739 248.753 315.721 250.234 315.016 251.706C314.237 253.329 312.922 254.296 311.581 253.652C310.26 253.02 310.288 251.463 311.097 249.775C311.367 249.212 311.772 248.368 311.918 248.118L309.646 247.029C309.564 247.256 309.159 248.1 308.868 248.706C307.883 250.762 306.727 251.618 305.299 250.934C303.957 250.29 303.62 248.772 304.533 246.867C305.27 245.331 306.677 244.116 308.206 243.704L307.193 241.542C305.428 241.893 303.476 243.299 302.241 245.875Z"
              fill="white"
            />
            <path
              d="M224.238 309.564L225.557 312.94L223.567 313.717L224.467 316.02L226.457 315.242L230.064 324.474L233.663 323.068L236.102 311.241L235.281 309.14L228.172 311.918L226.853 308.542L224.238 309.564ZM229.072 314.22L233.61 312.447L231.763 321.105L229.072 314.22Z"
              fill="white"
            />
            <path
              d="M122.258 308.048C118.925 306.752 115.82 307.785 114.611 310.894C113.428 313.936 115 316.581 117.505 317.556C118.937 318.112 120.393 318.009 121.387 317.572L119.708 321.889L112.551 319.105L111.655 321.409L121.43 325.21L124.674 316.867L123.026 315.608C121.739 316.138 120.531 316.132 119.256 315.636C117.422 314.922 116.667 313.419 117.294 311.808C117.859 310.354 119.497 309.652 121.376 310.383C123.053 311.035 124.152 312.183 124.715 313.716L126.91 312.509C126.258 310.608 124.83 309.048 122.258 308.048Z"
              fill="white"
            />
            <path
              d="M48.9247 243.8C47.2086 240.662 43.9858 239.772 41.3749 241.2C38.3849 242.835 38.0342 245.845 39.4162 248.372C40.3261 250.035 42.143 250.956 43.436 251.069C43.3212 251.16 43.1949 251.229 43.0475 251.309C40.584 252.657 37.6666 252.475 36.3881 250.137C35.651 248.79 35.6766 247.736 36.0526 246.573L33.5451 246.44C33.137 247.894 33.2424 249.587 34.1983 251.335C36.4212 255.399 40.7849 255.775 44.8487 253.552C48.7441 251.421 51.1821 247.927 48.9247 243.8ZM46.804 245.124C47.9902 247.293 46.6707 249.081 45.2353 250.058C43.8331 249.895 42.5469 249.094 41.8904 247.894C41.0496 246.357 41.0916 244.583 42.8182 243.638C43.9552 243.016 45.7904 243.271 46.804 245.124Z"
              fill="white"
            />
            <path
              d="M30.713 143.834L17.9827 135.21L16.0698 134.863L14.0115 146.222L16.4439 146.663L17.9245 138.492L30.1653 146.857L30.713 143.834Z"
              fill="white"
            />
            <path
              d="M82.1996 56.2948C84.7479 54.2553 86.0179 51.2714 84.2332 49.0417C82.9585 47.449 80.7508 47.3408 78.8281 48.0496C79.8735 46.4752 80.3566 44.5822 79.0819 42.9895C77.2373 40.6848 74.059 41.6301 71.8667 43.3847C69.637 45.1693 68.0559 48.0333 69.9005 50.338C71.1752 51.9307 73.1093 51.889 74.8745 51.214C73.7617 52.9346 73.3836 55.1124 74.6584 56.7051C76.458 58.9536 79.6326 58.3494 82.1996 56.2948ZM76.1709 48.7624C75.2976 49.2461 73.3263 50.0861 72.3815 48.9057C71.5417 47.8564 72.0586 46.4282 73.4264 45.3334C74.7568 44.2686 76.2822 44.0621 77.1221 45.1114C78.0669 46.2919 76.8341 48.0163 76.1709 48.7624ZM80.6399 54.3461C79.2159 55.4859 77.5143 55.7412 76.6444 54.6544C75.6097 53.3615 76.9436 51.3409 77.6555 50.6174C78.4988 50.0962 80.7625 49.2374 81.7973 50.5303C82.6671 51.617 82.0265 53.2364 80.6399 54.3461Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </>
  );
};

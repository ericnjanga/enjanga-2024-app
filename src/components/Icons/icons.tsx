// icon:react | Fontawesome https://fontawesome.com/ | Fontawesome
// 1) https://reactsvgicons.com/search?q=react
// 2) https://reactsvgicons.com/
import { IconProps } from "../../models";

export default function Icon({ size, className, name }: IconProps) {
  const dim = { width: "inherit", height: "inherit" };

  // ...
  if (size) {
    switch (size) {
      case "tiny":
        dim.width = "23px";
        dim.height = "23px";
    }
  }

  console.log('.... iconName = ', name);

  // ...
  if (name === "cube") {
    return (
      <svg
        className={className}
        width={dim.width}
        height={dim.height}
        viewBox="0 0 61 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M59.6803 16.101L30.9024 0.171661C30.6383 0.0261128 30.3202 0.0261128 30.0561 0.171661L1.27824 16.101C1.00062 16.2546 0.828125 16.5457 0.828125 16.8638V48.7225C0.828125 49.0405 1.00062 49.3316 1.27824 49.4853L30.0561 65.4146C30.3202 65.5602 30.6383 65.5602 30.9024 65.4146L59.6803 49.4853C59.9579 49.3316 60.1304 49.0406 60.1304 48.7225V16.8638C60.1304 16.5457 59.9579 16.2547 59.6803 16.101ZM29.6032 63.1666L2.57447 48.2046V18.3483L29.6059 33.3075L29.6032 63.1666ZM30.4791 31.793L3.50701 16.8635L30.4791 1.93392L57.4512 16.8635L30.4791 31.793ZM58.3834 48.2046L31.352 63.1666V33.3082L58.3806 18.3463L58.3834 48.2046Z"
          fill="#323069"
        />
      </svg>
    );
  } else if (name === "hand") {
    return ( 
      <svg
        className={className}
        width={dim.width}
        height={dim.height}
        viewBox="0 0 48 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.5425 2.57076C18.87 2.57076 16.6746 4.60071 16.6746 7.07181V32.5685L8.25023 23.6269C8.23197 23.6076 8.21372 23.5907 8.19547 23.5714C6.31296 21.797 3.19193 21.8163 1.30167 23.5642C0.347368 24.4466 -0.0541254 25.6327 0.00581489 26.7152C0.0657839 27.8 0.50643 28.8005 1.10089 29.6901L16.8809 53.3883C17.1339 53.7692 17.5823 54.0007 18.0647 54.0007H42.1596C42.788 54.0007 43.3381 53.6077 43.5024 53.046L47.2205 40.189C47.2518 40.0805 47.27 39.9696 47.27 39.8587V22.5007C47.27 20.0296 45.0746 17.9997 42.402 17.9997C41.6537 17.9997 40.9471 18.1636 40.3109 18.4457C40.1988 16.0638 38.0503 14.1423 35.4482 14.1423C34.0897 14.1423 32.8564 14.6679 31.9725 15.5069C31.0861 14.6679 29.8527 14.1423 28.4969 14.1423C27.7512 14.1423 27.0446 14.3015 26.4111 14.5811V7.07136C26.4111 4.60026 24.2156 2.57031 21.5431 2.57031L21.5425 2.57076ZM21.5425 5.14314C22.7211 5.14314 23.6284 5.98213 23.6284 7.07181V18.6438V28.2871C23.6284 28.9983 24.2516 29.5721 25.0181 29.5721C25.7873 29.5721 26.4079 28.9959 26.4079 28.2871V18.6438C26.4079 17.5541 27.3152 16.7151 28.4937 16.7151C29.6723 16.7151 30.5796 17.5541 30.5796 18.6438V28.2871C30.5796 28.9983 31.2028 29.5721 31.9694 29.5721C32.7385 29.5721 33.3591 28.9959 33.3591 28.2871V18.6438C33.3591 17.5541 34.2664 16.7151 35.445 16.7151C36.6235 16.7151 37.5308 17.5541 37.5308 18.6438V28.2871C37.5308 28.9983 38.154 29.5721 38.9206 29.5721C39.6897 29.5721 40.3103 28.9959 40.3103 28.2871V22.5011C40.3103 21.4115 41.2176 20.5725 42.3962 20.5725C43.5747 20.5725 44.4821 21.4115 44.4821 22.5011V39.6906L41.0951 51.4311H18.8464L3.47356 28.3427C3.05638 27.7183 2.8165 27.077 2.78785 26.5828C2.75917 26.0885 2.86346 25.7607 3.27022 25.3822C4.10197 24.6131 5.39002 24.6083 6.20349 25.3701L17.0188 36.8458C17.8635 37.7402 19.4566 37.1906 19.4566 36.002V7.07204C19.4566 5.98236 20.364 5.14314 21.5425 5.14314Z"
          fill="#323069"
        />
        <path
          d="M34.7699 6.18011e-05C34.4023 6.18011e-05 34.0477 0.135068 33.7869 0.376155C33.2446 0.877608 33.2446 1.69246 33.7869 2.19392L35.586 3.85738H30.6006C29.8315 3.85738 29.2109 4.43357 29.2109 5.14234C29.2109 5.85351 29.8341 6.42729 30.6006 6.42729H35.5886L33.7895 8.09076C33.2472 8.59221 33.2472 9.40707 33.7895 9.90852C34.3318 10.41 35.2131 10.41 35.7554 9.90852L39.9272 6.05119C40.4696 5.54973 40.4696 4.73488 39.9272 4.23343L35.7554 0.376093C35.4947 0.135013 35.1401 0 34.7724 0L34.7699 6.18011e-05Z"
          fill="#323069"
        />
        <path
          d="M8.35061 0C7.98297 0 7.62839 0.135007 7.3676 0.376093L3.19581 4.23343C2.65348 4.73488 2.65348 5.54973 3.19581 6.05119L7.3676 9.90852C7.90993 10.41 8.79122 10.41 9.33355 9.90852C9.87588 9.40707 9.87588 8.59221 9.33355 8.09076L7.53708 6.4297H12.5224C13.2915 6.4297 13.9121 5.85351 13.9121 5.14474C13.9121 4.43358 13.2889 3.85979 12.5224 3.85979H7.53447L9.33355 2.19632C9.87588 1.69487 9.87588 0.880015 9.33355 0.378562C9.07281 0.135068 8.72088 0 8.35061 0Z"
          fill="#323069"
        />
      </svg>
    );
  }

  return <span>--icon--</span>;
}

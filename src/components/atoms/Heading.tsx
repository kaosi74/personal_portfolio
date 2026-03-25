import { montserrat, nunito, satisfy } from "@/app/font";

type HeadingProps = {
  children: React.ReactNode;
  fontFace?: "montserrat" | "nunito" | "satisfy";
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
};

export const Heading: React.FC<HeadingProps> = ({
  children,
  variant = "h1",
  fontFace = "montserrat",
  className,
}) => {
  const fontMap = {
    montserrat: montserrat.className,
    satisfy: satisfy.className,
    nunito: nunito.className,
  };
  if (variant === "h1") {
    return (
      <h1 className={`text-4xl font-extrabold ${className} ${fontMap[fontFace]}`}>
        {children}
      </h1>
    );
  } else if (variant === "h2") {
    return (
      <h2 className={`text-2xl font-extrabold ${className} ${fontMap[fontFace]}`}>
        {children}
      </h2>
    );
  } else if (variant === "h3") {
    return (
      <h3 className={`text-xl font-extrabold ${className} ${fontMap[fontFace]}`}>
        {children}
      </h3>
    );
  } else if (variant === "h4") {
    return (
      <h4 className={`text-lg font-extrabold ${className} ${fontMap[fontFace]}`}>
        {children}
      </h4>
    );
  } else if (variant === "h5") {
    return (
      <h5 className={`text-base font-extrabold ${className} ${fontMap[fontFace]}`}>
        {children}
      </h5>
    );
  } else if (variant === "h6") {
    return (
      <h6 className={`text-sm font-extrabold ${className} ${fontMap[fontFace]}`}>
        {children}
      </h6>
    );
  }
};

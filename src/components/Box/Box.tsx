import { FC, ReactNode } from "react";

type BoxProps = {
  width?: string;
  height?: string;
  row?: boolean;
  col?: boolean;
  reverse?: boolean;
  padding?: string;
  margin?: string;
  wrap?: boolean;
  minHeight?: string;
  children?: ReactNode;
  center?: boolean;
  gap?: string;
  flex?: number;
  overflow?: string;
  justifyContent?: string;
  alignItems?: string;
  maxWidth?: string;
  maxHeight?: string;
};

type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";

const Box: FC<BoxProps> = ({
  width,
  height,
  row,
  col,
  padding,
  margin,
  wrap,
  minHeight,
  flex,
  children,
  center,
  gap,
  overflow,
  reverse,
  justifyContent,
  alignItems,
  maxWidth,
  maxHeight,
}) => {
  let flexDirection = row ? "row" : col ? "column" : "row";
  if (reverse) flexDirection += "-reverse";

  if (center) justifyContent = "center";
  if (center) alignItems = "center";

  return (
    <div
      style={{
        width,
        height,
        padding,
        margin,
        minHeight,
        flex,
        display: "flex",
        flexWrap: wrap ? "wrap" : "nowrap",
        whiteSpace: wrap !== false ? "normal" : "nowrap",
        alignItems: alignItems ?? "flex-start",
        justifyContent: justifyContent ?? "flex-start",
        flexDirection: flexDirection as FlexDirection,
        gap,
        overflow,
        maxWidth,
        maxHeight,
      }}
    >
      {children}
    </div>
  );
};

export default Box;

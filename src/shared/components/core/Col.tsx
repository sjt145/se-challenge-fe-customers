import React, {useCallback, useMemo} from "react";
import {Stack} from "@mui/material";
import {AlignItems, JustifyContent, ScreenSize} from "@/app-types";

type Props = {
  sm?: number,
  md?: number,
  lg?: number,
  xl?: number,
  alignContentX?: AlignItems,
  alignContentY?: JustifyContent,
  smAlignContentX?: AlignItems,
  smAlignContentY?: JustifyContent,
  mdAlignContentX?: AlignItems,
  mdAlignContentY?: JustifyContent,
  lgAlignContentX?: AlignItems,
  lgAlignContentY?: JustifyContent,
  xlAlignContentX?: AlignItems,
  xlAlignContentY?: JustifyContent,
  [key: string]: any
}

export const Col = (props: Props) => {
  const {
    alignContentX, alignContentY,
    smAlignContentX, smAlignContentY, mdAlignContentX, mdAlignContentY, lgAlignContentX, lgAlignContentY, xlAlignContentX, xlAlignContentY,
    sm, md, lg, xl, children, ...rest
  } = props;

  const getAlignItemsClassName = useCallback((screenSize: ScreenSize | undefined, value: AlignItems | undefined) => {
    switch (value) {
      case "flex-start":
        return (screenSize ? `${screenSize}-` : "") + `align-items-start`
      case "center":
        return (screenSize ? `${screenSize}-` : "") + `align-items-center`;
      case "flex-end":
        return (screenSize ? `${screenSize}-` : "") + `align-items-end`;
    }
    return "";
  }, []);

  const getJustifyContentClassName = useCallback((screenSize: ScreenSize | undefined, value: JustifyContent | undefined) => {
    switch (value) {
      case "flex-start":
        return (screenSize ? `${screenSize}-` : "") + `justify-content-start`;
      case "center":
        return (screenSize ? `${screenSize}-` : "") + `justify-content-center`;
      case "flex-end":
        return (screenSize ? `${screenSize}-` : "") + `justify-content-end`;
      case "space-between":
        return (screenSize ? `${screenSize}-` : "") + `justify-content-sp-btw`;
      case "space-around":
        return (screenSize ? `${screenSize}-` : "") + `justify-content-sp-around`;
      case "space-evenly":
        return (screenSize ? `${screenSize}-` : "") + `justify-content-sp-even`;
    }
    return "";
  }, []);

  const className = useMemo(() => {
    let className = "";
    if (sm) {
      className += `col-sm-${sm}` + " ";
    }
    if (md) {
      className += `col-md-${md}` + " ";
    }
    if (lg) {
      className += `col-lg-${lg}` + " ";
    }
    if (xl) {
      className += `col-xl-${xl}` + " ";
    }

    className += getAlignItemsClassName(undefined, alignContentX) + " ";
    className += getAlignItemsClassName("sm", smAlignContentX) + " ";
    className += getAlignItemsClassName("md", mdAlignContentX) + " ";
    className += getAlignItemsClassName("lg", lgAlignContentX) + " ";
    className += getAlignItemsClassName("xl", xlAlignContentX) + " ";
    className += getJustifyContentClassName(undefined, alignContentY) + " ";
    className += getJustifyContentClassName("sm", smAlignContentY) + " ";
    className += getJustifyContentClassName("md", mdAlignContentY) + " ";
    className += getJustifyContentClassName("lg", lgAlignContentY) + " ";
    className += getJustifyContentClassName("xl", xlAlignContentY) + " ";

    return className.trim();
  }, [props])

  return (
    <Stack direction="column" className={className} {...rest}>
      {children}
    </Stack>
  )
}

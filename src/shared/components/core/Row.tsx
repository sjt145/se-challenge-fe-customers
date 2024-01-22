import React, {useCallback, useMemo} from "react";
import {Stack} from "@mui/material";
import {AlignItems, JustifyContent, ScreenSize} from "@/app-types";

type Props = {
  alignContentX?: JustifyContent,
  alignContentY?: AlignItems,
  smAlignContentX?: JustifyContent,
  smAlignContentY?: AlignItems,
  mdAlignContentX?: JustifyContent,
  mdAlignContentY?: AlignItems,
  lgAlignContentX?: JustifyContent,
  lgAlignContentY?: AlignItems,
  xlAlignContentX?: JustifyContent,
  xlAlignContentY?: AlignItems,
  [key: string]: any
}

export const Row = (props: Props) => {
  const {
    alignContentX, alignContentY,
    smAlignContentX, smAlignContentY, mdAlignContentX, mdAlignContentY, lgAlignContentX, lgAlignContentY, xlAlignContentX, xlAlignContentY,
    children, ...rest
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
    className += getAlignItemsClassName(undefined, alignContentY) + " ";
    className += getAlignItemsClassName("sm", smAlignContentY) + " ";
    className += getAlignItemsClassName("md", mdAlignContentY) + " ";
    className += getAlignItemsClassName("lg", lgAlignContentY) + " ";
    className += getAlignItemsClassName("xl", xlAlignContentY) + " ";
    className += getJustifyContentClassName(undefined, alignContentX) + " ";
    className += getJustifyContentClassName("sm", smAlignContentX) + " ";
    className += getJustifyContentClassName("md", mdAlignContentX) + " ";
    className += getJustifyContentClassName("lg", lgAlignContentX) + " ";
    className += getJustifyContentClassName("xl", xlAlignContentX) + " ";

    return className.trim();
  }, [props])

  return (
    <Stack direction="row" className={className} {...rest}>
      {children}
    </Stack>
  )
}

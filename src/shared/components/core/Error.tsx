import React, {CSSProperties} from "react";
import {Image, Text} from "@/shared/components";
import Assets from "@/assets";
import {ObjOfCss} from "@/app-types";

type Props = {
  message: any,
  style?: CSSProperties,
  [key: string]: unknown
}

export const Error = (props: Props) => {
  const {message} = props;
  return (
    <div style={styles.errorContainer}>
      <Image src={Assets.icons.errorIcon.url} style={styles.errorImage}/>
      <Text style={styles.errorContent}>{message}</Text>
    </div>
  )
}

const styles: ObjOfCss = {
  errorContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    alignItems: "center"
  },
  errorImage: {
    height: "15px",
    width: "15px"
  },
  errorContent: {
    color: "#F44336",
  }
}

import React, {CSSProperties} from "react";

type Props = {
  src: string,
  style?: CSSProperties,
  [key: string]: unknown
}

export const Image = (props: Props) => {
  const {style, src, ...rest} = props;
  return (
    <img src={src} style={style} {...rest}/>
  )
}


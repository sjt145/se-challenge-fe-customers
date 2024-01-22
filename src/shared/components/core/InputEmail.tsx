import React, {CSSProperties} from "react";

type Props = {
  name: string
  value?: string | number | undefined,
  required?:boolean
  onChange: (event: any) => void,
  onEnterPressed?: () => void,
  onEscapePressed?: () => void,
  rightIconSrc?: string | undefined,
  onRightIconClick?: () => void,
  placeholder?: string,
  containerStyle?: CSSProperties,
  inputStyle?: CSSProperties,
  rightIconStyle?: CSSProperties,
  [key: string]: any
}

export const InputEmail = (props: Props) => {
  const {
    name,
    value,
    required,
    onChange,
    onEnterPressed,
    onEscapePressed,
    rightIconSrc,
    onRightIconClick,
    inputStyle,
    placeholder,
    style,
  } = props;

  const onKeyDown = (e: { key: string }) => {
    switch (e.key) {
      case "Enter":
        onEnterPressed?.();
        break;
      case "Escape":
        onEscapePressed?.();
        break;
    }
  }

  return (
    <span>
      <input type="email" name={name} style={inputStyle ? inputStyle : style} defaultValue={value} onChange={onChange}
             onKeyDown={onEnterPressed || onEscapePressed ? onKeyDown : undefined} placeholder={placeholder} required={required}/>
      {rightIconSrc ?
        <img
          src={rightIconSrc} onClick={onRightIconClick}/>
        : null}
    </span>
  )
};

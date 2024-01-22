import React, {CSSProperties} from "react";

type Props = {
  name: string;
  value?: string;
  defaultValue?: string;
  onChange: (event: any) => void;
  style?: CSSProperties;
  options: string[] | number[];
};

export const DropdownField = (props: Props) => {
  const {name, onChange, defaultValue, options, style} = props;

  const finalOptions = defaultValue ? [defaultValue, ...options] : options;

  const onValueChange = event => {
    const {name, value} = event.target;
    onChange({
      target: {
        name: name,
        value: value === defaultValue ? "" : value
      }
    });
  };

  return (
    <span>
      <select name={name} onChange={onValueChange} style={style}>
        {finalOptions.map((item, index) => {
          return (
            <option key={index} defaultValue={finalOptions[0]} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </span>
  );
};

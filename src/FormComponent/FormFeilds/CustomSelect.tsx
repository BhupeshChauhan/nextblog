import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

type Props = {
  value?: any;
  onChange?: any;
  menuArray?: any;
  fullWidth?: any;
  handleChange?: any;
  name?: any;
  multiple?: any;
  placeholder?: any;
};

const CustomSelect = ({
  value,
  handleChange,
  menuArray,
  fullWidth,
  name,
  multiple,
  placeholder,
}: Props) => {
  const onChange = (event: any) => {
    const {
      target: { value },
    } = event;
    if (multiple) {
      handleChange(typeof value === "string" ? value.split(",") : value, name);
    } else {
      handleChange(value, name);
    }
  };
  return (
    <FormControl fullWidth={fullWidth}>
      <Select
        id="demo-simple-select"
        value={value}
        displayEmpty
        onChange={onChange}
        name={name}
        multiple={multiple}
        input={<OutlinedInput />}
        inputProps={{ "aria-label": "Without label" }}
        renderValue={(selected) => {
          if (multiple) {
            if (selected.length === 0) {
              return <em>{placeholder}</em>;
            }
            return selected.join(", ");
          } else {
            if (!selected) {
              return <em>{placeholder}</em>;
            }
            return selected;
          }
        }}
      >
        <MenuItem disabled value="">
          <em>{placeholder}</em>
        </MenuItem>
        {menuArray.map((element: any, index: any) => (
          <MenuItem key={index} value={element.value}>
            {element.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;

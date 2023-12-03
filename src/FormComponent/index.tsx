import React from "react";
import DynamicTextField from "./FormFeilds/DynamicTextField";
import { useFormik } from "formik";
import { Button } from "@mui/material";

interface IFormComponent {
  formArray: any;
  initialValues: any;
  validationSchema: any;
  onSubmit: any;
  isClear?: any;
  onClear?: any;
  isClose?: any;
  onClose?: any;
}
const FormComponent: React.FC<IFormComponent> = ({
  formArray,
  initialValues,
  validationSchema,
  onSubmit,
  isClear,
  onClear,
  isClose,
  onClose,
}) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  const handleClear = () => {
    onClear();
    formik.resetForm();
  };
  const handleClose = () => {
    onClose();
    formik.resetForm();
  };
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {formArray.map((element: any, index: number) => (
          <DynamicTextField
            key={index}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            id={element.id}
            name={element.name}
            label={element.abel}
            required={element.required}
            disabled={element.disabled}
            type={element.type}
            InputProps={element.InputProps}
            variant={element.variant}
            autoComplete={element.autoComplete}
            size={element.size}
            margin={element.margin}
            fullWidth={element.fullWidth}
            multiLine={element.multiLine}
            maxRows={element.maxRows}
            rows={element.rows}
          />
        ))}

        {isClear ? (
          <Button
            color="secondary"
            variant="contained"
            fullWidth
            onClick={handleClear}
          >
            Clear
          </Button>
        ) : null}
        {isClose ? (
          <Button
            color="secondary"
            variant="contained"
            fullWidth
            onClick={handleClose}
          >
            isClose
          </Button>
        ) : null}
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormComponent;

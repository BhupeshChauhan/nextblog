import React from "react";
import DynamicTextField from "./FormFeilds/DynamicTextField";
import { useFormik } from "formik";
import { Button, Grid } from "@mui/material";

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
    <Grid container spacing={0}>
      <form onSubmit={formik.handleSubmit}>
        {formArray.map((element: any, index: number) => (
          <Grid
            item
            key={index}
            xs={element?.xs}
            sm={element?.sm}
            lg={element?.lg}
            xl={element?.xl}
            display={element?.display}
            justifyContent={element?.justifyContent}
            alignItems={element?.alignItems}
          >
            <DynamicTextField
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              id={element?.id}
              name={element?.name}
              label={element?.abel}
              required={element?.required}
              disabled={element?.disabled}
              type={element?.type}
              InputProps={element?.InputProps}
              variant={element?.variant}
              autoComplete={element?.autoComplete}
              size={element?.size}
              margin={element?.margin}
              fullWidth={element?.fullWidth}
              multiLine={element?.multiLine}
              maxRows={element?.maxRows}
              rows={element?.rows}
            />
          </Grid>
        ))}
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          xl={12}
        >
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
        </Grid>
      </form>
    </Grid>
  );
};

export default FormComponent;

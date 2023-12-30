import Box from "@mui/material/Box";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import FormComponent from "../../FormComponent";

type Props = {
  title?: string;
  subtitle?: string;
  action?: JSX.Element | any;
  footer?: JSX.Element;
  formArray?: any;
  initialValues?: any;
  onSubmit?: any;
  validationSchema?: any;
  isClear?: any;
  onClear?: any;
  isClose?: any;
  onClose?: any;
};

export default function CustomDynamicForm({
  title,
  subtitle,
  action,
  footer,
  formArray,
  initialValues,
  onSubmit,
  validationSchema,
  isClear,
  onClear,
  isClose,
  onClose,
}: Props) {
  return (
    <Card sx={{ padding: 0 }} elevation={9} variant={undefined}>
      <CardContent sx={{ p: "30px" }}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems={"center"}
          mb={3}
        >
          <Box>
            {title ? <Typography variant="h5">{title}</Typography> : ""}

            {subtitle ? (
              <Typography variant="subtitle2" color="textSecondary">
                {subtitle}
              </Typography>
            ) : (
              ""
            )}
          </Box>
          {action}
        </Stack>
        <div style={{ height: "65vh", width: "100%", overflow: "scroll" }}>
          <FormComponent
            formArray={formArray}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            isClear={isClear}
            onClear={onClear}
            isClose={isClose}
            onClose={onClose}
          />
        </div>
        {footer}
      </CardContent>
    </Card>
  );
}

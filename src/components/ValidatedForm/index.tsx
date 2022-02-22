import * as React from "react";
import { DevTool } from "@hookform/devtools";
import { useForm, FormProvider } from "react-hook-form";

const ValidatedForm = ({ children }: any) => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} style={{ flex: 1 }}>
          {children}
        </form>
        <DevTool control={methods.control} />
      </FormProvider>
    </>
  );
};

export default ValidatedForm;

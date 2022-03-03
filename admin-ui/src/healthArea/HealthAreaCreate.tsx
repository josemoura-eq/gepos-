import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const HealthAreaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Health field" source="healthfield" />
        <TextInput label="Main areas" source="mainAreas" />
      </SimpleForm>
    </Create>
  );
};

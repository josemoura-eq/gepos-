import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const HealthAreaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Health field" source="healthfield" />
        <TextInput label="Main areas" source="mainAreas" />
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ContributorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Comune" source="comune" />
        <TextInput label="Contributor name" source="contributorName" />
        <TextInput label="Country of origin" source="countryOfOrigin" />
        <TextInput label="Municipality" source="municipality" />
        <TextInput
          label="Number of colaborators"
          source="numberOfColaborators"
        />
        <TextInput label="Organization type" source="organizationType" />
        <TextInput label="Province" source="province" />
      </SimpleForm>
    </Edit>
  );
};

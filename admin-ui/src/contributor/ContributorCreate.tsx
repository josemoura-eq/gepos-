import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ContributorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};

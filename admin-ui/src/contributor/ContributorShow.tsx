import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ContributorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Comune" source="comune" />
        <TextField label="Contributor name" source="contributorName" />
        <TextField label="Country of origin" source="countryOfOrigin" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Municipality" source="municipality" />
        <TextField
          label="Number of colaborators"
          source="numberOfColaborators"
        />
        <TextField label="Organization type" source="organizationType" />
        <TextField label="Province" source="province" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

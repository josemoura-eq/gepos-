import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ContributorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Contributors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

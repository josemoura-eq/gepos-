import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HealthAreaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Health areas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Health field" source="healthfield" />
        <TextField label="ID" source="id" />
        <TextField label="Main areas" source="mainAreas" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

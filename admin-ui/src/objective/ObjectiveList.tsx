import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { OBJECTIVE_TITLE_FIELD } from "./ObjectiveTitle";

export const ObjectiveList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Objectives"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Actual status" source="actualStatus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Expected status" source="expectedStatus" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Objective"
          source="objective.id"
          reference="Objective"
        >
          <TextField source={OBJECTIVE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Timeframe" source="timeframe" />
        <TextField label="Unit" source="unit" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { OBJECTIVE_TITLE_FIELD } from "./ObjectiveTitle";

export const ObjectiveShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Objective"
          target="ObjectiveId"
          label="Objectives"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

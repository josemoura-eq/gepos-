import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";
import { ObjectiveTitle } from "./ObjectiveTitle";

export const ObjectiveEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="actualStatus"
          label="Actual status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="expectedStatus"
          label="Expected status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="objective.id"
          reference="Objective"
          label="Objective"
        >
          <SelectInput optionText={ObjectiveTitle} />
        </ReferenceInput>
        <TextInput label="Timeframe" source="timeframe" />
        <TextInput label="Unit" source="unit" />
      </SimpleForm>
    </Edit>
  );
};

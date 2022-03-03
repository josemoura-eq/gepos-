import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Business unit" source="businessUnit" />
        <SelectInput
          source="coin"
          label="Coin"
          choices={[
            { label: "Kwanza", value: "Kwanza" },
            { label: "Euro", value: "Euro" },
            { label: "USD", value: "Usd" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Comune" source="comune" />
        <TextInput label="Contributor" source="contributor" />
        <DateTimeInput label="End date" source="endDate" />
        <TextInput label="Execute value" source="executeValue" />
        <TextInput label="Expected results" source="expectedResults" />
        <TextInput label="Financing" source="Financing" />
        <TextInput label="Health area" source="healthArea" />
        <TextInput label="Municipality" source="municipality" />
        <TextInput label="Objectives" source="objectives" />
        <TextInput label="Owner" source="owner" />
        <TextInput label="Project budget" source="projectValue" />
        <TextInput label="Province" source="province" />
        <TextInput label="Scope" source="scope" />
        <DateTimeInput label="Start date" source="startDate" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Target achieved" source="targetAchieved" />
        <TextInput label="Target group" source="targetGroup" />
        <TextInput label="Target population" source="targetPopulation" />
      </SimpleForm>
    </Edit>
  );
};

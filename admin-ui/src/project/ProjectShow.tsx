import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ProjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Business unit" source="businessUnit" />
        <TextField label="Coin" source="coin" />
        <TextField label="Comune" source="comune" />
        <TextField label="Contributor" source="contributor" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="End date" source="endDate" />
        <TextField label="Execute value" source="executeValue" />
        <TextField label="Expected results" source="expectedResults" />
        <TextField label="Financing" source="Financing" />
        <TextField label="Health area" source="healthArea" />
        <TextField label="ID" source="id" />
        <TextField label="Municipality" source="municipality" />
        <TextField label="Objectives" source="objectives" />
        <TextField label="Owner" source="owner" />
        <TextField label="Project budget" source="projectValue" />
        <TextField label="Province" source="province" />
        <TextField label="Scope" source="scope" />
        <TextField label="Start date" source="startDate" />
        <TextField label="Status" source="status" />
        <TextField label="Target achieved" source="targetAchieved" />
        <TextField label="Target group" source="targetGroup" />
        <TextField label="Target population" source="targetPopulation" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

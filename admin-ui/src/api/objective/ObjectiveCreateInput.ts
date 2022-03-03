import { ContributorCreateNestedManyWithoutObjectivesInput } from "./ContributorCreateNestedManyWithoutObjectivesInput";
import { ObjectiveWhereUniqueInput } from "./ObjectiveWhereUniqueInput";
import { ObjectiveCreateNestedManyWithoutObjectivesInput } from "./ObjectiveCreateNestedManyWithoutObjectivesInput";

export type ObjectiveCreateInput = {
  actualStatus?: "Option1" | null;
  contributor?: ContributorCreateNestedManyWithoutObjectivesInput;
  expectedStatus?: "Option1" | null;
  objective?: ObjectiveWhereUniqueInput | null;
  objectives?: ObjectiveCreateNestedManyWithoutObjectivesInput;
  timeframe?: string | null;
  unit?: string | null;
};

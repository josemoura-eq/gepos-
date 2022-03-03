import { ContributorUpdateManyWithoutObjectivesInput } from "./ContributorUpdateManyWithoutObjectivesInput";
import { ObjectiveWhereUniqueInput } from "./ObjectiveWhereUniqueInput";
import { ObjectiveUpdateManyWithoutObjectivesInput } from "./ObjectiveUpdateManyWithoutObjectivesInput";

export type ObjectiveUpdateInput = {
  actualStatus?: "Option1" | null;
  contributor?: ContributorUpdateManyWithoutObjectivesInput;
  expectedStatus?: "Option1" | null;
  objective?: ObjectiveWhereUniqueInput | null;
  objectives?: ObjectiveUpdateManyWithoutObjectivesInput;
  timeframe?: string | null;
  unit?: string | null;
};

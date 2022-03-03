import { Objective as TObjective } from "../api/objective/Objective";

export const OBJECTIVE_TITLE_FIELD = "timeframe";

export const ObjectiveTitle = (record: TObjective): string => {
  return record.timeframe || record.id;
};

import { SortOrder } from "../../util/SortOrder";

export type ObjectiveOrderByInput = {
  actualStatus?: SortOrder;
  createdAt?: SortOrder;
  expectedStatus?: SortOrder;
  id?: SortOrder;
  objectiveId?: SortOrder;
  timeframe?: SortOrder;
  unit?: SortOrder;
  updatedAt?: SortOrder;
};

import { ContributorUpdateManyWithoutHealthAreasInput } from "./ContributorUpdateManyWithoutHealthAreasInput";

export type HealthAreaUpdateInput = {
  contributors?: ContributorUpdateManyWithoutHealthAreasInput;
  healthfield?: string | null;
  mainAreas?: string | null;
};

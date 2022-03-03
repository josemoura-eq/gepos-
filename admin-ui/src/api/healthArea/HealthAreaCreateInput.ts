import { ContributorCreateNestedManyWithoutHealthAreasInput } from "./ContributorCreateNestedManyWithoutHealthAreasInput";

export type HealthAreaCreateInput = {
  contributors?: ContributorCreateNestedManyWithoutHealthAreasInput;
  healthfield?: string | null;
  mainAreas?: string | null;
};

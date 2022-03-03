import { HealthAreaCreateNestedManyWithoutContributorsInput } from "./HealthAreaCreateNestedManyWithoutContributorsInput";
import { ObjectiveCreateNestedManyWithoutContributorsInput } from "./ObjectiveCreateNestedManyWithoutContributorsInput";

export type ContributorCreateInput = {
  comune?: string | null;
  contributorName?: string | null;
  countryOfOrigin?: string | null;
  heathArea?: HealthAreaCreateNestedManyWithoutContributorsInput;
  municipality?: string | null;
  numberOfColaborators?: string | null;
  objectives?: ObjectiveCreateNestedManyWithoutContributorsInput;
  organizationType?: string | null;
  province?: string | null;
};

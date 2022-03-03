import { HealthAreaUpdateManyWithoutContributorsInput } from "./HealthAreaUpdateManyWithoutContributorsInput";
import { ObjectiveUpdateManyWithoutContributorsInput } from "./ObjectiveUpdateManyWithoutContributorsInput";

export type ContributorUpdateInput = {
  comune?: string | null;
  contributorName?: string | null;
  countryOfOrigin?: string | null;
  heathArea?: HealthAreaUpdateManyWithoutContributorsInput;
  municipality?: string | null;
  numberOfColaborators?: string | null;
  objectives?: ObjectiveUpdateManyWithoutContributorsInput;
  organizationType?: string | null;
  province?: string | null;
};

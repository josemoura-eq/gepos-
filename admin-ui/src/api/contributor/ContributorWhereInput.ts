import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HealthAreaListRelationFilter } from "../healthArea/HealthAreaListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ObjectiveListRelationFilter } from "../objective/ObjectiveListRelationFilter";

export type ContributorWhereInput = {
  comune?: StringNullableFilter;
  contributorName?: StringNullableFilter;
  countryOfOrigin?: StringNullableFilter;
  heathArea?: HealthAreaListRelationFilter;
  id?: StringFilter;
  municipality?: StringNullableFilter;
  numberOfColaborators?: StringNullableFilter;
  objectives?: ObjectiveListRelationFilter;
  organizationType?: StringNullableFilter;
  province?: StringNullableFilter;
};

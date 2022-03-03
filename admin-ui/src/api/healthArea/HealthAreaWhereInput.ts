import { ContributorListRelationFilter } from "../contributor/ContributorListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HealthAreaWhereInput = {
  contributors?: ContributorListRelationFilter;
  healthfield?: StringNullableFilter;
  id?: StringFilter;
  mainAreas?: StringNullableFilter;
};

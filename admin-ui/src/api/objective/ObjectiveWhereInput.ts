import { ContributorListRelationFilter } from "../contributor/ContributorListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ObjectiveWhereUniqueInput } from "./ObjectiveWhereUniqueInput";
import { ObjectiveListRelationFilter } from "./ObjectiveListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ObjectiveWhereInput = {
  actualStatus?: "Option1";
  contributor?: ContributorListRelationFilter;
  expectedStatus?: "Option1";
  id?: StringFilter;
  objective?: ObjectiveWhereUniqueInput;
  objectives?: ObjectiveListRelationFilter;
  timeframe?: StringNullableFilter;
  unit?: StringNullableFilter;
};

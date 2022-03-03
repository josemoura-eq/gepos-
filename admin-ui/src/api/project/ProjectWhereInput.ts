import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProjectWhereInput = {
  businessUnit?: StringNullableFilter;
  coin?: "Kwanza" | "Euro" | "Usd";
  comune?: StringNullableFilter;
  contributor?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  executeValue?: StringNullableFilter;
  expectedResults?: StringNullableFilter;
  Financing?: StringNullableFilter;
  healthArea?: StringNullableFilter;
  id?: StringFilter;
  municipality?: StringNullableFilter;
  objectives?: StringNullableFilter;
  owner?: StringNullableFilter;
  projectValue?: StringNullableFilter;
  province?: StringNullableFilter;
  scope?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
  targetAchieved?: StringNullableFilter;
  targetGroup?: StringNullableFilter;
  targetPopulation?: StringNullableFilter;
};

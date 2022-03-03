import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  contractDuration?: StringNullableFilter;
  contractType?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  institution?: StringNullableFilter;
  job?: StringNullableFilter;
  lastName?: StringNullableFilter;
  projects?: StringNullableFilter;
  username?: StringFilter;
};

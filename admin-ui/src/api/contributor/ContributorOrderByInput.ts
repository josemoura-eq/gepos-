import { SortOrder } from "../../util/SortOrder";

export type ContributorOrderByInput = {
  comune?: SortOrder;
  contributorName?: SortOrder;
  countryOfOrigin?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  municipality?: SortOrder;
  numberOfColaborators?: SortOrder;
  organizationType?: SortOrder;
  province?: SortOrder;
  updatedAt?: SortOrder;
};

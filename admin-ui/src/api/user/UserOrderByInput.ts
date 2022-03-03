import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  contractDuration?: SortOrder;
  contractType?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  institution?: SortOrder;
  job?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  projects?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};

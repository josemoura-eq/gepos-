import { HealthAreaWhereInput } from "./HealthAreaWhereInput";
import { HealthAreaOrderByInput } from "./HealthAreaOrderByInput";

export type HealthAreaFindManyArgs = {
  where?: HealthAreaWhereInput;
  orderBy?: HealthAreaOrderByInput;
  skip?: number;
  take?: number;
};

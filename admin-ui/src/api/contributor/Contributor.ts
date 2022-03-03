import { HealthArea } from "../healthArea/HealthArea";
import { Objective } from "../objective/Objective";

export type Contributor = {
  comune: string | null;
  contributorName: string | null;
  countryOfOrigin: string | null;
  createdAt: Date;
  heathArea?: Array<HealthArea>;
  id: string;
  municipality: string | null;
  numberOfColaborators: string | null;
  objectives?: Array<Objective>;
  organizationType: string | null;
  province: string | null;
  updatedAt: Date;
};

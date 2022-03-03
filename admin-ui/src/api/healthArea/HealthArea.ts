import { Contributor } from "../contributor/Contributor";

export type HealthArea = {
  contributors?: Array<Contributor>;
  createdAt: Date;
  healthfield: string | null;
  id: string;
  mainAreas: string | null;
  updatedAt: Date;
};

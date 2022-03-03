import { Contributor } from "../contributor/Contributor";

export type Objective = {
  actualStatus?: "Option1" | null;
  contributor?: Array<Contributor>;
  createdAt: Date;
  expectedStatus?: "Option1" | null;
  id: string;
  objective?: Objective | null;
  objectives?: Array<Objective>;
  timeframe: string | null;
  unit: string | null;
  updatedAt: Date;
};

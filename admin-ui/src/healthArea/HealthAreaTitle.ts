import { HealthArea as THealthArea } from "../api/healthArea/HealthArea";

export const HEALTHAREA_TITLE_FIELD = "healthfield";

export const HealthAreaTitle = (record: THealthArea): string => {
  return record.healthfield || record.id;
};

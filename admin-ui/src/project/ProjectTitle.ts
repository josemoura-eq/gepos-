import { Project as TProject } from "../api/project/Project";

export const PROJECT_TITLE_FIELD = "businessUnit";

export const ProjectTitle = (record: TProject): string => {
  return record.businessUnit || record.id;
};

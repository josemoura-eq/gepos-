import { Contributor as TContributor } from "../api/contributor/Contributor";

export const CONTRIBUTOR_TITLE_FIELD = "contributorName";

export const ContributorTitle = (record: TContributor): string => {
  return record.contributorName || record.id;
};

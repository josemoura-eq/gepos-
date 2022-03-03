export type UserUpdateInput = {
  contractDuration?: string | null;
  contractType?: string | null;
  firstName?: string | null;
  institution?: string | null;
  job?: string | null;
  lastName?: string | null;
  password?: string;
  projects?: string | null;
  roles?: Array<string>;
  username?: string;
};

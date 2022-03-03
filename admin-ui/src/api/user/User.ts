export type User = {
  contractDuration: string | null;
  contractType: string | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  institution: string | null;
  job: string | null;
  lastName: string | null;
  projects: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};

import {Company} from "./company";

export interface Vacancy {
  id: number,
  name: string,
  salary: bigint,
  description: string
  company: Company
}

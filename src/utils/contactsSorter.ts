import { IContact, IContactFieldNames } from "../interfaces/IContact";

export const contactsSorter = (a: IContact, b: IContact, field: IContactFieldNames) => {
   if (a[field] < b[field]) {
      return -1;
   }
   if (a[field] > b[field]) {
      return 1;
   }
   return 0;
}
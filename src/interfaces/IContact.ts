export interface IContact {
   clientId: number,
   clientName: string,
   trn_ppsn: number,
   yearEnd: string,
   ard: string,
   companyNumber: number,
   email: string,
   phoneNumber: number,
   companyAddress: string
}

export type IContactFieldNames = 'clientId' | 'clientName' | 'trn_ppsn' | 'yearEnd' | 'ard' | 'companyNumber' | 'companyAddress' | 'email' | 'phoneNumber'

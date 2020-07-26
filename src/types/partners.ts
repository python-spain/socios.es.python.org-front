export interface Partner {
  name: string;
  email: string;
  nif: string;
  phone: string;
  banckAccount: string;
  comment: string;
}

export type PartnerCreationData = Pick<Partner,
  'name' |
  'email' |
  'nif' |
  'phone' |
  'banckAccount' |
  'comment'>;

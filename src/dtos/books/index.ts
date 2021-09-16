export interface VolumeInfoProps {}

export interface SaleInfoProps {}

export interface AccessInfoProps {}

export interface SearchInfoProps {}

export interface Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfoProps;
  saleInfo: SaleInfoProps;
  accessInfo: AccessInfoProps;
  searchInfo: SearchInfoProps;
}

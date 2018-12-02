export interface Material {
  label: string;
  iconUrl: string;
  servantFilename: string;
  drops: DropDetail[]
}

export interface DropDetail {
  area: string;
  quest: string;
  ap: number;
  apPerDrop: number;
  dropRate: number;
}

export const PATH_TO_SERVANT_FILE = 'assets/img/drops/';

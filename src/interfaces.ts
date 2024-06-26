
export interface SectionData {
  title: string;
  text: string;
  path: string;
}

export interface HomeData {
  imageSrc: string;
  sections: {[key: string]:SectionData };
  sectionData: SectionData;	
}

export enum DonationType {
  MENSAL,
  UNICA
}
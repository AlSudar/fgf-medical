export interface SpecialistI {
  id: string;
  name: string;
  lastName: string;
  speciality: string;
  experience: string;
  desc: string;
  img: string;
  quote?: string;
}

export interface AdvancedSpecialistI extends SpecialistI {
  positionOnList: number;
}

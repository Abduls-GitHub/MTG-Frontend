
export interface DashboardInterface{
  id: number,
  version: number;
  sgId: number;
  connDate?: Date | null;
  disconnDate?: Date | null;
  faulty: number;
  krn: number;
  seqNums?: string | null;
  serialNo: string;
  stockEntryDate?: Date | null;
  totalUnits: number;
  meterType: number;
  ti?: number | null;
  track2Data?: string | null;
  maxCurrent: number;
  maxPower: number;
  keyChangeToken?: string | null;
  created?: Date | null;
  deleted?: boolean | null;
}

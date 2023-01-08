export type TContent = "overview" | "internal" | "surface";

export interface IPlanet {
  name: string;
  content: { overview: string; internal: string; surface: string };
  srcUrl: string;
  rotation: number;
  revolution: number;
  radius: number;
  avgTemp: string;
}

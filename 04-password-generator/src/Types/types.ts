export interface Extras {
  id: number;
  value: string;
}

export type TPassword = string;

export interface IGenerator {
  length: number;
  extraAdditions: Extras[];
  strength: number;
}

export type GeneratorContextType = {
  generator: IGenerator | undefined;
  password: TPassword;
  changeGenerator: (
    name: string,
    value: string | number,
    checked: boolean,
    additionValue: any
  ) => void;
  generatePassword: () => void;
};

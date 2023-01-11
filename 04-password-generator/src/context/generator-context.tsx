import React, { FC, useContext, useState } from "react";
import { IGenerator, GeneratorContextType, TPassword } from "../Types/types";
import { checkboxData } from "../utils/const";
import { passwordGenerator } from "../utils/pass-generator";

const initialState: IGenerator = {
  length: 10,
  extraAdditions: checkboxData.slice(0, 3),
  strength: 3,
};

const GeneratorContext = React.createContext<GeneratorContextType | null>(null);

const GeneratorProvider: FC<any> = ({ children }) => {
  const [values, setValues] = useState<IGenerator>(initialState);
  const [password, setPassword] = useState<TPassword>(
    passwordGenerator(values.length, values.strength, values.extraAdditions)
  );

  const onChangeValue = (
    name: string,
    value: string | number,
    checked: boolean,
    additionValue: any
  ) => {
    if (name === "length" || name === "strength") {
      setValues((prev) => ({ ...prev, [name]: Number(value) }));
    }
    if (name === "extraAdditions") {
      let newAdditions = [...values.extraAdditions];
      if (checked) {
        newAdditions.push(additionValue);
      }
      if (!checked) {
        newAdditions = newAdditions.filter((item) => item.id !== value);
      }

      setValues((prev) => ({ ...prev, [name]: newAdditions }));
    }
  };

  const generatePassword = () => {
    const { length, strength, extraAdditions } = values;

    setPassword(passwordGenerator(length, strength, extraAdditions));
  };

  return (
    <GeneratorContext.Provider
      value={{
        generator: values,
        changeGenerator: onChangeValue,
        generatePassword: generatePassword,
        password: password,
      }}
    >
      {children}
    </GeneratorContext.Provider>
  );
};

export const useGeneratorContext = () => useContext(GeneratorContext);

export default GeneratorProvider;

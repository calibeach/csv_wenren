import { Converter } from "opencc-js";

const convertSimplifiedToTraditional = async (
  text: string
): Promise<string> => {
  const converter = Converter({ from: "cn", to: "tw" });
  return converter(text);
};

export { convertSimplifiedToTraditional };
export default convertSimplifiedToTraditional;

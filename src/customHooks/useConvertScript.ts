import { Converter } from "opencc-js";

const convertSimplifiedToTraditional = async (
  text: string
): Promise<string> => {
  const converter = Converter({ from: "cn", to: "tw" }); // s2t.json is the configuration file for Simplified to Traditional conversion
  //console.log(converter('漢語')); // output: 汉语
  console.log(converter(text));
  return converter(text);
};

export { convertSimplifiedToTraditional };
export default convertSimplifiedToTraditional;

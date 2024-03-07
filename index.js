import { Configuration, OpenAIApi } from "openai";
import readline from "readline";



const configuration = new Configuration({
    organization: "org-mv3F72my6wcvKgr032IgNM8X",
    apiKey: "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",
  });
  

const openai = new OpenAIApi(configuration);

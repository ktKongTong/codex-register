import { ActivationBroker } from "./activation-broker.js";
import { createHeroSmsProvider } from "./heroSMS.js";

export const createSMSBroker = (apiKey: string) => {
  return new ActivationBroker(
    createHeroSmsProvider({
      apiKey: apiKey,
      // 目前配置写死，暂未写入配置文件
      defaultRequestOptions: {
        // openai
        service: "dr",
        // 泰国
        country: 52,
        // $0.05
        maxPrice: 0.05,
        fixedPrice: true,
      },
      defaultWaitForCodeOptions: {
        markReady: false,
        completeOnCode: false,
        pollAttempts: 10,
        pollIntervalMs: 2000,
      },
    }),
  );
};

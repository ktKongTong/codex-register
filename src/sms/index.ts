import { ActivationBroker } from "./activation-broker.js";
import { createHeroSmsProvider } from "./heroSMS.js";

export const createSMSBroker = (apiKey: string) => {
  return new ActivationBroker(
    createHeroSmsProvider({
      apiKey: apiKey,
      defaultRequestOptions: {
        service: "dr",
        country: 52,
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

import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default {
  ...defineCloudflareConfig({}),
  // "build" runs opennextjs-cloudflare, so it must not be called back here
  buildCommand: "npm run build:next",
};

import { defineConfig } from "vite";
import vono from "@vonojs/vono";
import { CloudflareAdaptor } from "@vonojs/vono/cloudflare";

export default defineConfig({
  plugins: [
    vono({
      server: "./server.ts",
      adaptor: new CloudflareAdaptor({}),
    }),
  ],
});

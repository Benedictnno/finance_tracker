import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });
exports.module = defineConfig({
  // Other webpack configuration options...
  externals: {
    "dayjs/plugin/isBetween": "dayjs/plugin/isBetween",
  },
});

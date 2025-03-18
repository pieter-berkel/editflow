import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src/lib"],
    }),
  ],
  build: {
    lib: {
      entry: "src/lib/index.ts",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
});

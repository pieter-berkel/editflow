import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    dts({
      include: ["lib"],
    }),
    react(),
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: "lib/index.ts",
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

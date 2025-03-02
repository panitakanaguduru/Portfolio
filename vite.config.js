import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://panitakanaguduru.github.io/Portfolio/", // Correct full GitHub Pages URL
});

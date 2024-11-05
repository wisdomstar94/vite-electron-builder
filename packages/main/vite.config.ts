import type { UserConfig } from "vite";

/**
 * @see https://vitejs.dev/config/
 */
export default {
  build: {
    ssr: true,
    sourcemap: "inline",
    outDir: "dist",
    assetsDir: ".",
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
      },
    },
    emptyOutDir: true,
    reportCompressedSize: false,
  },
} satisfies UserConfig;

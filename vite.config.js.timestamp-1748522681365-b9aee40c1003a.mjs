// vite.config.js
import { defineConfig } from "file:///C:/Users/Rusiru/Desktop/Robot%20Battle%20Org/UOK_Robot_Battles_2K25/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Rusiru/Desktop/Robot%20Battle%20Org/UOK_Robot_Battles_2K25/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { createHtmlPlugin } from "file:///C:/Users/Rusiru/Desktop/Robot%20Battle%20Org/UOK_Robot_Battles_2K25/node_modules/vite-plugin-html/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: "UOK Robot Battle 2K25 - Electronics And Computer Science Club",
          description: "UOK Robot Battle 2K25 is a dynamic robotics competition hosted by the Electronics and Computer Science Club of the University of Kelaniya. Open to all, it fosters creativity, technical skills, and innovation through exciting robotic challenges.",
          keywords: "robot battles, UOK, robotics competition, 2025, ECSC, ecsc",
          author: "ECSC CLUB - University of Kelaniya"
        }
      }
    })
  ],
  server: {
    host: true,
    // <-- This is the magic
    port: 5174
    // optional, just to fix the port if you want
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxSdXNpcnVcXFxcRGVza3RvcFxcXFxSb2JvdCBCYXR0bGUgT3JnXFxcXFVPS19Sb2JvdF9CYXR0bGVzXzJLMjVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFJ1c2lydVxcXFxEZXNrdG9wXFxcXFJvYm90IEJhdHRsZSBPcmdcXFxcVU9LX1JvYm90X0JhdHRsZXNfMksyNVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvUnVzaXJ1L0Rlc2t0b3AvUm9ib3QlMjBCYXR0bGUlMjBPcmcvVU9LX1JvYm90X0JhdHRsZXNfMksyNS92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVIdG1sUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4taHRtbCc7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBjcmVhdGVIdG1sUGx1Z2luKHtcclxuICAgICAgaW5qZWN0OiB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgdGl0bGU6ICdVT0sgUm9ib3QgQmF0dGxlIDJLMjUgLSBFbGVjdHJvbmljcyBBbmQgQ29tcHV0ZXIgU2NpZW5jZSBDbHViJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVU9LIFJvYm90IEJhdHRsZSAySzI1IGlzIGEgZHluYW1pYyByb2JvdGljcyBjb21wZXRpdGlvbiBob3N0ZWQgYnkgdGhlIEVsZWN0cm9uaWNzIGFuZCBDb21wdXRlciBTY2llbmNlIENsdWIgb2YgdGhlIFVuaXZlcnNpdHkgb2YgS2VsYW5peWEuIE9wZW4gdG8gYWxsLCBpdCBmb3N0ZXJzIGNyZWF0aXZpdHksIHRlY2huaWNhbCBza2lsbHMsIGFuZCBpbm5vdmF0aW9uIHRocm91Z2ggZXhjaXRpbmcgcm9ib3RpYyBjaGFsbGVuZ2VzLicsXHJcbiAgICAgICAgICBrZXl3b3JkczogJ3JvYm90IGJhdHRsZXMsIFVPSywgcm9ib3RpY3MgY29tcGV0aXRpb24sIDIwMjUsIEVDU0MsIGVjc2MnLFxyXG4gICAgICAgICAgYXV0aG9yOiAnRUNTQyBDTFVCIC0gVW5pdmVyc2l0eSBvZiBLZWxhbml5YScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBob3N0OiB0cnVlLCAvLyA8LS0gVGhpcyBpcyB0aGUgbWFnaWNcclxuICAgIHBvcnQ6IDUxNzQsIC8vIG9wdGlvbmFsLCBqdXN0IHRvIGZpeCB0aGUgcG9ydCBpZiB5b3Ugd2FudFxyXG4gIH1cclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1gsU0FBUyxvQkFBb0I7QUFDNVosT0FBTyxXQUFXO0FBQ2xCLFNBQVMsd0JBQXdCO0FBR2pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGlCQUFpQjtBQUFBLE1BQ2YsUUFBUTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0osT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFVBQ1YsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Blog.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b835e62f"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Blog.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=b835e62f";
const Blog = ({
  blog
}) => {
  const blogStyle = {
    color: "blue",
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5
  };
  return /* @__PURE__ */ jsxDEV("div", { style: blogStyle, children: /* @__PURE__ */ jsxDEV(Link, { to: `/blogs/${blog.id}`, children: [
    blog.title,
    " ",
    blog.author
  ] }, void 0, true, {
    fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Blog.jsx",
    lineNumber: 14,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Blog.jsx",
    lineNumber: 13,
    columnNumber: 10
  }, this);
};
_c = Blog;
export default Blog;
var _c;
$RefreshReg$(_c, "Blog");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Blog.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBYVk7QUFiWiwyQkFBcUI7QUFBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXZDLE1BQU1BLE9BQU9BLENBQUM7QUFBQSxFQUFFQztBQUFLLE1BQU07QUFDdkIsUUFBTUMsWUFBWTtBQUFBLElBQ2RDLE9BQU87QUFBQSxJQUNQQyxZQUFZO0FBQUEsSUFDWkMsYUFBYTtBQUFBLElBQ2JDLFFBQVE7QUFBQSxJQUNSQyxhQUFhO0FBQUEsSUFDYkMsY0FBYztBQUFBLEVBQ2xCO0FBQ0EsU0FDSSx1QkFBQyxTQUFJLE9BQU9OLFdBQ1IsaUNBQUMsUUFBSyxJQUFLLFVBQVNELEtBQUtRLEVBQUcsSUFBSVI7QUFBQUEsU0FBS1M7QUFBQUEsSUFBTTtBQUFBLElBQUVULEtBQUtVO0FBQUFBLE9BQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBeUQsS0FEN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBRVI7QUFBQ0MsS0FkS1o7QUFnQk4sZUFBZUE7QUFBSSxJQUFBWTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiQmxvZyIsImJsb2ciLCJibG9nU3R5bGUiLCJjb2xvciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nTGVmdCIsImJvcmRlciIsImJvcmRlcldpZHRoIiwibWFyZ2luQm90dG9tIiwiaWQiLCJ0aXRsZSIsImF1dGhvciIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZXMiOlsiQmxvZy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmNvbnN0IEJsb2cgPSAoeyBibG9nIH0pID0+IHtcbiAgICBjb25zdCBibG9nU3R5bGUgPSB7XG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICAgIHBhZGRpbmdUb3A6IDEwLFxuICAgICAgICBwYWRkaW5nTGVmdDogMixcbiAgICAgICAgYm9yZGVyOiAnc29saWQnLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgbWFyZ2luQm90dG9tOiA1XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e2Jsb2dTdHlsZX0+XG4gICAgICAgICAgICA8TGluayB0bz17YC9ibG9ncy8ke2Jsb2cuaWR9YH0+e2Jsb2cudGl0bGV9IHtibG9nLmF1dGhvcn08L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZyJdLCJmaWxlIjoiL1VzZXJzL3NhaWFkaXJhanUvTGlicmFyeS9DbG91ZFN0b3JhZ2UvR29vZ2xlRHJpdmUtc2FpYWRpNDAwMkBnbWFpbC5jb20vTXkgRHJpdmUvUHJvZ3JhbW1pbmcvQXBwRGV2L0Z1bGwgU3RhY2sgT3Blbi9ibG9nbGlzdC1mcm9udGVuZC9zcmMvY29tcG9uZW50cy9CbG9nLmpzeCJ9
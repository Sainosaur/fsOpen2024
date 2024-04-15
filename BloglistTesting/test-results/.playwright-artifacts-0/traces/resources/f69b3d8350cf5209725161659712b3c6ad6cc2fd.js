import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/User.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b835e62f"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/User.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=b835e62f"; const useEffect = __vite__cjsImport3_react["useEffect"];
import { useSelector } from "/node_modules/.vite/deps/react-redux.js?v=b835e62f";
import { useParams } from "/node_modules/.vite/deps/react-router-dom.js?v=b835e62f";
const User = () => {
  _s();
  const params = useParams();
  const user = useSelector((state) => state.users).find((user2) => user2.id === params.id);
  if (!user) {
    return /* @__PURE__ */ jsxDEV(Fragment, { children: "Error! User cannot be found, Please try again from the users menu. This page does not support direct access through URLs" }, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/User.jsx",
      lineNumber: 10,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("h1", { children: user.name }, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/User.jsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("h2", { children: " added blogs:" }, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/User.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("ul", { children: user.blogs.map((blog) => /* @__PURE__ */ jsxDEV("li", { children: [
      " ",
      blog.title
    ] }, void 0, true, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/User.jsx",
      lineNumber: 18,
      columnNumber: 37
    }, this)) }, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/User.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/User.jsx",
    lineNumber: 14,
    columnNumber: 10
  }, this);
};
_s(User, "UO1fqgJE2kb5T/igSozKgsQzASE=", false, function() {
  return [useParams, useSelector];
});
_c = User;
export default User;
var _c;
$RefreshReg$(_c, "User");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/User.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBU1k7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVFosU0FBU0EsaUJBQWlCO0FBQzFCLFNBQVNDLG1CQUFtQjtBQUM1QixTQUFTQyxpQkFBaUI7QUFFMUIsTUFBTUMsT0FBT0EsTUFBTTtBQUFBQyxLQUFBO0FBQ2YsUUFBTUMsU0FBU0gsVUFBVTtBQUN6QixRQUFNSSxPQUFPTCxZQUFZTSxXQUFTQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUtILFdBQVFBLE1BQUtJLE9BQU9MLE9BQU9LLEVBQUU7QUFDakYsTUFBSSxDQUFDSixNQUFNO0FBQ1AsV0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUE7QUFBQSxFQUVSO0FBQ0EsU0FDSSxtQ0FDQTtBQUFBLDJCQUFDLFFBQUlBLGVBQUtLLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFlO0FBQUEsSUFDZix1QkFBQyxRQUFHLDZCQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBaUI7QUFBQSxJQUNqQix1QkFBQyxRQUNJTCxlQUFLTSxNQUFNQyxJQUFJQyxVQUFRLHVCQUFDLFFBQUc7QUFBQTtBQUFBLE1BQUVBLEtBQUtDO0FBQUFBLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFpQixDQUFLLEtBRGxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFQTtBQUFBLE9BTEE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU1BO0FBR1I7QUFBQ1gsR0FwQktELE1BQUk7QUFBQSxVQUNTRCxXQUNGRCxXQUFXO0FBQUE7QUFBQWUsS0FGdEJiO0FBc0JOLGVBQWVBO0FBQUksSUFBQWE7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVNlbGVjdG9yIiwidXNlUGFyYW1zIiwiVXNlciIsIl9zIiwicGFyYW1zIiwidXNlciIsInN0YXRlIiwidXNlcnMiLCJmaW5kIiwiaWQiLCJuYW1lIiwiYmxvZ3MiLCJtYXAiLCJibG9nIiwidGl0bGUiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VzIjpbIlVzZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXG5cbmNvbnN0IFVzZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKClcbiAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcnMpLmZpbmQodXNlciA9PiB1c2VyLmlkID09PSBwYXJhbXMuaWQpXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIEVycm9yISBVc2VyIGNhbm5vdCBiZSBmb3VuZCwgUGxlYXNlIHRyeSBhZ2FpbiBmcm9tIHRoZSB1c2VycyBtZW51LiBUaGlzIHBhZ2UgZG9lcyBub3Qgc3VwcG9ydCBkaXJlY3QgYWNjZXNzIHRocm91Z2ggVVJMc1xuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGgxPnt1c2VyLm5hbWV9PC9oMT5cbiAgICAgICAgPGgyPiBhZGRlZCBibG9nczo8L2gyPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7dXNlci5ibG9ncy5tYXAoYmxvZyA9PiA8bGk+IHtibG9nLnRpdGxlfTwvbGk+KX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPC8+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXIiXSwiZmlsZSI6Ii9Vc2Vycy9zYWlhZGlyYWp1L0xpYnJhcnkvQ2xvdWRTdG9yYWdlL0dvb2dsZURyaXZlLXNhaWFkaTQwMDJAZ21haWwuY29tL015IERyaXZlL1Byb2dyYW1taW5nL0FwcERldi9GdWxsIFN0YWNrIE9wZW4vYmxvZ2xpc3QtZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvVXNlci5qc3gifQ==
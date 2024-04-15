import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Notification.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b835e62f"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Notification.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { useSelector } from "/node_modules/.vite/deps/react-redux.js?v=b835e62f";
const Notification = () => {
  _s();
  const content = useSelector((state) => state.notification);
  const style = {
    color: content.color,
    borderStyle: "Solid",
    borderColor: content.color,
    borderRadius: 5,
    fontStyle: "italic",
    padding: 10,
    fontSize: 30
  };
  if (content.message !== "NULL") {
    return /* @__PURE__ */ jsxDEV(Fragment, { children: /* @__PURE__ */ jsxDEV("h1", { style, children: content.message }, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Notification.jsx",
      lineNumber: 17,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Notification.jsx",
      lineNumber: 16,
      columnNumber: 12
    }, this);
  }
};
_s(Notification, "1dk1lRhD7RUxnHUOqfH7/nnoYpE=", false, function() {
  return [useSelector];
});
_c = Notification;
export default Notification;
var _c;
$RefreshReg$(_c, "Notification");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Notification.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZ0JZLG1CQUNJLGNBREo7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaEJaLFNBQVNBLG1CQUFtQjtBQUc1QixNQUFNQyxlQUFlQSxNQUFNO0FBQUFDLEtBQUE7QUFDdkIsUUFBTUMsVUFBVUgsWUFBWUksV0FBU0EsTUFBTUMsWUFBWTtBQUN2RCxRQUFNQyxRQUFRO0FBQUEsSUFDVkMsT0FBT0osUUFBUUk7QUFBQUEsSUFDZkMsYUFBYTtBQUFBLElBQ2JDLGFBQWFOLFFBQVFJO0FBQUFBLElBQ3JCRyxjQUFjO0FBQUEsSUFDZEMsV0FBVztBQUFBLElBQ1hDLFNBQVM7QUFBQSxJQUNUQyxVQUFVO0FBQUEsRUFDZDtBQUNBLE1BQUlWLFFBQVFXLFlBQVksUUFBUTtBQUM1QixXQUNJLG1DQUNJLGlDQUFDLFFBQUcsT0FBZVgsa0JBQVFXLFdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBbUMsS0FEdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUVBO0FBQUEsRUFFUjtBQUNKO0FBQUNaLEdBbEJLRCxjQUFZO0FBQUEsVUFDRUQsV0FBVztBQUFBO0FBQUFlLEtBRHpCZDtBQW9CTixlQUFlQTtBQUFZLElBQUFjO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsIk5vdGlmaWNhdGlvbiIsIl9zIiwiY29udGVudCIsInN0YXRlIiwibm90aWZpY2F0aW9uIiwic3R5bGUiLCJjb2xvciIsImJvcmRlclN0eWxlIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJmb250U3R5bGUiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJtZXNzYWdlIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJOb3RpZmljYXRpb24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuXG5jb25zdCBOb3RpZmljYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm5vdGlmaWNhdGlvbilcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgY29sb3I6IGNvbnRlbnQuY29sb3IsXG4gICAgICAgIGJvcmRlclN0eWxlOiAnU29saWQnLFxuICAgICAgICBib3JkZXJDb2xvcjogY29udGVudC5jb2xvcixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgZm9udFNpemU6IDMwXG4gICAgfVxuICAgIGlmIChjb250ZW50Lm1lc3NhZ2UgIT09ICdOVUxMJykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3N0eWxlfT57Y29udGVudC5tZXNzYWdlfTwvaDE+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uIl0sImZpbGUiOiIvVXNlcnMvc2FpYWRpcmFqdS9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Hb29nbGVEcml2ZS1zYWlhZGk0MDAyQGdtYWlsLmNvbS9NeSBEcml2ZS9Qcm9ncmFtbWluZy9BcHBEZXYvRnVsbCBTdGFjayBPcGVuL2Jsb2dsaXN0LWZyb250ZW5kL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi5qc3gifQ==
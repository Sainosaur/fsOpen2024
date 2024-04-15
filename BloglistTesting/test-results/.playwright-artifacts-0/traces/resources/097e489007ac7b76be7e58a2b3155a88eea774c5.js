import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/NewBlog.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b835e62f"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/NewBlog.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=b835e62f"; const useState = __vite__cjsImport3_react["useState"];
import Notification from "/src/components/Notification.jsx";
const NewBlog = (props) => {
  _s();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Notification, {}, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/NewBlog.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("h2", { children: "Create new:" }, void 0, false, {
        fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/NewBlog.jsx",
        lineNumber: 12,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: [
        "title: ",
        /* @__PURE__ */ jsxDEV("input", { value: title, onChange: ({
          target
        }) => setTitle(target.value), className: "Title" }, void 0, false, {
          fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/NewBlog.jsx",
          lineNumber: 13,
          columnNumber: 27
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/NewBlog.jsx",
        lineNumber: 13,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: [
        "author: ",
        /* @__PURE__ */ jsxDEV("input", { value: author, onChange: ({
          target
        }) => setAuthor(target.value), className: "Author" }, void 0, false, {
          fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/NewBlog.jsx",
          lineNumber: 16,
          columnNumber: 28
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/NewBlog.jsx",
        lineNumber: 16,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: [
        "url: ",
        /* @__PURE__ */ jsxDEV("input", { value: url, onChange: ({
          target
        }) => setUrl(target.value), className: "Url" }, void 0, false, {
          fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/NewBlog.jsx",
          lineNumber: 19,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/NewBlog.jsx",
        lineNumber: 19,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("button", { onClick: () => {
        props.addBlog(title, author, url, props.user, props.selfToggle.current.toggleVisibility);
      }, children: "create" }, void 0, false, {
        fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/NewBlog.jsx",
        lineNumber: 22,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/NewBlog.jsx",
      lineNumber: 11,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/NewBlog.jsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
};
_s(NewBlog, "g+g+3j1LiFjJCP23+NliFDHOHt4=");
_c = NewBlog;
export default NewBlog;
var _c;
$RefreshReg$(_c, "NewBlog");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/NewBlog.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBU1EsbUJBQ0ksY0FESjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFUUixTQUFTQSxnQkFBZ0I7QUFDekIsT0FBT0Msa0JBQWtCO0FBRXpCLE1BQU1DLFVBQVdDLFdBQVU7QUFBQUMsS0FBQTtBQUN2QixRQUFNLENBQUNDLE9BQU9DLFFBQVEsSUFBSU4sU0FBUyxFQUFFO0FBQ3JDLFFBQU0sQ0FBQ08sUUFBUUMsU0FBUyxJQUFJUixTQUFTLEVBQUU7QUFDdkMsUUFBTSxDQUFDUyxLQUFLQyxNQUFNLElBQUlWLFNBQVMsRUFBRTtBQUVqQyxTQUNJLG1DQUNJO0FBQUEsMkJBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFhO0FBQUEsSUFDYix1QkFBQyxTQUNHO0FBQUEsNkJBQUMsUUFBRywyQkFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWU7QUFBQSxNQUNmLHVCQUFDLE9BQUU7QUFBQTtBQUFBLFFBQU8sdUJBQUMsV0FBTSxPQUFPSyxPQUFPLFVBQVUsQ0FBQztBQUFBLFVBQUVNO0FBQUFBLFFBQU8sTUFBTUwsU0FBU0ssT0FBT0MsS0FBSyxHQUFHLFdBQVUsV0FBakY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF5RjtBQUFBLFdBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBMkc7QUFBQSxNQUMzRyx1QkFBQyxPQUFFO0FBQUE7QUFBQSxRQUFRLHVCQUFDLFdBQU0sT0FBT0wsUUFBUSxVQUFVLENBQUM7QUFBQSxVQUFFSTtBQUFBQSxRQUFPLE1BQU1ILFVBQVVHLE9BQU9DLEtBQUssR0FBRyxXQUFVLFlBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBNEY7QUFBQSxXQUF2RztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQStHO0FBQUEsTUFDL0csdUJBQUMsT0FBRTtBQUFBO0FBQUEsUUFBSyx1QkFBQyxXQUFNLE9BQU9ILEtBQUssVUFBVSxDQUFDO0FBQUEsVUFBRUU7QUFBQUEsUUFBTyxNQUFNRCxPQUFPQyxPQUFPQyxLQUFLLEdBQUcsV0FBVSxTQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQW1GO0FBQUEsV0FBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFtRztBQUFBLE1BQ25HLHVCQUFDLFlBQU8sU0FBUyxNQUFNO0FBQ25CVCxjQUFNVSxRQUFRUixPQUFPRSxRQUFRRSxLQUFLTixNQUFNVyxNQUFNWCxNQUFNWSxXQUFXQyxRQUFRQyxnQkFBZ0I7QUFBQSxNQUMzRixHQUFHLHNCQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFUztBQUFBLFNBUGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVFBO0FBQUEsT0FWSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBV0E7QUFFUjtBQUFDYixHQW5CS0YsU0FBTztBQUFBZ0IsS0FBUGhCO0FBcUJOLGVBQWVBO0FBQU8sSUFBQWdCO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk5vdGlmaWNhdGlvbiIsIk5ld0Jsb2ciLCJwcm9wcyIsIl9zIiwidGl0bGUiLCJzZXRUaXRsZSIsImF1dGhvciIsInNldEF1dGhvciIsInVybCIsInNldFVybCIsInRhcmdldCIsInZhbHVlIiwiYWRkQmxvZyIsInVzZXIiLCJzZWxmVG9nZ2xlIiwiY3VycmVudCIsInRvZ2dsZVZpc2liaWxpdHkiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VzIjpbIk5ld0Jsb2cuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vTm90aWZpY2F0aW9uJ1xuXG5jb25zdCBOZXdCbG9nID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbYXV0aG9yLCBzZXRBdXRob3JdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOb3RpZmljYXRpb24gLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPkNyZWF0ZSBuZXc6PC9oMj5cbiAgICAgICAgICAgICAgICA8cD50aXRsZTogPGlucHV0IHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRUaXRsZSh0YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9J1RpdGxlJz48L2lucHV0PjwvcD5cbiAgICAgICAgICAgICAgICA8cD5hdXRob3I6IDxpbnB1dCB2YWx1ZT17YXV0aG9yfSBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldEF1dGhvcih0YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9J0F1dGhvcic+PC9pbnB1dD48L3A+XG4gICAgICAgICAgICAgICAgPHA+dXJsOiA8aW5wdXQgdmFsdWU9e3VybH0gb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRVcmwodGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPSdVcmwnPjwvaW5wdXQ+PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5hZGRCbG9nKHRpdGxlLCBhdXRob3IsIHVybCwgcHJvcHMudXNlciwgcHJvcHMuc2VsZlRvZ2dsZS5jdXJyZW50LnRvZ2dsZVZpc2liaWxpdHkpXG4gICAgICAgICAgICAgICAgfX0+Y3JlYXRlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdCbG9nIl0sImZpbGUiOiIvVXNlcnMvc2FpYWRpcmFqdS9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Hb29nbGVEcml2ZS1zYWlhZGk0MDAyQGdtYWlsLmNvbS9NeSBEcml2ZS9Qcm9ncmFtbWluZy9BcHBEZXYvRnVsbCBTdGFjayBPcGVuL2Jsb2dsaXN0LWZyb250ZW5kL3NyYy9jb21wb25lbnRzL05ld0Jsb2cuanN4In0=
import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Visibility.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b835e62f"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Visibility.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=b835e62f"; const forwardRef = __vite__cjsImport3_react["forwardRef"]; const useImperativeHandle = __vite__cjsImport3_react["useImperativeHandle"]; const useState = __vite__cjsImport3_react["useState"];
import __vite__cjsImport4_propTypes from "/node_modules/.vite/deps/prop-types.js?v=b835e62f"; const PropTypes = __vite__cjsImport4_propTypes.__esModule ? __vite__cjsImport4_propTypes.default : __vite__cjsImport4_propTypes;
const VisibilityComponent = _s(forwardRef(_c = _s((props, ref) => {
  _s();
  const [visibility, setVisibility] = useState(false);
  const notVisible = visibility ? null : {
    display: "none"
  };
  const toggleVisibility = () => {
    setVisibility(!visibility);
  };
  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    };
  });
  return (
    // renders children when appropriate
    /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("div", { style: notVisible, children: props.children }, void 0, false, {
        fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Visibility.jsx",
        lineNumber: 23,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("button", { onClick: () => toggleVisibility(), children: visibility ? props.visiblemessage : props.invisiblemessage }, void 0, false, {
        fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Visibility.jsx",
        lineNumber: 26,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Visibility.jsx",
      lineNumber: 22,
      columnNumber: 5
    }, this)
  );
}, "bdU2ipB9ViCiekHcYJ4YjH903Qw=")), "bdU2ipB9ViCiekHcYJ4YjH903Qw=");
_c2 = VisibilityComponent;
VisibilityComponent.displayName = "VisibilityComponent";
VisibilityComponent.propTypes = {
  invisiblemessage: PropTypes.string.isRequired,
  visiblemessage: PropTypes.string.isRequired
};
export default VisibilityComponent;
var _c, _c2;
$RefreshReg$(_c, "VisibilityComponent$forwardRef");
$RefreshReg$(_c2, "VisibilityComponent");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Visibility.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZVEsbUJBQ0ksY0FESjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFmUixTQUFTQSxZQUFZQyxxQkFBcUJDLGdCQUFnQjtBQUMxRCxPQUFPQyxlQUFlO0FBQ3RCLE1BQU1DLHNCQUFtQkMsR0FBR0wsV0FBVU0sS0FBQUQsR0FBQyxDQUFDRSxPQUFPQyxRQUFRO0FBQUFILEtBQUE7QUFFbkQsUUFBTSxDQUFDSSxZQUFZQyxhQUFhLElBQUlSLFNBQVMsS0FBSztBQUNsRCxRQUFNUyxhQUFhRixhQUFhLE9BQU87QUFBQSxJQUFFRyxTQUFTO0FBQUEsRUFBTztBQUN6RCxRQUFNQyxtQkFBbUJBLE1BQU07QUFDM0JILGtCQUFjLENBQUNELFVBQVU7QUFBQSxFQUM3QjtBQUVBUixzQkFBb0JPLEtBQUssTUFBTTtBQUMzQixXQUFPO0FBQUEsTUFBRUs7QUFBQUEsSUFBaUI7QUFBQSxFQUM5QixDQUFDO0FBQ0Q7QUFBQTtBQUFBLElBRUksbUNBQ0k7QUFBQSw2QkFBQyxTQUFJLE9BQU9GLFlBQ1BKLGdCQUFNTyxZQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFQTtBQUFBLE1BQ0EsdUJBQUMsWUFBTyxTQUFTLE1BQU1ELGlCQUFpQixHQUFJSix1QkFBYUYsTUFBTVEsaUJBQWlCUixNQUFNUyxvQkFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF1RztBQUFBLFNBSjNHO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FLQTtBQUFBO0FBR1IsR0FBQyxrQ0FBQztBQUFBQyxNQXJCSWI7QUFzQk5BLG9CQUFvQmMsY0FBYztBQUNsQ2Qsb0JBQW9CZSxZQUFZO0FBQUEsRUFDNUJILGtCQUFtQmIsVUFBVWlCLE9BQU9DO0FBQUFBLEVBQ3BDTixnQkFBaUJaLFVBQVVpQixPQUFPQztBQUN0QztBQUNBLGVBQWVqQjtBQUFtQixJQUFBRSxJQUFBVztBQUFBSyxhQUFBaEIsSUFBQTtBQUFBZ0IsYUFBQUwsS0FBQSIsIm5hbWVzIjpbImZvcndhcmRSZWYiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJWaXNpYmlsaXR5Q29tcG9uZW50IiwiX3MiLCJfYyIsInByb3BzIiwicmVmIiwidmlzaWJpbGl0eSIsInNldFZpc2liaWxpdHkiLCJub3RWaXNpYmxlIiwiZGlzcGxheSIsInRvZ2dsZVZpc2liaWxpdHkiLCJjaGlsZHJlbiIsInZpc2libGVtZXNzYWdlIiwiaW52aXNpYmxlbWVzc2FnZSIsIl9jMiIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VzIjpbIlZpc2liaWxpdHkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcndhcmRSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGUsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5jb25zdCBWaXNpYmlsaXR5Q29tcG9uZW50ID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIC8vIHNldHMgdmlzYmlsaXR5IHRvIHRydWUgb3IgZmFsc2UuXG4gICAgY29uc3QgW3Zpc2liaWxpdHksIHNldFZpc2liaWxpdHldID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3Qgbm90VmlzaWJsZSA9IHZpc2liaWxpdHkgPyBudWxsIDogeyBkaXNwbGF5OiAnbm9uZScgfVxuICAgIGNvbnN0IHRvZ2dsZVZpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgICAgIHNldFZpc2liaWxpdHkoIXZpc2liaWxpdHkpXG4gICAgfVxuICAgIC8vIFVzZXMgcmVmIHRvIGV4cG9ydCB0b2dnbGluZ1Zpc2liaWxpdHkgdG8gdGhlIHJlc3Qgb2YgdGhlIGNvbXBvbmVudCB0byBiZSB1c2VkIGJ5IE5ld0Jsb2dcbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB0b2dnbGVWaXNpYmlsaXR5IH1cbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgLy8gcmVuZGVycyBjaGlsZHJlbiB3aGVuIGFwcHJvcHJpYXRlXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtub3RWaXNpYmxlfT5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlVmlzaWJpbGl0eSgpfT57dmlzaWJpbGl0eSA/IHByb3BzLnZpc2libGVtZXNzYWdlIDogcHJvcHMuaW52aXNpYmxlbWVzc2FnZX08L2J1dHRvbj5cbiAgICAgICAgPC8+XG5cbiAgICApXG59KVxuVmlzaWJpbGl0eUNvbXBvbmVudC5kaXNwbGF5TmFtZSA9ICdWaXNpYmlsaXR5Q29tcG9uZW50J1xuVmlzaWJpbGl0eUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgaW52aXNpYmxlbWVzc2FnZSA6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB2aXNpYmxlbWVzc2FnZSA6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufVxuZXhwb3J0IGRlZmF1bHQgVmlzaWJpbGl0eUNvbXBvbmVudCJdLCJmaWxlIjoiL1VzZXJzL3NhaWFkaXJhanUvTGlicmFyeS9DbG91ZFN0b3JhZ2UvR29vZ2xlRHJpdmUtc2FpYWRpNDAwMkBnbWFpbC5jb20vTXkgRHJpdmUvUHJvZ3JhbW1pbmcvQXBwRGV2L0Z1bGwgU3RhY2sgT3Blbi9ibG9nbGlzdC1mcm9udGVuZC9zcmMvY29tcG9uZW50cy9WaXNpYmlsaXR5LmpzeCJ9
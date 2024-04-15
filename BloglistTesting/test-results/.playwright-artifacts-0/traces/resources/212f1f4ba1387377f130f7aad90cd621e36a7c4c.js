import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b835e62f"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/App.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=b835e62f"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import Login from "/src/components/Login.jsx";
import RenderBlog from "/src/components/RenderBlog.jsx";
import { useSelector, useDispatch } from "/node_modules/.vite/deps/react-redux.js?v=b835e62f";
import { Routes, Route, Link } from "/node_modules/.vite/deps/react-router-dom.js?v=b835e62f";
import { logOut } from "/src/stores/user.js";
import Users from "/src/components/Users.jsx";
import User from "/src/components/User.jsx";
import BlogPage from "/src/components/BlogPage.jsx";
const Menu = ({
  user
}) => {
  const padding = {
    paddingRight: 5
  };
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV(Link, { to: "/", style: padding, children: "Home" }, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/App.jsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV(Link, { to: "/users", children: "Users" }, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/App.jsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    user ? /* @__PURE__ */ jsxDEV("p", { style: padding, children: [
      `${String(user.name)} logged in`,
      /* @__PURE__ */ jsxDEV("button", { onClick: () => {
        dispatch(logOut());
      }, children: "Log Out" }, void 0, false, {
        fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/App.jsx",
        lineNumber: 20,
        columnNumber: 74
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/App.jsx",
      lineNumber: 20,
      columnNumber: 21
    }, this) : null
  ] }, void 0, true, {
    fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/App.jsx",
    lineNumber: 17,
    columnNumber: 10
  }, this);
};
_c = Menu;
const App = () => {
  _s();
  const user = useSelector((state) => state.user);
  const dispatch2 = useDispatch();
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("h2", { children: "blogs" }, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/App.jsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV(Menu, { user }, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/App.jsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV(Routes, { children: [
      /* @__PURE__ */ jsxDEV(Route, { path: "/", Component: user === null ? Login : RenderBlog }, void 0, false, {
        fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/App.jsx",
        lineNumber: 35,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/users", Component: Users }, void 0, false, {
        fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/App.jsx",
        lineNumber: 36,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/users/:id", Component: User }, void 0, false, {
        fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/App.jsx",
        lineNumber: 37,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/blogs/:id", Component: BlogPage }, void 0, false, {
        fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/App.jsx",
        lineNumber: 38,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/App.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/App.jsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_s(App, "xXvxOehHJpw/X5Imivu/2I1+3NA=", false, function() {
  return [useSelector, useDispatch];
});
_c2 = App;
export default App;
var _c, _c2;
$RefreshReg$(_c, "Menu");
$RefreshReg$(_c2, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZ0JZLFNBZUosVUFmSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFoQlosU0FBU0EsVUFBVUMsaUJBQWlCO0FBQ3BDLE9BQU9DLFdBQVc7QUFDbEIsT0FBT0MsZ0JBQWdCO0FBQ3ZCLFNBQVNDLGFBQWFDLG1CQUFtQjtBQUN6QyxTQUFTQyxRQUFRQyxPQUFPQyxZQUFZO0FBQ3BDLFNBQVNDLGNBQWE7QUFDdEIsT0FBT0MsV0FBVztBQUNsQixPQUFPQyxVQUFVO0FBQ2pCLE9BQU9DLGNBQWM7QUFFckIsTUFBTUMsT0FBT0EsQ0FBQztBQUFBLEVBQUNDO0FBQUksTUFBTTtBQUNyQixRQUFNQyxVQUFVO0FBQUEsSUFDWkMsY0FBZTtBQUFBLEVBQ25CO0FBQ0EsU0FDSSx1QkFBQyxTQUNHO0FBQUEsMkJBQUMsUUFBSyxJQUFHLEtBQUksT0FBT0QsU0FBUyxvQkFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFpQztBQUFBLElBQ2pDLHVCQUFDLFFBQUssSUFBRyxVQUFTLHFCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXVCO0FBQUEsSUFDdEJELE9BQU8sdUJBQUMsT0FBRSxPQUFPQyxTQUFXO0FBQUEsU0FBRUUsT0FBT0gsS0FBS0ksSUFBSSxDQUFFO0FBQUEsTUFBWSx1QkFBQyxZQUFPLFNBQVMsTUFBTTtBQUU1RUMsaUJBQVNWLE9BQU8sQ0FBQztBQUFBLE1BQ3JCLEdBQUcsdUJBSHNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFHL0M7QUFBQSxTQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FHZSxJQUFPO0FBQUEsT0FObEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU9BO0FBR1I7QUFBQ1csS0FmS1A7QUFpQk4sTUFBTVEsTUFBTUEsTUFBTTtBQUFBQyxLQUFBO0FBQ2QsUUFBTVIsT0FBT1YsWUFBWW1CLFdBQVNBLE1BQU1ULElBQUk7QUFDNUMsUUFBTUssWUFBV2QsWUFBWTtBQUM3QixTQUNJLG1DQUNJO0FBQUEsMkJBQUMsUUFBRyxxQkFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVM7QUFBQSxJQUNULHVCQUFDLFFBQUssUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWlCO0FBQUEsSUFDYix1QkFBQyxVQUNHO0FBQUEsNkJBQUMsU0FBTSxNQUFLLEtBQUksV0FBV1MsU0FBUyxPQUFPWixRQUFRQyxjQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQThEO0FBQUEsTUFDOUQsdUJBQUMsU0FBTSxNQUFLLFVBQVMsV0FBV08sU0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFzQztBQUFBLE1BQ3RDLHVCQUFDLFNBQU0sTUFBSyxjQUFhLFdBQVdDLFFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBeUM7QUFBQSxNQUN6Qyx1QkFBQyxTQUFNLE1BQUssY0FBYSxXQUFXQyxZQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTZDO0FBQUEsU0FKakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUtBO0FBQUEsT0FSUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBVUE7QUFFUjtBQUFDVSxHQWhCS0QsS0FBRztBQUFBLFVBQ1FqQixhQUNJQyxXQUFXO0FBQUE7QUFBQW1CLE1BRjFCSDtBQWtCTixlQUFlQTtBQUFHLElBQUFELElBQUFJO0FBQUFDLGFBQUFMLElBQUE7QUFBQUssYUFBQUQsS0FBQSIsIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTG9naW4iLCJSZW5kZXJCbG9nIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsIlJvdXRlcyIsIlJvdXRlIiwiTGluayIsImxvZ091dCIsIlVzZXJzIiwiVXNlciIsIkJsb2dQYWdlIiwiTWVudSIsInVzZXIiLCJwYWRkaW5nIiwicGFkZGluZ1JpZ2h0IiwiU3RyaW5nIiwibmFtZSIsImRpc3BhdGNoIiwiX2MiLCJBcHAiLCJfcyIsInN0YXRlIiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZXMiOlsiQXBwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luJ1xuaW1wb3J0IFJlbmRlckJsb2cgZnJvbSAnLi9jb21wb25lbnRzL1JlbmRlckJsb2cnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IFJvdXRlcywgUm91dGUsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgbG9nT3V0fSBmcm9tICcuL3N0b3Jlcy91c2VyJ1xuaW1wb3J0IFVzZXJzIGZyb20gJy4vY29tcG9uZW50cy9Vc2VycydcbmltcG9ydCBVc2VyIGZyb20gJy4vY29tcG9uZW50cy9Vc2VyJ1xuaW1wb3J0IEJsb2dQYWdlIGZyb20gJy4vY29tcG9uZW50cy9CbG9nUGFnZSdcblxuY29uc3QgTWVudSA9ICh7dXNlcn0pID0+IHtcbiAgICBjb25zdCBwYWRkaW5nID0ge1xuICAgICAgICBwYWRkaW5nUmlnaHQgOiA1XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayB0bz0nLycgc3R5bGU9e3BhZGRpbmd9PkhvbWU8L0xpbms+XG4gICAgICAgICAgICA8TGluayB0bz0nL3VzZXJzJz5Vc2VyczwvTGluaz5cbiAgICAgICAgICAgIHt1c2VyID8gPHAgc3R5bGU9e3BhZGRpbmd9PntgJHtTdHJpbmcodXNlci5uYW1lKX0gbG9nZ2VkIGluYH08YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVsb2FkcyB0aGUgd2luZG93IHRvIHJlcGVhdCB0aGUgdXNlciBjaGVja2luZyBwcm9jZXNzIGFuZCByZXR1cm4gdG8gYSBsb2dpbiBzY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgICAgICAgfX0+TG9nIE91dDwvYnV0dG9uPjwvcD4gOiBudWxsfVxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn1cblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKVxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDI+YmxvZ3M8L2gyPlxuICAgICAgICAgICAgPE1lbnUgdXNlcj17dXNlcn0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nLycgQ29tcG9uZW50PXt1c2VyID09PSBudWxsID8gTG9naW4gOiBSZW5kZXJCbG9nfS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvdXNlcnMnIENvbXBvbmVudD17VXNlcnN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvdXNlcnMvOmlkJyBDb21wb25lbnQ9e1VzZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYmxvZ3MvOmlkJyBDb21wb25lbnQ9e0Jsb2dQYWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvUm91dGVzPlxuXG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwIl0sImZpbGUiOiIvVXNlcnMvc2FpYWRpcmFqdS9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Hb29nbGVEcml2ZS1zYWlhZGk0MDAyQGdtYWlsLmNvbS9NeSBEcml2ZS9Qcm9ncmFtbWluZy9BcHBEZXYvRnVsbCBTdGFjayBPcGVuL2Jsb2dsaXN0LWZyb250ZW5kL3NyYy9BcHAuanN4In0=
import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Login.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b835e62f"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Login.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { useDispatch } from "/node_modules/.vite/deps/react-redux.js?v=b835e62f";
import loginService from "/src/services/login.js";
import Notification from "/src/components/Notification.jsx";
import __vite__cjsImport6_react from "/node_modules/.vite/deps/react.js?v=b835e62f"; const useState = __vite__cjsImport6_react["useState"];
import { ResetNotification, SetNotification } from "/src/stores/notification.js";
import { setUser } from "/src/stores/user.js";
const Login = () => {
  _s();
  const [usr, setUsr] = useState("");
  const [pwd, setPwd] = useState("");
  const dispatch = useDispatch();
  const updateUsr = (event2) => {
    setUsr(event2.target.value);
  };
  const updatePwd = (event2) => {
    setPwd(event2.target.value);
  };
  const obtainToken = () => {
    loginService(usr, pwd).then((response) => {
      window.localStorage.setItem("user", JSON.stringify(response.data));
      dispatch(setUser(response.data));
    }).catch(
      // waits for half a second before setting error message to ensure the request has actually failed
      setTimeout(() => {
        dispatch(SetNotification({
          message: "wrong username or password",
          color: "red"
        }));
      }, "500"),
      setTimeout(() => {
        dispatch(ResetNotification());
      }, "5000")
    );
  };
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Notification, {}, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Login.jsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("p", { children: [
        "username: ",
        /* @__PURE__ */ jsxDEV("input", { value: usr, onChange: () => updateUsr(event), className: "UserField" }, void 0, false, {
          fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Login.jsx",
          lineNumber: 37,
          columnNumber: 30
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Login.jsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: [
        "password: ",
        /* @__PURE__ */ jsxDEV("input", { value: pwd, onChange: () => updatePwd(event), type: "password", className: "PwdField" }, void 0, false, {
          fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Login.jsx",
          lineNumber: 38,
          columnNumber: 30
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Login.jsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("button", { onClick: () => obtainToken(), children: "Submit" }, void 0, false, {
        fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Login.jsx",
        lineNumber: 39,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Login.jsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Login.jsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_s(Login, "77P7YyNaIZL1YR4F/bSNBI0HkOU=", false, function() {
  return [useDispatch];
});
_c = Login;
export default Login;
var _c;
$RefreshReg$(_c, "Login");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/Login.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBaUNRLG1CQUNJLGNBREo7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakNSLFNBQVNBLG1CQUFtQjtBQUM1QixPQUFPQyxrQkFBa0I7QUFDekIsT0FBT0Msa0JBQWtCO0FBQ3pCLFNBQVNDLGdCQUFnQjtBQUN6QixTQUFTQyxtQkFBbUJDLHVCQUF1QjtBQUNuRCxTQUFTQyxlQUFlO0FBRXhCLE1BQU1DLFFBQVFBLE1BQU07QUFBQUMsS0FBQTtBQUNoQixRQUFNLENBQUNDLEtBQUtDLE1BQU0sSUFBSVAsU0FBUyxFQUFFO0FBQ2pDLFFBQU0sQ0FBQ1EsS0FBS0MsTUFBTSxJQUFJVCxTQUFTLEVBQUU7QUFDakMsUUFBTVUsV0FBV2IsWUFBWTtBQUU3QixRQUFNYyxZQUFhQyxZQUFVO0FBQ3pCTCxXQUFPSyxPQUFNQyxPQUFPQyxLQUFLO0FBQUEsRUFDN0I7QUFDQSxRQUFNQyxZQUFhSCxZQUFVO0FBQ3pCSCxXQUFPRyxPQUFNQyxPQUFPQyxLQUFLO0FBQUEsRUFDN0I7QUFDQSxRQUFNRSxjQUFjQSxNQUFNO0FBQ3RCbEIsaUJBQWFRLEtBQUlFLEdBQUcsRUFBRVMsS0FBS0MsY0FBWTtBQUNuQ0MsYUFBT0MsYUFBYUMsUUFBUSxRQUFRQyxLQUFLQyxVQUFVTCxTQUFTTSxJQUFJLENBQUM7QUFDakVkLGVBQVNQLFFBQVFlLFNBQVNNLElBQUksQ0FBQztBQUFBLElBQ25DLENBQUMsRUFBRUM7QUFBQUE7QUFBQUEsTUFFQ0MsV0FBVyxNQUFNO0FBQ2JoQixpQkFBU1IsZ0JBQWdCO0FBQUEsVUFBRXlCLFNBQVM7QUFBQSxVQUE4QkMsT0FBTztBQUFBLFFBQUssQ0FBQyxDQUFDO0FBQUEsTUFDcEYsR0FBRyxLQUFLO0FBQUEsTUFDUkYsV0FBVyxNQUFNO0FBQ2JoQixpQkFBU1Qsa0JBQWtCLENBQUM7QUFBQSxNQUNoQyxHQUFHLE1BQU07QUFBQSxJQUNiO0FBQUEsRUFDSjtBQUNBLFNBQ0ksbUNBQ0k7QUFBQSwyQkFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWE7QUFBQSxJQUNiLHVCQUFDLFNBQ0c7QUFBQSw2QkFBQyxPQUFFO0FBQUE7QUFBQSxRQUFVLHVCQUFDLFdBQU0sT0FBT0ssS0FBSyxVQUFVLE1BQU1LLFVBQVVDLEtBQUssR0FBRyxXQUFVLGVBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBMEU7QUFBQSxXQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTBGO0FBQUEsTUFDMUYsdUJBQUMsT0FBRTtBQUFBO0FBQUEsUUFBVSx1QkFBQyxXQUFNLE9BQU9KLEtBQUssVUFBVSxNQUFNTyxVQUFVSCxLQUFLLEdBQUcsTUFBSyxZQUFXLFdBQVUsY0FBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF5RjtBQUFBLFdBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBd0c7QUFBQSxNQUN4Ryx1QkFBQyxZQUFPLFNBQVMsTUFBTUksWUFBWSxHQUFHLHNCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTRDO0FBQUEsU0FIaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUlBO0FBQUEsT0FOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBT0E7QUFFUjtBQUFDWCxHQW5DS0QsT0FBSztBQUFBLFVBR1VQLFdBQVc7QUFBQTtBQUFBZ0MsS0FIMUJ6QjtBQXFDTixlQUFlQTtBQUFLLElBQUF5QjtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsidXNlRGlzcGF0Y2giLCJsb2dpblNlcnZpY2UiLCJOb3RpZmljYXRpb24iLCJ1c2VTdGF0ZSIsIlJlc2V0Tm90aWZpY2F0aW9uIiwiU2V0Tm90aWZpY2F0aW9uIiwic2V0VXNlciIsIkxvZ2luIiwiX3MiLCJ1c3IiLCJzZXRVc3IiLCJwd2QiLCJzZXRQd2QiLCJkaXNwYXRjaCIsInVwZGF0ZVVzciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ1cGRhdGVQd2QiLCJvYnRhaW5Ub2tlbiIsInRoZW4iLCJyZXNwb25zZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImNhdGNoIiwic2V0VGltZW91dCIsIm1lc3NhZ2UiLCJjb2xvciIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZXMiOlsiTG9naW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgbG9naW5TZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL2xvZ2luJ1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL05vdGlmaWNhdGlvbidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSZXNldE5vdGlmaWNhdGlvbiwgU2V0Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vc3RvcmVzL25vdGlmaWNhdGlvbidcbmltcG9ydCB7IHNldFVzZXIgfSBmcm9tICcuLi9zdG9yZXMvdXNlcidcblxuY29uc3QgTG9naW4gPSAoKSA9PiB7XG4gICAgY29uc3QgW3Vzciwgc2V0VXNyXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtwd2QsIHNldFB3ZF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcblxuICAgIGNvbnN0IHVwZGF0ZVVzciA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRVc3IoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH1cbiAgICBjb25zdCB1cGRhdGVQd2QgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0UHdkKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICB9XG4gICAgY29uc3Qgb2J0YWluVG9rZW4gPSAoKSA9PiB7XG4gICAgICAgIGxvZ2luU2VydmljZSh1c3IscHdkKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKVxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcihyZXNwb25zZS5kYXRhKSlcbiAgICAgICAgfSkuY2F0Y2goXG4gICAgICAgICAgICAvLyB3YWl0cyBmb3IgaGFsZiBhIHNlY29uZCBiZWZvcmUgc2V0dGluZyBlcnJvciBtZXNzYWdlIHRvIGVuc3VyZSB0aGUgcmVxdWVzdCBoYXMgYWN0dWFsbHkgZmFpbGVkXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChTZXROb3RpZmljYXRpb24oeyBtZXNzYWdlOiAnd3JvbmcgdXNlcm5hbWUgb3IgcGFzc3dvcmQnLCBjb2xvcjogJ3JlZCd9KSlcbiAgICAgICAgICAgIH0sICc1MDAnKSxcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFJlc2V0Tm90aWZpY2F0aW9uKCkpXG4gICAgICAgICAgICB9LCAnNTAwMCcpXG4gICAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOb3RpZmljYXRpb24vPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD51c2VybmFtZTogPGlucHV0IHZhbHVlPXt1c3J9IG9uQ2hhbmdlPXsoKSA9PiB1cGRhdGVVc3IoZXZlbnQpfSBjbGFzc05hbWU9J1VzZXJGaWVsZCcgLz48L3A+XG4gICAgICAgICAgICAgICAgPHA+cGFzc3dvcmQ6IDxpbnB1dCB2YWx1ZT17cHdkfSBvbkNoYW5nZT17KCkgPT4gdXBkYXRlUHdkKGV2ZW50KX0gdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPSdQd2RGaWVsZCcvPjwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9idGFpblRva2VuKCl9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXSwiZmlsZSI6Ii9Vc2Vycy9zYWlhZGlyYWp1L0xpYnJhcnkvQ2xvdWRTdG9yYWdlL0dvb2dsZURyaXZlLXNhaWFkaTQwMDJAZ21haWwuY29tL015IERyaXZlL1Byb2dyYW1taW5nL0FwcERldi9GdWxsIFN0YWNrIE9wZW4vYmxvZ2xpc3QtZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvTG9naW4uanN4In0=
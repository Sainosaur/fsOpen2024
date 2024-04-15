import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b835e62f"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=b835e62f"; const ReactDOM = __vite__cjsImport1_reactDom_client.__esModule ? __vite__cjsImport1_reactDom_client.default : __vite__cjsImport1_reactDom_client;
import App from "/src/App.jsx";
import { configureStore } from "/node_modules/.vite/deps/@reduxjs_toolkit.js?v=b835e62f";
import notificationReducer from "/src/stores/notification.js";
import blogReducer from "/src/stores/blog.js";
import userReducer from "/src/stores/user.js";
import usersReducer from "/src/stores/users.js";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=b835e62f";
import { BrowserRouter as Router } from "/node_modules/.vite/deps/react-router-dom.js?v=b835e62f";
const store = configureStore({
  reducer: {
    notification: notificationReducer,
    blog: blogReducer,
    user: userReducer,
    users: usersReducer
  }
});
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(Router, { children: /* @__PURE__ */ jsxDEV(Provider, { store, children: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/main.jsx",
  lineNumber: 20,
  columnNumber: 13
}, this) }, void 0, false, {
  fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/main.jsx",
  lineNumber: 19,
  columnNumber: 9
}, this) }, void 0, false, {
  fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/main.jsx",
  lineNumber: 18,
  columnNumber: 61
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBdUJZO0FBdkJaLE9BQU9BLGNBQWM7QUFDckIsT0FBT0MsU0FBUztBQUNoQixTQUFTQyxzQkFBc0I7QUFDL0IsT0FBT0MseUJBQXlCO0FBQ2hDLE9BQU9DLGlCQUFpQjtBQUN4QixPQUFPQyxpQkFBaUI7QUFDeEIsT0FBT0Msa0JBQWtCO0FBQ3pCLFNBQVNDLGdCQUFnQjtBQUN6QixTQUFTQyxpQkFBaUJDLGNBQWM7QUFHeEMsTUFBTUMsUUFBUVIsZUFBZTtBQUFBLEVBQ3pCUyxTQUFTO0FBQUEsSUFDTEMsY0FBY1Q7QUFBQUEsSUFDZFUsTUFBTVQ7QUFBQUEsSUFDTlUsTUFBTVQ7QUFBQUEsSUFDTlUsT0FBT1Q7QUFBQUEsRUFDWDtBQUNKLENBQUM7QUFFRE4sU0FBU2dCLFdBQVdDLFNBQVNDLGVBQWUsTUFBTSxDQUFDLEVBQUVDLE9BQ2pELHVCQUFDLFVBQ0csaUNBQUMsWUFBUyxPQUNOLGlDQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJLEtBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVBLEtBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlBLENBRUoiLCJuYW1lcyI6WyJSZWFjdERPTSIsIkFwcCIsImNvbmZpZ3VyZVN0b3JlIiwibm90aWZpY2F0aW9uUmVkdWNlciIsImJsb2dSZWR1Y2VyIiwidXNlclJlZHVjZXIiLCJ1c2Vyc1JlZHVjZXIiLCJQcm92aWRlciIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJub3RpZmljYXRpb24iLCJibG9nIiwidXNlciIsInVzZXJzIiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwic291cmNlcyI6WyJtYWluLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgbm90aWZpY2F0aW9uUmVkdWNlciBmcm9tICcuL3N0b3Jlcy9ub3RpZmljYXRpb24nXG5pbXBvcnQgYmxvZ1JlZHVjZXIgZnJvbSAnLi9zdG9yZXMvYmxvZydcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tICcuL3N0b3Jlcy91c2VyJ1xuaW1wb3J0IHVzZXJzUmVkdWNlciBmcm9tICcuL3N0b3Jlcy91c2VycydcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjoge1xuICAgICAgICBub3RpZmljYXRpb246IG5vdGlmaWNhdGlvblJlZHVjZXIsXG4gICAgICAgIGJsb2c6IGJsb2dSZWR1Y2VyLFxuICAgICAgICB1c2VyOiB1c2VyUmVkdWNlcixcbiAgICAgICAgdXNlcnM6IHVzZXJzUmVkdWNlclxuICAgIH1cbn0pXG5cblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSkucmVuZGVyKFxuICAgIDxSb3V0ZXI+XG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvUm91dGVyPlxuXG4pIl0sImZpbGUiOiIvVXNlcnMvc2FpYWRpcmFqdS9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Hb29nbGVEcml2ZS1zYWlhZGk0MDAyQGdtYWlsLmNvbS9NeSBEcml2ZS9Qcm9ncmFtbWluZy9BcHBEZXYvRnVsbCBTdGFjayBPcGVuL2Jsb2dsaXN0LWZyb250ZW5kL3NyYy9tYWluLmpzeCJ9
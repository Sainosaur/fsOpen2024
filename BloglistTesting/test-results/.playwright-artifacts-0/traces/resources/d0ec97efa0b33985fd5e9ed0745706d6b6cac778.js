import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/RenderBlog.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b835e62f"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/RenderBlog.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=b835e62f"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useRef = __vite__cjsImport3_react["useRef"];
import Blog from "/src/components/Blog.jsx";
import blogService from "/src/services/blog.js";
import NewBlog from "/src/components/NewBlog.jsx";
import VisibilityComponent from "/src/components/Visibility.jsx";
import { useDispatch, useSelector } from "/node_modules/.vite/deps/react-redux.js?v=b835e62f";
import { SetNotification, ResetNotification } from "/src/stores/notification.js";
import { setBlogs, addBlog, updateBlogLike } from "/src/stores/blog.js";
const RenderBlog = () => {
  _s();
  const user = useSelector((state) => state.user);
  const GlobalToggle = useRef();
  const dispatch = useDispatch();
  const onAddBlog = async (title, author, url, user2, selfToggle) => {
    try {
      const res = await blogService.addBlog(title, author, url, user2);
      dispatch(addBlog(res.data));
      dispatch(SetNotification({
        message: `a new blog ${title} by ${author} added!`,
        color: "green"
      })), setTimeout(() => {
        dispatch(ResetNotification());
        selfToggle();
      }, "5000");
    } catch {
      dispatch(SetNotification({
        message: `${title} by ${author} couldn't be added, please try again later`,
        color: "red"
      })), setTimeout(() => {
        dispatch(ResetNotification());
      }, "5000");
    }
  };
  useEffect(() => {
    blogService.getAll().then((blogs2) => dispatch(setBlogs(blogs2.sort((a, b) => b.likes - a.likes))));
  }, []);
  const blogs = useSelector((state) => state.blog);
  return /* @__PURE__ */ jsxDEV(Fragment, { children: /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV(VisibilityComponent, { invisiblemessage: "new blog", visiblemessage: "cancel", ref: GlobalToggle, children: /* @__PURE__ */ jsxDEV(NewBlog, { user, selfToggle: GlobalToggle, addBlog: onAddBlog }, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/RenderBlog.jsx",
      lineNumber: 43,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/RenderBlog.jsx",
      lineNumber: 42,
      columnNumber: 17
    }, this),
    blogs.map((blog) => /* @__PURE__ */ jsxDEV(Blog, { blog }, blog.id, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/RenderBlog.jsx",
      lineNumber: 45,
      columnNumber: 36
    }, this))
  ] }, void 0, true, {
    fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/RenderBlog.jsx",
    lineNumber: 41,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/RenderBlog.jsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_s(RenderBlog, "e0stt+/ghtju/K8qDrRgJN4uzAU=", false, function() {
  return [useSelector, useDispatch, useSelector];
});
_c = RenderBlog;
export default RenderBlog;
var _c;
$RefreshReg$(_c, "RenderBlog");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/RenderBlog.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBcUNRLG1CQUdZLGNBSFo7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBckNSLFNBQVNBLFdBQVdDLGNBQWM7QUFDbEMsT0FBT0MsVUFBVTtBQUNqQixPQUFPQyxpQkFBaUI7QUFDeEIsT0FBT0MsYUFBYTtBQUNwQixPQUFPQyx5QkFBeUI7QUFDaEMsU0FBU0MsYUFBYUMsbUJBQW1CO0FBQ3pDLFNBQVNDLGlCQUFpQkMseUJBQXlCO0FBQ25ELFNBQVNDLFVBQVVDLFNBQVNDLHNCQUFzQjtBQUVsRCxNQUFNQyxhQUFhQSxNQUFNO0FBQUFDLEtBQUE7QUFDckIsUUFBTUMsT0FBT1IsWUFBWVMsV0FBU0EsTUFBTUQsSUFBSTtBQUM1QyxRQUFNRSxlQUFlaEIsT0FBTztBQUM1QixRQUFNaUIsV0FBV1osWUFBWTtBQUM3QixRQUFNYSxZQUFZLE9BQU9DLE9BQU9DLFFBQVFDLEtBQUtQLE9BQU1RLGVBQWU7QUFDOUQsUUFBRztBQUNDLFlBQU1DLE1BQU0sTUFBTXJCLFlBQVlRLFFBQVFTLE9BQU9DLFFBQVFDLEtBQUtQLEtBQUk7QUFDOURHLGVBQVNQLFFBQVFhLElBQUlDLElBQUksQ0FBQztBQUMxQlAsZUFBU1YsZ0JBQWdCO0FBQUEsUUFBQ2tCLFNBQVMsY0FBYU4sS0FBTSxPQUFNQyxNQUFPO0FBQUEsUUFBVU0sT0FBTztBQUFBLE1BQU8sQ0FBQyxDQUFDLEdBQzdGQyxXQUFXLE1BQU07QUFDYlYsaUJBQVNULGtCQUFrQixDQUFDO0FBRTVCYyxtQkFBVztBQUFBLE1BQ2YsR0FBRyxNQUFNO0FBQUEsSUFDYixRQUFRO0FBQ0pMLGVBQVNWLGdCQUFnQjtBQUFBLFFBQUNrQixTQUFVLEdBQUVOLEtBQU0sT0FBTUMsTUFBTztBQUFBLFFBQTZDTSxPQUFPO0FBQUEsTUFBSyxDQUFDLENBQUMsR0FDcEhDLFdBQVcsTUFBTTtBQUNiVixpQkFBU1Qsa0JBQWtCLENBQUM7QUFBQSxNQUNoQyxHQUFHLE1BQU07QUFBQSxJQUNiO0FBQUEsRUFDSjtBQUNBVCxZQUFVLE1BQU07QUFDWkcsZ0JBQVkwQixPQUFPLEVBQUVDLEtBQUtDLFlBQ3RCYixTQUFTUixTQUFTcUIsT0FBTUMsS0FBSyxDQUFDQyxHQUFHQyxNQUFNQSxFQUFFQyxRQUFRRixFQUFFRSxLQUFLLENBQUMsQ0FBQyxDQUM5RDtBQUFBLEVBQ0osR0FBRyxFQUFFO0FBQ0wsUUFBTUosUUFBUXhCLFlBQVlTLFdBQVNBLE1BQU1vQixJQUFJO0FBQzdDLFNBQ0ksbUNBQ0ksaUNBQUMsU0FDRztBQUFBLDJCQUFDLHVCQUFvQixrQkFBaUIsWUFBVyxnQkFBZSxVQUFTLEtBQUtuQixjQUMxRSxpQ0FBQyxXQUFRLE1BQVksWUFBWUEsY0FBYyxTQUFTRSxhQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWtFLEtBRHRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFQTtBQUFBLElBQ0NZLE1BQU1NLElBQUlELFVBQVEsdUJBQUMsUUFBbUIsUUFBVEEsS0FBS0UsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUErQixDQUFHO0FBQUEsT0FKekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtBLEtBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU9BO0FBRVI7QUFBQ3hCLEdBckNLRCxZQUFVO0FBQUEsVUFDQ04sYUFFSUQsYUF1QkhDLFdBQVc7QUFBQTtBQUFBZ0MsS0ExQnZCMUI7QUF1Q04sZUFBZUE7QUFBVSxJQUFBMEI7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIkJsb2ciLCJibG9nU2VydmljZSIsIk5ld0Jsb2ciLCJWaXNpYmlsaXR5Q29tcG9uZW50IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlNldE5vdGlmaWNhdGlvbiIsIlJlc2V0Tm90aWZpY2F0aW9uIiwic2V0QmxvZ3MiLCJhZGRCbG9nIiwidXBkYXRlQmxvZ0xpa2UiLCJSZW5kZXJCbG9nIiwiX3MiLCJ1c2VyIiwic3RhdGUiLCJHbG9iYWxUb2dnbGUiLCJkaXNwYXRjaCIsIm9uQWRkQmxvZyIsInRpdGxlIiwiYXV0aG9yIiwidXJsIiwic2VsZlRvZ2dsZSIsInJlcyIsImRhdGEiLCJtZXNzYWdlIiwiY29sb3IiLCJzZXRUaW1lb3V0IiwiZ2V0QWxsIiwidGhlbiIsImJsb2dzIiwic29ydCIsImEiLCJiIiwibGlrZXMiLCJibG9nIiwibWFwIiwiaWQiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VzIjpbIlJlbmRlckJsb2cuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQmxvZyBmcm9tICcuLi9jb21wb25lbnRzL0Jsb2cnXG5pbXBvcnQgYmxvZ1NlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvYmxvZydcbmltcG9ydCBOZXdCbG9nIGZyb20gJy4vTmV3QmxvZydcbmltcG9ydCBWaXNpYmlsaXR5Q29tcG9uZW50IGZyb20gJy4vVmlzaWJpbGl0eSdcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgU2V0Tm90aWZpY2F0aW9uLCBSZXNldE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL3N0b3Jlcy9ub3RpZmljYXRpb24nXG5pbXBvcnQgeyBzZXRCbG9ncywgYWRkQmxvZywgdXBkYXRlQmxvZ0xpa2UgfSBmcm9tICcuLi9zdG9yZXMvYmxvZydcblxuY29uc3QgUmVuZGVyQmxvZyA9ICgpID0+IHtcbiAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcilcbiAgICBjb25zdCBHbG9iYWxUb2dnbGUgPSB1c2VSZWYoKVxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICAgIGNvbnN0IG9uQWRkQmxvZyA9IGFzeW5jICh0aXRsZSwgYXV0aG9yLCB1cmwsIHVzZXIsIHNlbGZUb2dnbGUpID0+IHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYmxvZ1NlcnZpY2UuYWRkQmxvZyh0aXRsZSwgYXV0aG9yLCB1cmwsIHVzZXIpXG4gICAgICAgICAgICBkaXNwYXRjaChhZGRCbG9nKHJlcy5kYXRhKSlcbiAgICAgICAgICAgIGRpc3BhdGNoKFNldE5vdGlmaWNhdGlvbih7bWVzc2FnZTpgYSBuZXcgYmxvZyAke3RpdGxlfSBieSAke2F1dGhvcn0gYWRkZWQhYCwgY29sb3I6ICdncmVlbid9KSksXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChSZXNldE5vdGlmaWNhdGlvbigpKVxuICAgICAgICAgICAgICAgIC8vIHVzZXMgcmVmZXJlbmNlZCBzZWxmIHRvZ2dsZSBmdW5jdGlvbiB0byBhdXRvbWF0aWNhbGx5IGhpZGUgdGhlIGZvcm0gYWZ0ZXIgYmxvZyBpcyBhZGRlZC5cbiAgICAgICAgICAgICAgICBzZWxmVG9nZ2xlKClcbiAgICAgICAgICAgIH0sICc1MDAwJylcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBkaXNwYXRjaChTZXROb3RpZmljYXRpb24oe21lc3NhZ2U6IGAke3RpdGxlfSBieSAke2F1dGhvcn0gY291bGRuJ3QgYmUgYWRkZWQsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJgLCBjb2xvcjogJ3JlZCd9KSksXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChSZXNldE5vdGlmaWNhdGlvbigpKVxuICAgICAgICAgICAgfSwgJzUwMDAnKVxuICAgICAgICB9XG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGJsb2dTZXJ2aWNlLmdldEFsbCgpLnRoZW4oYmxvZ3MgPT5cbiAgICAgICAgICAgIGRpc3BhdGNoKHNldEJsb2dzKGJsb2dzLnNvcnQoKGEsIGIpID0+IGIubGlrZXMgLSBhLmxpa2VzKSkpXG4gICAgICAgIClcbiAgICB9LCBbXSlcbiAgICBjb25zdCBibG9ncyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmJsb2cpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpc2liaWxpdHlDb21wb25lbnQgaW52aXNpYmxlbWVzc2FnZT1cIm5ldyBibG9nXCIgdmlzaWJsZW1lc3NhZ2U9XCJjYW5jZWxcIiByZWY9e0dsb2JhbFRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxOZXdCbG9nIHVzZXI9e3VzZXJ9IHNlbGZUb2dnbGU9e0dsb2JhbFRvZ2dsZX0gYWRkQmxvZz17b25BZGRCbG9nfSAvPlxuICAgICAgICAgICAgICAgIDwvVmlzaWJpbGl0eUNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICB7YmxvZ3MubWFwKGJsb2cgPT4gPEJsb2cga2V5PXtibG9nLmlkfSBibG9nPXtibG9nfSAvPil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJCbG9nIl0sImZpbGUiOiIvVXNlcnMvc2FpYWRpcmFqdS9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Hb29nbGVEcml2ZS1zYWlhZGk0MDAyQGdtYWlsLmNvbS9NeSBEcml2ZS9Qcm9ncmFtbWluZy9BcHBEZXYvRnVsbCBTdGFjayBPcGVuL2Jsb2dsaXN0LWZyb250ZW5kL3NyYy9jb21wb25lbnRzL1JlbmRlckJsb2cuanN4In0=
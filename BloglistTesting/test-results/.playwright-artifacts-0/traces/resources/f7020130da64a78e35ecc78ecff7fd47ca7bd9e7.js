import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/BlogPage.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b835e62f"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/BlogPage.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { useDispatch, useSelector } from "/node_modules/.vite/deps/react-redux.js?v=b835e62f";
import { useParams, Link } from "/node_modules/.vite/deps/react-router-dom.js?v=b835e62f";
import blogService from "/src/services/blog.js";
import { updateBlogLike } from "/src/stores/blog.js";
import { removeBlog } from "/src/stores/blog.js";
const BlogPage = () => {
  _s();
  const params = useParams();
  const blog = useSelector((state) => state.blog).find((blog2) => blog2.id === params.id);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const likeBlog = () => {
    blogService.likeBlog(blog, user);
    dispatch(updateBlogLike(blog));
  };
  if (!blog) {
    return /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("p", { children: "Blog deleted!" }, void 0, false, {
        fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/BlogPage.jsx",
        lineNumber: 19,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "..", children: "Return to home page" }, void 0, false, {
        fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/BlogPage.jsx",
        lineNumber: 20,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/BlogPage.jsx",
      lineNumber: 18,
      columnNumber: 12
    }, this);
  }
  const deleteBlog = () => {
    try {
      window.confirm("Are you sure you would like to delete this blog?") ? blogService.deleteBlog(blog) : null;
      dispatch(removeBlog(blog));
    } catch {
      window.alert("Error! Cannot delete blog, please try again later");
    }
  };
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("h1", { children: blog.title }, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/BlogPage.jsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("a", { href: blog.url, children: blog.url }, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/BlogPage.jsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("p", { children: [
      blog.likes,
      " likes ",
      /* @__PURE__ */ jsxDEV("button", { onClick: likeBlog, children: "like" }, void 0, false, {
        fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/BlogPage.jsx",
        lineNumber: 34,
        columnNumber: 35
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/BlogPage.jsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("p", { children: [
      "added by ",
      blog.user.name
    ] }, void 0, true, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/BlogPage.jsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    user.id == blog.user.id ? /* @__PURE__ */ jsxDEV("button", { onClick: deleteBlog, children: "Delete" }, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/BlogPage.jsx",
      lineNumber: 36,
      columnNumber: 40
    }, this) : null,
    /* @__PURE__ */ jsxDEV("h2", { children: "comments:" }, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/BlogPage.jsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("li", { children: blog.comments.map((comment) => comment) }, void 0, false, {
      fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/BlogPage.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/BlogPage.jsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_s(BlogPage, "nJ9P8Q4ZQXBu39orK+EzWW8cagw=", false, function() {
  return [useParams, useSelector, useSelector, useDispatch];
});
_c = BlogPage;
export default BlogPage;
var _c;
$RefreshReg$(_c, "BlogPage");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/saiadiraju/Library/CloudStorage/GoogleDrive-saiadi4002@gmail.com/My Drive/Programming/AppDev/Full Stack Open/bloglist-frontend/src/components/BlogPage.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBaUJZLG1CQUNJLGNBREo7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakJaLFNBQVNBLGFBQWFDLG1CQUFtQjtBQUN6QyxTQUFTQyxXQUFXQyxZQUFZO0FBQ2hDLE9BQU9DLGlCQUFpQjtBQUN4QixTQUFTQyxzQkFBc0I7QUFDL0IsU0FBU0Msa0JBQWtCO0FBRTNCLE1BQU1DLFdBQVdBLE1BQU07QUFBQUMsS0FBQTtBQUNuQixRQUFNQyxTQUFTUCxVQUFVO0FBQ3pCLFFBQU1RLE9BQU9ULFlBQVlVLFdBQVNBLE1BQU1ELElBQUksRUFBRUUsS0FBS0YsV0FBUUEsTUFBS0csT0FBT0osT0FBT0ksRUFBRTtBQUNoRixRQUFNQyxPQUFPYixZQUFZVSxXQUFTQSxNQUFNRyxJQUFJO0FBQzVDLFFBQU1DLFdBQVdmLFlBQVk7QUFDN0IsUUFBTWdCLFdBQVdBLE1BQU07QUFDbkJaLGdCQUFZWSxTQUFTTixNQUFNSSxJQUFJO0FBQy9CQyxhQUFTVixlQUFlSyxJQUFJLENBQUM7QUFBQSxFQUNqQztBQUNBLE1BQUksQ0FBQ0EsTUFBTTtBQUNQLFdBQ0ksbUNBQ0k7QUFBQSw2QkFBQyxPQUFFLDZCQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBZ0I7QUFBQSxNQUNoQix1QkFBQyxRQUFLLElBQUksTUFBTSxtQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFtQztBQUFBLFNBRnZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FHQTtBQUFBLEVBR1I7QUFDQSxRQUFNTyxhQUFhQSxNQUFNO0FBQ3JCLFFBQUk7QUFDQUMsYUFBT0MsUUFBUSxrREFBa0QsSUFBSWYsWUFBWWEsV0FBV1AsSUFBSSxJQUFJO0FBQ3BHSyxlQUFTVCxXQUFXSSxJQUFJLENBQUM7QUFBQSxJQUM3QixRQUFRO0FBQ0pRLGFBQU9FLE1BQU0sbURBQW1EO0FBQUEsSUFDcEU7QUFBQSxFQUNKO0FBQ0EsU0FDSSxtQ0FDSTtBQUFBLDJCQUFDLFFBQUlWLGVBQUtXLFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFnQjtBQUFBLElBQ2hCLHVCQUFDLE9BQUUsTUFBTVgsS0FBS1ksS0FBTVosZUFBS1ksT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE2QjtBQUFBLElBQzdCLHVCQUFDLE9BQUdaO0FBQUFBLFdBQUthO0FBQUFBLE1BQU07QUFBQSxNQUFPLHVCQUFDLFlBQU8sU0FBU1AsVUFBVSxvQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUErQjtBQUFBLFNBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBOEQ7QUFBQSxJQUM5RCx1QkFBQyxPQUFFO0FBQUE7QUFBQSxNQUFVTixLQUFLSSxLQUFLVTtBQUFBQSxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTRCO0FBQUEsSUFDM0JWLEtBQUtELE1BQU1ILEtBQUtJLEtBQUtELEtBQUssdUJBQUMsWUFBTyxTQUFTSSxZQUFZLHNCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQW1DLElBQVk7QUFBQSxJQUMxRSx1QkFBQyxRQUFHLHlCQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBYTtBQUFBLElBQ2IsdUJBQUMsUUFDSVAsZUFBS2UsU0FBU0MsSUFBSUMsYUFBV0EsT0FBTyxLQUR6QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUE7QUFBQSxPQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FVQTtBQUVSO0FBQUNuQixHQXZDS0QsVUFBUTtBQUFBLFVBQ0tMLFdBQ0ZELGFBQ0FBLGFBQ0lELFdBQVc7QUFBQTtBQUFBNEIsS0FKMUJyQjtBQXlDTixlQUFlQTtBQUFRLElBQUFxQjtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZVBhcmFtcyIsIkxpbmsiLCJibG9nU2VydmljZSIsInVwZGF0ZUJsb2dMaWtlIiwicmVtb3ZlQmxvZyIsIkJsb2dQYWdlIiwiX3MiLCJwYXJhbXMiLCJibG9nIiwic3RhdGUiLCJmaW5kIiwiaWQiLCJ1c2VyIiwiZGlzcGF0Y2giLCJsaWtlQmxvZyIsImRlbGV0ZUJsb2ciLCJ3aW5kb3ciLCJjb25maXJtIiwiYWxlcnQiLCJ0aXRsZSIsInVybCIsImxpa2VzIiwibmFtZSIsImNvbW1lbnRzIiwibWFwIiwiY29tbWVudCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZXMiOlsiQmxvZ1BhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgeyB1c2VQYXJhbXMsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXG5pbXBvcnQgYmxvZ1NlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvYmxvZydcbmltcG9ydCB7IHVwZGF0ZUJsb2dMaWtlIH0gZnJvbSBcIi4uL3N0b3Jlcy9ibG9nXCJcbmltcG9ydCB7IHJlbW92ZUJsb2cgfSBmcm9tIFwiLi4vc3RvcmVzL2Jsb2dcIlxuXG5jb25zdCBCbG9nUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKVxuICAgIGNvbnN0IGJsb2cgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5ibG9nKS5maW5kKGJsb2cgPT4gYmxvZy5pZCA9PT0gcGFyYW1zLmlkKVxuICAgIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKVxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICAgIGNvbnN0IGxpa2VCbG9nID0gKCkgPT4ge1xuICAgICAgICBibG9nU2VydmljZS5saWtlQmxvZyhibG9nLCB1c2VyKVxuICAgICAgICBkaXNwYXRjaCh1cGRhdGVCbG9nTGlrZShibG9nKSlcbiAgICB9XG4gICAgaWYgKCFibG9nKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxwPkJsb2cgZGVsZXRlZCE8L3A+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89eycuLid9PlJldHVybiB0byBob21lIHBhZ2U8L0xpbms+XG4gICAgICAgICAgICA8Lz5cblxuICAgICAgICApXG4gICAgfVxuICAgIGNvbnN0IGRlbGV0ZUJsb2cgPSAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIGRlbGV0ZSB0aGlzIGJsb2c/JykgPyBibG9nU2VydmljZS5kZWxldGVCbG9nKGJsb2cpIDogbnVsbFxuICAgICAgICAgICAgZGlzcGF0Y2gocmVtb3ZlQmxvZyhibG9nKSlcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ0Vycm9yISBDYW5ub3QgZGVsZXRlIGJsb2csIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXInKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+e2Jsb2cudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxhIGhyZWY9e2Jsb2cudXJsfT57YmxvZy51cmx9PC9hPlxuICAgICAgICAgICAgPHA+e2Jsb2cubGlrZXN9IGxpa2VzIDxidXR0b24gb25DbGljaz17bGlrZUJsb2d9Pmxpa2U8L2J1dHRvbj48L3A+XG4gICAgICAgICAgICA8cD5hZGRlZCBieSB7YmxvZy51c2VyLm5hbWV9PC9wPlxuICAgICAgICAgICAge3VzZXIuaWQgPT0gYmxvZy51c2VyLmlkID8gPGJ1dHRvbiBvbkNsaWNrPXtkZWxldGVCbG9nfT5EZWxldGU8L2J1dHRvbj4gOiBudWxsfVxuICAgICAgICAgICAgPGgyPmNvbW1lbnRzOjwvaDI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAge2Jsb2cuY29tbWVudHMubWFwKGNvbW1lbnQgPT4gY29tbWVudCl9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dQYWdlIl0sImZpbGUiOiIvVXNlcnMvc2FpYWRpcmFqdS9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Hb29nbGVEcml2ZS1zYWlhZGk0MDAyQGdtYWlsLmNvbS9NeSBEcml2ZS9Qcm9ncmFtbWluZy9BcHBEZXYvRnVsbCBTdGFjayBPcGVuL2Jsb2dsaXN0LWZyb250ZW5kL3NyYy9jb21wb25lbnRzL0Jsb2dQYWdlLmpzeCJ9
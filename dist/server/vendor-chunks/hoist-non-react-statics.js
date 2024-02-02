"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hoist-non-react-statics";
exports.ids = ["vendor-chunks/hoist-non-react-statics"];
exports.modules = {

/***/ "(ssr)/./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar reactIs = __webpack_require__(/*! react-is */ \"(ssr)/./node_modules/react-is/index.js\");\n/**\n * Copyright 2015, Yahoo! Inc.\n * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.\n */ var REACT_STATICS = {\n    childContextTypes: true,\n    contextType: true,\n    contextTypes: true,\n    defaultProps: true,\n    displayName: true,\n    getDefaultProps: true,\n    getDerivedStateFromError: true,\n    getDerivedStateFromProps: true,\n    mixins: true,\n    propTypes: true,\n    type: true\n};\nvar KNOWN_STATICS = {\n    name: true,\n    length: true,\n    prototype: true,\n    caller: true,\n    callee: true,\n    arguments: true,\n    arity: true\n};\nvar FORWARD_REF_STATICS = {\n    \"$$typeof\": true,\n    render: true,\n    defaultProps: true,\n    displayName: true,\n    propTypes: true\n};\nvar MEMO_STATICS = {\n    \"$$typeof\": true,\n    compare: true,\n    defaultProps: true,\n    displayName: true,\n    propTypes: true,\n    type: true\n};\nvar TYPE_STATICS = {};\nTYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;\nTYPE_STATICS[reactIs.Memo] = MEMO_STATICS;\nfunction getStatics(component) {\n    // React v16.11 and below\n    if (reactIs.isMemo(component)) {\n        return MEMO_STATICS;\n    } // React v16.12 and above\n    return TYPE_STATICS[component[\"$$typeof\"]] || REACT_STATICS;\n}\nvar defineProperty = Object.defineProperty;\nvar getOwnPropertyNames = Object.getOwnPropertyNames;\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nvar getPrototypeOf = Object.getPrototypeOf;\nvar objectPrototype = Object.prototype;\nfunction hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {\n    if (typeof sourceComponent !== \"string\") {\n        // don't hoist over string (html) components\n        if (objectPrototype) {\n            var inheritedComponent = getPrototypeOf(sourceComponent);\n            if (inheritedComponent && inheritedComponent !== objectPrototype) {\n                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);\n            }\n        }\n        var keys = getOwnPropertyNames(sourceComponent);\n        if (getOwnPropertySymbols) {\n            keys = keys.concat(getOwnPropertySymbols(sourceComponent));\n        }\n        var targetStatics = getStatics(targetComponent);\n        var sourceStatics = getStatics(sourceComponent);\n        for(var i = 0; i < keys.length; ++i){\n            var key = keys[i];\n            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {\n                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);\n                try {\n                    // Avoid failures from read-only properties\n                    defineProperty(targetComponent, key, descriptor);\n                } catch (e) {}\n            }\n        }\n    }\n    return targetComponent;\n}\nmodule.exports = hoistNonReactStatics;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxVQUFVQyxtQkFBT0EsQ0FBQztBQUV0Qjs7O0NBR0MsR0FDRCxJQUFJQyxnQkFBZ0I7SUFDbEJDLG1CQUFtQjtJQUNuQkMsYUFBYTtJQUNiQyxjQUFjO0lBQ2RDLGNBQWM7SUFDZEMsYUFBYTtJQUNiQyxpQkFBaUI7SUFDakJDLDBCQUEwQjtJQUMxQkMsMEJBQTBCO0lBQzFCQyxRQUFRO0lBQ1JDLFdBQVc7SUFDWEMsTUFBTTtBQUNSO0FBQ0EsSUFBSUMsZ0JBQWdCO0lBQ2xCQyxNQUFNO0lBQ05DLFFBQVE7SUFDUkMsV0FBVztJQUNYQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUkMsV0FBVztJQUNYQyxPQUFPO0FBQ1Q7QUFDQSxJQUFJQyxzQkFBc0I7SUFDeEIsWUFBWTtJQUNaQyxRQUFRO0lBQ1JqQixjQUFjO0lBQ2RDLGFBQWE7SUFDYkssV0FBVztBQUNiO0FBQ0EsSUFBSVksZUFBZTtJQUNqQixZQUFZO0lBQ1pDLFNBQVM7SUFDVG5CLGNBQWM7SUFDZEMsYUFBYTtJQUNiSyxXQUFXO0lBQ1hDLE1BQU07QUFDUjtBQUNBLElBQUlhLGVBQWUsQ0FBQztBQUNwQkEsWUFBWSxDQUFDMUIsUUFBUTJCLFVBQVUsQ0FBQyxHQUFHTDtBQUNuQ0ksWUFBWSxDQUFDMUIsUUFBUTRCLElBQUksQ0FBQyxHQUFHSjtBQUU3QixTQUFTSyxXQUFXQyxTQUFTO0lBQzNCLHlCQUF5QjtJQUN6QixJQUFJOUIsUUFBUStCLE1BQU0sQ0FBQ0QsWUFBWTtRQUM3QixPQUFPTjtJQUNULEVBQUUseUJBQXlCO0lBRzNCLE9BQU9FLFlBQVksQ0FBQ0ksU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJNUI7QUFDaEQ7QUFFQSxJQUFJOEIsaUJBQWlCQyxPQUFPRCxjQUFjO0FBQzFDLElBQUlFLHNCQUFzQkQsT0FBT0MsbUJBQW1CO0FBQ3BELElBQUlDLHdCQUF3QkYsT0FBT0UscUJBQXFCO0FBQ3hELElBQUlDLDJCQUEyQkgsT0FBT0csd0JBQXdCO0FBQzlELElBQUlDLGlCQUFpQkosT0FBT0ksY0FBYztBQUMxQyxJQUFJQyxrQkFBa0JMLE9BQU9oQixTQUFTO0FBQ3RDLFNBQVNzQixxQkFBcUJDLGVBQWUsRUFBRUMsZUFBZSxFQUFFQyxTQUFTO0lBQ3ZFLElBQUksT0FBT0Qsb0JBQW9CLFVBQVU7UUFDdkMsNENBQTRDO1FBQzVDLElBQUlILGlCQUFpQjtZQUNuQixJQUFJSyxxQkFBcUJOLGVBQWVJO1lBRXhDLElBQUlFLHNCQUFzQkEsdUJBQXVCTCxpQkFBaUI7Z0JBQ2hFQyxxQkFBcUJDLGlCQUFpQkcsb0JBQW9CRDtZQUM1RDtRQUNGO1FBRUEsSUFBSUUsT0FBT1Ysb0JBQW9CTztRQUUvQixJQUFJTix1QkFBdUI7WUFDekJTLE9BQU9BLEtBQUtDLE1BQU0sQ0FBQ1Ysc0JBQXNCTTtRQUMzQztRQUVBLElBQUlLLGdCQUFnQmpCLFdBQVdXO1FBQy9CLElBQUlPLGdCQUFnQmxCLFdBQVdZO1FBRS9CLElBQUssSUFBSU8sSUFBSSxHQUFHQSxJQUFJSixLQUFLNUIsTUFBTSxFQUFFLEVBQUVnQyxFQUFHO1lBQ3BDLElBQUlDLE1BQU1MLElBQUksQ0FBQ0ksRUFBRTtZQUVqQixJQUFJLENBQUNsQyxhQUFhLENBQUNtQyxJQUFJLElBQUksQ0FBRVAsQ0FBQUEsYUFBYUEsU0FBUyxDQUFDTyxJQUFJLEtBQUssQ0FBRUYsQ0FBQUEsaUJBQWlCQSxhQUFhLENBQUNFLElBQUksS0FBSyxDQUFFSCxDQUFBQSxpQkFBaUJBLGFBQWEsQ0FBQ0csSUFBSSxHQUFHO2dCQUM3SSxJQUFJQyxhQUFhZCx5QkFBeUJLLGlCQUFpQlE7Z0JBRTNELElBQUk7b0JBQ0YsMkNBQTJDO29CQUMzQ2pCLGVBQWVRLGlCQUFpQlMsS0FBS0M7Z0JBQ3ZDLEVBQUUsT0FBT0MsR0FBRyxDQUFDO1lBQ2Y7UUFDRjtJQUNGO0lBRUEsT0FBT1g7QUFDVDtBQUVBWSxPQUFPQyxPQUFPLEdBQUdkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0aWMyLy4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzPzkxZGIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuTWVtb10gPSBNRU1PX1NUQVRJQ1M7XG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIC8vIFJlYWN0IHYxNi4xMSBhbmQgYmVsb3dcbiAgaWYgKHJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9IC8vIFJlYWN0IHYxNi4xMiBhbmQgYWJvdmVcblxuXG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iXSwibmFtZXMiOlsicmVhY3RJcyIsInJlcXVpcmUiLCJSRUFDVF9TVEFUSUNTIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJjb250ZXh0VHlwZSIsImNvbnRleHRUeXBlcyIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwibWl4aW5zIiwicHJvcFR5cGVzIiwidHlwZSIsIktOT1dOX1NUQVRJQ1MiLCJuYW1lIiwibGVuZ3RoIiwicHJvdG90eXBlIiwiY2FsbGVyIiwiY2FsbGVlIiwiYXJndW1lbnRzIiwiYXJpdHkiLCJGT1JXQVJEX1JFRl9TVEFUSUNTIiwicmVuZGVyIiwiTUVNT19TVEFUSUNTIiwiY29tcGFyZSIsIlRZUEVfU1RBVElDUyIsIkZvcndhcmRSZWYiLCJNZW1vIiwiZ2V0U3RhdGljcyIsImNvbXBvbmVudCIsImlzTWVtbyIsImRlZmluZVByb3BlcnR5IiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldFByb3RvdHlwZU9mIiwib2JqZWN0UHJvdG90eXBlIiwiaG9pc3ROb25SZWFjdFN0YXRpY3MiLCJ0YXJnZXRDb21wb25lbnQiLCJzb3VyY2VDb21wb25lbnQiLCJibGFja2xpc3QiLCJpbmhlcml0ZWRDb21wb25lbnQiLCJrZXlzIiwiY29uY2F0IiwidGFyZ2V0U3RhdGljcyIsInNvdXJjZVN0YXRpY3MiLCJpIiwia2V5IiwiZGVzY3JpcHRvciIsImUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\n");

/***/ })

};
;
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
* Copyright (c) Trainline Limited, 2017. All rights reserved.
* See LICENSE.txt in the project root for license information.
*/
var React = require("react");
var utils_1 = require("./utils");
function createSkeletonProvider(dummyData, predicate, styling) {
    return function (WrappedComponent) {
        var ExportedComponent = /** @class */ (function (_super) {
            __extends(ExportedComponent, _super);
            function ExportedComponent() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.getChildContext = function () { return ({ skeletor: { isPending: predicate(_this.props), styling: styling } }); };
                return _this;
            }
            ExportedComponent.prototype.render = function () {
                // Append dummy data only if the condition defined by the predicate are met,
                // by default if there is no predicate, append the data.
                if (predicate ? predicate(this.props) : true) {
                    // Either call the dummyData as a function or assign dummyData to data
                    var data = typeof dummyData === 'function' ? dummyData(this.props) : dummyData;
                    return React.createElement(WrappedComponent, __assign({}, this.props, data));
                }
                return React.createElement(WrappedComponent, __assign({}, this.props));
            };
            ExportedComponent.childContextTypes = utils_1.contextTypes;
            return ExportedComponent;
        }(React.Component));
        return ExportedComponent;
    };
}
exports.createSkeletonProvider = createSkeletonProvider;
//# sourceMappingURL=createSkeletonProvider.js.map
"use strict";
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
var createStyle = function (styles) {
    return styles
        // tslint:disable-next-line:no-any
        .filter(function (style) { return !!style; })
        .reduce(function (acc, next) { return (__assign({}, acc, next)); }, {});
};
var createClassName = function (classnames) {
    return classnames
        .filter(Boolean)
        .join(' ');
};
var unwrapStyle = function (style) {
    return typeof style === 'function' ?
        style() :
        (style || undefined);
};
// tslint:disable-next-line:no-any
exports.createSkeletonElement = function (type, pendingStyle) {
    var ExportedComponent = function (props, _a) {
        var skeletor = _a.skeletor;
        var _b = skeletor || {}, _c = _b.isPending, isPending = _c === void 0 ? false : _c, _d = _b.styling, styling = _d === void 0 ? undefined : _d;
        // tslint:disable-next-line:no-any
        var newProps = __assign({}, props);
        if (isPending) {
            var _e = [styling, pendingStyle].map(unwrapStyle), contextStyle = _e[0], propStyle = _e[1];
            newProps.style = createStyle([
                props.style,
                typeof contextStyle !== 'string' && contextStyle || undefined,
                typeof propStyle !== 'string' && propStyle || undefined
            ]);
            newProps.className = createClassName([
                props.className,
                typeof contextStyle === 'string' && contextStyle || undefined,
                typeof propStyle === 'string' && propStyle || undefined
            ]);
            newProps['aria-hidden'] = true;
        }
        return React.createElement(type, newProps);
    };
    ExportedComponent.contextTypes = utils_1.contextTypes;
    return ExportedComponent;
};
//# sourceMappingURL=createSkeletonElement.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
exports.createSkeletonStyle = function (color) { return ({
    backgroundColor: color,
    color: color
}); };
exports.contextTypes = {
    skeletor: PropTypes.shape({
        isPending: PropTypes.bool,
        styling: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.string,
            PropTypes.object
        ])
    })
};
//# sourceMappingURL=utils.js.map
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var MovieListItem_1 = __importDefault(require("./MovieListItem"));
var MovieListBlock = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 57px 0;\n"], ["\n  padding: 57px 0;\n"])));
var ErrorMessage = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: #fff;\n  font-size: 3rem;\n"], ["\n  color: #fff;\n  font-size: 3rem;\n"])));
var MovieList = function (_a) {
    var items = _a.items;
    console.log(items);
    if (items.length === 0) {
        return react_1.default.createElement(ErrorMessage, null, "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
    }
    return (react_1.default.createElement(MovieListBlock, null, items.map(function (_a, i) {
        var title = _a.title, image = _a.image, userRating = _a.userRating, pubDate = _a.pubDate, director = _a.director, actor = _a.actor;
        return (react_1.default.createElement(MovieListItem_1.default, { key: i, image: image, title: title, userRating: userRating, pubDate: pubDate, director: director, actor: actor }));
    })));
};
exports.default = react_1.default.memo(MovieList);
var templateObject_1, templateObject_2;

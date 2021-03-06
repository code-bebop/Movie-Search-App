"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var MovieList_1 = __importDefault(require("./components/MovieList"));
var Movie_1 = require("./lib/api/Movie");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 1024px;\n  margin: 0 auto;\n\n  @media (max-width: 1024px) {\n    width: 768px;\n  }\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"], ["\n  width: 1024px;\n  margin: 0 auto;\n\n  @media (max-width: 1024px) {\n    width: 768px;\n  }\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"])));
var SearchMovieForm = styled_components_1.default.form(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 60px;\n  text-align: center;\n  & > input {\n    color: white;\n    background-color: transparent;\n    border: none;\n    border-bottom: 5px solid #fff;\n    outline: none;\n    min-width: 338px;\n  }\n  & > button {\n    display: none;\n  }\n"], ["\n  margin-top: 60px;\n  text-align: center;\n  & > input {\n    color: white;\n    background-color: transparent;\n    border: none;\n    border-bottom: 5px solid #fff;\n    outline: none;\n    min-width: 338px;\n  }\n  & > button {\n    display: none;\n  }\n"])));
var MovieMessage = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: #fff;\n  font-size: 3rem;\n"], ["\n  color: #fff;\n  font-size: 3rem;\n"])));
var App = function () {
    var _a = react_1.useState(null), items = _a[0], setItems = _a[1];
    var _b = react_1.useState(""), query = _b[0], setQuery = _b[1];
    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];
    var _d = react_1.useState(10), display = _d[0], setDisplay = _d[1];
    var getData = react_1.useCallback(function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (e) {
                        e.preventDefault();
                    }
                    if (query === "") {
                        alert("검색어를 입력해주십시오.");
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    setLoading(true);
                    return [4 /*yield*/, Movie_1.getMovieList(query, display)];
                case 2:
                    data = (_a.sent()).data.items;
                    setItems(data);
                    setDisplay(display + 10);
                    console.log(display);
                    setLoading(false);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1);
                    setLoading(false);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [query, display]);
    var onInputChange = function (e) {
        setQuery(e.target.value);
    };
    var getDocumentHeight = function () {
        var body = document.body;
        var html = document.documentElement;
        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    };
    var getScrollTop = function () {
        return window.pageYOffset !== undefined
            ? window.pageYOffset
            : (document.documentElement || document.body)
                .scrollTop;
    };
    react_1.useEffect(function () {
        var scrollHandler = function () {
            if (items) {
                if (getScrollTop() >= getDocumentHeight() - window.innerHeight) {
                    // console.log(`스크롤 트리거 ON, items.length: ${items.length}`);
                    // const nextDisplay = items.length + 10;
                    // console.log(`nextDisplay: ${nextDisplay}`);
                    // setDisplay(nextDisplay);
                    // console.log(`setDisplay 작동, display: ${display}`);
                    getData();
                }
            }
        };
        window.addEventListener("scroll", scrollHandler);
        return function () {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [items, getData, display]);
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(SearchMovieForm, { onSubmit: getData },
            react_1.default.createElement("input", { onChange: onInputChange, value: query }),
            react_1.default.createElement("button", { type: "submit" }, "\uAC80\uC0C9")),
        items ? (react_1.default.createElement(MovieList_1.default, { items: items })) : (react_1.default.createElement(MovieMessage, null, "\uAC80\uC0C9\uC744 \uD574 \uC8FC\uC2ED\uC2DC\uC624"))));
};
exports.default = App;
var templateObject_1, templateObject_2, templateObject_3;

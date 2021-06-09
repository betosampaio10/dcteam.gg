"use strict";
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
exports.__esModule = true;
exports.HelloWorld = void 0;
/* eslint-disable */
// tslint:disable-next-line
var jquery_1 = require("jquery");
var antd_1 = require("antd");
var react_1 = require("react");
var antd_2 = require("antd");
var icons_1 = require("@ant-design/icons");
var timeoutRunning = null;
var Images = [];
function getData(ajaxurl) {
    return jquery_1["default"].ajax({
        url: ajaxurl,
        headers: {
            'Origin': 'x-requested-with'
        },
        type: 'GET'
    });
}
;
function test() {
    return __awaiter(this, void 0, Promise, function () {
        var res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getData('https://www.instagram.com/dcteam.gg/channel/?__a=1')];
                case 1:
                    res = _a.sent();
                    Images.push(res.graphql.user.edge_owner_to_timeline_media.edges);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
test();
exports.HelloWorld = function (_a) {
    var _b = _a.max, max = _b === void 0 ? 1 : _b, _c = _a.autoplay, autoplay = _c === void 0 ? true : _c;
    var isLoading = true;
    var _d = react_1.useState(isLoading), loading = _d[0], setLoading = _d[1];
    var loca = [];
    var _e = react_1.useState(loca), test = _e[0], setTest = _e[1];
    react_1.useEffect(function () {
        loca ? setTest(loca) : [];
    }, []);
    react_1.useEffect(function () {
        if (!timeoutRunning) {
            timeoutRunning = setTimeout(function () {
                loca = Images[0];
                setTest(loca);
                setLoading(false);
                clearTimeout(timeoutRunning);
                timeoutRunning = null;
            }, 2000);
        }
    });
    var _f = react_1.useState(window.innerWidth), width = _f[0], setWidth = _f[1];
    var updateWidthAndHeight = function () {
        setWidth(window.innerWidth);
    };
    react_1.useEffect(function () {
        window.addEventListener("resize", updateWidthAndHeight);
        return function () { return window.removeEventListener("resize", updateWidthAndHeight); };
    });
    var antIcon = react_1["default"].createElement(icons_1.LoadingOutlined, { style: { fontSize: 44 }, spin: true });
    return (react_1["default"].createElement(antd_1.Row, { justify: "space-around" },
        react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("div", { className: "spin-dcteam" },
                react_1["default"].createElement(antd_2.Spin, { size: "large", tip: "Carregando conte\u00FAdo...", indicator: antIcon, spinning: loading, delay: 0 })),
            test &&
                react_1["default"].createElement(react_1["default"].Fragment, null, width < 480 ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(antd_1.Row, { justify: "space-around" }, test.map(function (item, i) { return (react_1["default"].createElement(react_1["default"].Fragment, null, i < 2 &&
                        react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(antd_1.Col, { span: -1 },
                                item.node.__typename == "GraphVideo" ?
                                    react_1["default"].createElement("video", { src: item.node.video_url, autoPlay: true, loop: true })
                                    :
                                        react_1["default"].createElement("img", { src: item.node.thumbnail_src }),
                                react_1["default"].createElement("div", { className: "notice-container" },
                                    react_1["default"].createElement("a", { className: "title-notice" }, "T\u00F3pico"),
                                    item.node.__typename == "GraphVideo" ?
                                        react_1["default"].createElement("label", { className: "notice-context" }, "Para acessar o v\u00EDdeo, acesse o leia-mais!")
                                        :
                                            react_1["default"].createElement("label", { className: "notice-context" }, item.node.edge_media_to_caption.edges[0].node.text),
                                    react_1["default"].createElement("a", { className: "Fixed-ReadMore", href: "https://www.instagram.com/p/" + item.node.shortcode, target: "_blank" }, "LEIA-MAIS"))),
                            i == 0 && react_1["default"].createElement(antd_1.Divider, { type: "vertical", className: "divider-class" })))); }))))
                    :
                        react_1["default"].createElement(react_1["default"].Fragment, null, width < 570 ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(antd_1.Row, { justify: "space-around" }, test.map(function (item, i) { return (react_1["default"].createElement(react_1["default"].Fragment, null, i < 3 &&
                                react_1["default"].createElement(react_1["default"].Fragment, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 0 },
                                        item.node.__typename == "GraphVideo" ?
                                            react_1["default"].createElement("video", { src: item.node.video_url, autoPlay: true, loop: true })
                                            :
                                                react_1["default"].createElement("img", { src: item.node.thumbnail_src }),
                                        react_1["default"].createElement("div", { className: "notice-container" },
                                            react_1["default"].createElement("a", { className: "title-notice" }, "T\u00F3pico"),
                                            item.node.__typename == "GraphVideo" ?
                                                react_1["default"].createElement("label", { className: "notice-context" }, "Para acessar o v\u00EDdeo, acesse o leia-mais!")
                                                :
                                                    react_1["default"].createElement("label", { className: "notice-context" }, item.node.edge_media_to_caption.edges[0].node.text),
                                            react_1["default"].createElement("a", { className: "Fixed-ReadMore", href: "https://www.instagram.com/p/" + item.node.shortcode, target: "_blank" }, "LEIA-MAIS"))),
                                    i <= 1 && react_1["default"].createElement(antd_1.Divider, { type: "vertical", className: "divider-class" })))); })))) : react_1["default"].createElement(react_1["default"].Fragment, null, width < 830 ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(antd_1.Row, { justify: "space-around" }, test.map(function (item, i) { return (react_1["default"].createElement(react_1["default"].Fragment, null, i < 4 &&
                                react_1["default"].createElement(react_1["default"].Fragment, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 1 },
                                        item.node.__typename == "GraphVideo" ?
                                            react_1["default"].createElement("video", { src: item.node.video_url, autoPlay: true, loop: true })
                                            :
                                                react_1["default"].createElement("img", { src: item.node.thumbnail_src }),
                                        react_1["default"].createElement("div", { className: "notice-container" },
                                            react_1["default"].createElement("a", { className: "title-notice" }, "T\u00F3pico"),
                                            item.node.__typename == "GraphVideo" ?
                                                react_1["default"].createElement("label", { className: "notice-context" }, "Para acessar o v\u00EDdeo, acesse o leia-mais!")
                                                :
                                                    react_1["default"].createElement("label", { className: "notice-context" }, item.node.edge_media_to_caption.edges[0].node.text),
                                            react_1["default"].createElement("a", { className: "Fixed-ReadMore", href: "https://www.instagram.com/p/" + item.node.shortcode, target: "_blank" }, "LEIA-MAIS"))),
                                    i <= 2 && react_1["default"].createElement(antd_1.Divider, { type: "vertical", className: "divider-class" })))); })))) : react_1["default"].createElement(react_1["default"].Fragment, null, width < 1100 ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(antd_1.Row, { justify: "space-around" }, test.map(function (item, i) { return (react_1["default"].createElement(react_1["default"].Fragment, null, i < 4 &&
                                react_1["default"].createElement(react_1["default"].Fragment, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 2 },
                                        item.node.__typename == "GraphVideo" ?
                                            react_1["default"].createElement("video", { src: item.node.video_url, autoPlay: true, loop: true })
                                            :
                                                react_1["default"].createElement("img", { src: item.node.thumbnail_src }),
                                        react_1["default"].createElement("div", { className: "notice-container" },
                                            react_1["default"].createElement("a", { className: "title-notice" }, "T\u00F3pico"),
                                            item.node.__typename == "GraphVideo" ?
                                                react_1["default"].createElement("label", { className: "notice-context" }, "Para acessar o v\u00EDdeo, acesse o leia-mais!")
                                                :
                                                    react_1["default"].createElement("label", { className: "notice-context" }, item.node.edge_media_to_caption.edges[0].node.text),
                                            react_1["default"].createElement("a", { className: "Fixed-ReadMore", href: "https://www.instagram.com/p/" + item.node.shortcode, target: "_blank" }, "LEIA-MAIS"))),
                                    test.length - 4 >= i && react_1["default"].createElement(antd_1.Divider, { type: "vertical", className: "divider-class" })))); })))) : (react_1["default"].createElement(react_1["default"].Fragment, null, width < 1480 ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(antd_1.Row, { justify: "space-around" }, test.map(function (item, i) { return (react_1["default"].createElement(react_1["default"].Fragment, null, i < 4 &&
                                react_1["default"].createElement(react_1["default"].Fragment, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 3 },
                                        item.node.__typename == "GraphVideo" ?
                                            react_1["default"].createElement("video", { src: item.node.video_url, autoPlay: true, loop: true })
                                            :
                                                react_1["default"].createElement("img", { src: item.node.thumbnail_src }),
                                        react_1["default"].createElement("div", { className: "notice-container" },
                                            react_1["default"].createElement("a", { className: "title-notice" }, "T\u00F3pico"),
                                            item.node.__typename == "GraphVideo" ?
                                                react_1["default"].createElement("label", { className: "notice-context" }, "Para acessar o v\u00EDdeo, acesse o leia-mais!")
                                                :
                                                    react_1["default"].createElement("label", { className: "notice-context" }, item.node.edge_media_to_caption.edges[0].node.text),
                                            react_1["default"].createElement("a", { className: "Fixed-ReadMore", href: "https://www.instagram.com/p/" + item.node.shortcode, target: "_blank" }, "LEIA-MAIS"))),
                                    test.length - 4 >= i && react_1["default"].createElement(antd_1.Divider, { type: "vertical", className: "divider-class" })))); })))) : (react_1["default"].createElement(antd_1.Row, { justify: "space-around" }, test.map(function (item, i) { return (react_1["default"].createElement(react_1["default"].Fragment, null, i < 4 &&
                            react_1["default"].createElement(react_1["default"].Fragment, null,
                                react_1["default"].createElement(antd_1.Col, { span: 4 },
                                    item.node.__typename == "GraphVideo" ?
                                        react_1["default"].createElement("video", { src: item.node.video_url, autoPlay: true, loop: true })
                                        :
                                            react_1["default"].createElement("img", { src: item.node.thumbnail_src }),
                                    react_1["default"].createElement("div", { className: "notice-container" },
                                        react_1["default"].createElement("a", { className: "title-notice" }, "T\u00F3pico"),
                                        item.node.__typename == "GraphVideo" ?
                                            react_1["default"].createElement("label", { className: "notice-context" }, "Para acessar o v\u00EDdeo, acesse o leia-mais!")
                                            :
                                                react_1["default"].createElement("label", { className: "notice-context" }, item.node.edge_media_to_caption.edges[0].node.text),
                                        react_1["default"].createElement("a", { className: "Fixed-ReadMore", href: "https://www.instagram.com/p/" + item.node.shortcode, target: "_blank" }, "LEIA-MAIS"))),
                                test.length - 4 >= i && react_1["default"].createElement(antd_1.Divider, { type: "vertical", className: "divider-class" })))); }))))))))))));
};
exports["default"] = {};

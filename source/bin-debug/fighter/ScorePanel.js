var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
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
/**
 * Created by shaorui on 14-6-8.
 */
var fighter;
(function (fighter) {
    /**
     * 成绩显示
     */
    var ScorePanel = (function (_super) {
        __extends(ScorePanel, _super);
        function ScorePanel() {
            var _this = _super.call(this) || this;
            var g = _this.graphics;
            g.beginFill(0x000000, 0.8);
            g.drawRect(0, 0, 400, 200);
            g.endFill();
            _this.txt = new egret.TextField();
            _this.txt.width = 400;
            _this.txt.height = 200;
            _this.txt.textAlign = "center";
            _this.txt.textColor = 0xFFFFFF;
            _this.txt.size = 24;
            _this.txt.y = 60;
            _this.addChild(_this.txt);
            _this.touchChildren = false;
            _this.touchEnabled = false;
            return _this;
        }
        ScorePanel.prototype.showScore = function (value) {
            var msg = "您打了 " + value + " 筐麻橙，\n打败了全国" + (value % 100) * Math.round(Math.random() * 9 + 1) / 10 + "% 的小伙伴 \n再来一次吧";
            this.txt.text = msg;
        };
        return ScorePanel;
    }(egret.Sprite));
    fighter.ScorePanel = ScorePanel;
    __reflect(ScorePanel.prototype, "fighter.ScorePanel");
})(fighter || (fighter = {}));
//# sourceMappingURL=ScorePanel.js.map
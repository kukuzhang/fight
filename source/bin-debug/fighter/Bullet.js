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
 * Created by shaorui on 14-6-7.
 */
var fighter;
(function (fighter) {
    /**
     * 子弹，利用对象池
     */
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        function Bullet(texture, textureName) {
            var _this = _super.call(this, texture) || this;
            _this.textureName = textureName;
            return _this;
        }
        /**生产*/
        Bullet.produce = function (textureName) {
            if (fighter.Bullet.cacheDict[textureName] == null)
                fighter.Bullet.cacheDict[textureName] = [];
            var dict = fighter.Bullet.cacheDict[textureName];
            var bullet;
            if (dict.length > 0) {
                bullet = dict.pop();
            }
            else {
                bullet = new fighter.Bullet(RES.getRes(textureName), textureName);
            }
            return bullet;
        };
        /**回收*/
        Bullet.reclaim = function (bullet) {
            var textureName = bullet.textureName;
            if (fighter.Bullet.cacheDict[textureName] == null)
                fighter.Bullet.cacheDict[textureName] = [];
            var dict = fighter.Bullet.cacheDict[textureName];
            if (dict.indexOf(bullet) == -1)
                dict.push(bullet);
        };
        Bullet.cacheDict = {};
        return Bullet;
    }(egret.Bitmap));
    fighter.Bullet = Bullet;
    __reflect(Bullet.prototype, "fighter.Bullet");
})(fighter || (fighter = {}));
//# sourceMappingURL=Bullet.js.map
/**
 * Created by shaorui on 14-6-8.
 */
module fighter
{
    
    /**
     * 成绩显示
     */
    export class ScorePanel extends egret.Sprite
    {
        private txt:egret.TextField;

        public constructor() {
            super();
            var g:egret.Graphics = this.graphics;
            g.beginFill(0x000000,0.8);
            g.drawRect(0,0,400,200);
            g.endFill();
            this.txt = new egret.TextField();
            this.txt.width = 400;
            this.txt.height = 200;
            this.txt.textAlign = "center";
            this.txt.textColor = 0xFFFFFF;
            this.txt.size = 24;
            this.txt.y = 60;
            this.addChild(this.txt);
            this.touchChildren = false;
            this.touchEnabled = false;
        }

        public showScore(value:number):void {

            var msg:string = "您打了 "+value+" 筐麻橙，\n打败了全国"+(value%100)*Math.round(Math.random()*9+1)/10+"% 的小伙伴 \n再来一次吧";
            this.txt.text = msg;
        }
    }
}
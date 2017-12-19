/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

class LoadingUI extends egret.Sprite{

    public constructor(){
        super();
             
        this.createView();
    }
    private textField:egret.TextField;

    private w:number;

    private h:number;

    private createView():void {
        //this.w = Const.SCENT_WIDTH;
        //this.h = Const.SCENT_HEIGHT;

       // RES.getResByUrl('http://dynamic-image.yesky.com/740x-/uploadImages/2017/338/28/6Y2K38L9UN6D.jpg',this.onComplete,this,RES.ResourceItem.TYPE_IMAGE);
        this.textField = new egret.TextField();   
        this.addChild(this.textField);
        this.textField.x = 80;
        this.textField.y = 420;
         this.textField.size = 20;
        this.textField.width = 200;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    }

    private onComplete(event:any):void {
        // var img: egret.Texture = <egret.Texture>event;
        // var bitmap: egret.Bitmap = new egret.Bitmap(img);
        // this.addChild(bitmap);

       // this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 500;
        this.textField.width = 20;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textColor = 0x000000;
        this.textField.textAlign = "center";
    }

    public setProgress(current, total):void {
        this.textField.text = "游戏加载中..." + current + "/" + total;
        
    }

     private createBitmapByName(name:string):egret.Bitmap {
        var result:egret.Bitmap = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}

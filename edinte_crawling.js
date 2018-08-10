var casper = require("casper").create();
var utils = require("utils");

var companies= ["古河電気工業","カヤック","ブリヂストン"];


for(let i=0;i<companies.length;i++){
    const url ="https://disclosure.edinet-fsa.go.jp/E01EW/BLMainController.jsp?uji.verb=W1E63010CXW1E6A010DSPSch&uji.bean=ee.bean.parent.EECommonSearchBean&TID=W1E63011&PID=W1E63010&SESSIONKEY=1533734244321&lgKbn=2&pkbn=0&skbn=0&dskb=&dflg=0&iflg=0&preId=1&row=100&idx=0&syoruiKanriNo=&mul="+companies[i]+"&fls=on&cal=1&era=H&yer=&mon=&pfs=4"
    const savepath = "capture"+i+".png";

    casper.start();    
    casper.open(url);
    casper.then(function(){
            this.capture(savepath,{
            top:0,left:0,width:1024,height:1600
        });
    });
    casper.run();
};

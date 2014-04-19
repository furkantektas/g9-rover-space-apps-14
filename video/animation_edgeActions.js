
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_instructionsMainGroup}","click",function(sym,e){window.open("http://furkantektas.github.io/g9-rover-space-apps-14/","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_instructionsMainGroup}","mouseover",function(sym,e){sym.stop(14758);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_instructionsMainGroup}","mouseout",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",32038,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_replay}","click",function(sym,e){sym.play(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-3181623");
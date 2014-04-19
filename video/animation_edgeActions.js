/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_instructionsMainGroup}", "click", function(sym, e) {
         window.open("http://furkantektas.github.io/g9-rover-space-apps-14/", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_instructionsMainGroup}", "mouseover", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(14758);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_instructionsMainGroup}", "mouseout", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-3181623");
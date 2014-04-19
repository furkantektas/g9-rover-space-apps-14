/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['source-sans-pro, sans-serif']='<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'g9',
            type:'text',
            rect:['74px','96px','auto','auto','auto','auto'],
            text:"G9",
            align:"center",
            font:['source-sans-pro, sans-serif',349,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'roversprop',
            type:'text',
            rect:['923px','317px','auto','auto','auto','auto'],
            text:"Rover",
            align:"right",
            font:['source-sans-pro, sans-serif',96,"rgba(255,255,255,1)","300","none","italic"]
         },
         {
            id:'basic',
            type:'text',
            rect:['auto','317px','auto','auto','378px','auto'],
            text:"Basic",
            align:"right",
            font:['source-sans-pro, sans-serif',96,"rgba(255,255,255,1)","300","none","italic"]
         },
         {
            id:'extensible',
            type:'text',
            rect:['auto','317px','auto','auto','378px','auto'],
            text:"Extensible",
            align:"right",
            font:['source-sans-pro, sans-serif',96,"rgba(255,255,255,1)","300","none","italic"]
         },
         {
            id:'lowcost',
            type:'text',
            rect:['auto','317px','auto','auto','378px','auto'],
            text:"Low Cost",
            align:"right",
            font:['source-sans-pro, sans-serif',96,"rgba(255,255,255,1)","300","none","italic"]
         },
         {
            id:'whyg9',
            type:'text',
            rect:['0px','89px','1280px','241px','auto','auto'],
            text:"Why G9?",
            align:"center",
            font:['source-sans-pro, sans-serif',194,"rgba(255,255,255,1)","100","none","normal"]
         },
         {
            id:'whyg9expl',
            type:'text',
            rect:['-236px','206','1200px','auto','auto','auto'],
            opacity:0,
            text:"The main goal of G9 is to design and test the algortihms for ExoMars Rover, easily. All the parts of G9 can be bought online and there is no need to any electonics knowledge! ",
            align:"left",
            font:['source-sans-pro, sans-serif',62,"rgba(255,255,255,1)","100","none","normal"]
         },
         {
            id:'control',
            type:'text',
            rect:['148px','50px','auto','auto','auto','auto'],
            text:"Control your rover via your phone's or tablet's browser",
            align:"center",
            font:['source-sans-pro, sans-serif',45,"rgba(255,255,255,1)","300","none","normal"]
         },
         {
            id:'html5',
            type:'text',
            rect:['382px','50px','auto','auto','auto','auto'],
            text:"G9 uses HTML5 Orientation API<br>No need to install an application",
            align:"center",
            font:['source-sans-pro, sans-serif',45,"rgba(255,255,255,1)","300","none","normal"]
         },
         {
            id:'tilt',
            type:'text',
            rect:['386px','50px','auto','auto','auto','auto'],
            text:"Tilt your device to control G9!",
            align:"center",
            font:['source-sans-pro, sans-serif',45,"rgba(255,255,255,1)","300","none","normal"]
         },
         {
            id:'devices',
            type:'group',
            rect:['110px','266','1061','323','auto','auto'],
            c:[
            {
               id:'nexus52',
               type:'image',
               rect:['670px','66px','391px','200px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"nexus5.png",'0px','0px']
            },
            {
               id:'nexus72',
               type:'image',
               rect:['0px','0px','567px','323px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"nexus7.png",'0px','0px']
            }]
         },
         {
            id:'instructionsMainGroup',
            type:'group',
            rect:['0','117','1280','515','auto','auto'],
            c:[
            {
               id:'instructionGroup',
               type:'group',
               rect:['0','0px','1280','271','auto','auto'],
               opacity:0,
               c:[
               {
                  id:'instructions',
                  type:'text',
                  rect:['0px','0px','1280px','95px','auto','auto'],
                  text:"Wire them by following instructions at<br>",
                  align:"center",
                  font:['source-sans-pro, sans-serif',57,"rgba(255,255,255,1.00)","100","none","normal"]
               },
               {
                  id:'url',
                  type:'text',
                  rect:['0px','113px','1280px','auto','auto','auto'],
                  text:"http://furkantektas.github.io/g9-rover-space-apps-14/",
                  align:"center",
                  font:['source-sans-pro, sans-serif',45,"rgba(255,255,255,1)","400","none","normal"]
               }]
            },
            {
               id:'qrcode',
               type:'image',
               rect:['957px','301px','214px','214px','auto','auto'],
               opacity:0,
               fill:["rgba(0,0,0,0)",im+"qrcode.png",'0px','0px']
            }]
         },
         {
            id:'addsensors',
            type:'text',
            rect:['248px','-34px','auto','auto','auto','auto'],
            opacity:0,
            text:"Add sensors to customize G9!<br>Sensors can be controlled via G9's web API!",
            align:"center",
            font:['source-sans-pro, sans-serif',45,"rgba(255,255,255,1)","300","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_roverspropCopy}": [
            ["style", "top", '317px'],
            ["style", "font-style", 'italic'],
            ["style", "left", '323px'],
            ["style", "font-size", '56px']
         ],
         "${_control}": [
            ["style", "top", '50px'],
            ["style", "font-weight", '300'],
            ["style", "left", '148px'],
            ["style", "opacity", '0']
         ],
         "${_lowcost}": [
            ["style", "opacity", '0'],
            ["style", "left", 'auto'],
            ["style", "font-size", '96px'],
            ["style", "top", '150px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "right", '378px'],
            ["style", "font-weight", '300']
         ],
         "${_instructionGroup}": [
            ["style", "top", '-35px'],
            ["style", "opacity", '0']
         ],
         "${_nexus72}": [
            ["style", "top", '0px'],
            ["transform", "skewY", '0deg'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '0px'],
            ["transform", "skewX", '0deg']
         ],
         "${_basic}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "opacity", '1'],
            ["style", "left", 'auto'],
            ["style", "font-size", '96px'],
            ["style", "top", '307px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "right", '378px'],
            ["style", "font-weight", '300']
         ],
         "${_instructionsMainGroup}": [
            ["style", "display", 'block']
         ],
         "${_tilt}": [
            ["style", "top", '50px'],
            ["style", "font-weight", '300'],
            ["style", "left", '386px'],
            ["style", "opacity", '0']
         ],
         "${_whyg9}": [
            ["style", "line-height", '233px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '1280px'],
            ["style", "top", '57px'],
            ["style", "height", '241px'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "font-size", '194px'],
            ["style", "font-weight", '100']
         ],
         "${_addsensors}": [
            ["style", "top", '-34px'],
            ["style", "opacity", '0'],
            ["style", "left", '248px']
         ],
         "${_devices}": [
            ["style", "top", '191px'],
            ["style", "opacity", '0'],
            ["style", "left", '110px']
         ],
         "${_url}": [
            ["style", "top", '113px'],
            ["style", "font-size", '45px'],
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '1280px']
         ],
         "${_extensible}": [
            ["style", "opacity", '0'],
            ["style", "left", 'auto'],
            ["style", "font-size", '96px'],
            ["style", "top", '150px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "right", '378px'],
            ["style", "font-weight", '300']
         ],
         "${_whyg9expl}": [
            ["style", "top", '212px'],
            ["style", "text-align", 'left'],
            ["style", "width", '1200px'],
            ["style", "opacity", '0'],
            ["style", "left", '-236px'],
            ["style", "font-size", '62px']
         ],
         "${_instructions}": [
            ["style", "top", '0px'],
            ["style", "height", '95px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-size", '57px'],
            ["style", "left", '0px'],
            ["style", "width", '1280px']
         ],
         "${_g9}": [
            ["style", "top", '130px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "font-weight", '700'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "left", '74px'],
            ["style", "font-size", '349px']
         ],
         "${_html5}": [
            ["style", "top", '50px'],
            ["style", "font-weight", '300'],
            ["style", "left", '382px'],
            ["style", "opacity", '0']
         ],
         "${_nexus52}": [
            ["style", "top", '66px'],
            ["transform", "skewY", '0deg'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '670px'],
            ["transform", "skewX", '0deg']
         ],
         "${_roversprop}": [
            ["style", "top", '307px'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "text-align", 'right'],
            ["style", "font-weight", '300'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '1'],
            ["style", "left", '923px'],
            ["style", "font-size", '96px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(28,155,191,1.00)'],
            ["style", "width", '1280px'],
            ["style", "height", '720px'],
            ["style", "overflow", 'hidden']
         ],
         "${_qrcode}": [
            ["style", "top", '283px'],
            ["style", "height", '214px'],
            ["style", "opacity", '0'],
            ["style", "left", '957px'],
            ["style", "width", '214px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 30000,
         autoPlay: true,
         labels: {
            "2ndFrame": 6000,
            "3rdFrame": 7960
         },
         timeline: [
            { id: "eid201", tween: [ "style", "${_basic}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid43", tween: [ "style", "${_basic}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 200, easing: "easeInQuad" },
            { id: "eid207", tween: [ "style", "${_whyg9}", "font-size", '97px', { fromValue: '194px'}], position: 6737, duration: 263, easing: "easeInQuad" },
            { id: "eid60", tween: [ "style", "${_lowcost}", "opacity", '1', { fromValue: '0'}], position: 3450, duration: 200, easing: "easeInQuad" },
            { id: "eid61", tween: [ "style", "${_lowcost}", "opacity", '0', { fromValue: '1'}], position: 5850, duration: 150, easing: "easeInQuad" },
            { id: "eid84", tween: [ "style", "${_g9}", "top", '130px', { fromValue: '130px'}], position: 4000, duration: 0, easing: "easeInQuad" },
            { id: "eid82", tween: [ "style", "${_g9}", "top", '206px', { fromValue: '130px'}], position: 5850, duration: 150, easing: "easeInQuad" },
            { id: "eid248", tween: [ "transform", "${_nexus72}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 24800, duration: 600, easing: "easeInQuad" },
            { id: "eid242", tween: [ "transform", "${_nexus72}", "rotateZ", '-4deg', { fromValue: '4deg'}], position: 25400, duration: 900, easing: "easeInQuad" },
            { id: "eid243", tween: [ "transform", "${_nexus72}", "rotateZ", '0deg', { fromValue: '-4deg'}], position: 26300, duration: 553, easing: "easeInQuad" },
            { id: "eid74", tween: [ "style", "${_roversprop}", "opacity", '1', { fromValue: '1'}], position: 4000, duration: 0, easing: "easeInQuad" },
            { id: "eid73", tween: [ "style", "${_roversprop}", "opacity", '0', { fromValue: '1'}], position: 5850, duration: 150, easing: "easeInQuad" },
            { id: "eid164", tween: [ "style", "${_devices}", "opacity", '1', { fromValue: '0'}], position: 18800, duration: 258, easing: "easeInQuad" },
            { id: "eid165", tween: [ "style", "${_devices}", "opacity", '0', { fromValue: '1'}], position: 29760, duration: 240, easing: "easeInQuad" },
            { id: "eid172", tween: [ "style", "${_html5}", "opacity", '1', { fromValue: '0'}], position: 21240, duration: 258, easing: "easeInQuad" },
            { id: "eid173", tween: [ "style", "${_html5}", "opacity", '0', { fromValue: '1'}], position: 23600, duration: 240, easing: "easeInQuad" },
            { id: "eid152", tween: [ "style", "${_instructionGroup}", "opacity", '1', { fromValue: '0'}], position: 14500, duration: 258, easing: "easeInQuad" },
            { id: "eid158", tween: [ "style", "${_instructionGroup}", "opacity", '0', { fromValue: '1'}], position: 18560, duration: 240, easing: "easeInQuad" },
            { id: "eid255", tween: [ "style", "${_addsensors}", "opacity", '1', { fromValue: '0'}], position: 27093, duration: 207, easing: "easeInQuad" },
            { id: "eid261", tween: [ "style", "${_addsensors}", "opacity", '0', { fromValue: '1'}], position: 29760, duration: 240, easing: "easeInQuad" },
            { id: "eid266", tween: [ "style", "${_instructionsMainGroup}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid267", tween: [ "style", "${_instructionsMainGroup}", "display", 'block', { fromValue: 'none'}], position: 14500, duration: 0, easing: "easeInQuad" },
            { id: "eid100", tween: [ "style", "${_whyg9}", "top", '229px', { fromValue: '57px'}], position: 6100, duration: 200, easing: "easeInQuad" },
            { id: "eid204", tween: [ "style", "${_whyg9}", "top", '-48px', { fromValue: '229px'}], position: 6737, duration: 263, easing: "easeInQuad" },
            { id: "eid94", tween: [ "style", "${_whyg9}", "top", '250px', { fromValue: '-48px'}], position: 14300, duration: 200, easing: "easeInQuad" },
            { id: "eid254", tween: [ "style", "${_addsensors}", "top", '43px', { fromValue: '-34px'}], position: 27093, duration: 207, easing: "easeInQuad" },
            { id: "eid260", tween: [ "style", "${_addsensors}", "top", '160px', { fromValue: '43px'}], position: 29760, duration: 240, easing: "easeInQuad" },
            { id: "eid249", tween: [ "transform", "${_nexus52}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 24800, duration: 600, easing: "easeInQuad" },
            { id: "eid244", tween: [ "transform", "${_nexus52}", "rotateZ", '-4deg', { fromValue: '4deg'}], position: 25400, duration: 900, easing: "easeInQuad" },
            { id: "eid245", tween: [ "transform", "${_nexus52}", "rotateZ", '0deg', { fromValue: '-4deg'}], position: 26300, duration: 553, easing: "easeInQuad" },
            { id: "eid226", tween: [ "style", "${_qrcode}", "top", '301px', { fromValue: '283px'}], position: 14500, duration: 200, easing: "easeInQuad" },
            { id: "eid265", tween: [ "style", "${_qrcode}", "top", '382px', { fromValue: '301px'}], position: 14700, duration: 58, easing: "easeInQuad" },
            { id: "eid232", tween: [ "style", "${_qrcode}", "top", '505px', { fromValue: '382px'}], position: 18560, duration: 240, easing: "easeInQuad" },
            { id: "eid75", tween: [ "style", "${_roversprop}", "top", '307px', { fromValue: '307px'}], position: 4000, duration: 0, easing: "easeInQuad" },
            { id: "eid71", tween: [ "style", "${_roversprop}", "top", '437px', { fromValue: '307px'}], position: 5850, duration: 150, easing: "easeInQuad" },
            { id: "eid168", tween: [ "style", "${_control}", "opacity", '1', { fromValue: '0'}], position: 18800, duration: 258, easing: "easeInQuad" },
            { id: "eid169", tween: [ "style", "${_control}", "opacity", '0', { fromValue: '1'}], position: 21000, duration: 240, easing: "easeInQuad" },
            { id: "eid227", tween: [ "style", "${_qrcode}", "opacity", '1', { fromValue: '0'}], position: 14500, duration: 258, easing: "easeInQuad" },
            { id: "eid233", tween: [ "style", "${_qrcode}", "opacity", '0', { fromValue: '1'}], position: 18560, duration: 240, easing: "easeInQuad" },
            { id: "eid212", tween: [ "style", "${_whyg9expl}", "left", '40px', { fromValue: '-236px'}], position: 7000, duration: 300, easing: "easeInQuad" },
            { id: "eid213", tween: [ "style", "${_whyg9expl}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 300, easing: "easeInQuad" },
            { id: "eid218", tween: [ "style", "${_whyg9expl}", "opacity", '0', { fromValue: '1'}], position: 14300, duration: 200, easing: "easeInQuad" },
            { id: "eid151", tween: [ "style", "${_instructionGroup}", "top", '0px', { fromValue: '-35px'}], position: 14500, duration: 200, easing: "easeInQuad" },
            { id: "eid264", tween: [ "style", "${_instructionGroup}", "top", '93px', { fromValue: '0px'}], position: 14700, duration: 58, easing: "easeInQuad" },
            { id: "eid157", tween: [ "style", "${_instructionGroup}", "top", '257px', { fromValue: '93px'}], position: 18560, duration: 240, easing: "easeInQuad" },
            { id: "eid219", tween: [ "style", "${_whyg9expl}", "top", '453px', { fromValue: '212px'}], position: 14300, duration: 200, easing: "easeInQuad" },
            { id: "eid99", tween: [ "style", "${_whyg9}", "opacity", '1', { fromValue: '0'}], position: 6100, duration: 200, easing: "easeInQuad" },
            { id: "eid104", tween: [ "style", "${_whyg9}", "opacity", '0', { fromValue: '1'}], position: 14300, duration: 200, easing: "easeInQuad" },
            { id: "eid200", tween: [ "style", "${_basic}", "top", '307px', { fromValue: '307px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid34", tween: [ "style", "${_basic}", "top", '417px', { fromValue: '307px'}], position: 2000, duration: 200, easing: "easeInQuad" },
            { id: "eid174", tween: [ "style", "${_tilt}", "top", '68px', { fromValue: '50px'}], position: 23840, duration: 258, easing: "easeInQuad" },
            { id: "eid175", tween: [ "style", "${_tilt}", "top", '229px', { fromValue: '68px'}], position: 26853, duration: 240, easing: "easeInQuad" },
            { id: "eid176", tween: [ "style", "${_tilt}", "opacity", '1', { fromValue: '0'}], position: 23840, duration: 258, easing: "easeInQuad" },
            { id: "eid177", tween: [ "style", "${_tilt}", "opacity", '0', { fromValue: '1'}], position: 26853, duration: 240, easing: "easeInQuad" },
            { id: "eid170", tween: [ "style", "${_html5}", "top", '68px', { fromValue: '50px'}], position: 21240, duration: 258, easing: "easeInQuad" },
            { id: "eid171", tween: [ "style", "${_html5}", "top", '229px', { fromValue: '68px'}], position: 23600, duration: 240, easing: "easeInQuad" },
            { id: "eid85", tween: [ "style", "${_g9}", "opacity", '1', { fromValue: '1'}], position: 4000, duration: 0, easing: "easeInQuad" },
            { id: "eid83", tween: [ "style", "${_g9}", "opacity", '0', { fromValue: '1'}], position: 5850, duration: 150, easing: "easeInQuad" },
            { id: "eid162", tween: [ "style", "${_devices}", "top", '275px', { fromValue: '191px'}], position: 18800, duration: 258, easing: "easeInQuad" },
            { id: "eid163", tween: [ "style", "${_devices}", "top", '558px', { fromValue: '275px'}], position: 29760, duration: 240, easing: "easeInQuad" },
            { id: "eid49", tween: [ "style", "${_extensible}", "top", '307px', { fromValue: '150px'}], position: 2200, duration: 200, easing: "easeInQuad" },
            { id: "eid56", tween: [ "style", "${_extensible}", "top", '437px', { fromValue: '307px'}], position: 3300, duration: 150, easing: "easeInQuad" },
            { id: "eid166", tween: [ "style", "${_control}", "top", '68px', { fromValue: '50px'}], position: 18800, duration: 258, easing: "easeInQuad" },
            { id: "eid167", tween: [ "style", "${_control}", "top", '229px', { fromValue: '68px'}], position: 21000, duration: 240, easing: "easeInQuad" },
            { id: "eid58", tween: [ "style", "${_lowcost}", "top", '307px', { fromValue: '150px'}], position: 3450, duration: 200, easing: "easeInQuad" },
            { id: "eid59", tween: [ "style", "${_lowcost}", "top", '437px', { fromValue: '307px'}], position: 5850, duration: 150, easing: "easeInQuad" },
            { id: "eid46", tween: [ "style", "${_extensible}", "opacity", '1', { fromValue: '0'}], position: 2200, duration: 200, easing: "easeInQuad" },
            { id: "eid57", tween: [ "style", "${_extensible}", "opacity", '0', { fromValue: '1'}], position: 3300, duration: 150, easing: "easeInQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-3181623");

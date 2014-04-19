
(function($,Edge,compId){var _=null,y=true,n=false,or='-webkit-transform-origin',e48='${_teamGroup}',e38='${_roverspropCopy}',b='block',x45='rgba(28,155,191,1.00)',a='Base State',e57='${_instructionGroup}',x47='hidden',e59='${_nexus72}',dt='Default Timeline',e66='${_instructionsMainGroup}',e64='${_whyg9expl}',i='none',x8='96',lf='left',e65='${_whyg9}',e56='${_devices}',bg='background-color',x41='@@0@@% @@1@@%',x39='auto',om='-ms-transform-origin',e58='${_html5}',e63='${_g9}',fs='font-size',tp='top',e62='${_roversprop}',x29='400',x9='300',e46='${_Stage}',x16='100',e61='${_qrcode}',zy='scaleY',t='transform',e37='${_team}',e51='${_nexus52}',x32='65',x23='rgba(0,0,0,0)',x20='45',on='msTransformOrigin',zx='scaleX',x10='italic',r='deg',d='display',h='height',e40='${_Text14}',e53='${_lowcost}',e52='${_control}',ky='skewY',x='text',rz='rotateZ',e60='${_basic}',e50='${_addsensors}',x44='rgba(255,255,255,1.00)',x2='2.0.0',o='opacity',qiq='easeInQuad',ov='overflow',po='center',c='color',e49='${_tilt}',p='px',rt='right',e43='${_instructions}',s='style',oo='-o-transform-origin',e54='${_replay}',ta='text-align',e55='${_extensible}',x6='700',g='image',l='normal',x3='2.0.0.250',oz='-moz-transform-origin',x5='349',kx='skewX',x15='194',w='width',x1='source-sans-pro, sans-serif',x18='62',e42='${_url}',x36='stage',ff='font-family',x27='57';var im='images/';var g33='2.jpg',g34='icon_7296.png',g25='nexus7.png',g30='qrcode.png',g24='nexus5.png';var s12="Extensible",s19="Control your rover via your phone's or tablet's browser",s14="Why G9?",s21="G9 uses HTML5 Orientation API<br>No need to install an application",s4="G9",s11="Basic",s35="Add sensors to customize G9!<br>Sensors can be controlled via G9's web API!",s22="Tilt your device to control G9!",s17="The main goal of G9 is to design and test the algortihms for ExoMars Rover, easily. All the parts of G9 can be bought online and there is no need to any electonics knowledge! ",s7="Rover",s28="http://furkantektas.github.io/g9-rover-space-apps-14/",s31="G9 Team",s26="Wire them by following instructions at<br>",s13="Low Cost";var fonts={};fonts[x1]='<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>';var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x2,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'g9',t:x,r:['74px','96px','auto','auto','auto','auto'],text:s4,align:"center",n:[x1,x5,"rgba(255,255,255,1.00)",x6,i,""]},{id:'roversprop',t:x,r:['923px','317px','auto','auto','auto','auto'],text:s7,align:"right",n:[x1,x8,"rgba(255,255,255,1)",x9,i,x10]},{id:'basic',t:x,r:['auto','317px','auto','auto','378px','auto'],text:s11,align:"right",n:[x1,x8,"rgba(255,255,255,1)",x9,i,x10]},{id:'extensible',t:x,r:['auto','317px','auto','auto','378px','auto'],text:s12,align:"right",n:[x1,x8,"rgba(255,255,255,1)",x9,i,x10]},{id:'lowcost',t:x,r:['auto','317px','auto','auto','378px','auto'],text:s13,align:"right",n:[x1,x8,"rgba(255,255,255,1)",x9,i,x10]},{id:'whyg9',t:x,r:['0px','89px','1280px','241px','auto','auto'],text:s14,align:"center",n:[x1,x15,"rgba(255,255,255,1)",x16,i,l]},{id:'whyg9expl',t:x,r:['-236px','206','1200px','auto','auto','auto'],o:0,text:s17,align:"left",n:[x1,x18,"rgba(255,255,255,1)",x16,i,l]},{id:'control',t:x,r:['148px','50px','auto','auto','auto','auto'],text:s19,align:"center",n:[x1,x20,"rgba(255,255,255,1)",x9,i,l]},{id:'html5',t:x,r:['382px','50px','auto','auto','auto','auto'],text:s21,align:"center",n:[x1,x20,"rgba(255,255,255,1)",x9,i,l]},{id:'tilt',t:x,r:['386px','50px','auto','auto','auto','auto'],text:s22,align:"center",n:[x1,x20,"rgba(255,255,255,1)",x9,i,l]},{id:'devices',t:'group',r:['110px','266','1061','323','auto','auto'],c:[{id:'nexus52',t:g,r:['670px','66px','391px','200px','auto','auto'],f:[x23,im+g24,'0px','0px']},{id:'nexus72',t:g,r:['0px','0px','567px','323px','auto','auto'],f:[x23,im+g25,'0px','0px']}]},{id:'instructionsMainGroup',t:'group',r:['0','117','1280','515','auto','auto'],c:[{id:'instructionGroup',t:'group',r:['0','0px','1280','271','auto','auto'],o:0,c:[{id:'instructions',t:x,r:['0px','0px','1280px','95px','auto','auto'],text:s26,align:"center",n:[x1,x27,"rgba(255,255,255,1.00)",x16,i,l]},{id:'url',t:x,r:['0px','113px','1280px','auto','auto','auto'],text:s28,align:"center",n:[x1,x20,"rgba(255,255,255,1)",x29,i,l]}]},{id:'qrcode',t:g,r:['957px','301px','214px','214px','auto','auto'],o:0,f:[x23,im+g30,'0px','0px']}]},{id:'teamGroup',t:'group',r:['290','-107px','700','781','auto','auto'],o:0,c:[{id:'Text14',t:x,r:['234px','0px','auto','auto','auto','auto'],text:s31,align:"center",n:[x1,x32,"rgba(255,255,255,1)",x16,i,l]},{id:'team',t:g,r:['0px','103px','700px','678px','auto','auto'],o:1,f:[x23,im+g33,'0px','0px']}]},{id:'replay',t:g,r:['507px','226px','267px','267px','auto','auto'],f:[x23,im+g34,'0px','0px'],filter:[1,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0],tf:[[],[],[],['0','0']]},{id:'addsensors',t:x,r:['248px','-34px','auto','auto','auto','auto'],o:0,text:s35,align:"center",n:[x1,x20,"rgba(255,255,255,1)",x9,i,l]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:32838,a:y,l:{"2ndFrame":6000,"3rdFrame":7960},tt:[]}}}};var S1=symbols[x36];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e37).P(tp,103).P(lf,0).P("filter.invert",0,"subproperty",_,"");A1.A(e38).P(tp,317).P("font-style",x10).P(lf,323).P(fs,56);A1.A(e40).P(tp,0).P("font-weight",100,_,_,"").P(lf,234,_,_,p).P(fs,65);A1.A(e42).P(tp,113).P(fs,45).P("font-weight",400,_,_,"").P(lf,0,_,_,p).P(w,1280);A1.A(e43).P(tp,0).P(h,95).P(c,x44,c).P(fs,57).P(lf,0).P(w,1280);A1.A(e46).P(bg,x45,c).P(w,1280).P(h,720).P(ov,x47);A1.A(e48).P(tp,-107).T(30,23,0.3,qiq).T(32.3,142,0.3).P(o,0,_,_,"").T(30,1,0.3).T(32.3,0,0.3);A1.A(e49).P("font-weight",300,_,_,"").P(lf,386,_,_,p).P(tp,50).T(23.84,68,0.258,qiq).T(26.853,229,0.24).P(o,0,_,_,"").T(23.84,1,0.258).T(26.853,0,0.24);A1.A(e50).P(lf,248).P(tp,-34).T(27.093,43,0.207,qiq).T(29.76,160,0.24).P(o,0,_,_,"").T(27.093,1,0.207).T(29.76,0,0.24);A1.A(e51).P(tp,66).P(ky,0,t,_,r).P(lf,670,_,_,p).P(kx,0,t,_,r).P(rz,0,t).T(24.8,4,0.6,qiq).T(25.4,-4,0.9).T(26.3,0,0.553);A1.A(e52).P("font-weight",300,_,_,"").P(lf,148,_,_,p).P(tp,50).T(18.8,68,0.258,qiq).T(21,229,0.24).P(o,0,_,_,"").T(18.8,1,0.258).T(21,0,0.24);A1.A(e53).P(lf,x39).P(fs,96).P(ta,rt).P("font-style",x10).P(ff,x1).P(rt,378).P("font-weight",300,_,_,"").P(tp,150,_,_,p).T(3.45,307,0.2,qiq).T(5.85,437,0.15).P(o,0,_,_,"").T(3.45,1,0.2).T(5.85,0,0.15);A1.A(e54).P(tp,226).P(h,267).P("filter.invert",1,"subproperty",_,"").P(lf,507,_,_,p).P(w,267).P(d,b).T(0,i).T(32.6,b).P(zy,0,t,_,"").T(32.6,1,0.238,qiq).P(zx,0,t).T(32.6,1,0.238);A1.A(e55).P(lf,x39).P(fs,96).P(ta,rt).P("font-style",x10).P(ff,x1).P(rt,378).P("font-weight",300,_,_,"").P(tp,150,_,_,p).T(2.2,307,0.2,qiq).T(3.3,437,0.15).P(o,0,_,_,"").T(2.2,1,0.2).T(3.3,0,0.15);A1.A(e56).P(lf,110).P(tp,191).T(18.8,275,0.258,qiq).T(29.76,558,0.24).P(o,0,_,_,"").T(18.8,1,0.258).T(29.76,0,0.24);A1.A(e57).P(tp,-35).T(14.5,0,0.2,qiq).T(14.7,93,0.058).T(18.56,257,0.24).P(o,0,_,_,"").T(14.5,1,0.258).T(18.56,0,0.24);A1.A(e58).P("font-weight",300,_,_,"").P(lf,382,_,_,p).P(tp,50).T(21.24,68,0.258,qiq).T(23.6,229,0.24).P(o,0,_,_,"").T(21.24,1,0.258).T(23.6,0,0.24);A1.A(e59).P(tp,0).P(ky,0,t,_,r).P(lf,0,_,_,p).P(kx,0,t,_,r).P(rz,0,t).T(24.8,4,0.6,qiq).T(25.4,-4,0.9).T(26.3,0,0.553);A1.A(e60).P(or,[50,50],_,x41).P(oz,[50,50],_,x41).P(om,[50,50],_,x41).P(on,[50,50],_,x41).P(oo,[50,50],_,x41).P(lf,x39).P(fs,96).P(ta,rt).P("font-style",x10).P(ff,x1).P(rt,378).P("font-weight",300,_,_,"").P(tp,307,_,_,p).T(0,307).T(2,417,0.2,qiq).P(o,1,_,_,"").T(0,1).T(2,0,0.2);A1.A(e61).P(h,214).P(lf,957).P(w,214).P(tp,203).T(14.5,301,0.2,qiq).T(14.7,342,0.058).T(18.56,505,0.24).P(o,0,_,_,"").T(14.5,1,0.258).T(18.56,0,0.24);A1.A(e62).P(ff,x1).P(ta,rt).P("font-weight",300,_,_,"").P("font-style",x10).P(lf,923,_,_,p).P(fs,96).P(tp,307).T(4,307).T(5.85,437,0.15,qiq).P(o,1,_,_,"").T(4,1).T(5.85,0,0.15);A1.A(e63).P(ta,po).P("font-weight",700,_,_,"").P(c,x44,c).P(ff,x1).P(lf,74,_,_,p).P(fs,349).P(tp,130).T(4,130).T(5.85,206,0.15,qiq).P(o,1,_,_,"").T(4,1).T(5.85,0,0.15);A1.A(e64).P(ta,lf).P(w,1200).P(fs,62).P(tp,212).T(14.3,453,0.2,qiq).P(o,0,_,_,"").T(7,1,0.3).T(14.3,0,0.2).P(lf,-236,_,_,p).T(7,40,0.3);A1.A(e65).P("line-height",233).P(lf,0).P(w,1280).P(h,241).P(ff,x1).P("font-weight",100,_,_,"").P(tp,57,_,_,p).T(6.1,229,0.2,qiq).T(6.737,-48,0.263).T(14.3,250,0.2).P(o,0,_,_,"").T(6.1,1,0.2).T(14.3,0,0.2).P(fs,194,_,_,p).T(6.737,97,0.263);A1.A(e66).P(d,b).T(0,i).T(14.5,b).T(18.8,i);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-3181623");
/*
* Dynamsoft JavaScript Library
* Product: Dynamsoft Web Twain
* Web Site: http://www.dynamsoft.com
*
* Copyright 2019, Dynamsoft Corporation 
* Author: Dynamsoft R&D Department
*
* Version: 15.0
*
* Module: addon/pdf
* final js: build\addon\dynamsoft.webtwain.addon.pdf.js
*/
(function(global, factory){
	"use strict";
	if(typeof module==="object"&&typeof module.exports==="object"){
		module.exports=global.document?factory(global,true):
			function(w){
				if(!w.document){throw new Error("requires a window with a document");}
				return factory(w);
			};
	}else{factory(global);}
})(typeof window!=="undefined"?window:this,function(window, noGlobal){
Dynamsoft.PdfVerForActiveX="10.3.1.0124";Dynamsoft.PdfVerInName="10.3.1.0124";var EnumDWT_ConvertMode={CM_RENDERALL:1,CM_IMAGEONLY:2,CM_AUTO:3};var EnumDWT_PDFCompressionType={PDF_AUTO:0,PDF_FAX3:1,PDF_FAX4:2,PDF_LZW:3,PDF_RLE:4,PDF_JPEG:5,PDF_JP2000:6,PDF_JBig2:7};(function(b){if(!b.product.bChromeEdition){return}var a;var c=function(e){var f=b.html5.Funs,d;if(b.env.bMac){a="libDynamicPdf_"+Dynamsoft.PdfVerInName+".dylib"}else{if(b.env.bLinux){a="libDynamicPdf_"+Dynamsoft.PdfVerInName+".so"}else{if(dynamsoft.dcp.b64bit){a="DynamicPdfCorex64_"+Dynamsoft.PdfVerInName+".dll"}else{a="DynamicPdfCore_"+Dynamsoft.PdfVerInName+".dll"}}}e._innerSend("GetAddOnVersion",f.makeParams("pdf",a),true,false,false);d={PDF:{IsModuleInstalled:function(){var g=e._innerFun("GetAddOnVersion",f.makeParams("pdf",a));return(g!="")},ConvertToImage:function(j,n,h,k){var l=f.replaceLocalFilename(j);var g="ConvertPDFToImage";var i=function(m){f.hideMask(g);if(h){h()}return true},o=function(m){f.hideMask(g);if(k){k()}return false};f.showMask(g);e._innerSend(g,f.makeParams(l,n),true,i,o);return true},SetPassword:function(g){return e._innerFun("SetPDFPassword",f.makeParams(g))},SetConvertMode:function(g){var h=g*1;if(isNaN(h)){b.Errors.ParameterCannotEmpty(e);return false}if(b.env.bMac||b.env.bLinux){if(h!=1){h=2}}else{}if(h==EnumDWT_ConvertMode.CM_RENDERALL){if(!b.License.checkProductKey(e,{PDFRasterizer:true},true)){return false}}return e._innerFun("SetPDFConvertMode",f.makeParams(h,a))},GetConvertMode:function(){return e._innerFun("GetPDFConvertMode")},SetResolution:function(g){return e._innerFun("SetPDFResolution",f.makeParams(g))},IsTextBasedPDF:function(g){var h=f.replaceLocalFilename(g);return e._innerFun("IsTextBasedPDF",f.makeParams(h))},Write:{Setup:function(g){var i=g;if(!i){i={version:15}}if(!b.isNumber(i.version)){i.version=15}else{if(i.version>1&&i.version<2){i.version=parseInt(10*i.version)}}if(b.isNumber(i.compression)&&(i.compression==EnumDWT_PDFCompressionType.PDF_FAX3)){i.compression=EnumDWT_PDFCompressionType.PDF_FAX4}var h=b.stringify(i);h=b.replaceAll(h,'"','\\"');return e._innerFun("SetPDFSettings",['["',h,'"]'].join(""))}}}};e.__addon=e.__addon||{};b.mix(e.__addon,d)};if(b.DynamicLoadAddonFuns){b.DynamicLoadAddonFuns.push(c)}})(Dynamsoft.Lib);(function(a){if(!a.product.bPluginEdition&&!a.product.bActiveXEdition){return}var b=function(h){var e,i,d;if(h.getSWebTwain()&&h.getSWebTwain().Addon){}else{return false}if(a.env.bWin){var g=navigator.userAgent.toLowerCase(),c=!dynamsoft.navInfo.isX64||(g.indexOf("wow64")>=0);if(c){d="DynamicPdfR_"+Dynamsoft.PdfVerForActiveX+".dll"}else{d="DynamicPdfRx64_"+Dynamsoft.PdfVerForActiveX+".dll"}}else{}i=h.getSWebTwain();try{i.GetAddOnVersion("pdf",d)}catch(f){}e={PDF:{IsModuleInstalled:function(){var j=i.GetAddOnVersion("pdf",d);a.setErrorString(h);return(j!="")},ConvertToImage:function(k,n,j,m){var l=i.ConvertPDFToImage(k,n);return a.wrapperRet(h,l,j,m)},SetPassword:function(j){var k=i.SetPDFPassword(j);return a.wrapperRet(h,k)},SetConvertMode:function(k){var l=k*1;if(isNaN(l)){a.Errors.ParameterCannotEmpty(h);return false}if(l==EnumDWT_ConvertMode.CM_RENDERALL){if(!a.License.checkProductKey(h,{PDFRasterizer:true},true)){return false}}else{l=0}var j=i.SetPDFConvertMode(l);return a.wrapperRet(h,j)},GetConvertMode:function(){var j=i.GetPDFConvertMode();return a.wrapperRet(h,j)},SetResolution:function(k){var j=i.SetPDFResolution(k);return a.wrapperRet(h,j)},IsTextBasedPDF:function(j){var k=i.IsTextBasedPDF(j);return a.wrapperRet(h,k)}}};h.Addon=h.Addon||{};a.mix(h.Addon,e)};if(a.DynamicLoadAddonFuns){a.DynamicLoadAddonFuns.push(b)}})(Dynamsoft.Lib);
});
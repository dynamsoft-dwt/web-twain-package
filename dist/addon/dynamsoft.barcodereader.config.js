/**
 * Dynamsoft JavaScript Library
 * @product Dynamsoft Barcode Reader
 * @website http://www.dynamsoft.com
 *
 * @preserve Copyright 2018, Dynamsoft Corporation
 * @author Dynamsoft
 *
 * @version 6.3
 *
 * @fileoverview Dynamsoft JavaScript Library for Dynamsoft Barcode Reader
 * More info on DBR: http://www.dynamsoft.com/Products/Dynamic-Barcode-Reader.aspx
 */

var dynamsoft = dynamsoft || {};
dynamsoft.dbrEnv = dynamsoft.dbrEnv || {};

//////////////////////////////////////////////////////////////////////////////

//  WARNING:  The productKey in this file is protected by copyright law    //

//  and international treaty provisions. Unauthorized reproduction or       //

//  distribution of this  productKey, or any portion of it, may result in severe   //

//  criminal and civil penalties, and will be prosecuted to the maximum     //

//  extent possible under the law.  Further, you may not reverse engineer,  //

//  decompile, disassemble, or modify the productKey .                             //

//////////////////////////////////////////////////////////////////////////////
if (Dynamsoft.WebTwainEnv.ProductKey != "")
    dynamsoft.dbrEnv.productKey = Dynamsoft.WebTwainEnv.ProductKey;
else
    dynamsoft.dbrEnv.productKey = 't00996QAAAD3FziGR/Vjb3GjgoQshk8DhK7tn+OBuXRMWNhP4y+GB+F7tmf6UHAILWKSJGd+eTvtJYXOAP+XuprjC+Xmja5RGYD1fpi7ya8Jt8ssUzIMW0GqWETU+edEv5QSNky72';

// If you want to connect to the service manually, please set it to false
// and call dynamsoft.BarcodeReader.initServiceConnection when needed.
dynamsoft.dbrEnv.bAutoConnectService = true;

/// set resourcesPath in runtime is ok
(function () {
    var p = document.location.protocol;
    if (p !== 'https:' && p !== 'http:')
        dynamsoft.dbrEnv.resourcesPath = "https://tst.dynamsoft.com/libs/dbr/6.3";
    else
        dynamsoft.dbrEnv.resourcesPath = "http://tst.dynamsoft.com/libs/dbr/6.3";
})();

// try 64bit first, default false
//dynamsoft.dbrEnv.ifCheck64bitServiceFirst = true;

// hide dynamsoft service install dialog and customize it, default false
//dynamsoft.dbrEnv.hideDWASInstallDialog = true;
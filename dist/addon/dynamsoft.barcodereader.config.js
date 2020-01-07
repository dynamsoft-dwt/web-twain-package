/**
 * Dynamsoft JavaScript Library
 * @product Dynamsoft Barcode Reader
 * @website http://www.dynamsoft.com
 *
 * @preserve Copyright 2020, Dynamsoft Corporation
 * @author Dynamsoft
 *
 * @version 7.3.0
 *
 * @fileoverview Dynamsoft JavaScript Library for Dynamsoft Barcode Reader
 * More info on DBR: http://www.dynamsoft.com/Products/Dynamic-Barcode-Reader.aspx
 */

var dynamsoft = self.dynamsoft || {};
dynamsoft.dbrEnv = dynamsoft.dbrEnv || {};

//////////////////////////////////////////////////////////////////////////////

//  WARNING:  The productKey in this file is protected by copyright law    //

//  and international treaty provisions. Unauthorized reproduction or       //

//  distribution of this  productKey, or any portion of it, may result in severe   //

//  criminal and civil penalties, and will be prosecuted to the maximum     //

//  extent possible under the law.  Further, you may not reverse engineer,  //

//  decompile, disassemble, or modify the productKey .                             //

//////////////////////////////////////////////////////////////////////////////
dynamsoft.dbrEnv.productKey = 't0097+AAAAF2k5HE8VWdJASyjgepCk6NcloYce/mEarjfG3BTKDxVYihQ8Dez31+qwcTszshWij4CxWFyWMW9+f2dYEeCzVomFYBWYE245v4faG62oBeICeJzg0czUecHDmcxYw==';

if (Dynamsoft && Dynamsoft.WebTwainEnv && Dynamsoft.WebTwainEnv.ProductKey)
	dynamsoft.dbrEnv.productKey = [Dynamsoft.WebTwainEnv.ProductKey, dynamsoft.dbrEnv.productKey].join(";");

// If you want to connect to the service manually, please set it to false
// and call dynamsoft.BarcodeReader.initServiceConnection when needed.
dynamsoft.dbrEnv.bAutoConnectService = false;

/// set resourcesPath in runtime is ok
(function () {
	var p = document.location.protocol;
	if (p !== 'https:' && p !== 'http:')
		dynamsoft.dbrEnv.resourcesPath = "https://tst.dynamsoft.com/libs/dbr/7.1";
	else
		dynamsoft.dbrEnv.resourcesPath = "http://tst.dynamsoft.com/libs/dbr/7.1";
})();

// try 64bit first, default false
//dynamsoft.dbrEnv.ifCheck64bitServiceFirst = true;

// dbr should hide DWAS install dialog
dynamsoft.dbrEnv.hideDWASInstallDialog = true;
// dbr should disable auto download module
dynamsoft.dbrEnv.disableAutoDownloadModule = true;

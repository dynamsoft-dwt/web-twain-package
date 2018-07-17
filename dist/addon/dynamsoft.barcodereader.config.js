/**
 * Dynamsoft JavaScript Library
 * @product Dynamsoft Barcode Reader
 * @website http://www.dynamsoft.com
 *
 * @preserve Copyright 2017, Dynamsoft Corporation
 * @author Dynamsoft
 *
 * @version 5.2
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
    dynamsoft.dbrEnv.productKey = 't00851wAAACl2hQM/RWwI/J4Ic7C6YBL8Wog+tuDJo1zfCsqKcRDy8meJkAl9w3frghiJvTL493gHQ2fxnefVpL5+k5fEQ6gQfYaMsROwrEmCPXtcOXsq8w==';

if (Dynamsoft.WebTwainEnv.ProductKey)
    dynamsoft.dbrEnv.productKey = dynamsoft.dbrEnv.productKey + ';' + Dynamsoft.WebTwainEnv.ProductKey;


/// set resourcesPath in runtime is ok
dynamsoft.dbrEnv.resourcesPath = "https://tst.dynamsoft.com/libs/dbr/5.2/js";


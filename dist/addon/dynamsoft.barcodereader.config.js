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
dynamsoft.dbrEnv.productKey = 't01075QEAAIODtqPVfF2vUIwabNaLRG/Y4twI75RLXBNjylk2asWQjIi+D7werlponky1ViNB/U91+fYlAMOFMnis4ByQiY0YCRi3qw0jX13T2ItpmCbzXebeuUxH/0YCxv4NO//AkKFVD9/RXlE=';

if (Dynamsoft.WebTwainEnv.ProductKey)
    dynamsoft.dbrEnv.productKey = dynamsoft.dbrEnv.productKey + ';' + Dynamsoft.WebTwainEnv.ProductKey;


/// set resourcesPath in runtime is ok
dynamsoft.dbrEnv.resourcesPath = "https://tst.dynamsoft.com/libs/dbr/5.2/js";


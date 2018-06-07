//
// Dynamsoft JavaScript Library for Basic Initiation of Dynamic Web TWAIN
// More info on DWT: http://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx
//
// Copyright 2018, Dynamsoft Corporation 
// Author: Dynamsoft Team
// Version: 13.4.1
//
/// <reference path="dynamsoft.webtwain.initiate.js" />
var Dynamsoft = Dynamsoft || { WebTwainEnv: {} };

Dynamsoft.WebTwainEnv.AutoLoad = false;

///
Dynamsoft.WebTwainEnv.Containers = [{ ContainerId: 'dwtcontrolContainer', Width: 270, Height: 350 }];

/// If you need to use multiple keys on the same server, you can combine keys and write like this 
/// Dynamsoft.WebTwainEnv.ProductKey = 'key1;key2;key3';
Dynamsoft.WebTwainEnv.ProductKey = 't01075QEAAIODtqPVfF2vUIwabNaLRG/Y4twI75RLXBNjylk2asWQjIi+D7werlponky1ViNB/U91+fYlAMOFMnis4ByQiY0YCRi3qw0jX13T2ItpmCbzXebeuUxH/0YCxv4NO//AkKFVD9/RXlE=';

///
Dynamsoft.WebTwainEnv.Trial = true;

///
Dynamsoft.WebTwainEnv.ActiveXInstallWithCAB = false;

///
Dynamsoft.WebTwainEnv.IfUpdateService = false;

///
Dynamsoft.WebTwainEnv.ResourcesPath = 'https://tst.dynamsoft.com/libs/dwt/13.4.1';

/// All callbacks are defined in the dynamsoft.webtwain.install.js file, you can customize them.
// Dynamsoft.WebTwainEnv.RegisterEvent('OnWebTwainReady', function(){
// 		// webtwain has been inited
// });

/// Check Core License 
function checkCoreLicense(bCheckNow) {
    if (bCheckNow || Dynamsoft.WebTwainEnv.inited) {
        if (Dynamsoft.Lib.html5.Funs.checkProductKey(Dynamsoft.WebTwainEnv.GetWebTwain(Dynamsoft.WebTwainEnv.Containers[0].ContainerId), { 'Core': true })) {
            clearInterval(intervalToCheckProductKey);
            return true;
        } else {
            if (Dynamsoft && Dynamsoft.Lib.product.bChromeEdition) {
                dynamsoft.lib.dialog.dm._blockDocument();
                var ObjString = [];
                ObjString.push('<div style="padding:30px;">');
                ObjString.push("You are seeing errors because the ProductKey is not valid or has expired.<br /> Please <br />");
                ObjString.push(" 1. <a href='https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx' target='_blank'>Request a <strong>Dynamic Web TWAIN</strong> trial license</a><br />");
                ObjString.push(" 2. Refer to this <strong><a href='https://developer.dynamsoft.com/?page_id=18633'>article</a></strong> to update the ProductKey<br />");
                ObjString.push(" 3. Do a <strong>hard refresh</strong> or clear cache in your browser to make sure the new ProductKey is used<br />");
                ObjString.push(" 4. If the issue persists, please contact <a href='mailto:support@dynamsoft.com'>support@dynamsoft.com</a>");
                ObjString.push('</div>');
                Dynamsoft.WebTwainEnv.ShowDialog(530, 230, ObjString.join(''));
                if (document.getElementsByClassName("dynamsoft-dwt-dlg-header"))
                    document.getElementsByClassName("dynamsoft-dwt-dlg-header")[0].style.display = "none";
            }
            clearInterval(intervalToCheckProductKey);
            return false;
        }
    } else
        return false;
}
var intervalToCheckProductKey = setInterval(checkCoreLicense, 1000);

![Dynamic Web TWAIN](https://www.dynamsoft.com/assets/img-icon/logo-dwt-white-300x68.png)

Cross-platform JavaScript library for web document scanning.


## Overview
[Dynamic Web TWAIN](https://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx) is a TWAIN-based scanning SDK software specifically designed for web applications. With just a few lines of code, you can develop robust applications to scan documents from TWAIN-compatible scanners, edit the scanned images and save them to a local/server file system or document repository.

## Installation

```bash
npm install dwt
```

## Features
* TWAIN specification 2.1 and below compatible (ActiveX, HTML5 for Windows, Plugin APIs).
* TWAIN specification 1.9 and below compatible (HTML5 for Mac API).
* Optional disk caching mechanism enables high volume document scanning (up to thousands of pages).
* Supports Auto Document Feeder (ADF) and multiple image acquisition.
* Supports duplex scanning mode.
* Supports image preview mode.
* Supports blank page detection.
* Built-in wizard mode intelligently manages TWAIN states.
* Supports setting up image acquisition parameters (resolution, pixel type, bit depth, brightness, contrast, page size, unit, etc).
* Supports both Native and Disk File Image transfer modes. ActiveX, Plugin and HTML5 for Windows APIs also support Buffered Memory transfer mode.

## Documentation

* [Developer's Guide](http://developer.dynamsoft.com/dwt)
* [Sample Code](https://www.dynamsoft.com/Downloads/WebTWAIN-Sample-Download.aspx)

## Quick Start

Include **dynamsoft.webtwain.min.js** into your page:

```html
<script type="text/javascript" src="https://www.dynamsoft.com/library/dwt/dynamsoft.webtwain.min.js"></script>
```

Select a source and scan documents:

```html
<select size="1" id="source" style="position: relative; width: 220px;"></select>
<input type="button" value="Scan" onclick="AcquireImage();" />

<!-- dwtcontrolContainer is the default div id for Dynamic Web TWAIN control.
If you need to rename the id, you should also change the id in the dynamsoft.webtwain.config.js accordingly. -->
<div id="dwtcontrolContainer"></div>

<script type="text/javascript">
    Dynamsoft.WebTwainEnv.RegisterEvent('OnWebTwainReady', Dynamsoft_OnReady);  // Register OnWebTwainReady event. This event fires as soon as Dynamic Web TWAIN is initialized and ready to be used
    var DWObject;
    function Dynamsoft_OnReady() {
        DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');    // Get the Dynamic Web TWAIN object that is embeded in the div with id 'dwtcontrolContainer'
        if (DWObject) {
            if (window.navigator.platform.indexOf("Linux") !== -1) {
                    DWObject.ImageCaptureDriverType = 3;
            }
            var count = DWObject.SourceCount;
            for (var i = 0; i < count; i++)
                document.getElementById("source").options.add(new Option(DWObject.GetSourceNameItems(i), i)); // Get Data Source names from Data Source Manager and put them in a drop-down box
        }
    }
    function AcquireImage() {
        if (DWObject) {
            var OnAcquireImageSuccess, OnAcquireImageFailure;
            OnAcquireImageSuccess = OnAcquireImageFailure = function (){
                DWObject.CloseSource();
            };
            
            DWObject.SelectSourceByIndex(document.getElementById("source").selectedIndex); //Use method SelectSourceByIndex to avoid the 'Select Source' dialog
            DWObject.OpenSource();
            DWObject.IfDisableSourceAfterAcquire = true;	// Scanner source will be disabled/closed automatically after the scan.
            DWObject.AcquireImage(OnAcquireImageSuccess, OnAcquireImageFailure);
        }
    }
</script>
```

## Full Sample

```html
<!DOCTYPE html>
<html>
<head>
    <title>Use Dynamic Web TWAIN to Scan</title>
    <script type="text/javascript" src="https://www.dynamsoft.com/library/dwt/dynamsoft.webtwain.min.js"></script>
</head>
<body>
    <select size="1" id="source" style="position: relative; width: 220px;"></select>
    <input type="button" value="Scan" onclick="AcquireImage();" />

    <!-- dwtcontrolContainer is the default div id for Dynamic Web TWAIN control.
    If you need to rename the id, you should also change the id in the dynamsoft.webtwain.config.js accordingly. -->
    <div id="dwtcontrolContainer"></div>

    <script type="text/javascript">
        Dynamsoft.WebTwainEnv.RegisterEvent('OnWebTwainReady', Dynamsoft_OnReady);  // Register OnWebTwainReady event. This event fires as soon as Dynamic Web TWAIN is initialized and ready to be used

        var DWObject;

        function Dynamsoft_OnReady() {
            DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');    // Get the Dynamic Web TWAIN object that is embeded in the div with id 'dwtcontrolContainer'
            if (DWObject) {
                var count = DWObject.SourceCount;
                for (var i = 0; i < count; i++)
                    document.getElementById("source").options.add(new Option(DWObject.GetSourceNameItems(i), i)); // Get Data Source names from Data Source Manager and put them in a drop-down box
            }
        }
        function AcquireImage() {
            if (DWObject) {
				var OnAcquireImageSuccess, OnAcquireImageFailure;
				OnAcquireImageSuccess = OnAcquireImageFailure = function (){
					DWObject.CloseSource();
				};
				
                DWObject.SelectSourceByIndex(document.getElementById("source").selectedIndex); //Use method SelectSourceByIndex to avoid the 'Select Source' dialog
                DWObject.OpenSource();
                DWObject.IfDisableSourceAfterAcquire = true;	// Scanner source will be disabled/closed automatically after the scan.
                DWObject.AcquireImage(OnAcquireImageSuccess, OnAcquireImageFailure);
            }
        }
    </script>
</body>
</html>

```

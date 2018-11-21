# ![Dynamic Web TWAIN](https://www.dynamsoft.com/assets/img-icon/logo-dwt-white-300x68.png)

Cross-platform cross-browser JavaScript library for web document scanning.

# Overview

[Dynamic Web TWAIN](https://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx) is a TWAIN-based scanning SDK software specifically designed for web applications. With just a few lines of code, you can develop robust applications to scan documents from TWAIN/ICA/SANE-compatible scanners on Windows/macOS/Linux, view and edit the scanned images, then save them to a local/server file system or database.

## Installation

### The main package

```bash
npm install dwt@14.3.1
```

### For TypeScript support

```bash
npm install @types/dwt
```

## Features

* TWAIN spec 2.1 and below compatible (ActiveX, HTML5 for Windows APIs).
* TWAIN spec 1.9 and below compatible (HTML5 for Mac API).
* ICA compatible (HTML5 for Mac API).
* SANE compatible (HTML5 for Linux).
* Optional disk caching mechanism enables high volume document scanning (up to thousands of pages).
* Supports Auto Document Feeder (ADF) and multiple image acquisition.
* Supports duplex scanning mode if the device supports it.
* Supports setting up image acquisition parameters (resolution, pixel type, bit depth, brightness, contrast, page size, unit, etc).
* Supports both Native and Disk File Image transfer modes on Windows.
* Supports importing existing files in the formats BMP, JPG, PNG, TIF, PDF (image based).
* Supports rasterizing text-based PDF files into images.
* Supports image viewing and basic editing through APIs like rotate, flip, mirror, crop, etc.
* Supports encrypting local files in buffer and automatic removing of files that are no longer needed.
* Built-in encoding module to create files in the formats BMP, JPG, PNG, TIF, PDF.
* Built-in upload module to easily upload encoded files to FTP or HTTP servers.
* Built-in support for secure HTTP (HTTPS).
* Built-in Image Editor to easily edit images without additional code.
* Barcode reading and OCR with optional addons.

## Versions

>`Dynamic Web TWAIN`
>
>**v14.3.0** (build version 14, 2, 0, 1025)
>
>`Dynamsoft PDF Rasterizer`
>
>**v14.3.0** (build version 10, 3, 0, 0710)
>
>`Dynamsoft OCR Basic Engine`
>
>**v14.3.0** (build version 10, 0, 0, 618)
>
>`Dynamsoft Barcode Reader`
>
>**v6.3** (build version 6, 3, 0, 0723)
>
>`Dynamsoft Camera SDK`
>
>**v14.3** (build version 14, 2, 0, 1022)

## Included Samples

* **`AutoFeeder.html` & `CustomScan.html`**
  * Dynamic Web TWAIN core features
* **`PDFRasterizer.html`**:
  * Using the Rasterizer add-on to convert text-based PDF files
* **`OCRADocument.html`**:
  * Scan, Load images and then perform OCR on them (English)
* **`ReadBarcode.html`**:
  * Scan, Load images and then read barcode off them
* **`ScanorCapture.html`**:
  * Scan documents from scanners or capture documents from webcams

## Documentation

* [Developer's Guide](https://www.dynamsoft.com/docs/dwt/)
* [API Reference](https://www.dynamsoft.com/docs/dwt/API/API-Index.html)
* [Sample Gallery](https://www.dynamsoft.com/Downloads/WebTWAIN-Sample-Download.aspx)

## Quick Start

### Step 1 Load **`dynamsoft.webtwain.initiate.js`** into your page:

```html
<script src="node_modules/dwt/dist/dynamsoft.webtwain.initiate.js"></script>
```

>Please note that a **relative path** is used. You might want to change it based on where you are putting your code.
>
>Alternatively, you can also load the file from the Dynamsoft server which holds the libraries as well. Note that there are _**different versions**_ and make sure you use the correct one in your application. 
>
> **NOTE: _Loading it from Dynamsoft isn't recommended for your production environement._**

```html
<script src="https://tst.dynamsoft.com/libs/dwt/14.3/dynamsoft.webtwain.initiate.js"></script>
```

> The file **`dynamsoft.webtwain.initiate.js`** is the core of the package and must be loaded. Once you have installed the package, it can be found under *node_modules\dwt\dist*. Make sure you write the correct path for it.

### Step 2 Load **`dynamsoft.webtwain.config.js`** into your page:

```html
<script src="node_modules/dwt/dist/dynamsoft.webtwain.config.js"></script>
```

> The file **`dynamsoft.webtwain.config.js`** is used to config the package to best suite your application. You can config things like 
> 1. The initial dimentions of the built-in viewer
> 2. Whether or not you will use the full version or trial version
> 3. The **product key** needed to activate the package

For example:

```javascript
Dynamsoft.WebTwainEnv.Containers = [{ ContainerId: 'dwtcontrolContainer',  Width:'583px', Height:'513px'}];
Dynamsoft.WebTwainEnv.ProductKey = 't00851wAAACl2hQM/RWwI/J4Ic7C6YBL8Wog+tuDJo1zfCsqKcRDy8meJkAl9w3frghiJvTL493gHQ2fxnefVpL5+k5fEQ6gQfYaMsROwrEmCPXtcOXsq8w==';
Dynamsoft.WebTwainEnv.Trial = true;
```

***NOTICE*** :

1. If you are using the trial, the ProductKey might be expired or invalid. In this case, you can [request a trial key](https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx) and then replace the one above (Dynamsoft.WebTwainEnv.ProductKey) in **`dynamsoft.webtwain.config.js`**.
2. To make things easier, all the required installers for the SDK(s) are being loaded from Dynamsoft at runtime when needed. This is configured in the file **`dynamsoft.webtwain.config.js`** with this line of code

    ```javascript
    Dynamsoft.WebTwainEnv.ResourcesPath = 'https://tst.dynamsoft.com/libs/dwt/14.3';
    ```

    The installers on the Dynamsoft server are of the trial version. Once you have done all your testing and is ready to move on to use a full version, don't forget to do the following

    * Copy the full version files from a full version installation (`C:\Program Files (x86)\Dynamsoft\Dynamic Web TWAIN SDK 14.3\Resources\`) which you'll get after the purchase of a full license and paste them under `/node_modules/dwt/dist/`
    * Make sure you have set the correct full version `ProductKey` and `Trial Status` as well as correct `ResourcesPath` in the file **`dynamsoft.webtwain.config.js`** which you just copied over

        ```javascript
        Dynamsoft.WebTwainEnv.ProductKey = '{your full version key}';
        Dynamsoft.WebTwainEnv.Trial = false; //using the full version
        Dynamsoft.WebTwainEnv.ResourcesPath = 'node_modules/dwt/dist';//make sure this is correct
        ```

### Step 3 Write code to use the pacakge to do a simple document scan

> The following code demonstrates the minimum code needed to use the package. For more sophisticated sample or demo, check out the [Sample Gallery](https://www.dynamsoft.com/Downloads/WebTWAIN-Sample-Download.aspx)

```html
<input type="button" value="Scan" onclick="AcquireImage();" />

<div id="dwtcontrolContainer"></div>

<script type="text/javascript">
    window.onload = function () {
        Dynamsoft.WebTwainEnv.Load();
    };
    var DWObject;
    function Dynamsoft_OnReady() {
        DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
    }
    function AcquireImage() {
        if (DWObject) {
            DWObject.SelectSource(function () {
                var OnAcquireImageSuccess, OnAcquireImageFailure;
                OnAcquireImageSuccess = OnAcquireImageFailure = function () {
                    DWObject.CloseSource();
                };
                DWObject.OpenSource();
                DWObject.IfDisableSourceAfterAcquire = true;
                DWObject.AcquireImage(OnAcquireImageSuccess, OnAcquireImageFailure);
            }, function () {
                console.log('SelectSource failed!');
            });
        }
    }
</script>
```

### Step 4 Make sure your configurations don't get erased

Every time you do a `"npm install"`, all the configurations will be lost, we recommend that you change the configurations in your own code, and leave the unchanged configurations in the default **`dynamsoft.webtwain.config.js`**. Check out the **Full Sample** below to see how it is done.

## Full Sample

```html
<!DOCTYPE html>
<html>
<head>
    <title>Use Dynamic Web TWAIN to Scan</title>
    <script src="https://tst.dynamsoft.com/libs/dwt/14.3/dynamsoft.webtwain.initiate.js"></script>
    <script src="node_modules/dwt/dist/dynamsoft.webtwain.config.js"></script>
</head>
<body>
    <input type="button" value="Scan" onclick="AcquireImage();" />
    <div id="dwtcontrolContainer"></div>

    <script type="text/javascript">
        Dynamsoft.WebTwainEnv.Containers = [{ ContainerId: 'dwtcontrolContainer', Width: 270, Height: 350 }];
        Dynamsoft.WebTwainEnv.ProductKey = 't00851wAAACl2hQM/RWwI/J4Ic7C6YBL8Wog+tuDJo1zfCsqKcRDy8meJkAl9w3frghiJvTL493gHQ2fxnefVpL5+k5fEQ6gQfYaMsROwrEmCPXtcOXsq8w==';
        Dynamsoft.WebTwainEnv.Trial = true;
        Dynamsoft.WebTwainEnv.ResourcesPath = 'https://tst.dynamsoft.com/libs/dwt/14.3';
        Dynamsoft.WebTwainEnv.AutoLoad = false;
        window.onload = function () {
            Dynamsoft.WebTwainEnv.Load();
        };
        var DWObject;
        function Dynamsoft_OnReady() {
            DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
        }
        function AcquireImage() {
            if (DWObject) {
                DWObject.SelectSource(function () {
                    var OnAcquireImageSuccess, OnAcquireImageFailure;
                    OnAcquireImageSuccess = OnAcquireImageFailure = function () {
                        DWObject.CloseSource();
                    };
                    DWObject.OpenSource();
                    DWObject.IfDisableSourceAfterAcquire = true;
                    DWObject.AcquireImage(OnAcquireImageSuccess, OnAcquireImageFailure);
                }, function () {
                    console.log('SelectSource failed!');
                });
            }
        }
    </script>
</body>
</html>
```

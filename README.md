# ![Dynamic Web TWAIN](https://www.dynamsoft.com/assets/img-icon/logo-dwt-white-300x68.png)

Cross-platform cross-browser JavaScript library for web document scanning.

# Overview

[Dynamic Web TWAIN](https://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx) is a TWAIN-based scanning SDK software specifically designed for web applications. With just a few lines of code, you can develop robust applications to scan documents from TWAIN/ICA/SANE-compatible scanners on Windows/macOS/Linux, view and edit the scanned images, then save them to a local/server file system or database.

## Installation

### The main package

```bash
npm install dwt@15.2.0
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
* Supports image grouping via tags.
* Supports encrypting local files in buffer and automatic removing of files that are no longer needed.
* Built-in encoding module to create files in the formats BMP, JPG, PNG, TIF, PDF.
* Built-in upload module to easily upload encoded files to FTP or HTTP servers.
* Built-in support for secure HTTP (HTTPS).
* Built-in Image Editor to easily edit images without additional code.
* Webcam Capturing, Barcode reading and OCR with optional addons.

## Versions

>`Dynamsoft Service (DynamsoftService.exe, 64bit)`
>
>**v15.2** (build version 1, 5, 2, 0924)
>
>`Dynamsoft Service Manager (DWASManager_15200924.dll, 64bit)`
>
>**v15.2** (build version 15, 2, 0, 0924)
>
>`Dynamic Web TWAIN (dwt_trial_15.2.0.0924.dll, 64bit)`
>
>**v15.2** (build version 15, 2, 0, 0924)
>
>`Dynamsoft PDF Rasterizer (DynamicPdfRx64_10.3.3.0924.dll, 64bit)`
>
>**v15.2** (build version 10, 3, 3, 0924)
>
>`Dynamsoft OCR Basic Engine (DynamicOCRx64_10.0.0.0618.dll, 64bit)`
>
>**v15.2** (build version 10, 0, 0, 0618)
>
>`Dynamsoft Barcode Reader (dbrx64_7.1.0.0924.dll, 64bit)`
>
>**v7.1.0** (build version 7, 1, 0, 0924)
>
>`Dynamsoft Webcam Addon (DynamicWebcamx64_15.0.0.0625.dll, 64bit)`
>
>**v15.2** (build version 15, 0, 0, 0625)
>
>`Dynamsoft Upload Module (UploadModule_1.3.1.0806.dll, 64bit)`
>
>**v15.2** (build version 1, 3, 1, 0806)

## Included Samples

* **`AutoFeeder.html` & `CustomScan.html`**
  * Dynamic Web TWAIN core features
* **`PDFRasterizer.html`**:
  * Using the Rasterizer add-on to convert text-based PDF files
* **`OCRADocument.html`**:
  * Scan, Load images and then perform OCR on them (English)
* **`ReadBarcode.html`**:
  * Scan, Load images and then read barcode off them
* **`ScanOrCapture.html`**:
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
>Alternatively, you can also load the file from the Dynamsoft server or a CDN that holds the library. Note that there are _**different versions**_ and make sure you use the correct one in your application. 
>
> **NOTE: _Loading it from Dynamsoft isn't recommended for your production environment._**

```html
<script src="https://tst.dynamsoft.com/libs/dwt/15.2/dynamsoft.webtwain.initiate.js"></script>
```

```html
<script src="https://unpkg.com/dwt@15.2.0/dist/dynamsoft.webtwain.initiate.js"></script>
```

> The file **`dynamsoft.webtwain.initiate.js`** is the core of the package and must be loaded. Once you have installed the package, it can be found under *node_modules\dwt\dist*. Make sure you write the correct path for it.

### Step 2 Load **`dynamsoft.webtwain.config.js`** into your page:

```html
<script src="node_modules/dwt/dist/dynamsoft.webtwain.config.js"></script>
```

> The file **`dynamsoft.webtwain.config.js`** is used to config the package to best suite your application. You can config things like 
> 1. The initial dimentions of the built-in viewer
> 2. Whether you are using the full version or the trial version
> 3. The **product key** required to activate the package

For example:

```javascript
Dynamsoft.WebTwainEnv.Containers = [{ ContainerId: 'dwtcontrolContainer',  Width:'583px', Height:'513px'}];
Dynamsoft.WebTwainEnv.ProductKey = 'A-Valid-Product-Key';
Dynamsoft.WebTwainEnv.Trial = true;
Dynamsoft.WebTwainEnv.ResourcesPath = 'https://tst.dynamsoft.com/libs/dwt/15.2';
```

***NOTICE*** :

1. If you are using the trial, the ProductKey might be expired or invalid. In this case, you can [request a trial key](https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx) and then replace the one above (Dynamsoft.WebTwainEnv.ProductKey) in **`dynamsoft.webtwain.config.js`**.
2. To make things easier, all the required installers for the SDK(s) are being loaded from Dynamsoft Server at runtime. This is configured in the file **`dynamsoft.webtwain.config.js`** with this line of code

    ```javascript
    Dynamsoft.WebTwainEnv.ResourcesPath = 'https://tst.dynamsoft.com/libs/dwt/15.2';
    ```

    The installers on the Dynamsoft server are of the trial version. Once you have done all your testing and is ready to move on to use a full version, don't forget to do the following

    * Copy the full version files from a full version installation (`C:\Program Files (x86)\Dynamsoft\Dynamic Web TWAIN SDK 15.0\Resources\`), which you'll get with your purchased license, and paste them under `/node_modules/dwt/dist/` or upload these files to your own server. Uploading these files to your server is the recommended way.
    * Make sure you have set the correct full version `ProductKey` and `Trial Status` as well as correct `ResourcesPath` in the file **`dynamsoft.webtwain.config.js`**, which, you just copied over or uploaded to your server.

        ```javascript
        Dynamsoft.WebTwainEnv.ProductKey = '{your full version key}';
        Dynamsoft.WebTwainEnv.Trial = false; //using the full version
        Dynamsoft.WebTwainEnv.ResourcesPath = '{the path to full version resources like node_modules/dwt/dist or a url to the location on your server}';//make sure this is correct
        ```

3. The file **`dynamsoft.webtwain.config.js`** is only used to configure the library and is not necessary because the configurations can be made in your own code too. You can use the file **`dynamsoft.webtwain.min.js`** to replace **`dynamsoft.webtwain.initiate.js`** and **`dynamsoft.webtwain.config.js`**, then add custom configurations in your code like 


    ```html
    <script src="https://unpkg.com/dwt@15.2.0/dist/dynamsoft.webtwain.min.js"></script>
    ```

    ```javascript
	Dynamsoft.WebTwainEnv.AutoLoad = false;
	Dynamsoft.WebTwainEnv.Containers = [{ ContainerId: 'dwtcontrolContainer', Width: '100%', Height: '600px' }];
	Dynamsoft.WebTwainEnv.RegisterEvent('OnWebTwainReady', Dynamsoft_OnReady);
	/**
	 * In order to use the full version, do the following
	 * 1. Change Dynamsoft.WebTwainEnv.Trial to false
	 * 2. Replace A-Valid-Product-Key with a full version key
	 * 3. Change Dynamsoft.WebTwainEnv.ResourcesPath to point to the full version 
	 *    resource files that you obtain after purchasing a key
	 */
	Dynamsoft.WebTwainEnv.Trial = true;
	//Dynamsoft.WebTwainEnv.ProductKey = "A-Valid-Product-Key";
	//Dynamsoft.WebTwainEnv.ResourcesPath = "https://tst.dynamsoft.com/libs/dwt/15.2";
    ```

### Step 3 Write code to use the pacakge to do a simple document scan

> The following code demonstrates the minimum code needed to use the package. For more sophisticated sample or demo, check out the [Sample Gallery](https://www.dynamsoft.com/Downloads/WebTWAIN-Sample-Download.aspx) and our [Github Repositories](https://github.com/dynamsoft-dwt).

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

## Full Sample

```html
<!DOCTYPE html>
<html>
<head>
    <title>Use Dynamic Web TWAIN to Scan</title>
    <script src="https://unpkg.com/dwt@15.2.0/dist/dynamsoft.webtwain.min.js"></script>
</head>
<body>
    <input type="button" value="Scan" onclick="AcquireImage();" />
    <div id="dwtcontrolContainer"></div>

    <script type="text/javascript">
        Dynamsoft.WebTwainEnv.Containers = [{ ContainerId: 'dwtcontrolContainer', Width: 270, Height: 350 }];
        Dynamsoft.WebTwainEnv.ProductKey = 'A-Valid-Product-Key';
        Dynamsoft.WebTwainEnv.Trial = true;
        Dynamsoft.WebTwainEnv.ResourcesPath = 'https://tst.dynamsoft.com/libs/dwt/15.2';
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

![Dynamic Web TWAIN](https://www.dynamsoft.com/assets/img-icon/logo-dwt-white-300x68.png)

Cross-platform cross-browser JavaScript library for web document scanning.


# Overview
[Dynamic Web TWAIN](https://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx) is a TWAIN-based scanning SDK software specifically designed for web applications. With just a few lines of code, you can develop robust applications to scan documents from TWAIN/ICA/SANE-compatible scanners on Windows/macOS/Linux, view and edit the scanned images, then save them to a local/server file system or database.

## Installation
### The main package

```bash
npm install dwt
```

For TypeScript support
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

>Dynamic Web TWAIN: **v13.4.1** (build version 13, 3, 1, 0326)
>
>Dynamsoft PDF Rasterizer: **v13.4.1** (build version 10, 2, 0, 1123)
>
>Dynamsoft OCR Basic Engine: **v9.3** (build version 9, 3, 2, 407)
>
>Dynamsoft Barcode Reader: **v5.2** (build version 5, 2, 0, 0829)
>
>Dynamsoft Camera SDK: **v6.1** (build version 6, 1, 0, 0907)


## Samples
* **AutoFeeder.html & CustomScan.html**: Dynamic Web TWAIN core features
* **PDFRasterizer.html**: Using the Rasterizer add-on to convert text-based PDF files
* **OCRADocument.html**: Scan, Load images and then perform OCR on them (English)
* **ReadBarcode.html**: Scan, Load images and then read barcode off them
* **ScanorCapture.html**: Scan documents from scanners or capture documents from webcams


## Documentation

* [Developer's Guide](https://developer.dynamsoft.com/dwt/guide)
* [Dynamic Web TWAIN & OCR & PDFR API Reference](https://developer.dynamsoft.com/dwt/api-reference)
* [Dynamsoft Barcode Reader API Reference](https://www.dynamsoft.com/help/Barcode-Reader-JS/index.html)
* [Dynamsoft Camera SDK API Reference](https://developer.dynamsoft.com/dws/api-reference)
* [Sample Gallery](https://www.dynamsoft.com/Downloads/WebTWAIN-Sample-Download.aspx)

# Quick Start

## Step 1 Load **dynamsoft.webtwain.initiate.js** into your page:

```html
<script src="{your path}/node_modules/dwt/dist/dynamsoft.webtwain.initiate.js"></script>
```

> Alternatively, you can also load it from Dynamsoft server that holds the libraries. Note that there are different versions and make sure you use the correct one in your application. 
> 
> **NOTE: _This isn't recommended for production._**

```html
<script src="https://www.dynamsoft.com/library/dwt/13.4.1/dynamsoft.webtwain.initiate.js"></script>
```

> The file **dynamsoft.webtwain.initiate.js** is the core of the package and must be loaded. Once you have installed the package, it can be found under *node_modules\dwt\dist*. Make sure you write the correct path for it.
## Step 2 Load **dynamsoft.webtwain.config.js** into your page:
```html
<script src="{your path}/node_modules/dwt/dist/dynamsoft.webtwain.config.js"></script>
```
> The file **dynamsoft.webtwain.config.js** is used to config the package to best suite your application. You can config things like 
> 1. The initial dimentions of the built-in viewer
> 2. Whether or not you will use the full version or trial version
> 3. The **product key** needed to activate the package

For example:
```javascript
Dynamsoft.WebTwainEnv.Containers = [{ ContainerId: 'dwtcontrolContainer',  Width:'583px', Height:'513px'}];
Dynamsoft.WebTwainEnv.ProductKey = 't01133AEAAL071vQIfKdEnugH4YPU50xTm8yJC0wG6iFWc4vXw69o3GX7datutEKwTT7eeGHu9b46lUb/6uWqjh4HYCSM0ZIdE19MYjW+FGDjzmEU9Y38MLFvbOOf+Xy5Gl3ZeE03wB6QB2CkczJhA74dXLo=';
Dynamsoft.WebTwainEnv.Trial = true;
```

***NOTICE*** : If you are using the trial, the ProductKey might be expired or invalid. In this case, you can [request a trial key](https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx) and then replace the one above (Dynamsoft.WebTwainEnv.ProductKey).

## Step 3 Write code to use the pacakge to do a simple document scan

> The following code demonstrates the minimum code needed to use the package. For more sophisticated sample or demo, check out the [Sample Gallery](https://www.dynamsoft.com/Downloads/WebTWAIN-Sample-Download.aspx)

```html
<input type="button" value="Scan" onclick="AcquireImage();" />

<!-- dwtcontrolContainer is the default div id for Dynamic Web TWAIN control.
If you need to rename the id, you should also change the id in the dynamsoft.webtwain.config.js accordingly. -->
<div id="dwtcontrolContainer"></div>

<script type="text/javascript">
    var DWObject;
    function Dynamsoft_OnReady() {
        DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
    }
    function AcquireImage() {
        if (DWObject) {
            DWObject.SelectSource();
            DWObject.CloseSource();
            DWObject.OpenSource();
            DWObject.IfDisableSourceAfterAcquire = true;
            DWObject.AcquireImage();
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
    <script src="https://www.dynamsoft.com/library/dwt/13.4.1/dynamsoft.webtwain.initiate.js"></script>
    <script src="{your path}/node_modules/dwt/dist/dynamsoft.webtwain.config.js"></script>
</head>
<body>
    <input type="button" value="Scan" onclick="AcquireImage();" />
    <div id="dwtcontrolContainer"></div>

    <script type="text/javascript">
        var DWObject;
        function Dynamsoft_OnReady() {
            DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
        }
        function AcquireImage() {
            if (DWObject) {
                DWObject.SelectSource();
                DWObject.CloseSource();
                DWObject.OpenSource();
                DWObject.IfDisableSourceAfterAcquire = true;
                DWObject.AcquireImage();
            }
        }
    </script>
</body>
</html>
```

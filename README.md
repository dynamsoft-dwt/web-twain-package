# ![Dynamic Web TWAIN](https://www.dynamsoft.com/assets/img-icon/logo-dwt-white-300x68.png)

Cross-platform cross-browser JavaScript library for web document scanning.

# Overview

[Dynamic Web TWAIN](https://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx) is a TWAIN-based scanning SDK software specifically designed for web applications. With just a few lines of code, you can develop robust applications to scan documents from TWAIN/ICA/SANE-compatible scanners on Windows/macOS/Linux, view and edit the scanned images, then save them to a local/server file system or database.

## Getting Started

* The package
  ```bash
  $ npm install dwt@15.1.1
  ```

* Types

  ```bash
  $ npm install @types/dwt
  ```

### Step 1 Include the library

* Use a relative path

  ```html
  <script src="node_modules/dwt/dist/dynamsoft.webtwain.min.js"></script>
  ```

  > Change the path if necessary

* Use a CDN

  ```html
  <script src="https://unpkg.com/dwt@15.1.1/dist/dynamsoft.webtwain.min.js"></script>
  ```

  Or
  
  ```html
  <script src="https://cdn.jsdelivr.net/npm/dwt@15.1.1/dist/dynamsoft.webtwain.min.js"></script>
  ```
* Use Dynamsoft Server

  ```html
  <script src="https://tst.dynamsoft.com/libs/dwt/15.1/dynamsoft.webtwain.min.js"></script>
  ```


### Step 2 Configure the library

The configuration is optional. If left unchanged, the default will be used.

```javascript
Dynamsoft.WebTwainEnv.Containers = [{ ContainerId: 'dwtcontrolContainer',  Width:'583px', Height:'513px'}];
Dynamsoft.WebTwainEnv.ProductKey = 'Your-Product-Key-Goes-Here';
Dynamsoft.WebTwainEnv.Trial = true;
Dynamsoft.WebTwainEnv.ResourcesPath = 'https://tst.dynamsoft.com/libs/dwt/15.1';
```

* The library requires a valid key to work. You can [Request a Trial Key](https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx) or [Purchase a Full Key](https://www.dynamsoft.com/Secure/imaging-web-application-buyit.aspx#DynamicWebTWAIN). Don't forget to change `Trial` accordingly.

* The library also requires other resource files to work which it will try to load from `ResourcesPath`. In the code above, the files are hosted at `'https://tst.dynamsoft.com/libs/dwt/15.1'` but it's only the trial version. To use the full version,  **deploy the full-version files on your server** and change `ResourcesPath` accordingly.

### Step 3 Use the library

The following code demonstrates the minimum code needed to use the library. For more sophisticated sample or demo, check out the [Sample Gallery](https://www.dynamsoft.com/Downloads/WebTWAIN-Sample-Download.aspx)

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

### Full Sample

```html
<!DOCTYPE html>
<html>
<head>
    <title>Use Dynamic Web TWAIN to Scan</title>
    <script src="https://unpkg.com/dwt@15.1.1/dist/dynamsoft.webtwain.min.js"></script>
</head>
<body>
    <input type="button" value="Scan" onclick="AcquireImage();" />
    <div id="dwtcontrolContainer"></div>

    <script type="text/javascript">
        Dynamsoft.WebTwainEnv.Containers = [{ ContainerId: 'dwtcontrolContainer', Width: 270, Height: 350 }];
        Dynamsoft.WebTwainEnv.ProductKey = 'Your-Product-Key-Goes-Here';
        Dynamsoft.WebTwainEnv.Trial = true;
        Dynamsoft.WebTwainEnv.ResourcesPath = 'https://tst.dynamsoft.com/libs/dwt/15.1';
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

## General Information

### Features

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
* Webcam Capturing, Barcode reading and OCR with optional addons.

### Versions

>`Dynamsoft Service (DynamsoftService.exe, 64bit)`
>
>**v15.1** (build version 1, 5, 1, 0806)
>
>`Dynamsoft Service Manager (DWASManager_15100806.dll, 64bit)`
>
>**v15.1** (build version 15, 1, 0, 0806)
>
>`Dynamic Web TWAIN (dwt_trial_15.1.0.0806.dll, 64bit)`
>
>**v15.1** (build version 15, 1, 0, 0806)
>
>`Dynamsoft PDF Rasterizer (DynamicPdfRx64_10.3.2.0806.dll, 64bit)`
>
>**v15.1** (build version 10, 3, 2, 0806)
>
>`Dynamsoft OCR Basic Engine (DynamicOCRx64_10.0.0.0618.dll, 64bit)`
>
>**v15.1** (build version 10, 0, 0, 0618)
>
>`Dynamsoft Barcode Reader (dbrx64_7.0.0.0806.dll, 64bit)`
>
>**v7.0.0** (build version 7, 0, 0, 0806)
>
>`Dynamsoft Webcam Addon (DynamicWebcamx64_15.0.0.0625.dll, 64bit)`
>
>**v15.1** (build version 15, 0, 0, 0625)
>
>`Dynamsoft Upload Module (UploadModule_1.3.1.0806.dll, 64bit)`
>
>**v15.1** (build version 1, 3, 1, 0806)

### Included Samples

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

### Documentation

* [Developer's Guide](https://www.dynamsoft.com/docs/dwt/)
* [API Reference](https://www.dynamsoft.com/docs/dwt/API/API-Index.html)
* [Sample Gallery](https://www.dynamsoft.com/Downloads/WebTWAIN-Sample-Download.aspx)


### Contact Author

[Dynamsoft Corporation](https://www.dynamsoft.com/Company/Contact.aspx)
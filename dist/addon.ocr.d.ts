/**
 * @class
 */
interface OCR {
    /**
     * Download and install pdf rasterizer add-on on the local system.
     * @method Dynamsoft.WebTwain#Download
     * @param {string} remoteFile specifies the value of which frame to get.
     * @param {function} optionalAsyncSuccessFunc optional.
     * The function to call when the download succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional.
     * The function to call when the download fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    Download(remoteFile: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void): boolean;
}

interface WebTwainAddon {
    OCR: OCR;
}

interface WebTwain {
	Addon: WebTwainAddon;
}

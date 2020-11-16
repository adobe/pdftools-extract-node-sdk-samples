# Samples for the Extract PDF Node.js SDK

This sample project helps you get started with the PDF Tools Extract Node.js SDK.

The sample JS scripts illustrate how to perform PDF-related actions (extracting content of PDF in user friendly structured format) using 
the SDK.

## Prerequisites
The sample application has the following requirements:
* Node.js : Version 10.13 or above. Node installation instructions can be found 
[here](https://nodejs.org/en/download/).


## Authentication Setup

The credentials file and corresponding private key file for the samples is ```pdftools-api-credentials.json``` and ```private.key``` 
respectively. Before the samples can be run, replace both the files with the ones present in the zip file received via [Beta Program Access](https://opensource.adobe.com/pdftools-sdk-docs/beta/extract/#beta-program-access) workflow.

The SDK also supports providing the authentication credentials at runtime, without storing them in a config file. Please
refer this [section](#extract-text-elements-by-providing-in-memory-authentication-credentials) to 
know more.

## Build with npm

Run the following command to build the project:
```$xslt
npm install
```

Note that the PDF Tools Extract SDK is listed as a dependency in the package.json and will be downloaded automatically.

## A Note on Logging
For logging, this SDK uses the [log4js API](https://www.npmjs.com/package/log4js) . 
Upon running, the SDK searches for a file ```config/pdftools-sdk-log4js-config.json``` in the working directory, and reads the
logging properties from there. If no configuration file is provided, default logging, i.e. logging INFO logs to the console is enabled. The clients can change the logging settings as per their needs.

## Structured Information Output Format
The output of SDK extract operation is Zip package. The Zip package consists of following:

* The structuredData.json file with the extracted content & PDF element structure. See the [JSON schema](https://opensource.adobe.com/pdftools-sdk-docs/release/shared/extractJSONOutputSchema.json). 
* A renditions folder(s) containing renditions for each element type selected as input. 
  The folder name is either “tables” or “figures” depending on your specified element type. 
  Each folder contains renditions with filenames that correspond to the element information in the JSON file. 
  
## Running the samples

The following sub-sections describe how to run the samples. Prior to running the samples, check that the configuration 
file is set up as described above and that the project has been built.

The samples code is available under the ```src``` folder. Test 
files used by the samples can be found in the ```resources``` folder. When executed, all samples create an ```output``` 
child folder under the project root directory to store their results.

### Extract Elements Information and Renditions from a PDF File
These samples illustrate how to extract PDF elements from PDF. Refer to the documentation of [ExtractPDFOperation](https://opensource.adobe.com/pdftools-extract-node-sdk-samples/apidocs/ExtractPdfOperation.html) to see the list of inputs.

#### Extract Text Elements

The sample script ```extract-text-info-from-pdf.js``` extracts text elements from PDF Document.

```$xslt
node src/extractpdf/extract-text-info-from-pdf.js
```

#### Extract Text, Table Elements

The sample script ```extract-text-table-info-from-pdf.js``` extracts text, table elements from PDF Document. 

```$xslt
node src/extractpdf/extract-text-table-info-from-pdf.js
```
#### Extract Text, Table Elements with Renditions of Table Elements

The sample script ```extract-text-table-info-with-tables-renditions-from-pdf.js``` extracts text, table elements along with table renditions
from PDF Document. Note that the output is a zip containing the structured information along with renditions as described
in [section](#structured-information-output-format).

```$xslt
node src/extractpdf/extract-text-table-info-with-tables-renditions-from-pdf.js
```
#### Extract Text, Table Elements with Renditions of Figure, Table Elements

The sample script ```extract-text-table-info-with-figures-tables-renditions-from-pdf.js``` extracts text, table elements along with figure 
and table element's renditions from PDF Document. Note that the output is a zip containing the structured information 
along with renditions as described in [section](#structured-information-output-format).

```$xslt
node src/extractpdf/extract-text-table-info-with-figures-tables-renditions-from-pdf.js
```

#### Extract Text Elements (By providing in-memory Authentication credentials)

The sample script ```extract-text-info-from-pdf-with-inmem-auth-cred.js``` extracts text elements from PDF Document. 
This sample highlights how to provide in-memory auth credentials for performing an operation. 
This enables the clients to fetch the credentials from a secret server during runtime, instead of storing them in a file.

```$xslt
node src/extractpdf/extract-text-info-from-pdf-with-inmem-auth-cred.js
```
### Contributing

Contributions are welcome! Read the [Contributing Guide](.github/CONTRIBUTING.md) for more information.

### Licensing

This project is licensed under the MIT License. See [LICENSE](LICENSE.md) for more information.

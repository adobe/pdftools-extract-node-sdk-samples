/*
 * Copyright 2019 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying
 * it. If you have received this file from a source other than Adobe,
 * then your use, modification, or distribution of it requires the prior
 * written permission of Adobe.
 */

const ExtractPdfSdk = require('@adobe/pdftools-extract-node-sdk');
/**
 * This sample illustrates how to extract Text Information from PDF with in memory auth credentials.
 * <p>
 * Refer to README.md for instructions on how to run the samples & understand output zip file.
 */
try {

	/*
      Initial setup, create credentials instance.
      Replace the values of CLIENT_ID, CLIENT_SECRET, ORGANIZATION_ID and ACCOUNT_ID with their corresponding values
      present in the pdftools-api-credentials.json file and PRIVATE_KEY_FILE_CONTENTS with contents of private.key file
      within the zip file received from Adobe.
    */
	const credentials =  ExtractPdfSdk.Credentials
		.serviceAccountCredentialsBuilder()
		.withClientId("CLIENT_ID")
		.withClientSecret("CLIENT_SECRET")
		.withPrivateKey("PRIVATE_KEY_FILE_CONTENT")
		.withOrganizationId("ORGANISATION_ID")
		.withAccountId("ACCOUNT_ID")
		.build();

	//Create a clientContext using credentials and create a new operation instance.
	const clientContext = ExtractPdfSdk.ExecutionContext
			.create(credentials),
		extractPDFOperation = ExtractPdfSdk.ExtractPDF.Operation
			.createNew(),

		// Set operation input from a source file.
		input = ExtractPdfSdk.FileRef.createFromLocalFile(
			'resources/extractPdfInput.pdf',
			ExtractPdfSdk.ExtractPDF.SupportedSourceFormat.pdf
		);

	extractPDFOperation.setInput(input);

	extractPDFOperation.addElementToExtract(ExtractPdfSdk.PDFElementType.TEXT);

	// Execute the operation
	extractPDFOperation.execute(clientContext)
		.then(result => result.saveAsFile('output/extractTextInfoFromPdfWithInMemoryAuthCred.zip'))
		.catch(err => console.log(err));
} catch (err) {
	console.log("Exception encountered while executing operation", err);
}

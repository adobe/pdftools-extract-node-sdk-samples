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

const ExtractPdfSdk = require('@dcloud/pdftools-extract-node-sdk');

/**
 * This sample illustrates how to extract Text & Table Elements Information from PDF.
 * <p>
 * Refer to README.md for instructions on how to run the samples & understand output zip file.
 */

try {

	// Initial setup, create credentials instance.
	const credentials =  ExtractPdfSdk.Credentials
		.serviceAccountCredentialsBuilder()
		.fromFile(`pdftools-api-credentials.json`)
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
	extractPDFOperation.addElementToExtract(ExtractPdfSdk.PDFElementType.TABLES);

	// Execute the operation
	extractPDFOperation.execute(clientContext)
		.then(result => result.saveAsFile('output/extractTextTableInfoFromPdf.zip'))
		.catch(err => console.log(err));
} catch (err) {
	console.log("Exception encountered while executing operation", err);
}

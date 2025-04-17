/* global location, document */

function isTestEnv() {
	const hostname = location.hostname.toLowerCase();
	return hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('192.168.');
}

function embedScript(url) {
	document.write(`<script src="${url}"></script>`);
}

function embedStylesheet(url) {
	document.write(`<link href="${url}" rel="stylesheet">`);
}

const baseUrl = isTestEnv() ? '../designer' : '//cdn.jsdelivr.net/npm/sequential-workflow-designer@0.28.0';

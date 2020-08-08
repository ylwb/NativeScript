import { cssTreeParse } from '@nativescript/core/css/css-tree-parser';
import { parse as reworkCssParse } from '@nativescript/core/css';
import { assert } from 'chai';

describe('css-tree parser compatible with rework ', () => {
	it('basic selector', () => {
		const testCase = '.test { color: red; }';
		const reworkAST = reworkCssParse(testCase, { source: 'file.css' });
		const cssTreeAST = cssTreeParse(testCase, 'file.css');

		assert.deepEqual(cssTreeAST, reworkAST);
	});

	it('empty rule', () => {
		const css = `.test {
            color: red;
            ;
        }`;
		const reworkAST = reworkCssParse(css, { source: 'file.css' });
		const cssTreeAST = cssTreeParse(css, 'file.css');
		assert.deepEqual(cssTreeAST, reworkAST);
	});

	it('@keyframes', () => {
		const testCase = '.test { animation-name: test; } @keyframes test { from { background-color: red; } to { background-color: blue; } } .test { color: red; }';
		const reworkAST = reworkCssParse(testCase, { source: 'file.css' });
		const cssTreeAST = cssTreeParse(testCase, 'file.css');

		assert.deepEqual(cssTreeAST, reworkAST);
	});

	it('@media', () => {
		const testCase = '@media screen and (max-width: 600px) { body { background-color: olive; } } .test { color: red; }';
		const reworkAST = reworkCssParse(testCase, { source: 'file.css' });
		const cssTreeAST = cssTreeParse(testCase, 'file.css');

		assert.deepEqual(cssTreeAST, reworkAST);
	});

	it('@supports', () => {
		const testCase = '@supports not (display: grid) { div { float: right; } } .test { color: red; }';
		const reworkAST = reworkCssParse(testCase, { source: 'file.css' });
		const cssTreeAST = cssTreeParse(testCase, 'file.css');

		assert.deepEqual(cssTreeAST, reworkAST);
	});

	it('@page', () => {
		const testCase = '@page :first { margin: 2cm; } .test { color: red; }';
		const reworkAST = reworkCssParse(testCase, { source: 'file.css' });
		const cssTreeAST = cssTreeParse(testCase, 'file.css');

		assert.deepEqual(cssTreeAST, reworkAST);
	});

	it('@document', () => {
		const testCase = '@document url("https://www.example.com/") { h1 { color: green; } } .test { color: red; }';
		const reworkAST = reworkCssParse(testCase, { source: 'file.css' });
		const cssTreeAST = cssTreeParse(testCase, 'file.css');

		assert.deepEqual(cssTreeAST, reworkAST);
	});

	it('@font-face', () => {
		const testCase = '@font-face { font-family: "Open Sans"; src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"), url("/fonts/OpenSans-Regular-webfont.woff") format("woff"); } .test { color: red; }';
		const reworkAST = reworkCssParse(testCase, { source: 'file.css' });
		const cssTreeAST = cssTreeParse(testCase, 'file.css');

		assert.deepEqual(cssTreeAST, reworkAST);
	});

	it('@import', () => {
		const testCase = '@import url(\'landscape.css\') screen and (orientation:landscape); @import url("fineprint.css") print; .test { color: red; }';
		const reworkAST = reworkCssParse(testCase, { source: 'file.css' });
		const cssTreeAST = cssTreeParse(testCase, 'file.css');

		assert.deepEqual(cssTreeAST, reworkAST);
	});

	it('@charset', () => {
		const testCase = '@charset "utf-8"; .test { color: red; }';
		const reworkAST = reworkCssParse(testCase, { source: 'file.css' });
		const cssTreeAST = cssTreeParse(testCase, 'file.css');

		assert.deepEqual(cssTreeAST, reworkAST);
	});

	it('@namespace', () => {
		const testCase = '@namespace svg url(http://www.w3.org/2000/svg); .test { color: red; }';
		const reworkAST = reworkCssParse(testCase, { source: 'file.css' });
		const cssTreeAST = cssTreeParse(testCase, 'file.css');

		assert.deepEqual(cssTreeAST, reworkAST);
	});
});

const fs = require('fs');
const ExcelJS = require('exceljs');

// === CONFIG ===
const JSON_FILE = './results.json';
const EXCEL_FILE = './Test.xlsx';

const TEST_NAME_COLUMN = 13; // Column M
const RESULT_COLUMN = 12;    // Column L (Sonant QA)

// === LOAD JSON ===
const data = JSON.parse(fs.readFileSync(JSON_FILE, 'utf-8'));

// === EXTRACT RESULTS ===
const resultsMap = new Map();

for (const suite of data.suites || []) {
  for (const spec of suite.specs || []) {

    const testName = normalizeText(spec.title);

    for (const test of spec.tests || []) {
      const lastResult = test.results[test.results.length - 1];
      const status = normalizeStatus(lastResult?.status);

      resultsMap.set(testName, status);
    }
  }
}

// === UPDATE EXCEL ===
async function updateExcel() {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(EXCEL_FILE);

  let matched = 0;

  workbook.eachSheet((worksheet) => {

    worksheet.eachRow((row) => {
      const nameCell = row.getCell(TEST_NAME_COLUMN); // M
      const resultCell = row.getCell(RESULT_COLUMN);  // L

      const excelName = normalizeText(nameCell.value);

      // ALWAYS clear first (overwrite behavior)
      resultCell.value = '';

      if (!excelName) return;

      let result = resultsMap.get(excelName);

      // optional fuzzy match
      if (!result) {
        for (const [key, value] of resultsMap.entries()) {
          if (key.includes(excelName) || excelName.includes(key)) {
            result = value;
            break;
          }
        }
      }

      if (result) {
        resultCell.value = result;
        matched++;
      }
    });

  });

  await workbook.xlsx.writeFile(EXCEL_FILE);

  console.log(`Matched: ${matched}`);
  console.log(`Column L fully overwritten`);
}

// === HELPERS ===
function normalizeStatus(status) {
  switch (status) {
    case 'passed': return 'Pass';
    case 'failed': return 'Fail';
    case 'skipped': return 'Skipped';
    case 'timedOut': return 'Timeout';
    default: return status || 'Unknown';
  }
}

function normalizeText(value) {
  return (value || '')
    .toString()
    .trim()
    .toLowerCase();
}

// === RUN ===
updateExcel();
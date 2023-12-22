function multiplyMatrices() {
    const matrixA = parseMatrix(document.getElementById("matrixA").value);
    console.log(matrixA);
    const matrixB = parseMatrix(document.getElementById("matrixB").value);
    console.log(matrixB);

    if (!isValid(matrixA) || !isValid(matrixB) || !canMultiply(matrixA, matrixB)) {
        document.getElementById("result").innerHTML = "Invalid matrices for multiplication.";
        return;
    }

    const resultMatrix = multiply(matrixA, matrixB);
    displayResult(resultMatrix);
}

function parseMatrix(matrixString) {
    return matrixString
        .split('\n')
        .map(row => row.split(/\s+/).map(Number))
        .filter(row => row.length > 0);
}

function isValid(matrix) {
    const rowLengths = matrix.map(row => row.length);
    return rowLengths.every(len => len === rowLengths[0]) && rowLengths.length > 0;
}

function canMultiply(matrixA, matrixB) {
    return matrixA[0].length === matrixB.length;
}

function multiply(matrixA, matrixB) {
    const resultMatrix = [];

    for (let i = 0; i < matrixA.length; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < matrixB[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrixA[0].length; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            resultMatrix[i][j] = sum;
        }
    }

    return resultMatrix;
}

function displayResult(resultMatrix) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>Result:</h2>";

    const table = document.createElement("table");

    for (const row of resultMatrix) {
        const tr = document.createElement("tr");
        for (const cell of row) {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    resultDiv.appendChild(table);
}
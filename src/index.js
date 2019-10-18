module.exports = function solveSudoku(matrix) {
	function possibleValue(number, i, j, matrix) {
		const [iCube, jCube] = [i - i % 3, j - j % 3];
		return !matrix.some((e, index) => e[j] === number || matrix[i][index] === number || matrix[iCube + (index / 3) | 0][jCube + index % 3] === number);
	}
	
	function solveMatrix(matrix) {
		for (let i = 0; i < 9; i += 1) {
			for (let j = 0; j < 9; j += 1) {
				if (matrix[i][j] === 0) {
					for (let number = 1; number <= 9; number += 1) {
						if (!possibleValue(number, i, j, matrix)) {   
							continue;
						}
						matrix[i][j] = number;
						if (solveMatrix(matrix)) {
							return true;
						}
						matrix[i][j] = 0;
					}
					return false;
				}
			}
		}
		return true;
	}

	solveMatrix(matrix);
	
	return matrix;
}

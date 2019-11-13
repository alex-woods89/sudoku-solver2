/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var Sudoku = (function () {
    function Sudoku(board) {
        if (this.board === undefined)
            this.board = null;
        this.board = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
            return 0;
        }
        else {
            var array = [];
            for (var i = 0; i < dims[0]; i++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([Sudoku.size, Sudoku.size]);
        for (var i = 0; i < Sudoku.size; i++) {
            {
                for (var j = 0; j < Sudoku.size; j++) {
                    {
                        this.board[i][j] = board[i][j];
                    }
                    ;
                }
            }
            ;
        }
    }
    Sudoku.GRID_TO_SOLVE_$LI$ = function () { if (Sudoku.GRID_TO_SOLVE == null)
        Sudoku.GRID_TO_SOLVE = [[1, 0, 0, 0, 0, 6, 0, 3, 2], [2, 0, 4, 0, 0, 0, 0, 0, 0], [0, 0, 6, 2, 0, 0, 0, 0, 5], [0, 0, 2, 5, 0, 1, 0, 8, 0], [0, 3, 0, 0, 4, 0, 0, 0, 0], [5, 0, 0, 8, 2, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [7, 0, 0, 1, 0, 0, 4, 2, 0], [0, 0, 0, 0, 7, 0, 0, 6, 1]]; return Sudoku.GRID_TO_SOLVE; };
    ;
    /*private*/ Sudoku.prototype.isInRow = function (row, number) {
        for (var i = 0; i < Sudoku.size; i++) {
            if (this.board[row][i] === number)
                return true;
            ;
        }
        return false;
    };
    /*private*/ Sudoku.prototype.isInCol = function (col, number) {
        for (var i = 0; i < Sudoku.size; i++) {
            if (this.board[i][col] === number)
                return true;
            ;
        }
        return false;
    };
    /*private*/ Sudoku.prototype.isInBox = function (row, col, number) {
        var r = row - row % 3;
        var c = col - col % 3;
        for (var i = r; i < r + 3; i++) {
            for (var j = c; j < c + 3; j++) {
                if (this.board[i][j] === number)
                    return true;
                ;
            }
            ;
        }
        return false;
    };
    /*private*/ Sudoku.prototype.isOk = function (row, col, number) {
        return !this.isInRow(row, number) && !this.isInCol(col, number) && !this.isInBox(row, col, number);
    };
    Sudoku.prototype.solve = function () {
        for (var row = 0; row < Sudoku.size; row++) {
            {
                for (var col = 0; col < Sudoku.size; col++) {
                    {
                        if (this.board[row][col] === Sudoku.empty) {
                            for (var number = 1; number <= Sudoku.size; number++) {
                                {
                                    if (this.isOk(row, col, number)) {
                                        this.board[row][col] = number;
                                        if (this.solve()) {
                                            return true;
                                        }
                                        else {
                                            this.board[row][col] = Sudoku.empty;
                                        }
                                    }
                                }
                                ;
                            }
                            return false;
                        }
                    }
                    ;
                }
            }
            ;
        }
        return true;
    };
    Sudoku.prototype.display = function () {
        for (var i = 0; i < Sudoku.size; i++) {
            {
                for (var j = 0; j < Sudoku.size; j++) {
                    {
                        console.info(" " + this.board[i][j]);
                    }
                    ;
                }
                console.info();
            }
            ;
        }
        console.info();
    };
    Sudoku.main = function (args) {
        var sudoku = new Sudoku(Sudoku.GRID_TO_SOLVE_$LI$());
        console.info("Sudoku grid to solve");
        sudoku.display();
        if (sudoku.solve()) {
            console.info("Sudoku Grid solved");
            sudoku.display();
        }
        else {
            console.info("Unsolvable");
        }
    };
    return Sudoku;
}());
Sudoku.empty = 0;
Sudoku.size = 9;
Sudoku["__class"] = "Sudoku";
Sudoku.GRID_TO_SOLVE_$LI$();
Sudoku.main(null);

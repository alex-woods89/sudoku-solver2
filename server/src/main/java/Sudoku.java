
public class Sudoku {

    public static int[][] GRID_TO_SOLVE = {
            {1,0,0,0,0,6,0,3,2},
            {2,0,4,0,0,0,0,0,0},
            {0,0,6,2,0,0,0,0,5},
            {0,0,2,5,0,1,0,8,0},
            {0,3,0,0,4,0,0,0,0},
            {5,0,0,8,2,0,0,0,0},
            {0,0,0,0,0,0,0,0,0},
            {7,0,0,1,0,0,4,2,0},
            {0,0,0,0,7,0,0,6,1},
    };

    private int[][] board;
    public static final int empty = 0;
    public static final int size = 9;

    public Sudoku(int[][] board) {
        this.board = new int[size][size];

        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                this.board[i][j] = board[i][j];
            }
        }
    }

    private boolean isInRow(int row, int number) {
        for (int i = 0; i < size; i++)
            if (board[row][i] == number)
                return true;

        return false;
    }

    private boolean isInCol(int col, int number) {
        for (int i = 0; i < size; i++)
            if (board[i][col] == number)
                return true;

        return false;
    }

    private boolean isInBox(int row, int col, int number) {
        int r = row - row % 3;
        int c = col - col % 3;

        for (int i = r; i < r + 3; i++)
            for (int j = c; j < c + 3; j++)
                if (board[i][j] == number)
                    return true;

        return false;
    }

    private boolean isOk(int row, int col, int number) {
        return !isInRow(row, number)  &&  !isInCol(col, number)  &&  !isInBox(row, col, number);
    }

    public boolean solve() {
        for (int row = 0; row < size; row++) {
            for (int col = 0; col < size; col++) {
                if (board[row][col] == empty) {
                    for (int number = 1; number <= size; number++) {
                        if (isOk(row, col, number)) {
                            board[row][col] = number;

                            if (solve()) {
                                return true;
                            } else {
                                board[row][col] = empty;
                            }
                        }
                    }

                    return false;
                }
            }
        }

        return true;
    }

    public void display() {
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                System.out.print(" " + board[i][j]);
            }

            System.out.println();
        }

        System.out.println();
    }

    public static void main(String[] args) {
        Sudoku sudoku = new Sudoku(GRID_TO_SOLVE);
        System.out.println("Sudoku grid to solve");
        sudoku.display();

        if (sudoku.solve()) {
            System.out.println("Sudoku Grid solved");
            sudoku.display();
        } else {
            System.out.println("Unsolvable");
        }
    }

}

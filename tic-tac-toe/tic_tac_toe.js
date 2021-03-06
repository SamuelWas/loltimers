// Evitando Hoisting utilizando const
const tic_tac_toe = {
    board: ['','','','','','','','',''],
    symbols: {
        options: ['X', 'O'],
        turn_index: 0,
        change: function() {
            this.turn_index = this.turn_index === 0 ? 1 : 0;
        }
    },
    container_element: null,
    gameover: false,
    winning_sequences: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],
    init: function(container) {
        this.container_element = document.querySelector('.game');
    },

    check_winning_sequences(symbol) {
        for(i in this.winning_sequences) {
            if( this.board[this.winning_sequences[i][0]] === symbol &&
                this.board[this.winning_sequences[i][1]] === symbol &&
                this.board[this.winning_sequences[i][2]] === symbol ) {
                    this.gameover = true;
            }
        }
    },

    start() {
        this.board.fill('');
        this.draw();
        this.gameover = false;
    },

    make_play(position) {
        if(this.gameover) return false;
        if(this.board[position] === '') {
            this.board[position] = this.symbols.options[this.symbols.turn_index]
            this.draw();

            this.check_winning_sequences(this.symbols.options[this.symbols.turn_index]);

            this.symbols.change();
            return true
        }
    },


    draw: function() {
        var content = '';
        for(i in this.board) {
            content += '<div onclick=tic_tac_toe.make_play(' + i + ')>' + this.board[i] + '</div>';
        }
        this.container_element.innerHTML = content;
    }
}
new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameHasStarted: false,
    showWinPanel: false,
    winner: null,
    logs: [],
  },
  methods: {
    startGame() {
      console.log('%cStarting New Game', 'color:#0084ff;');

      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameHasStarted = true;
      this.logs = [];
      this.winner = null;
    },
    attack(_, playerAttack, monsterAttack) {
      if (playerAttack === void 0) playerAttack = 8;
      if (monsterAttack === void 0) monsterAttack = 12;

      this._doMonsterAttack(monsterAttack);

      const player = this._generateAttack(playerAttack);
      this.monsterHealth -= player;

      this._logEvent({
        msg: `Player attacked and did "${player}" damage`,
        player: 'user',
      });

      this._checkWinnerStatus();
    },
    attackSpecial() {
      this.attack(null, 16, 12);
    },
    heal() {
      this._doMonsterAttack(6);

      const healingFactor = this._generateHealing(10);

      this.playerHealth += healingFactor;

      this._logEvent({
        msg: `Player healed and gained "${healingFactor}" hit points`,
        player: 'user',
      });

      this._checkWinnerStatus();
    },
    reset() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameHasStarted = false;
      this.logs = [];
      this.winner = null;
      this.showWinPanel = false;
    },
    replay() {
      this.showWinPanel = false;
      this.startGame();
    },
    _doMonsterAttack(attackFactor) {
      if (attackFactor === void 0) attackFactor = 8;
      const monster = this._generateAttack(attackFactor);
      this.playerHealth -= monster;

      this._logEvent({
        msg: `Monster attacked and did "${monster}" damage`,
        player: 'monster',
      });
    },
    _checkWinnerStatus() {
      if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
        this._gameCompleted('draw');
      } else if (this.playerHealth <= 0) {
        this._gameCompleted('monster');
      } else if (this.monsterHealth <= 0) {
        this._gameCompleted('user');
      } else {
        if (this.playerHealth > 100) this.playerHealth = 100;
        if (this.monsterHealth > 100) this.monsterHealth = 100;
      }
    },
    _gameCompleted(winner) {
      switch (winner) {
        case 'user':
          this.winner = 'You';
          break;

        case 'monster':
          this.winner = 'The monster';
          break;

        default:
          this.winner = 'Nobody';
          break;
      }

      this.showWinPanel = true;
    },
    _generateAttack(factor) {
      if (factor === void 0) factor = 6;
      return Math.floor(Math.random() * factor);
    },
    _generateHealing(factor) {
      if (factor === void 0) factor = 5;
      return Math.floor(Math.random() * factor);
    },
    _logEvent(...newLogs) {
      for (const log of newLogs) {
        this.logs.unshift({
          id: Math.floor(Math.random() * Date.now()).toString(36),
          message: log.msg,
          useClass: `log-for-${log.player}`,
        });
      }
    },
  },
});

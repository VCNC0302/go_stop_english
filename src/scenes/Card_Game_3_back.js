// You can write more code here

/* START OF COMPILED CODE */

class Card_Game_3_back extends Phaser.Scene {

	constructor() {
		super("Card_Game_3_back");

		/* START-USER-CTR-CODE */
    // Write your code here.
    this.playTime = 270;
    this.resources = this.playTime;
    this.timer = 0;
    this.clickCards = [];
    this.answerCount = 0;
    this.gameNum = 3;
    this.point = 0;
    this.complete = false;
    this.cardSize = {
      w: 195,
      h: 281,
    };
    this.isFlip = false;
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// card_black
		const card_black = this.add.image(189, 648, "card_black");
		card_black.scaleX = 1.4973695751198903;
		card_black.scaleY = 1.4973695751198903;

		// txt_level
		const txt_level = this.add.text(189, 286, "", {});
		txt_level.setOrigin(0.5, 0.5);
		txt_level.text = "Level 1";
		txt_level.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "50px" });

		// txt_day
		const txt_day = this.add.text(189, 386, "", {});
		txt_day.setOrigin(0.5, 0.5);
		txt_day.text = "Day 3";
		txt_day.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "50px" });

		// btn_back
		const btn_back = this.add.image(143, 108, "back");
		btn_back.scaleX = 1.2080753993697175;
		btn_back.scaleY = 1.2080753993697175;

		// ellipse_2
		const ellipse_2 = this.add.ellipse(147, 107, 128, 128);
		ellipse_2.scaleX = 0.9953617173125286;
		ellipse_2.scaleY = 0.9953617173125286;
		ellipse_2.isStroked = true;
		ellipse_2.strokeColor = 0;
		ellipse_2.lineWidth = 10;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(1120, 120, 600, 100);
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 0;
		rectangle_1.lineWidth = 5;

		// txt_time
		const txt_time = this.add.text(1120, 128, "", {});
		txt_time.setOrigin(0.5, 0.5);
		txt_time.text = "00 : 00";
		txt_time.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "50px" });

		// card_6_2
		const card_6_2 = this.add.image(1407, 726, "_MISSING");

		// card_4_1
		const card_4_1 = this.add.image(1043, 466, "_MISSING");

		// card_1_1
		const card_1_1 = this.add.image(497, 466, "_MISSING");

		// card_2_2
		const card_2_2 = this.add.image(679, 726, "_MISSING");

		// card_5_1
		const card_5_1 = this.add.image(1225, 466, "_MISSING");

		// card_5_2
		const card_5_2 = this.add.image(1225, 726, "_MISSING");

		// card_4_2
		const card_4_2 = this.add.image(1043, 726, "_MISSING");

		// card_6_1
		const card_6_1 = this.add.image(1407, 466, "_MISSING");

		// card_1_2
		const card_1_2 = this.add.image(497, 726, "_MISSING");

		// card_3_2
		const card_3_2 = this.add.image(861, 726, "_MISSING");

		// card_2_1
		const card_2_1 = this.add.image(679, 466, "_MISSING");

		// card_3_1
		const card_3_1 = this.add.image(861, 466, "_MISSING");

		// rectangle
		const rectangle = this.add.rectangle(1120, 997, 600, 100);
		rectangle.isStroked = true;
		rectangle.strokeColor = 0;
		rectangle.lineWidth = 5;

		// txt_point
		const txt_point = this.add.text(1120, 999, "", {});
		txt_point.setOrigin(0.5, 0.5);
		txt_point.text = "Point : 0";
		txt_point.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "50px" });
		txt_point.setWordWrapWidth(400, true);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(183, 283, 200, 80);
		rectangle_2.isStroked = true;
		rectangle_2.strokeColor = 0;
		rectangle_2.lineWidth = 5;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(183, 387, 200, 80);
		rectangle_3.isStroked = true;
		rectangle_3.strokeColor = 0;
		rectangle_3.lineWidth = 5;

		// txt_pattern
		const txt_pattern = this.add.text(193, 652, "", {});
		txt_pattern.setOrigin(0.5, 0.5);
		txt_pattern.setStyle({ "align": "center", "color": "#fc1414ff", "fontFamily": "TheJamsil5Bold", "fontSize": "30px", "stroke": "#ffffffff", "strokeThickness":2});
		txt_pattern.setWordWrapWidth(400, true);

		// card_7_1
		const card_7_1 = this.add.image(1589, 466, "_MISSING");

		// card
		const card = this.add.image(1589, 726, "_MISSING");

		// card_8_1
		const card_8_1 = this.add.image(1771, 466, "_MISSING");

		// card_8_2
		const card_8_2 = this.add.image(1771, 726, "_MISSING");

		// lists
		const cards = [card_6_2, card_4_1, card_1_1, card_2_2, card_5_1, card_5_2, card_4_2, card_6_1, card_1_2, card_3_2, card_2_1, card_3_1, card, card_7_1, card_8_1, card_8_2];

		this.btn_back = btn_back;
		this.txt_time = txt_time;
		this.card_6_2 = card_6_2;
		this.card_4_1 = card_4_1;
		this.card_1_1 = card_1_1;
		this.card_2_2 = card_2_2;
		this.card_5_1 = card_5_1;
		this.card_5_2 = card_5_2;
		this.card_4_2 = card_4_2;
		this.card_6_1 = card_6_1;
		this.card_1_2 = card_1_2;
		this.card_3_2 = card_3_2;
		this.card_2_1 = card_2_1;
		this.card_3_1 = card_3_1;
		this.txt_point = txt_point;
		this.txt_pattern = txt_pattern;
		this.card_7_1 = card_7_1;
		this.card = card;
		this.card_8_1 = card_8_1;
		this.card_8_2 = card_8_2;
		this.cards = cards;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	btn_back;
	/** @type {Phaser.GameObjects.Text} */
	txt_time;
	/** @type {Phaser.GameObjects.Image} */
	card_6_2;
	/** @type {Phaser.GameObjects.Image} */
	card_4_1;
	/** @type {Phaser.GameObjects.Image} */
	card_1_1;
	/** @type {Phaser.GameObjects.Image} */
	card_2_2;
	/** @type {Phaser.GameObjects.Image} */
	card_5_1;
	/** @type {Phaser.GameObjects.Image} */
	card_5_2;
	/** @type {Phaser.GameObjects.Image} */
	card_4_2;
	/** @type {Phaser.GameObjects.Image} */
	card_6_1;
	/** @type {Phaser.GameObjects.Image} */
	card_1_2;
	/** @type {Phaser.GameObjects.Image} */
	card_3_2;
	/** @type {Phaser.GameObjects.Image} */
	card_2_1;
	/** @type {Phaser.GameObjects.Image} */
	card_3_1;
	/** @type {Phaser.GameObjects.Text} */
	txt_point;
	/** @type {Phaser.GameObjects.Text} */
	txt_pattern;
	/** @type {Phaser.GameObjects.Image} */
	card_7_1;
	/** @type {Phaser.GameObjects.Image} */
	card;
	/** @type {Phaser.GameObjects.Image} */
	card_8_1;
	/** @type {Phaser.GameObjects.Image} */
	card_8_2;
	/** @type {Phaser.GameObjects.Image[]} */
	cards;

	/* START-USER-CODE */

  // Write your code here

  preload() {
    this.load.plugin(
      "rexperspectiveimageplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexperspectiveimageplugin.min.js",
      true
    );

    this.load.scenePlugin({
      key: "rexuiplugin",
      url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      sceneKey: "rexUI",
    });
  }

  init() {
    this.quest = this.cache.json.get("quest")[`day${this.gameNum}`];
  }
  create() {
    this.editorCreate();

    this.btn_back
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => {
        this.resources = this.playTime;
        this.point = 0;
        this.scene.restart();
        this.scene.start("Video");
      });

    this.cards = this.cards.sort(() => Math.random() - 0.5);
    this.txt_pattern.setText(this.quest.pattern);
    this.txt_time.setText(this.padText(this.resources));

    let cardIndex = -1;
    this.answerCount = this.quest.words.length;

    this.quest.words.forEach((word, index) => {
      // Set Green Card..
      cardIndex++;
      const dummyGreenCard = this.cards[cardIndex];
      const greenCard = this.add.rexPerspectiveCard({
        x: dummyGreenCard.x,
        y: dummyGreenCard.y,
        front: this.CreateCardFrontFace("green", word.do),
        back: { key: "card_back_green" },
        face: "back",
        flip: {
          frontToBack: "right",
          backToFront: "left",
          duration: 300,
          ease: "Cubic",
        },
      });

      greenCard.setScale(0.8);
      greenCard.setName(index);
      dummyGreenCard.setVisible(false);

      greenCard.setInteractive({ cursor: "pointer" }).on("pointerdown", () => {
        if (!this.isFlip) {
          if (this.clickCards.length == 0) {
            this.clickCards.push(greenCard);
          } else if (this.clickCards.length == 1) {
            if (this.clickCards[0] == greenCard) {
              this.clickCards = [];
            } else {
              greenCard.flip.flip();
              this.clickCards.push(greenCard);
              this.isFlip = true;
            }
          }
          greenCard.flip.flip();
        }
      });

      greenCard.flip.on("start", () => {
        this.isFlip = true;
      });

      greenCard.flip.on("complete", () => {
        if (this.clickCards.length == 2) {
          this.isFlip = true;
          this.clickCards.forEach((card) => {
            card.flip.flip();
          });
          this.time.delayedCall(
            300,
            () => {
              this.isFlip = false;
            },
            [],
            this
          );
          this.clickCards = [];
        } else {
          this.isFlip = false;
        }
      });

      // Set Pink Card..
      cardIndex++;
      const dummyPinkCard = this.cards[cardIndex];
      const pinkCard = this.add.rexPerspectiveCard({
        x: dummyPinkCard.x,
        y: dummyPinkCard.y,
        front: this.CreateCardFrontFace("pink", word.stop),
        back: { key: "card_back_pink" },
        face: "back",
        flip: {
          frontToBack: "right",
          backToFront: "left",
          duration: 300,
          ease: "Cubic",
        },
      });

      pinkCard.setScale(0.8);
      pinkCard.setName(index);
      dummyPinkCard.setVisible(false);

      pinkCard.setInteractive({ cursor: "pointer" }).on("pointerdown", () => {
        if (!this.isFlip) {
          if (this.clickCards.length == 0) {
            this.scene.pause(this);
            this.scene.launch("Warning", { gameNum: this.gameNum });
          } else {
            this.clickCards.push(pinkCard);
            pinkCard.flip.flip();
          }
        }
      });

      pinkCard.flip.on("start", () => {
        this.isFlip = true;
      });

      pinkCard.flip.on("complete", () => {
        if (this.clickCards.length == 2) {
          this.time.delayedCall(
            300,
            () => {
              this.isFlip = false;
              // 정답
              if (this.clickCards[0].name == this.clickCards[1].name) {
                this.point += 100;
                this.scene.pause(this);
                this.scene.launch("Feedback", {
                  gameNum: this.gameNum,
                  correct: true,
                });

                this.clickCards.forEach((card) => {
                  card.setVisible(false);
                });
                this.answerCount--;
                if (this.answerCount == 0) {
                  this.complete = true;
                }
              }
              // 오답
              else {
                this.point -= 50;
                this.scene.pause(this);
                this.scene.launch("Feedback", {
                  gameNum: this.gameNum,
                  correct: false,
                });
                this.clickCards.forEach((card) => {
                  card.flip.flip();
                });
              }
              this.txt_point.setText(`Point : ${this.point}`);
              this.clickCards = [];
            },
            [],
            this
          );
        }
      });
    });

    // scene resume callback 이벤트
    this.events.on("resume", () => {
      if (this.complete) {
        this.ending();
      }
    });
  }

  CreateCardFrontFace(color, text) {
    const textStyle = {
      color: "#000000ff",
      fontFamily: "TheJamsil5Bold",
      fontSize: "35px",
      align: "center",
      wordWrap: {
        width: 150,
      },
    };

    const frame = this.textures.getFrame(`card_${color}`);
    const width = frame.cutWidth;
    const height = frame.cutHeight;

    const card = this.rexUI.add
      .label({
        width: width,
        height: height,
        orientation: 1,
        background: this.add.image(0, 0, `card_${color}`),
        text: this.add.text(0, 0, text, textStyle).setOrigin(0.5),
      })
      .layout();

    card
      .getElement("text")
      .setPosition(
        card.getElement("background").x,
        card.getElement("background").y
      );

    const image = this.add
      .rexPerspectiveRenderTexture()
      .snapshot(card.getAllVisibleChildren());

    card.destroy();

    return image;
  }

  update(time, delta) {
    if (!this.complete) {
      this.timer += delta;
      while (this.timer > 1000 && this.resources > 0) {
        this.resources -= 1;
        this.timer -= 1000;
        this.txt_time.setText(this.padText(this.resources));
        // ending
        if (this.resources == 0) {
          this.ending("timevoer");
        }
      }
    }
  }

  ending(type) {
    this.cards.forEach((card) => {
      card.removeInteractive();
    });
    this.scene.launch("Ending", {
      point: this.point,
      time: this.padText(
        type == "timeover" ? this.playTime : this.playTime - this.resources
      ),
      words: this.quest.words,
    });
  }

  padText(seconds) {
    var pad = function (num) {
      var str = num < 10 ? "0" + num : num;

      return str;
    };

    var min = pad(parseInt(seconds / 60));
    var sec = pad(parseInt(seconds % 60));

    return min + ":" + sec;
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

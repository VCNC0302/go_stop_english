// You can write more code here

/* START OF COMPILED CODE */

class Card_Game_2 extends Phaser.Scene {

	constructor() {
		super("Card_Game_2");

		/* START-USER-CTR-CODE */
    // Write your code here.
    this.playTime = 70;
    this.resources = this.playTime;
    this.timer = 0;
    this.clickCard = null;
    this.answerCount = 0;
    this.gameNum = 2;
    this.point = 0;
    this.complete = false;
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(1120, 125, 600, 100);
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 0;
		rectangle_1.lineWidth = 5;

		// txt_time
		const txt_time = this.add.text(1120, 128, "", {});
		txt_time.setOrigin(0.5, 0.5);
		txt_time.text = "00 : 00";
		txt_time.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "50px" });

		// card_6_2
		const card_6_2 = this.add.image(1557, 716, "_MISSING");

		// card_4_1
		const card_4_1 = this.add.image(1133, 403, "_MISSING");

		// card_1_1
		const card_1_1 = this.add.image(497, 403, "_MISSING");

		// card_2_2
		const card_2_2 = this.add.image(709, 716, "_MISSING");

		// card_5_1
		const card_5_1 = this.add.image(1345, 403, "_MISSING");

		// card_5_2
		const card_5_2 = this.add.image(1345, 716, "_MISSING");

		// card_4_2
		const card_4_2 = this.add.image(1133, 716, "_MISSING");

		// card_6_1
		const card_6_1 = this.add.image(1557, 403, "_MISSING");

		// card_1_2
		const card_1_2 = this.add.image(497, 716, "_MISSING");

		// card_3_2
		const card_3_2 = this.add.image(921, 716, "_MISSING");

		// card_2_1
		const card_2_1 = this.add.image(709, 403, "_MISSING");

		// card_3_1
		const card_3_1 = this.add.image(921, 403, "_MISSING");

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

		// card_7_1
		const card_7_1 = this.add.image(1769, 403, "_MISSING");

		// card
		const card = this.add.image(1769, 719, "_MISSING");

		// txt_level
		const txt_level = this.add.text(314, 301, "", {});
		txt_level.setOrigin(0.5, 0.5);
		txt_level.text = "Level 2";
		txt_level.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "25px" });

		// txt_
		const txt_ = this.add.text(110, 301, "", {});
		txt_.setOrigin(0.5, 0.5);
		txt_.text = "Day 2";
		txt_.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "25px" });

		// btn_back
		const btn_back = this.add.image(143, 108, "back");
		btn_back.scaleX = 0.9;
		btn_back.scaleY = 0.9;

		// ellipse_2
		const ellipse_2 = this.add.ellipse(147, 107, 128, 128);
		ellipse_2.scaleX = 0.7;
		ellipse_2.scaleY = 0.7;
		ellipse_2.isStroked = true;
		ellipse_2.strokeColor = 0;
		ellipse_2.lineWidth = 10;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(314, 300, 100, 50);
		rectangle_2.isStroked = true;
		rectangle_2.strokeColor = 0;
		rectangle_2.lineWidth = 5;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(110, 300, 100, 50);
		rectangle_3.isStroked = true;
		rectangle_3.strokeColor = 0;
		rectangle_3.lineWidth = 5;

		// card_black
		const card_black = this.add.image(211, 573, "card_black");
		card_black.scaleX = 1.6242302781955114;
		card_black.scaleY = 1.6242302781955114;

		// txt_day
		const txt_day = this.add.text(295, 386, "", {});
		txt_day.setOrigin(0.5, 0.5);
		txt_day.setStyle({ "color": "#ffffffff", "fontFamily": "TheJamsil5Bold", "fontSize": "18px" });

		// txt_pattern
		const txt_pattern = this.add.text(212, 441, "", {});
		txt_pattern.setOrigin(0.5, 0.5);
		txt_pattern.setStyle({ "align": "center", "color": "#fc1414ff", "fontFamily": "TheJamsil5Bold", "fontSize": "30px", "stroke": "#ffffffff", "strokeThickness":2});
		txt_pattern.setWordWrapWidth(400, true);

		// txt_content
		const txt_content = this.add.text(78, 482, "", {});
		txt_content.setStyle({ "color": "#ffffffff", "fontFamily": "TheJamsil5Bold", "fontSize": "14px" });
		txt_content.setWordWrapWidth(270, true);

		// lists
		const cards = [card_6_2, card_4_1, card_1_1, card_2_2, card_5_1, card_5_2, card_4_2, card_6_1, card_1_2, card_3_2, card_2_1, card_3_1, card, card_7_1];

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
		this.card_7_1 = card_7_1;
		this.card = card;
		this.btn_back = btn_back;
		this.txt_day = txt_day;
		this.txt_pattern = txt_pattern;
		this.txt_content = txt_content;
		this.cards = cards;

		this.events.emit("scene-awake");
	}

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
	/** @type {Phaser.GameObjects.Image} */
	card_7_1;
	/** @type {Phaser.GameObjects.Image} */
	card;
	/** @type {Phaser.GameObjects.Image} */
	btn_back;
	/** @type {Phaser.GameObjects.Text} */
	txt_day;
	/** @type {Phaser.GameObjects.Text} */
	txt_pattern;
	/** @type {Phaser.GameObjects.Text} */
	txt_content;
	/** @type {Phaser.GameObjects.Image[]} */
	cards;

	/* START-USER-CODE */

  // Write your code here

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
    this.txt_day.setText(`DAY 0${this.gameNum}`);
    this.txt_pattern.setText(this.quest.pattern);
    this.txt_content.setText(this.quest.content);
    this.txt_time.setText(this.padText(this.resources));

    let cardIndex = -1;
    const textStyle = {
      color: "#000000ff",
      fontFamily: "TheJamsil5Bold",
      fontSize: "28px",
      align: "center",
    };
    this.answerCount = this.quest.words.length;
    this.quest.words.forEach((word, index) => {
      cardIndex++;
      const greenCard = this.cards[cardIndex];
      greenCard.setTexture("card_green");
      greenCard.setName(index);
      cardIndex++;
      const pinkCard = this.cards[cardIndex];
      pinkCard.setTexture("card_pink");
      pinkCard.setName(index);

      const goText = this.add.text(0, 0, word.do, textStyle);

      goText.setWordWrapWidth(150, true);
      goText.setOrigin(0.5, 0.5);
      goText.setPosition(greenCard.x, greenCard.y);

      const stopText = this.add.text(0, 0, word.stop, textStyle);

      stopText.setWordWrapWidth(150, true);
      stopText.setOrigin(0.5, 0.5);
      stopText.setPosition(pinkCard.x, pinkCard.y);

      greenCard.setInteractive({ cursor: "pointer" }).on("pointerdown", () => {
        if (this.clickCard == null) {
          this.clickCard = greenCard;
          this.clickCard.setTexture("card_stroke_green");
        } else {
          this.clickCard.setTexture("card_green");
          this.clickCard = null;
        }
      });

      pinkCard.setInteractive({ cursor: "pointer" }).on("pointerdown", () => {
        if (this.clickCard == null) {
          this.scene.pause(this);
          this.scene.launch("Warning", { gameNum: this.gameNum });
        }
        // 정,오답 체크
        else {
          pinkCard.setTexture("card_stroke_pink");
          // 정답
          if (this.clickCard.name == pinkCard.name) {
            this.point += 100;
            this.scene.pause(this);
            this.scene.launch("Feedback", {
              gameNum: this.gameNum,
              correct: true,
            });
            this.clickCard.setVisible(false);
            pinkCard.setVisible(false);
            goText.setVisible(false);
            stopText.setVisible(false);
            this.answerCount--;
            if (this.answerCount == 0) {
              this.complete = true;
            }
          }
          // 오답
          else {
            this.point -= 50;
            this.scene.pause(this);
            this.clickCard.setTexture("card_green");
            pinkCard.setTexture("card_pink");
            this.scene.launch("Feedback", {
              gameNum: this.gameNum,
              correct: false,
            });
          }
          this.txt_point.setText(`Point : ${this.point}`);
          this.clickCard = null;
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

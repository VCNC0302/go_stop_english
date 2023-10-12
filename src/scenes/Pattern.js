// You can write more code here

/* START OF COMPILED CODE */

class Pattern extends Phaser.Scene {

	constructor() {
		super("Pattern");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// card_black
		const card_black = this.add.image(960, 520, "card_black");
		card_black.scaleX = 2.2254646277924124;
		card_black.scaleY = 2.2254646277924124;

		// txt_title
		const txt_title = this.add.text(960, 122, "", {});
		txt_title.setOrigin(0.5, 0.5);
		txt_title.text = "패턴 카드 소개";
		txt_title.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "60px" });

		// txt_day
		const txt_day = this.add.text(1059, 264, "", {});
		txt_day.setOrigin(0.5, 0.5);
		txt_day.setStyle({ "color": "#ffffffff", "fontFamily": "TheJamsil5Bold", "fontSize": "30px" });

		// txt_pattern
		const txt_pattern = this.add.text(967, 335, "", {});
		txt_pattern.setOrigin(0.5, 0.5);
		txt_pattern.setStyle({ "align": "center", "color": "#fc1414ff", "fontFamily": "TheJamsil5Bold", "fontSize": "40px", "stroke": "#ffffffff", "strokeThickness":2});
		txt_pattern.setWordWrapWidth(400, true);

		// txt_content
		const txt_content = this.add.text(772, 415, "", {});
		txt_content.setStyle({ "color": "#ffffffff", "fontFamily": "TheJamsil5Bold", "fontSize": "20px" });
		txt_content.setWordWrapWidth(400, true);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(960, 932.5, 130, 70);
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 0;
		rectangle_1.lineWidth = 10;

		// txt_next
		const txt_next = this.add.text(960, 932.5, "", {});
		txt_next.setOrigin(0.5, 0.5);
		txt_next.text = "다음";
		txt_next.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "50px", "stroke": "#1927fcff", "strokeThickness":2});

		// ellipse_1
		const ellipse_1 = this.add.ellipse(928, 1041, 128, 128);
		ellipse_1.scaleX = 0.20788018266920605;
		ellipse_1.scaleY = 0.20788018266920605;
		ellipse_1.isFilled = true;
		ellipse_1.fillColor = 0;
		ellipse_1.isStroked = true;
		ellipse_1.strokeColor = 0;
		ellipse_1.lineWidth = 20;

		// ellipse
		const ellipse = this.add.ellipse(992, 1041, 128, 128);
		ellipse.scaleX = 0.20788018266920605;
		ellipse.scaleY = 0.20788018266920605;
		ellipse.isStroked = true;
		ellipse.strokeColor = 0;
		ellipse.lineWidth = 20;

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

		this.txt_day = txt_day;
		this.txt_pattern = txt_pattern;
		this.txt_content = txt_content;
		this.txt_next = txt_next;
		this.btn_back = btn_back;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	txt_day;
	/** @type {Phaser.GameObjects.Text} */
	txt_pattern;
	/** @type {Phaser.GameObjects.Text} */
	txt_content;
	/** @type {Phaser.GameObjects.Text} */
	txt_next;
	/** @type {Phaser.GameObjects.Image} */
	btn_back;

	/* START-USER-CODE */

  // Write your code here

  init(data) {
    this.day = data.day;
    this.quest = this.cache.json.get("quest")[`day${this.day}`];
    window.pattern = this.quest.pattern;
  }

  create() {
    this.editorCreate();

    this.txt_day.setText(`DAY 0${this.day}`);
    this.txt_pattern.setText(this.quest.pattern);
    this.txt_content.setText(this.quest.content);

    this.btn_back
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => {
        this.scene.start("Day");
      });

    this.txt_next
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => {
        this.scene.start("Video", {
          day: this.day,
        });
      });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

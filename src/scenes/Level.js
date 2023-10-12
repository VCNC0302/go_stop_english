// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// txt_title
		const txt_title = this.add.text(728.5, 248, "", {});
		txt_title.text = "Level 선택";
		txt_title.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "100px" });

		// btn_back
		const btn_back = this.add.image(143, 108, "back");
		btn_back.scaleX = 0.9;
		btn_back.scaleY = 0.9;

		// ellipse_1
		const ellipse_1 = this.add.ellipse(147, 107, 128, 128);
		ellipse_1.scaleX = 0.7;
		ellipse_1.scaleY = 0.7;
		ellipse_1.isStroked = true;
		ellipse_1.strokeColor = 0;
		ellipse_1.lineWidth = 10;

		// txt_level_1
		const txt_level_1 = this.add.text(853, 497, "", {});
		txt_level_1.text = "Level 1";
		txt_level_1.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "60px", "stroke": "#1927fcff", "strokeThickness":3});

		// txt_level_2
		const txt_level_2 = this.add.text(852, 690, "", {});
		txt_level_2.alpha = 0.5;
		txt_level_2.alphaTopLeft = 0.5;
		txt_level_2.alphaTopRight = 0.5;
		txt_level_2.alphaBottomLeft = 0.5;
		txt_level_2.alphaBottomRight = 0.5;
		txt_level_2.text = "Level 2";
		txt_level_2.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "60px", "stroke": "#1927fcff", "strokeThickness":3});

		// txt_level_3
		const txt_level_3 = this.add.text(852, 883, "", {});
		txt_level_3.alpha = 0.5;
		txt_level_3.alphaTopLeft = 0.5;
		txt_level_3.alphaTopRight = 0.5;
		txt_level_3.alphaBottomLeft = 0.5;
		txt_level_3.alphaBottomRight = 0.5;
		txt_level_3.text = "Level 3";
		txt_level_3.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "60px", "stroke": "#1927fcff", "strokeThickness":3});

		// rectangle_2
		const rectangle_2 = this.add.rectangle(958, 533, 250, 80);
		rectangle_2.isStroked = true;
		rectangle_2.strokeColor = 0;
		rectangle_2.lineWidth = 10;

		// rectangle
		const rectangle = this.add.rectangle(960, 725, 250, 80);
		rectangle.alpha = 0.5;
		rectangle.isStroked = true;
		rectangle.strokeColor = 0;
		rectangle.lineWidth = 10;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(960, 919, 250, 80);
		rectangle_1.alpha = 0.5;
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 0;
		rectangle_1.lineWidth = 10;

		this.btn_back = btn_back;
		this.txt_level_1 = txt_level_1;
		this.txt_level_2 = txt_level_2;
		this.txt_level_3 = txt_level_3;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	btn_back;
	/** @type {Phaser.GameObjects.Text} */
	txt_level_1;
	/** @type {Phaser.GameObjects.Text} */
	txt_level_2;
	/** @type {Phaser.GameObjects.Text} */
	txt_level_3;

	/* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();

    this.btn_back
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => {
        this.scene.start("Home");
      });

    this.txt_level_1
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => {
        this.scene.start("Day");
      });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

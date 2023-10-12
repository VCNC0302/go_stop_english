// You can write more code here

/* START OF COMPILED CODE */

class Day extends Phaser.Scene {

	constructor() {
		super("Day");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// txt_title
		const txt_title = this.add.text(756, 248, "", {});
		txt_title.text = "Day 선택";
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

		// txt_day_1
		const txt_day_1 = this.add.text(881, 497, "", {});
		txt_day_1.text = "Day 1";
		txt_day_1.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "60px", "stroke": "#1927fcff", "strokeThickness":2});

		// txt_day_2
		const txt_day_2 = this.add.text(881, 679, "", {});
		txt_day_2.text = "Day 2";
		txt_day_2.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "60px", "stroke": "#1927fcff", "strokeThickness":2});

		// txt_day_3
		const txt_day_3 = this.add.text(881, 872, "", {});
		txt_day_3.text = "Day 3";
		txt_day_3.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "60px", "stroke": "#1927fcff", "strokeThickness":2});

		// rectangle
		const rectangle = this.add.rectangle(965, 534, 200, 80);
		rectangle.isStroked = true;
		rectangle.strokeColor = 0;
		rectangle.lineWidth = 10;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(965, 717, 200, 80);
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 0;
		rectangle_1.lineWidth = 10;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(965, 910, 200, 80);
		rectangle_2.isStroked = true;
		rectangle_2.strokeColor = 0;
		rectangle_2.lineWidth = 10;

		this.btn_back = btn_back;
		this.txt_day_1 = txt_day_1;
		this.txt_day_2 = txt_day_2;
		this.txt_day_3 = txt_day_3;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	btn_back;
	/** @type {Phaser.GameObjects.Text} */
	txt_day_1;
	/** @type {Phaser.GameObjects.Text} */
	txt_day_2;
	/** @type {Phaser.GameObjects.Text} */
	txt_day_3;

	/* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();
    this.btn_back
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => {
        this.scene.start("Level");
      });

    this.txt_day_1
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => {
        this.scene.start("Pattern", {
          day: 1,
        });
      });

    this.txt_day_2
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => {
        this.scene.start("Pattern", {
          day: 2,
        });
      });

    this.txt_day_3
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => {
        this.scene.start("Pattern", {
          day: 3,
        });
      });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

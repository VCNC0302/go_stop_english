// You can write more code here

/* START OF COMPILED CODE */

class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// title
		const title = this.add.image(960, 363, "title");
		title.scaleX = 2.0685050038459547;
		title.scaleY = 2.0685050038459547;

		// txt_tip
		const txt_tip = this.add.text(960, 691, "", {});
		txt_tip.setOrigin(0.5, 0.5);
		txt_tip.text = "Go&Stop 영어학습법 소개";
		txt_tip.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "40px", "stroke": "#1927fcff", "strokeThickness":3,"shadow.stroke":true});

		// txt_start
		const txt_start = this.add.text(960, 878, "", {});
		txt_start.setOrigin(0.5, 0.5);
		txt_start.text = "START";
		txt_start.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "80px", "stroke": "#1927fcff", "strokeThickness":3,"shadow.stroke":true});

		// rectangle
		const rectangle = this.add.rectangle(958, 876, 300, 100);
		rectangle.isStroked = true;
		rectangle.strokeColor = 0;
		rectangle.lineWidth = 10;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(960, 692, 500, 80);
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 0;
		rectangle_1.lineWidth = 10;

		this.txt_tip = txt_tip;
		this.txt_start = txt_start;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	txt_tip;
	/** @type {Phaser.GameObjects.Text} */
	txt_start;

	/* START-USER-CODE */

  // Write more your code here

  create() {
    this.editorCreate();

    this.txt_tip.setInteractive({ cursor: "pointer" }).on("pointerdown", () => {
      this.scene.start("Tip");
    });

    this.txt_start
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => {
        this.scene.start("Level");
      });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

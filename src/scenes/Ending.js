// You can write more code here

/* START OF COMPILED CODE */

class Ending extends Phaser.Scene {

	constructor() {
		super("Ending");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle_2
		const rectangle_2 = this.add.rectangle(960, 538, 1920, 1080);
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 4868682;
		rectangle_2.fillAlpha = 0.8;

		// rect
		const rect = this.add.rectangle(960, 540, 800, 700);
		rect.isFilled = true;
		rect.isStroked = true;
		rect.strokeColor = 0;
		rect.lineWidth = 10;

		// txt_point
		const txt_point = this.add.text(960, 407, "", {});
		txt_point.setOrigin(0.5, 0.5);
		txt_point.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "60px" });

		// txt_time
		const txt_time = this.add.text(960, 531, "", {});
		txt_time.setOrigin(0.5, 0.5);
		txt_time.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "60px" });

		// rectangle_1
		const rectangle_1 = this.add.rectangle(960, 405, 600, 100);
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 0;
		rectangle_1.lineWidth = 5;

		// rectangle
		const rectangle = this.add.rectangle(960, 530, 600, 100);
		rectangle.isStroked = true;
		rectangle.strokeColor = 0;
		rectangle.lineWidth = 5;

		// txt_ok
		const txt_ok = this.add.text(903, 753, "", {});
		txt_ok.text = "확인";
		txt_ok.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "60px", "stroke": "#1927fcff", "strokeThickness":3});

		// rectangle_5
		const rectangle_5 = this.add.rectangle(960, 787.8961793223158, 150, 80);
		rectangle_5.isStroked = true;
		rectangle_5.strokeColor = 0;
		rectangle_5.lineWidth = 5;

		this.txt_point = txt_point;
		this.txt_time = txt_time;
		this.txt_ok = txt_ok;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	txt_point;
	/** @type {Phaser.GameObjects.Text} */
	txt_time;
	/** @type {Phaser.GameObjects.Text} */
	txt_ok;

	/* START-USER-CODE */

  // Write your code here

  init(data) {
    this.data = data;
  }

  create() {
    this.editorCreate();
    this.scene.bringToTop();
    this.txt_point.setText(`획득 Point : ${this.data.point}`);
    this.txt_time.setText(`소요시간 : ${this.data.time}`);
    this.txt_ok.removeInteractive();
    this.txt_ok.setInteractive({ cursor: "pointer" }).on("pointerdown", () => {
      this.scene.start("Check", this.data);
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

// You can write more code here

/* START OF COMPILED CODE */

class Check extends Phaser.Scene {

	constructor() {
		super("Check");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle_4
		const rectangle_4 = this.add.rectangle(960, 540, 1920, 1080);
		rectangle_4.isFilled = true;

		// txt_title
		const txt_title = this.add.text(960, 88, "", {});
		txt_title.setOrigin(0.5, 0.5);
		txt_title.text = "정답 체크";
		txt_title.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "50px" });

		// txt_point
		const txt_point = this.add.text(628, 193, "", {});
		txt_point.setOrigin(0.5, 0.5);
		txt_point.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "30px" });

		// txt_time
		const txt_time = this.add.text(1280, 193, "", {});
		txt_time.setOrigin(0.5, 0.5);
		txt_time.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "30px" });

		// rectangle
		const rectangle = this.add.rectangle(628, 193, 400, 80);
		rectangle.isStroked = true;
		rectangle.strokeColor = 0;
		rectangle.lineWidth = 5;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(1280, 193, 400, 80);
		rectangle_2.isStroked = true;
		rectangle_2.strokeColor = 0;
		rectangle_2.lineWidth = 5;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(961, 607, 1500, 700);
		rectangle_3.isStroked = true;
		rectangle_3.strokeColor = 0;
		rectangle_3.lineWidth = 5;

		// txt_ok
		const txt_ok = this.add.text(905, 984, "", {});
		txt_ok.text = "확인";
		txt_ok.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "60px", "stroke": "#1927fcff", "strokeThickness":2});

		// rectangle_5
		const rectangle_5 = this.add.rectangle(960, 1020, 150, 80);
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

    const padding = {
      6: 90,
      7: 45,
      8: 5,
    };

    const textStyle = {
      color: "#000000ff",
      fontFamily: "TheJamsil5Bold",
      fontSize: "30px",
      align: "center",
    };

    this.data.words.forEach((word, index) => {
      const yPos = 320;

      const patternRect = this.add.rectangle(
        500,
        yPos + 80 * index + padding[this.data.words.length],
        400,
        50
      );
      patternRect.isStroked = true;
      patternRect.strokeColor = 0x7f7f7f;
      patternRect.lineWidth = 3;

      const goRect = this.add.rectangle(
        900,
        yPos + 80 * index + padding[this.data.words.length],
        300,
        50
      );
      goRect.isStroked = true;
      goRect.strokeColor = 0x70ad47;
      goRect.lineWidth = 3;

      const stopRect = this.add.rectangle(
        1300,
        yPos + 80 * index + padding[this.data.words.length],
        400,
        50
      );
      stopRect.isStroked = true;
      stopRect.strokeColor = 0xeb7de1;
      stopRect.lineWidth = 3;

      const patternText = this.add.text(0, 0, window.pattern, textStyle);
      patternText.setOrigin(0.5, 0.5);
      patternText.setPosition(patternRect.x, patternRect.y);

      const goText = this.add.text(0, 0, word.do, textStyle);
      goText.setOrigin(0.5, 0.5);
      goText.setPosition(goRect.x, goRect.y);

      const stopText = this.add.text(0, 0, word.stop, textStyle);
      stopText.setOrigin(0.5, 0.5);
      stopText.setPosition(stopRect.x, stopRect.y);

      const speaker = this.add.image(0, 0, "speaker");
      speaker.setScale(0.2, 0.2);
      speaker.setPosition(stopRect.x + 250, stopRect.y);
      speaker.setAlpha(0.5);
    });

    this.txt_ok.setInteractive({ cursor: "pointer" }).on("pointerdown", () => {
      window.location.reload();
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

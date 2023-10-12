// You can write more code here

/* START OF COMPILED CODE */

class Warning extends Phaser.Scene {

	constructor() {
		super("Warning");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle_2
		const rectangle_2 = this.add.rectangle(960, 540, 1920, 1080);
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 4868682;
		rectangle_2.fillAlpha = 0.8;

		// rect
		const rect = this.add.rectangle(960, 540, 800, 700);
		rect.isFilled = true;
		rect.isStroked = true;
		rect.strokeColor = 0;
		rect.lineWidth = 10;

		// txt_msg
		const txt_msg = this.add.text(960, 550, "", {});
		txt_msg.setOrigin(0.5, 0.5);
		txt_msg.text = "Stop 카드를 먼저 선택하셨습니다.\n\nGo 카드를 먼저 선택해 주십시오.";
		txt_msg.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "40px" });

		// txt_ok
		const txt_ok = this.add.text(903, 726, "", {});
		txt_ok.text = "확인";
		txt_ok.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "60px", "stroke": "#1927fcff", "strokeThickness":2});

		// warning
		this.add.image(960, 306, "warning");

		// rectangle_3
		const rectangle_3 = this.add.rectangle(960, 760, 150, 80);
		rectangle_3.isStroked = true;
		rectangle_3.strokeColor = 0;
		rectangle_3.lineWidth = 5;

		this.txt_ok = txt_ok;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	txt_ok;

	/* START-USER-CODE */

  // Write your code here
  init(data) {
    this.gameNum = data.gameNum;
  }
  create() {
    this.editorCreate();
    this.scene.bringToTop();
    this.txt_ok.setInteractive({ cursor: "pointer" }).on("pointerdown", () => {
      this.scene.resume(`Card_Game_${this.gameNum}`);
      this.scene.setVisible(false, this);
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

// You can write more code here

/* START OF COMPILED CODE */

class Video extends Phaser.Scene {

	constructor() {
		super("Video");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// txt_title
		const txt_title = this.add.text(960, 122, "", {});
		txt_title.setOrigin(0.5, 0.5);
		txt_title.text = "게임방법";
		txt_title.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "60px" });

		// txt_pattern
		const txt_pattern = this.add.text(967, 428, "", {});
		txt_pattern.setOrigin(0.5, 0.5);
		txt_pattern.setStyle({ "align": "center", "color": "#d20dc1ff", "fontFamily": "TheJamsil5Bold", "fontSize": "40px", "stroke": "#000000ff", "strokeThickness":2});
		txt_pattern.setWordWrapWidth(400, true);

		// txt_content
		const txt_content = this.add.text(772, 508, "", {});
		txt_content.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "25px" });
		txt_content.setWordWrapWidth(400, true);

		// txt_next
		const txt_next = this.add.text(960, 935, "", {});
		txt_next.setOrigin(0.5, 0.5);
		txt_next.text = "게임시작";
		txt_next.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "50px", "stroke": "#1927fcff", "strokeThickness":2});

		// ellipse_1
		const ellipse_1 = this.add.ellipse(928, 1041, 128, 128);
		ellipse_1.scaleX = 0.20788018266920605;
		ellipse_1.scaleY = 0.20788018266920605;
		ellipse_1.fillColor = 0;
		ellipse_1.isStroked = true;
		ellipse_1.strokeColor = 0;
		ellipse_1.lineWidth = 20;

		// ellipse
		const ellipse = this.add.ellipse(992, 1041, 128, 128);
		ellipse.scaleX = 0.20788018266920605;
		ellipse.scaleY = 0.20788018266920605;
		ellipse.isFilled = true;
		ellipse.fillColor = 0;
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

		// txt_title_1
		const txt_title_1 = this.add.text(960, 845, "", {});
		txt_title_1.setOrigin(0.5, 0.5);
		txt_title_1.text = "* 주어진 시간 안에 Go카드와 Stop카드가 의미가 맞도록 짝을 맞춥니다.";
		txt_title_1.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "30px" });

		// rectangle_2
		const rectangle_2 = this.add.rectangle(960, 500, 800, 576);
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 7105644;

		// btn_play
		const btn_play = this.add.image(960, 493, "play");
		btn_play.scaleX = 0.7708457389626016;
		btn_play.scaleY = 0.7708457389626016;

		// rectangle
		const rectangle = this.add.rectangle(960, 932.5, 220, 80);
		rectangle.isStroked = true;
		rectangle.strokeColor = 0;
		rectangle.lineWidth = 10;

		this.txt_pattern = txt_pattern;
		this.txt_content = txt_content;
		this.txt_next = txt_next;
		this.btn_back = btn_back;
		this.btn_play = btn_play;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	txt_pattern;
	/** @type {Phaser.GameObjects.Text} */
	txt_content;
	/** @type {Phaser.GameObjects.Text} */
	txt_next;
	/** @type {Phaser.GameObjects.Image} */
	btn_back;
	/** @type {Phaser.GameObjects.Image} */
	btn_play;

	/* START-USER-CODE */

  // Write your code here

  init(data) {
    this.day = data.day;
    this.resume = data.resume;
  }

  create() {
    this.editorCreate();

    const video = this.add.video(
      this.scale.width / 2,
      this.scale.height / 2 - 40,
      "video"
    );

    video.setScale(0.8, 0.8);

    this.btn_play
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => {
        video.setVisible(true);
        video.play();
      });

    //  Listen for the 'play' event to create our pause/resume handler
    video.setInteractive({ cursor: "pointer" }).once("play", () => {
      video.on("pointerdown", () => {
        if (video.isPlaying()) {
          video.pause();
        } else {
          video.resume();
        }
      });
    });

    video.once("complete", () => {
      video.setVisible(false);
    });

    this.add.image().top;

    this.btn_back
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => {
        this.scene.start("Pattern");
      });

    this.txt_next
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => {
        this.scene.start(`Card_Game_${this.day}`);
      });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

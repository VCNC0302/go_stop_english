// You can write more code here

/* START OF COMPILED CODE */

class Tip extends Phaser.Scene {

	constructor() {
		super("Tip");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// card_pink
		const card_pink = this.add.image(960, 466, "card_pink");
		card_pink.scaleX = 1.2232721291136386;
		card_pink.scaleY = 1.2232721291136386;

		// txt_title
		const txt_title = this.add.text(453, 51, "", {});
		txt_title.text = "Go&Stop 영어학습법 과 본 플래시 게임 소개";
		txt_title.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "50px" });

		// card_black
		const card_black = this.add.image(623, 466, "card_black");
		card_black.scaleX = 1.2232721291136386;
		card_black.scaleY = 1.2232721291136386;

		// card_green
		const card_green = this.add.image(1294, 467, "card_green");
		card_green.scaleX = 1.2242569258071843;
		card_green.scaleY = 1.2242569258071843;

		// txt_patten
		const txt_patten = this.add.text(532, 231, "", {});
		txt_patten.text = "Pattern";
		txt_patten.setStyle({ "color": "#7F7F7F", "fontFamily": "TheJamsil5Bold", "fontSize": "50px" });

		// txt_go
		const txt_go = this.add.text(924, 231, "", {});
		txt_go.text = "Go";
		txt_go.setStyle({ "color": "#EB7DE1", "fontFamily": "TheJamsil5Bold", "fontSize": "50px" });

		// rectangle_1
		const rectangle_1 = this.add.rectangle(960, 792, 1400, 250);
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 0;
		rectangle_1.lineWidth = 3;

		// txt_stop
		const txt_stop = this.add.text(1240, 231, "", {});
		txt_stop.text = "Stop";
		txt_stop.setStyle({ "color": "#70AD47", "fontFamily": "TheJamsil5Bold", "fontSize": "50px" });

		// txt_content
		const txt_content = this.add.text(289, 685, "", {});
		txt_content.text = "본 게임은 자기주도학습개론 저자인 이수미 박사가 개발하고 특허를 취득한 영어학습용 보드게임에 기반해 쉽고 재미있게 동사, 목적어, 패턴문장이나 주어를 학습할 수 있게 만든 플래시 게임이다.\n\n패턴(Pattern)카드 : 영어 문장 표현 앞부분의 유형을 분류하여 선별한 카드\n고(Go)카드 : 동사로만 구성된 동사카드\n스톱(Stop)카드 : 명사 또는 목적어로 활용되는 명사카드";
		txt_content.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "30px" });
		txt_content.setWordWrapWidth(1400, true);

		// txt_ok
		const txt_ok = this.add.text(960, 999, "", {});
		txt_ok.setOrigin(0.5, 0.5);
		txt_ok.text = "확인";
		txt_ok.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "50px", "stroke": "#1927fcff", "strokeThickness":2});

		// rectangle
		const rectangle = this.add.rectangle(960, 995, 120, 70);
		rectangle.isStroked = true;
		rectangle.strokeColor = 0;
		rectangle.lineWidth = 10;

		// txt_go_1
		const txt_go_1 = this.add.text(873, 165, "", {});
		txt_go_1.text = "카드 예시";
		txt_go_1.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "40px" });

		// txt_go_2
		const txt_go_2 = this.add.text(571, 431, "", {});
		txt_go_2.text = "Can I";
		txt_go_2.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "40px" });

		// txt_go_3
		const txt_go_3 = this.add.text(914, 349, "", {});
		txt_go_3.text = "drink";
		txt_go_3.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "40px" });

		// txt_go_4
		const txt_go_4 = this.add.text(918, 440, "", {});
		txt_go_4.text = "have";
		txt_go_4.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "40px" });

		// txt_go_5
		const txt_go_5 = this.add.text(930, 532, "", {});
		txt_go_5.text = "get";
		txt_go_5.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "40px" });

		// txt_go_6
		const txt_go_6 = this.add.text(1263, 344, "", {});
		txt_go_6.text = "coffee\nwater";
		txt_go_6.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "25px" });

		// txt_go_7
		const txt_go_7 = this.add.text(1239, 431, "", {});
		txt_go_7.text = "hambuger\nsandwitch";
		txt_go_7.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "25px" });

		// txt_go_8
		const txt_go_8 = this.add.text(1256, 520, "", {});
		txt_go_8.text = "a table\na room";
		txt_go_8.setStyle({ "color": "#000000ff", "fontFamily": "TheJamsil5Bold", "fontSize": "25px" });

		this.txt_ok = txt_ok;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	txt_ok;

	/* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();
    this.txt_ok.setInteractive({ cursor: "pointer" }).on("pointerdown", () => {
      this.scene.start("Home");
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

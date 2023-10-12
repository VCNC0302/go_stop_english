window.addEventListener("load", function () {
  var game = new Phaser.Game({
    width: 1920,
    height: 1080,
    type: Phaser.AUTO,
    parent: "phaser-game",
    backgroundColor: "#ffffff",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
  });

  game.scene.add("Preload", Preload);
  game.scene.add("Home", Home);
  game.scene.add("Tip", Tip);
  game.scene.add("Level", Level);
  game.scene.add("Day", Day);
  game.scene.add("Pattern", Pattern);
  game.scene.add("Video", Video);
  game.scene.add("Warning", Warning);
  game.scene.add("Feedback", Feedback);
  game.scene.add("Ending", Ending);
  game.scene.add("Check", Check);
  game.scene.add("Card_Game_1", Card_Game_1);
  game.scene.add("Card_Game_2", Card_Game_2);
  game.scene.add("Card_Game_3", Card_Game_3);
  game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {
  preload() {
    this.load.pack("pack", "assets/preload-asset-pack.json");
  }

  create() {
    this.scene.start("Preload");
  }
}

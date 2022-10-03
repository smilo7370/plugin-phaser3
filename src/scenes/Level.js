// You can write more code here
var comments = "";
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

		// ninepatch_1
		const ninepatch_1 = this.add.ninePatch(719, 571, 780, 200, "Text-Box");
		ninepatch_1.marginLeft = 50;
		ninepatch_1.marginTop = 50;
		ninepatch_1.marginRight = 50;
		ninepatch_1.marginBottom = 50;

		const text = this.add.text(740, 585, 'Enter Your Comments', { fixedWidth: 750, fixedHeight: 360 });
		text.setOrigin(0);

		this.text = text;

		this.ninepatch_1 = ninepatch_1;

		this.events.emit("scene-awake");
	}

	/** @type {NinePatch} */
	ninepatch_1;
	text;

	/* START-USER-CODE */

	// Write more your code here

	preload() {
		this.load.scenePlugin({
			key: 'rexuiplugin',
			url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
			sceneKey: 'rexUI'
		});

		this.load.plugin('rextexteditplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexteditplugin.min.js', true);
	}

	create() {
		this.editorCreate();
		this.text.setInteractive().on('pointerdown', () => {
			this.input.keyboard.on('keydown-A', function (event) {
				comments = comments.concat('a');
				console.log(comments);
			});
		});
	}

	update() {
		if(comments != "") {
			this.text.setText(comments);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

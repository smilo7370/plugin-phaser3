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

		const text_line_1 = this.add.text(740, 585, '', { fixedWidth: 720, fixedHeight: 360 });
		text_line_1.setOrigin(0);
		const text_line_2 = this.add.text(740, 610, '', { fixedWidth: 720, fixedHeight: 360 });
		text_line_2.setOrigin(0);
		const text_line_3 = this.add.text(740, 635, '', { fixedWidth: 720, fixedHeight: 360 });
		text_line_3.setOrigin(0);
		const text_line_4 = this.add.text(740, 660, '', { fixedWidth: 720, fixedHeight: 360 });
		text_line_4.setOrigin(0);
		const text_line_5 = this.add.text(740, 685, '', { fixedWidth: 720, fixedHeight: 360 });
		text_line_5.setOrigin(0);
		const text_line_6 = this.add.text(740, 710, '', { fixedWidth: 720, fixedHeight: 360 });
		text_line_6.setOrigin(0);
		const text_line_7 = this.add.text(740, 735, '', { fixedWidth: 720, fixedHeight: 360 });
		text_line_7.setOrigin(0);

		this.text_line_1 = text_line_1;
		this.text_line_2 = text_line_2;
		this.text_line_3 = text_line_3;
		this.text_line_4 = text_line_4;
		this.text_line_5 = text_line_5;
		this.text_line_6 = text_line_6;
		this.text_line_7 = text_line_7;

		this.ninepatch_1 = ninepatch_1;

		this.events.emit("scene-awake");
	}

	/** @type {NinePatch} */
	ninepatch_1;
	text_line_1;
	text_line_2;
	text_line_3;
	text_line_4;
	text_line_5;
	text_line_6;
	text_line_7;
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
		const keys = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','SPACE','ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','NUMPAD_ZERO','NUMPAD_ONE','NUMPAD_TWO','NUMPAD_THREE','NUMPAD_FOUR','NUMPAD_FIVE','NUMPAD_SIX','NUMPAD_SEVEN','NUMPAD_NINE'];

		for(var i = 0; i <= keys.length ; i++) {
			this.input.keyboard.on('keydown-'+keys[i], function (event) {
				// if(comments.length != 450) {
					comments = comments.concat(event.key);
					console.log(comments);
				// }
			});
		}

		this.input.keyboard.on('keydown-'+'BACKSPACE', function (event) {
			this.scene.erase();
		});
	}

	erase() {
		if(this.text_line_7.text != '') {
			this.text_line_7.text = this.text_line_7.text.slice(0, -1);
			comments = comments.slice(0,-1);
		}
		else if(this.text_line_6.text != '') {
			this.text_line_6.text = this.text_line_6.text.slice(0, -1);
			comments = comments.slice(0,-1);
		}
		else if(this.text_line_5.text != '') {
			this.text_line_5.text = this.text_line_5.text.slice(0, -1);
			comments = comments.slice(0,-1);
		}
		else if(this.text_line_4.text != '') {
			this.text_line_4.text = this.text_line_4.text.slice(0, -1);
			comments = comments.slice(0,-1);
		}
		else if(this.text_line_3.text != '') {
			this.text_line_3.text = this.text_line_3.text.slice(0, -1);
			comments = comments.slice(0,-1);
		}
		else if(this.text_line_2.text != '') {
			this.text_line_2.text = this.text_line_2.text.slice(0, -1);
			comments = comments.slice(0,-1);
		}
		else if(this.text_line_1.text != '') {
			this.text_line_1.text = this.text_line_1.text.slice(0, -1);
			comments = comments.slice(0,-1);
		}
	}

	update() {
		if(comments != "") {
			if(this.text_line_1.text.length <= 75) {
				this.text_line_1.setText(comments);
			}
			else if(this.text_line_2.text.length <= 75) {
				this.text_line_2.setText(comments.slice(75));
			}
			else if(this.text_line_3.text.length <= 75) {
				this.text_line_3.setText(comments.slice(150));
			}
			else if(this.text_line_4.text.length <= 75) {
				this.text_line_4.setText(comments.slice(225));
			}
			else if(this.text_line_5.text.length <= 75) {
				this.text_line_5.setText(comments.slice(300));
			}
			else if(this.text_line_6.text.length <= 75) {
				this.text_line_6.setText(comments.slice(375));
			}
			else if(this.text_line_7.text.length <= 75) {
				this.text_line_7.setText(comments.slice(450));
			}
		}
		if(comments == "") {
			this.text_line_1.setText("Enter Your Comments");
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

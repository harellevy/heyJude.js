(function (window, undefined) {
	"use strict";

	var theBeatles = {
		heyJude: [
			[
				" make it bad. Take a sad song and make it better. ",
				" be afraid. You were made to go out and get her. ",
				" let me down. You have found her, now go and get her. "
			],
			[
				" let her into your heart. ",
				" let her under your skin. "
			],
			[
				" can start ",
				" begin "
			]
		],

		str: ["Hey, Jude. Don't", "Remember to", "Then you", "to make it better. "],

		song: function () {
			var len = this.heyJude.length,
				lyrics = "",
				times,
				i,
				j,
				x;

			for (i = 0; i < len; i += 1) {
				for (j = 0; j < len; j += 1) {
					if (i + 1 === len && j > 0) {
						x = this.heyJude[j].length - 1;

						lyrics += this.str[j] + this.heyJude[j][x];
					} else {
						lyrics += this.str[j] + this.heyJude[j][i];
					}
				}

				lyrics += this.str[this.heyJude.length];
			}

			lyrics += "better better betTER BETTER WAAA! ";

			for (times = 0; times < 3; times++) {
				for (i = 0; i < 16; i++) {
					lyrics += "NA ";
				}
				lyrics += "Hey jude ";
			}


			return lyrics;
		}
	};

	document.getElementById('heyJude').insertAdjacentHTML('beforeend', theBeatles.song());

	window.theBeatles = theBeatles || {};

}(this));
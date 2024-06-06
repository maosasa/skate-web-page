$(function() {
    $('.mainimg-tate').vegas({
        slides: [
            { src: './images/elisabeth_tate.jpeg' },
            { src: './images/friends_tate.jpeg' },
            { src: './images/sanka_tate.jpeg' },
            { src: './images/tango_tate.jpeg' },
            { src: './images/moonriver_tate.jpeg' },
        ],
		transition: 'blur',			//https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
		animation: 'kenburns',		//https://vegas.jaysalvat.com/documentation/transitions/から好みのanimationを選んで置き換えられます。
		delay: 6000,				//次の画像を表示するまでの時間
		animationDuration: 10000,	//アニメーション間の引き継ぎタイミング。
		timer: false,				//プログレスバーを非表示に。
    });
});


$(function() {
    $('.mainimg-yoko').vegas({
        slides: [
            { src: './images/elisabeth_yoko.jpeg' },	//1枚目の写真指定
            { src: './images/friends_yoko.jpeg' },	//2枚目の写真指定
            { src: './images/sanka_yoko.jpeg' },	//3枚目の写真指定
            { src: './images/tango_yoko.jpeg' },
            { src: './images/moonriver_yoko.jpeg' },
        ],
		transition: 'blur',			//https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
		animation: 'kenburns',		//https://vegas.jaysalvat.com/documentation/transitions/から好みのanimationを選んで置き換えられます。
		delay: 6000,				//次の画像を表示するまでの時間
		animationDuration: 10000,	//アニメーション間の引き継ぎタイミング。
		timer: false,				//プログレスバーを非表示に。
    });
});

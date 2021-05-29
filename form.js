class Form {

    constructor() {

        this.title = createElement('h1');
        this.input = createInput("NAME");
        this.button = createButton("PLAY");
        this.greeting = createElement('h3');

    }

    hide() {

        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();

    }

    display() {

        this.title.html("CAR RACING GAME");
        this.title.position(displayWidth / 2 - 50, 50);

        this.input.position(displayWidth/ 2 - 10, displayHeight / 2 - 80);

        this.button.position(displayWidth / 2 + 30, displayHeight / 2);

        this.button.mousePressed(()=>{

            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCnt = playerCnt + 1;
            player.index = playerCnt;
            player.updatePlayerInf();
            player.updatePlayerCnt(playerCnt);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);

        });
        
    }

}
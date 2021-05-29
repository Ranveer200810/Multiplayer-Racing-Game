class Player {

    constructor() {

        this.index = null;

        this.distance = 0;

        this.name = null;

    }

    getPlayerCount() {

        var playerCntRef = database.ref('playerCount');
        playerCntRef.on("value", (data)=>{
            playerCnt = data.val();
        });

    }

    updatePlayerCnt(count) {

        database.ref('/').update({

            'playerCount': count

        });

    }

    updatePlayerInf() {

        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({

            'name': this.name,
            'distance': this.distance

        });

    }

    static getPlayerInf() {

        console.log("getPlayerInf");
        var infoRef = database.ref("players");
        infoRef.on("value", (data)=>{

            allPlayers = data.val();

        });

        console.log(allPlayers);

    }

}
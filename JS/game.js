class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500,50,50);
    //player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500,50,50);
    //player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                var x = 0;
                var y = 0;
                var index = 0;
                for(var plr in allPlayers){
                //players[index].shapeColor=allPlayers[plr].color;
                 x = allPlayers[plr].x
                 y = allPlayers[plr].y
                 players[index].x = x
                 players[index].y = y
                 index++
                }
                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.x -= 10
                   
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.x += 10
                   
                }
                player.update();
                drawSprites();
    }
}

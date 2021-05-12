class Player{
    constructor(){

    }
    getCount(){
        var Count = database.ref('playerCount');
        Count.on('value', function(data){
            playerCount = data.val();
        });
        }

        updateCount(State){
            database.ref('/').update({
                playerCount:State
            });
        }
        update(name){
            var playerindex = "player"+ playerCount
            database.ref(playerindex).set({
                name:name
            })
        }
}
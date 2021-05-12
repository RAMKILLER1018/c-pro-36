class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("CAR RACING GAME");
        title.position(500,100);
        var input = createInput("name");
        input.position(500,200);
        var button = createButton('Play')
        button.position(500,250);

        var greeting = createElement('h3');
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var input1 = input.value();
            playerCount=playerCount+1
            player.update(input1)
            player.updateCount(playerCount);
            greeting.html("Hello "+ input1);
            greeting.position(500,250);
        })
    }
}
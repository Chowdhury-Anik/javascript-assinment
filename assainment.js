// https: //github.com/Chowdhury-Anik/javascript-assinment 


//  Kilometer to meter converter

function kilometerToMeter(kilometer) {
    var meter = 0;
    if (kilometer > 0) {
        meter = kilometer * 1000;
    } else if (kilometer <= 0) {
        return "Please enter a valid unit"
    }
    return meter;
}


// Hotel cost calculation

function hotelCost(stayTime) {
    var hotelRent = 0;
    if (stayTime <= 10) {
        firstPartCost = stayTime * 100;

    } else if (stayTime <= 20) {
        var firstPartCost = 10 * 100;
        var nextDays = stayTime - 10;
        var secondPartCost = nextDays * 80;
        hotelRent = firstPartCost + secondPartCost;
    } else {
        var firstPartCost = 10 * 100;
        var secondPartCost = 10 * 80;
        var nextDays = stayTime - 20;
        var thirdPartCost = nextDays * 50;
        hotelRent = firstPartCost + secondPartCost + thirdPartCost;

    }
    return hotelRent;
}


// Finding a longest friend name using function

var userName = ["Anik", "Manik", "Atikullha", "Debasish", "Ratan", "joyanta"];

function megaFriend(userName) {
    var maxword = userName[0];
    for (let i = 0; i < userName.length; i++) {
        const element = userName[i];
        if (element.length > maxword.length) {
            maxword = element;
        }

    }
    return maxword;
}
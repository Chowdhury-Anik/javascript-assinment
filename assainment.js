//  Kilometer to meter converter

function kilometerToMeter(kilometer) {
    var meter = 0;
    if (kilometer > 0) {
        meter = kilometer * 1000;
    } else if (kilometer <= 0) {
        return "Please enter a valid unit";
    }
    return meter;
}



//  Budget Calculator
function budgetCalculator(watch, mobile, laptop) {
    var total = (watch * 50) + (mobile * 100) + (laptop * 500);
    return total;
}
var totalPrice = budgetCalculator(5, 5, 15);






// Hotel cost calculation

function hotelCost(day){
    var totalCost;
    if(day > 0){                             //To avoid negative value.
        if (day <= 10){
            totalCost = day * 10;
            return totalCost;
        }
        else if(day <= 20){
            day = day - 10;
            totalCost = ((day * 80) + 1000);   //Day (1-10) total cost 1000 taka.
            return totalCost;
        }
        else if(day > 20){
            day = day - 20;
            totalCost = ((day * 50) + 1800);   //Day (1-20) total cost 1000 + 800 = 1800 Taka.
            return totalCost;
        }
    }
    else{
        return "Invalid Input!. Days can not be negative."  //If the value is negative.
    }
}


// Finding a longest friend name using function

var userName = ["Anik", "Manik", "Atikullha", "Debasish", "Ratan", "joyanta"];

function megaFriend(userName) {
    var maxword = userName[0];
    for (var i = 0; i < userName.length; i++) {
        var element = userName[i];
        if (element.length > maxword.length) {
            maxword = element;
        }

    }
    return maxword;
}

///TO DO
/// link up to site - press button and it shows
/// only show giver's, show recipient's number but keep them in console log and then use that


var people = [{
        number: 0,
        name: "Siobhan",
        everReceived: false,
        currentGiver: false,
        canGive: true
    },
    {
        number: 1,
        name: "Sam",
        everReceived: false,
        currentGiver: false,
        canGive: true
    },
    {
        number: 2,
        name: "Rob",
        everReceived: false,
        currentGiver: false,
        canGive: true
    },
    {
        number: 3,
        name: "Paul",
        everReceived: false,
        currentGiver: false,
        canGive: true
    },
    {
        number: 4,
        name: "Poly",
        everReceived: false,
        currentGiver: false,
        canGive: true
    },
    {
        number: 5,
        name: "Anisha",
        everReceived: false,
        currentGiver: false,
        canGive: true
    },
    {
        number: 6,
        name: "Juliet",
        everReceived: false,
        currentGiver: false,
        canGive: true
    },
    {
        number: 7,
        name: "Andy",
        everReceived: false,
        currentGiver: false,
        canGive: true
    },
    {
        number: 8,
        name: "Sue",
        everReceived: false,
        currentGiver: false,
        canGive: true
    }
];

var listOfGivers = [];
var listOfRecipients = [];

for (i = 0; i < people.length; i++) {
    var possibleGivers = [];
    //get the possible givers into an array
    people.forEach(value => {
        if (value.canGive) {
            possibleGivers.push(value.name);
        };
    });

    //choose a random giver
    var randomGiver = (Math.floor(Math.random() * (possibleGivers.length - 0)) + 0);
    var giver = possibleGivers[randomGiver];
    listOfGivers.push(giver);

    //set their canGive value to N so they can't be a giver again, and their currentGiver to Y so they can't receive
    people.forEach(value => {
        if (value.name === giver) {
            value.canGive = false;
            value.currentGiver = true;
        };
    });

    //get recipients (all people who are not the current giver, and have never been chosen to receive)
    var possibleRecipients = [];
    people.forEach(value => {
        if (!(value.everReceived)) {
            if (!(value.currentGiver)) {
                possibleRecipients.push(value.name);
            };
        };
    });

    //from the possible recipients, choose one
    var randomRecipient = (Math.floor(Math.random() * (possibleRecipients.length - 0)) + 0);
    var recipient = possibleRecipients[randomRecipient];
    listOfRecipients.push(recipient)

    //set their chosen value to Y so they can't receive again
    people.forEach(value => {
        if (value.name === recipient) {
            value.everReceived = true;
        };
        //reset values so the giver is no longer current giver
        if (value.name === giver) {
            value.currentGiver = false;
        };
    });

    //produces messages, incuding errors
    var message = ""
    message += `${giver} is buying for ${recipient}.`;
    if (giver === recipient) {
        message += " - Error, giver = recipient";
    } else if (recipient === undefined) {
        message += " - Error, recipient is undefined";
    } else if (giver === undefined) {
        message += " - Error, giver is undefined";
    }
    console.log(message)
};




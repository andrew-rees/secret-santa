var people = [{
        number: 0,
        name: "Jag",
        everReceived: false,
        currentGiver: false,
        canGive: true
    },
    {
        number: 1,
        name: "Ben",
        everReceived: false,
        currentGiver: false,
        canGive: true
    },
    {
        number: 2,
        name: "Sweta",
        everReceived: false,
        currentGiver: false,
        canGive: true
    },
    {
        number: 3,
        name: "Ross",
        everReceived: false,
        currentGiver: false,
        canGive: true
    },
    {
        number: 4,
        name: "Joanna",
        everReceived: false,
        currentGiver: false,
        canGive: true
    },
    {
        number: 5,
        name: "Pete",
        everReceived: false,
        currentGiver: false,
        canGive: true
    },
    {
        number: 6,
        name: "Andy",
        everReceived: false,
        currentGiver: false,
        canGive: true
    },
    {
        number: 7,
        name: "Cristina",
        everReceived: false,
        currentGiver: false,
        canGive: true
    },
    {
        number: 8,
        name: "Leighton",
        everReceived: false,
        currentGiver: false,
        canGive: true
    },
    {
        number: 9,
        name: "Nitika",
        everReceived: false,
        currentGiver: false,
        canGive: true
    }
];

var listOfGivers = [];
var listOfRecipients = [];

document.addEventListener("DOMContentLoaded", () => {

    var go = document.getElementById('submit');
    go.addEventListener('click', function (event) {


        for (i = 0; i < people.length; i++) {
            var possibleGivers = [];
            people.forEach(value => {
                if (value.canGive) {
                    possibleGivers.push(value.name);
                };
            });

            var randomGiver = (Math.floor(Math.random() * (possibleGivers.length - 0)) + 0);
            var giver = possibleGivers[randomGiver];
            listOfGivers.push(giver);

            people.forEach(value => {
                if (value.name === giver) {
                    value.canGive = false;
                    value.currentGiver = true;
                };
            });

            var possibleRecipients = [];
            var possibleRecipientNumbers = [];
            people.forEach(value => {
                if (!(value.everReceived)) {
                    if (!(value.currentGiver)) {
                        possibleRecipients.push(value.name);
                        possibleRecipientNumbers.push(value.number);
                    };
                };
            });

            var randomRecipient = (Math.floor(Math.random() * (possibleRecipients.length - 0)) + 0);
            var recipient = possibleRecipients[randomRecipient];
            var recipientNumber = possibleRecipientNumbers[randomRecipient];
            listOfRecipients.push(recipient);

            people.forEach(value => {
                if (value.name === recipient) {
                    value.everReceived = true;
                };
                if (value.name === giver) {
                    value.currentGiver = false;
                };
            });

            var messageConsole = "";
            var messagePage = "";
            messageConsole += `${giver} is buying for ${recipient}.`;
            messagePage += `${giver} is buying for ... Person ${recipientNumber + 1}` //sort this
            if (giver === recipient) {
                message += " - Error, giver = recipient";
            } else if (recipient === undefined) {
                message += " - Error, recipient is undefined";
            } else if (giver === undefined) {
                message += " - Error, giver is undefined";
            };
            console.log(messageConsole);
            displayResults();
        };

        function displayResults() {
            var line = document.createElement("p");
            var element = document.getElementById("results");
            var result = document.createTextNode(messagePage);

            line.appendChild(result);
            element.appendChild(line);
        }

    }); //end of eventListener

}, false); //end of DOMContentLoaded

//// FIRST EXERCISE [1]
function changesString(input){
let changingPart = input.shift()


for (let command of input){
    if (command !== 'Done') {
    let parts = command.split(' ');
    let firstCommand = parts[0];

    switch(firstCommand){
        case 'Change':
            let char = parts[1];
            let withReplaced = parts[2];

            changingPart = changingPart.split(char).join(withReplaced);
            console.log(changingPart);
            break;

        case "Includes":
            let string = parts.slice(1).join(' ');
            if (changingPart.includes(string)){
                console.log('True');
            } else {
                console.log('False');
                
            }
            break;

      case "End":
        let stringi = parts.slice(1).join(' ');
        if (changingPart.endsWith(stringi)){
            console.log('True')
        } else {
            console.log('False');
            
        }
        break;
        
        case "Uppercase": 
        changingPart = changingPart.toUpperCase();
        console.log(changingPart);
        break;


        case "FindIndex":
            let asd = parts[1];
            console.log(changingPart.indexOf(asd));
            break;

        case "Cut":
            let starting = Number(parts[1]);
            let count = Number(parts[2]);
            let cutStr = changingPart.substr(starting, count);
            console.log(cutStr);
            break;
        
    }

    }

}

}
changesString(["*S0ftUni is the B3St Plac3**",
"Change 2 o",
"Includes best",
"End is",
"Uppercase",
"FindIndex P",
"Cut 3 7",
"Done"])




//// SECOND EXERCISE [2]
function p2BossRush(input) {
    let lineFirst = Number(input.shift());

    for (let i = 0; i < lineFirst; i++) {
        if (!input[i]) {
            console.log("Access denied!");
            continue;
        }

        let inputs = input[i].trim();

        let [bossName, title] = inputs.split(':');

        if (!bossName || !title || !bossName.includes('|') || !title.includes('#')) {
            console.log(`Access denied!`);
            continue;
        }

        if (title.startsWith(' ')) {
            console.log(`Access denied!`);
            continue;
        }

        let boss = bossName.split('|')[1];
        title = title.split('#')[1];

        if (!boss || boss !== boss.toUpperCase() || boss.length < 4) {
            console.log(`Access denied!`);
            continue;
        }

        let words = title.split(' ');
        if (words.length !== 2) {
            console.log("Access denied!");
            continue;
        }

        let hasNumber = false;

        for (let word of words) {
            for (let char of word) {
                let code = char.charCodeAt(0);
                if (code >= 48 && code <= 57) {
                    hasNumber = true;
                    break;
                }
            }
            if (hasNumber) break;
        }

        if (hasNumber) {
            console.log(`Access denied!`);
            continue;
        }

        console.log(`${boss}, The ${title}`);
        console.log(`>> Strength: ${boss.length}`);
        console.log(`>> Armor: ${title.length}`);
    }
}

p2BossRush(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'])



////THIRD EXERCISE [3]
function messagesManager(input) {
    let maxCapacity = Number(input[0]);
    input.shift();

    let messages = {};
    let i = 0;

    while (input[i] !== "Statistics") {
        let asd = input[i].split('=');

        switch (asd[0]) {
            case "Add":
                let username = asd[1];
                let sent = Number(asd[2]);
                let received = Number(asd[3]);

                if (!messages.hasOwnProperty(username)) {
                    messages[username] = { sent: sent, received: received };
                }
                break;

            case "Message":
                let sender = asd[1];
                let receiver = asd[2];

                if (messages.hasOwnProperty(sender) && messages.hasOwnProperty(receiver)) {
                    messages[sender].sent++;
                    messages[receiver].received++;

                    if (messages[sender].sent + messages[sender].received >= maxCapacity) {
                        console.log(`${sender} reached the capacity!`);
                        delete messages[sender];
                    }

                    if (messages[receiver] && messages[receiver].sent + messages[receiver].received >= maxCapacity) {
                        console.log(`${receiver} reached the capacity!`);
                        delete messages[receiver];
                    }
                }
                break;

            case "Empty":
                let user = asd[1];
                if (user === "All") {
                    messages = {};
                } else {
                    delete messages[user];
                }
                break;
        }

        i++;
    }


    console.log(`Users count: ${Object.keys(messages).length}`);
    for (let user in messages) {
        let total = messages[user].sent + messages[user].received;
        console.log(`${user} - ${total}`);
    }
}

messagesManager(["12",
"Add=Bonnie=3=5",
"Add=Johny=4=4",
"Empty=All",
"Add=Bonnie=3=3",
"Statistics"])

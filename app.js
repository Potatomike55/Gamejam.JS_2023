class Room {
    constructor(_RoomName, _RoomPic, _RoomText, _RoomButtons) {
        this.RoomName = _RoomName;
        this.RoomPic = _RoomPic;
        this.RoomText = _RoomText;
        this.RoomButtons = _RoomButtons;
    }
}

class NavButton {
    constructor(_ButtonText, _ButtonDestination) {
        this.ButtonText = _ButtonText;
        this.ButtonDestination = _ButtonDestination;
    }
}

class ActionButton {
    constructor(_ButtonText, _ButtonAction) {
        this.ButtonText = _ButtonText;
        this.ButtonAction = _ButtonAction;
    }
}

class Pickup {
    constructor(_name, _use) {
        this.name = _name;
        this.use = _use;
    }
}

const Rooms = [
    new Room(
        "Starting Room",
        "./images/Placeholder.png",
        "Info about the current room",
        [
            new ActionButton(
                "Search the room",
                function () {
                    LoadRoom();
                    console.log("Action");
                    return 0;
                }
            ),
            new NavButton(
                "Move north",
                function () {
                    CurrentRoom = 1;
                    LoadRoom();
                }
            ),
            new NavButton(
                "Move south",
                function () {
                    CurrentRoom = 2;
                    LoadRoom();
                }
            )
        ]
    )
];

let CurrentRoom = 0;

const Inventory = [
    new Pickup(
        "Test Item 1",
        function () {
            console.log(1);
        }
    ),
    new Pickup(
        "Test Item 2",
        function () {
            console.log(2);
        }
    ),
    new Pickup(
        "Test Item 3",
        function () {
            console.log(3);
        }
    ),
];

const Stats = {
    TestStat1: 100,
    TestStat2: 100,
    TestStat3: 100
};

function Start() {
    LoadRoom();
    LoadInventory();
    LoadStats();
}

function LoadRoom() {
    $('header h1').text(Rooms[CurrentRoom].RoomName);
    $('#RoomPicture img').attr("src", Rooms[CurrentRoom].RoomPic);
    $('#RoomText h2').text(Rooms[CurrentRoom].RoomText);
    $('#RoomButtons').html("");
    for (let i = 0; i < Rooms[CurrentRoom].RoomButtons.length; i++) {
        let _NextButton = $('<button></button');
        _NextButton.text(Rooms[CurrentRoom].RoomButtons[i].ButtonText);
        if (Rooms[CurrentRoom].RoomButtons[i] instanceof NavButton) {
            _NextButton.click(Rooms[CurrentRoom].RoomButtons[i].ButtonDestination);
            _NextButton.addClass('NavButton btn btn-success');
        } else if (Rooms[CurrentRoom].RoomButtons[i] instanceof ActionButton) {
            _NextButton.click(Rooms[CurrentRoom].RoomButtons[i].ButtonAction);
            _NextButton.addClass('ActionButton btn btn-danger');
        }
        _NextButton.appendTo($('#RoomButtons'));
    }
}

function LoadInventory() {
    for (let i = 0; i < Inventory.length; i++) {
        let _NewItem = $('<div></div>');
        let _NewItemButton = $('<button></button>');
        _NewItemButton.text("Use");
        _NewItemButton.addClass('ItemButton btn');
        _NewItemButton.click(Inventory[i].use);
        _NewItemButton.appendTo(_NewItem);
        let _NewItemText = $('<p></p>')
        _NewItemText.text(Inventory[i].name);
        _NewItemText.addClass('ItemButton');
        _NewItemText.appendTo(_NewItem);
        _NewItem.appendTo($('#Inventory'));
    }
}

function LoadStats() {
    for (let key in Stats) {
        let _NewStat = $('<p></p>');
        _NewStat.text(key + ": " + Stats[key]);
        _NewStat.appendTo($('#Stats'));
    }
}

Start();
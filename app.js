class Pickup {
    constructor(_name, _use) {
        this.name = _name;
        this.use = _use;
    }
}

let Dialogue = "#BG:./images/salix_village_morning.png#"
    + "#LeftChar:./images/main_character_neutral.png#"
    + "#Name:None#The array of golden and crimson lightning bugs dance across the morning twilight, "
    + "coupled with the gentle song of the Saals' slumber has lulled me into a trance. The "
    + "sleeping village doesn't know what they're missing every morning. "
    + "Lost in a daydream, I don't realize how much time has passed until I feel the nudging "
    + "of Silum, the smallest of our Saal, reminding me it's feeding time."
    + "#Button-Talk:Continue#"
    + "#LeftChar:./images/main_character_happy.png#"
    + "#RightSaal:./images/saal_1.png#"
    + "#Name:Suulok#Is it daybreak already little one? Let's get your meal prepared then."
    + "#Button-Talk:Continue#"
    + "#RightSaal:None#"
    + "#Name:None#After taking care of the Saal, I'm approached by a member of my tribe"
    + "#Button-Talk:Continue#"
    + "#LeftChar:./images/main_character_neutral.png#"
    + "#RightChar:./images/salix_npc_1_neutral.png#"
    + "#Name:Salix Tribe Member#Hey master Suulok, the village head wishes to speak to you. Something about a trip to "
    + "the Larix village."
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#I was just finishing up here so I'll be right there."
    + "#Button-Talk:Continue#"
    + "#RightChar:./images/salix_npc_2_happy.png#"
    + "#Name:Salix Chief#Suulok, just the Sigmarii I wanted to see!"
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#Good morrow, Lisogg. What can I do for you?"
    + "#Button-Talk:Continue#"
    + "#RightChar:./images/salix_npc_2_neutral.png#"
    + "#Name:Lisogg#I have a very important favor to ask of you. Would you please take this gift basket to "
    + "the Larix?"
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#Surely there must be someone better to handle such a, uh, diplomatic matter chief."
    + "#Button-Talk:Continue#"
    + "#RightChar:./images/salix_npc_2_happy.png#"
    + "#Name:Lisogg#Ah, but none are as swift as you with the Saal. They wouldn't arrive until tomorrow's "
    + "dawn whereas you should arrive around dusk tonight."
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#..."
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#I take it this isn't something that can wait that long, then?"
    + "#Button-Talk:Continue#"
    + "#RightChar:./images/salix_npc_2_neutral.png#"
    + "#Name:Lisogg#It is of utmost importance this be delivered today, my dear friend. After all, it is the "
    + "anniversary of our alliance."
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#*Sigh* Lisogg, you didn't just remember that this morn did you?"
    + "#Button-Talk:Continue#"
    + "#Name:Lisogg#Hahaha, what would give you that impression?"
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#............."
    + "#Button-Talk:Continue#"
    + "#RightChar:./images/salix_npc_2_happy.png#"
    + "#Name:Lisogg#... Alright, alright. Maaaaybe I froggot. Ignoring that, I'm sure I can trust you with this, "
    + "can't I?"
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#Sometimes I wonder how you became chief. Very well though. I'll take care of it."
    + "#Button-Talk:Continue#"
    + "#Name:Lisogg#Hahaha, you sure know how to joke around! Much appreciated, my friend."
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#I suppose I should get my gear together. I'll be back overmorrow. I'll make sure to let "
    + "Dissuul know he's on Saal duty."
    + "#Button-Talk:Continue#"
    + "#RightChar:None#"
    + "#Name:None#I quickly gather my supplies and give Dissuul instructions on caring for the Saal before "
    + "heading out."
    + "#Button-Talk:Continue#"
    + "#BG:./images/skybox_day.png#"
    + "#LeftSaal:./images/main_saal_left.png#"
    + "#Name:Suulok#Ah, overgrown as always I see. No wonder the others take so long, right Selunn?"
    + "#Button-Talk:Continue#"
    + "#Name:None#As I'm talking to the Saal with me, I hear a very muffled voice."
    + "#Button-Talk:Continue#"
    + "#Name:????????#Hello? Nimmsoo?"
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#Who's there?"
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#....."
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#I must be hearing things."
    + "#Button-Talk:Continue#"
    + "#Name:????????#Gah! Where did that fool run off to? He didn't lose the ring, did he?"
    + "#Button-Talk:Continue#"
    + "#Name:None#Straining to locate where the muffled sound is coming from, I find a faint silver glowing "
    + "in the underbrush.Getting closer reveals a ring of twisted silver and gold overlapping "
    + "in the form of a ring. Picking it up confirms this is what the noise is coming from."
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#Ah, someone must've dropped their prate ring."
    + "#Button-Talk:Continue#"
    + "#Name:????????#Gah, Nimmsoo! What was the holdup?"
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#Ah, I'm not Nimmsoo. I found your prate ring on my journey."
    + "#Button-Talk:Continue#"
    + "#Name:????????#*Sigh* Then who might you be?"
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#I'm Suulok. And you are?"
    + "#Button-Talk:Continue#"
    + "#Name:????????#The name's Miimott. Where did you say you found the ring?"
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#Ah, I didn't."
    + "#Button-Talk:Continue#"
    + "#Name:Miimott#....."
    + "#Button-Talk:Continue#"
    + "#Name:Miimott#Well, are you going to?"
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#Not when you ask like that."
    + "#Button-Talk:Continue#"
    + "#Name:Miimott#Gah! The insolence!"
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#Ah, I can just leave the ring back where I found it if you'd like."
    + "#Button-Talk:Continue#"
    + "#Name:Miimott#....."
    + "#Button-Talk:Continue#"
    + "#Name:Miimott#Suulok, would you... please... tell me where you found the ring?"
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#Eh, needs work. I found it between the Larix and Salix villages."
    + "#Button-Talk:Continue#"
    + "#Name:Miimott#Hah? And what are you doing all the way out there?"
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#Trying to uphold alliances, I suppose."
    + "#Button-Talk:Continue#"
    + "#Name:Miimott#....."
    + "#Button-Talk:Continue#"
    + "#Name:Miimott#Are you..."
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#Ah, yes. I'm of the Salix. What is your tribe? I will bring the ring to you when I'm "
    + "finished at the Larix village."
    + "#Button-Talk:Continue#"
    + "#Name:Miimott#Hah! Salix you say? More importantly, I have an important message to impart on the "
    + "Larix! Would you mind delivering it since my messenger seems to have disappeared?"
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#Ah, I suppose so. Not like I'll have anything else to do while I'm there."
    + "#Button-Talk:Continue#"
    + "#Name:Miimott#Great! Would you tell the village head that I would like an audience with her?"
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#Very well. Miimott, was it? I'll pass it along."
    + "#Button-Talk:Continue#"
    + "#Name:Miimott#Wonderful. Now, if you'll excuse me I do have other pressing matters."
    + "#Button-Talk:Continue#"
    + "#Name:Suulok#Wait, wait, wait. I have some questions for you."
    + "#Button-Talk:Continue#"
    + "#Name:Miimott#......"
    + "#Button-Talk:Continue#"
    + "#Name:Suulokk#Ah great. They're gone already. Alright, let's continue on then Selunn. No use "
    + "dawdling around all day."
    + "#End#";

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

function ParseDialogue(_dialogue) {
    _dialogue = ParseBG(_dialogue);
    _dialogue = ParseLeftChar(_dialogue);
    _dialogue = ParseRightChar(_dialogue);
    _dialogue = ParseLeftSaal(_dialogue);
    _dialogue = ParseRightSaal(_dialogue);
    _dialogue = ParseName(_dialogue);
    _dialogue = ParseNextLines(_dialogue);
    _dialogue = ParseButtons(_dialogue);
    return _dialogue;
}

function ParseNextLines(_dialogue) {
    $('#Dialogue p').text(_dialogue.slice(0, _dialogue.indexOf("#")));
    return _dialogue.substr(_dialogue.indexOf("#"));
}

function ParseBG(_dialogue) {
    let _bgstart = _dialogue.indexOf("#BG:");
    let _bg = "";
    if (_bgstart == 0) {
        _dialogue = _dialogue.slice(_dialogue.indexOf(":") + 1);
        _bg = _dialogue.slice(0, _dialogue.indexOf("#"));
        _dialogue = _dialogue.substr(_dialogue.indexOf("#") + 1);
        $('#bg').attr("src", _bg);
    }
    return _dialogue;
}

function ParseLeftChar(_dialogue) {
    let _leftcharstart = _dialogue.indexOf("#LeftChar:");
    let _leftchar = "";
    if (_leftcharstart == 0) {
        _dialogue = _dialogue.slice(_dialogue.indexOf(":") + 1);
        _leftchar = _dialogue.slice(0, _dialogue.indexOf("#"));
        _dialogue = _dialogue.substr(_dialogue.indexOf("#") + 1);
        if (_leftchar != "None") $('#left_char').attr("src", _leftchar);
        else $('#left_char').attr("src", "");
    }
    return _dialogue;
}

function ParseRightChar(_dialogue) {
    let _rightcharstart = _dialogue.indexOf("#RightChar:");
    let _rightchar = "";
    if (_rightcharstart == 0) {
        _dialogue = _dialogue.slice(_dialogue.indexOf(":") + 1);
        _rightchar = _dialogue.slice(0, _dialogue.indexOf("#"));
        _dialogue = _dialogue.substr(_dialogue.indexOf("#") + 1);
        if (_rightchar != "None") $('#right_char').attr("src", _rightchar);
        else $('#right_char').attr("src", "");
    }
    return _dialogue;
}

function ParseLeftSaal(_dialogue) {
    let _leftsaalstart = _dialogue.indexOf("#LeftSaal:");
    let _leftsaal = "";
    if (_leftsaalstart == 0) {
        _dialogue = _dialogue.slice(_dialogue.indexOf(":") + 1);
        _leftsaal = _dialogue.slice(0, _dialogue.indexOf("#"));
        _dialogue = _dialogue.substr(_dialogue.indexOf("#") + 1);
        if (_leftsaal != "None") $('#left_saal').attr("src", _leftsaal);
        else $('#left_saal').attr("src", "");
    }
    return _dialogue;
}

function ParseRightSaal(_dialogue) {
    let _rightsaalstart = _dialogue.indexOf("#RightSaal:");
    let _rightsaal = "";
    if (_rightsaalstart == 0) {
        _dialogue = _dialogue.slice(_dialogue.indexOf(":") + 1);
        _rightsaal = _dialogue.slice(0, _dialogue.indexOf("#"));
        _dialogue = _dialogue.substr(_dialogue.indexOf("#") + 1);
        if (_rightsaal != "None") $('#right_saal').attr("src", _rightsaal);
        else $('#right_saal').attr("src", "");
    }
    return _dialogue;
}

function ParseName(_dialogue) {
    let _nextnamestart = _dialogue.indexOf("#Name:");
    let _nextname = "";
    if (_nextnamestart == 0) {
        _dialogue = _dialogue.slice(_dialogue.indexOf(":") + 1);
        _nextname = _dialogue.slice(0, _dialogue.indexOf("#"));
        _dialogue = _dialogue.substr(_dialogue.indexOf("#") + 1);
        if (_nextname != "None") $('#NameText h2').text(_nextname);
        else $('#NameText h2').text("");
    }
    return _dialogue;
}

function ParseButtons(_dialogue) {
    let _nextbuttonstart = _dialogue.indexOf("#Button");
    let _nextbutton = "";
    let _nextbuttontype = "";
    if (_nextbuttonstart == 0) {
        _dialogue = _dialogue.slice(_dialogue.indexOf("-") + 1);
        _nextbuttontype = _dialogue.slice(0, _dialogue.indexOf(":"));
        _nextbutton = _dialogue.slice(_dialogue.indexOf(":") + 1, _dialogue.indexOf("#"));
        _dialogue = _dialogue.substr(_dialogue.indexOf("#") + 1);
        let _newbutton = $('<button></button>');
        _newbutton.text(_nextbutton);
        if (_nextbuttontype == "Talk") {
            _newbutton.addClass("TalkButton btn btn-primary");
            _newbutton.click(function () {
                $('#RoomButtons').html("");
                Dialogue = ParseDialogue(Dialogue);
            });
        }
        _newbutton.appendTo($('#RoomButtons'));
    }
    return _dialogue;
}

Dialogue = ParseDialogue(Dialogue);
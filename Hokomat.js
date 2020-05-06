var multiple = 16;
var firstId = 5000;
var HokamatList =[
    {
        id: getId(),
        content: "ماد",
        start: -107008769700000,
        end: -99119594700000,
        style : getStyle(),
        type: "background"
    },
    {
        id: getId(),
        content: "هخامنشی",
        start: -99403605000000,
        end: -92177120700000,
        style : getStyle(),
        type: "background"
    },
    {
        id: getId(),
        content: "سلوکیان <br> اشکانیان",
        start: -92177120700000,
        end: -74694708900000,
        style : getStyle(),
        type: "background"
    },
    {
        id: getId(),
        content: "ساسانیان",
        start: -74694708900000,
        end: -61219998000000,
        style : getStyle(),
        type: "background"
    },
    {
        id: getId(),
        content: "اعراب",
        start: -61219998000000,
        end: -55855359000000,
        style : getStyle(),
        type: "background"
    },
    {
        id: getId(),
        content: "طاهریان",
        start: -55886915700000,
        end: -54214410600000,
        style : getStyle(),
        type: "background"
    },
    {
        id: getId(),
        content: "صفاریان <br> سامانیان <br> آل بویه <br> آل زیار",
        start: -54151297200000,
        end: -47997740700000,
        style : getStyle(),
        type: "background"
    },
    {
        id: getId(),
        content: "غزنویان <br> سلجوقیان <br> خوارزمشاهیان",
        start: -50269823100000,
        end: -43264235700000,
        style : getStyle(),
        type: "background"
    },
    {
        id: getId(),
        content: "ایلخانیان",
        start: -43327349100000,
        end: -39635215200000,
        style : getStyle(),
        type: "background"
    },
    {
        id: getId(),
        content: "تیموریان",
        start: -38562287400000,
        end: -34491473100000,
        style : getStyle(),
        type: "background"
    },
    {
        id: getId(),
        content: "صفویان",
        start: -34428359700000,
        end: -27391215600000,
        style : getStyle(),
        type: "background"
    },
    {
        id: getId(),
        content: "افشاریان",
        start: -27012535200000,
        end: -26602298100000,
        style : getStyle(),
        type: "background"
    },
    {
        id: getId(),
        content: "زندیان",
        start: -26539184700000,
        end: -25150689900000,
        style : getStyle(),
        type: "background"
    },
    {
        id: getId(),
        content: "قاجاریان",
        start: -25150689900000,
        end: -21016762200000,
        style : getStyle(),
        type: "background"
    },
    {
        id: getId(),
        content: "پهلوی",
        start: -21016762200000,
        end: -19344257100000,
        style : getStyle(),
        type: "background"
    },
    {
        id: getId(),
        content: "جمهوری اسلامی",
        start: -19344257100000,
        end: -17000000000000,
        style : getStyle(),
        type: "background"
    }
];

function getId() {
    firstId = firstId - 1
    return firstId
}

function getStyle() {
    return "background-color:" + increase_brightness() +"; opacity: 0.8; border:0px 1px solid white;"
}


function increase_brightness(){
    hex = "#000000";
    multiple = multiple - 1;
    var p = 5;
    var percent = p * multiple;
    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if(hex.length == 3){
        hex = hex.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(hex.substr(0, 2), 16),
        g = parseInt(hex.substr(2, 2), 16),
        b = parseInt(hex.substr(4, 2), 16);
    
    return '#' +
       ((0|(1<<8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
}


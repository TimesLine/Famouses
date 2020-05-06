var firstId = 0;
var famousesList =[
    {
        id: getId(),
        content: "عطار",
        start: -45630988200000,
        end: -43264235700000
    },
    {
        id: getId(),
        content: "حافظ",
        start: -40297905900000,
        end: -37931153400000
    },
    {
        id: getId(),
        content: "سعدی",
        start: -43579802700000,
        end: -41023710000000
    },
    {
        id: getId(),
        content: "غزالي",
        start: -48407977800000,
        end: -46735472700000
    },
    {
        id: getId(),
        content: "رازي",
        start: -54498420900000,
        end: -52573462200000
    },
    {
        id: getId(),
        content: "سنایی",
        start: -47713730400000,
        end: -45788771700000
    },
    {
        id: getId(),
        content: "ابن سينا",
        start: -50837843700000,
        end: -49039111800000
    },
    {
        id: getId(),
        content: "جابر بن حیان",
        start: -59042585700000,
        end: -56076255900000
    },
    {
        id: getId(),
        content: "مولوي",
        start: -43674472800000,
        end: -41591730600000,
    },
    {
        id: getId(),
        content: "شمس تبريزي",
        start: -44337163500000,
        end: -42412204800000,
    },
    {
        id: getId(),
        content: "فردوسي",
        start: -52068555000000,
        end: -49417792200000,
    },
    {
        id: getId(),
        content: "كمال الملك",
        start: -23478184800000,
        end: -20543411700000,
    },
    {
        id: getId(),
        content: "امير كبير",
        start: -24772009500000,
        end: -23351958000000,
    },
    {
        id: getId(),
        content: "خوارزمی",
        start: -56486493000000,
        end: -55003328100000,
    },
    {
        id: getId(),
        content: "فارابی",
        start: -54277524000000,
        end: -51816101400000,
    },
    {
        id: getId(),
        content: "ابوسعيد ابوالخير",
        start: -51248080800000,
        end: -48691988100000,
    },
    {
        id: getId(),
        content: "عنصری بلخی",
        start: -51437421000000,
        end: -48944441700000,
    },
    {
        id: getId(),
        content: "ابوریحان بیرونی",
        start: -51058740600000,
        end: -48691988100000,
    },
    {
        id: getId(),
        content: "ابوالوفا محمد بوزجانی",
        start: -52100111700000,
        end: -50332936500000,
    },
    {
        id: getId(),
        content: "ابوالفضل بیهقی",
        start: -50490720000000,
        end: -47776843800000,
    },
    {
        id: getId(),
        content: "ناصرخسرو",
        start: -50080482900000,
        end: -47429720100000,
    },
    {
        id: getId(),
        content: "خیام",
        start: -48691988100000,
        end: -46072782000000,
    },
    {
        id: getId(),
        content: "خواجه عبدالله انصاری",
        start: -50017369500000,
        end: -46987926300000,
    },
    {
        id: getId(),
        content: "خواجه نصیرالدین طوسی",
        start: -43895369700000,
        end: -41560173900000,
    },
    {
        id: getId(),
        content: "قطب‌الدین شیرازی",
        start: -42790885200000,
        end: -40424132700000,
    },
    {
        id: getId(),
        content: "غیاث‌الدین جمشید کاشانی",
        start: -38246720400000,
        end: -36668885400000,
    },
    {
        id: getId(),
        content: "جامی",
        start: -37142235900000,
        end: -34680813300000,
    },
    {
        id: getId(),
        content: "شیخ بهایی",
        start: -32945194800000,
        end: -30609999000000,
    },
    {
        id: getId(),
        content: "ملاصدرا",
        start: -32187834000000,
        end: -30168205200000,
    },
    {
        id: getId(),
        content: "صائب تبریزی",
        start: -31525143300000,
        end: -28874380500000,
    },
    {
        id: getId(),
        content: "سهروردی",
        start: -45346977900000,
        end: -44179380000000,
    },
    {
        id: getId(),
        content: "شیخ محمود شبستری",
        start: -41118380100000,
        end: -40108565700000,
    },
    {
        id: getId(),
        content: "كوروش بزرگ",
        start: -99403605000000,
        end: -98456904000000,
    },
    {
        id: getId(),
        content: "آریوبرزن",
        start: -93376275300000,
        end: -92177120700000,
    },
    {
        id: getId(),
        content: "نيما يوشيج",
        start: -21900349800000,
        end: -19943834400000,
    },
    {
        id: getId(),
        content: "سهراب سپهري",
        start: -20922092100000,
        end: -19281143700000,
    },
    {
        id: getId(),
        content: "مهدي اخوان ثالث",
        start: -20922092100000,
        end: -18965576700000,
    },
    {
        id: getId(),
        content: "پروین اعتصامی",
        start: -21616339500000,
        end: -20511855000000,
    },
    {
        id: getId(),
        content: "جلال آل احمد",
        start: -21079875600000,
        end: -19628267400000,
    },
    {
        id: getId(),
        content: "وحشی بافقی",
        start: -33418545300000,
        end: -31840710300000,
    },
    {
        id: getId(),
        content: "ملك الشعرا بهار",
        start: -22247473500000,
        end: -20196288000000,
    },
    {
        id: getId(),
        content: "رودكي",
        start: -54687761100000,
        end: -52100111700000,
    },
    {
        id: getId(),
        content: "باباطاهر",
        start: -51879214800000,
        end: -49196895300000,
    },
    {
        id: getId(),
        content: "بایزید بسطامی",
        start: -57086070300000,
        end: -53930400300000,
    }
];
function getId() {
    firstId = firstId + 1
    return firstId
}


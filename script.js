var notes = ['37', '39', '41', '42', '44', '46', '48', '49', '51', '53', '54', '56', '58', '60', '61']
var sheet =
    [[1495, 14], [1516, 5], [2018, 13], [2040, 0], [2542, 9], [2564, 2], [3065, 14], [3589, 13], [4113, 9], [4636, 14], [5160, 13], [5684, 9], [6207, 14], [6731, 13], [7255, 9], [7778, 14], [9895, 5], [10418, 2], [10942, 5], [11444, 6], [11967, 7], [12491, 9], [13538, 8], [14081, 4], [14607, 1], [15131, 4], [15633, 6], [16156, 4], [16680, 6], [17727, 6], [18273, 3], [18796, 0], [19298, 7], [19320, 3], [19822, 5], [21393, 4], [21916, 5], [22460, 3], [22985, 0], [23509, 3], [24033, 0], [24535, 13], [24556, 4], [25080, 1], [25582, 14], [25604, 4], [26127, 1], [26649, 5], [27175, 2], [27698, 5], [28200, 6], [28724, 7], [29247, 9], [30295, 8], [30838, 4], [31364, 1], [31887, 4], [32389, 8], [32913, 11], [33436, 10], [34484, 10], [35005, 10], [35029, 3], [35553, 0], [36055, 11], [36076, 3], [36578, 9], [38149, 8], [38673, 9], [39216, 3], [39742, 0], [40265, 3], [40789, 0], [41291, 13], [41313, 4], [41836, 1], [42338, 14], [42360, 4], [42884, 1], [43405, 5], [43931, 2], [44455, 5], [44956, 6], [45480, 7], [46004, 9], [47051, 8], [47594, 4], [48120, 1], [48644, 4], [49145, 6], [49669, 4], [50193, 6], [51240, 6], [51785, 3], [52309, 0], [52811, 7], [52833, 3], [53335, 5], [54905, 4], [55429, 5], [55972, 3], [56498, 0], [57022, 3], [57545, 0], [58047, 13], [58069, 4], [58593, 1], [59095, 14], [59116, 4], [59640, 1], [60161, 5], [60687, 2], [61211, 5], [61713, 6], [62236, 7], [62760, 9], [63807, 8], [64351, 4], [64876, 1], [65400, 4], [65902, 8], [66425, 11], [66949, 10], [67996, 10], [68518, 10], [68542, 3], [69065, 0], [69567, 11], [69589, 3], [70091, 9], [71662, 8], [72185, 9], [72729, 3], [73255, 0], [73778, 3], [74302, 0], [74825, 4], [76918, 3], [76922, 12], [77042, 13], [77158, 14], [77422, 13], [77444, 0], [77945, 11], [77967, 5], [78469, 9], [78491, 0], [79015, 4], [79538, 1], [80040, 8], [80062, 6], [80564, 9], [80585, 1], [81107, 5], [81611, 8], [81633, 2], [82135, 9], [82156, 0], [82658, 11], [82680, 2], [83204, 6], [83705, 8], [83727, 2], [84229, 9], [84251, 5], [84753, 11], [84775, 2], [85246, 12], [85296, 3], [85333, 13], [85433, 14], [85800, 13], [85822, 0], [86324, 14], [86345, 5], [86847, 8], [86869, 0], [87393, 4], [87895, 14], [87916, 1], [88418, 8], [88440, 6], [88942, 8], [88964, 1], [89485, 5], [89989, 9], [90011, 2], [90513, 10], [90535, 0], [91036, 9], [91058, 2], [91582, 6], [92084, 14], [92105, 2], [92607, 13], [92629, 5], [93131, 11], [93153, 2], [93674, 3], [93679, 12], [93799, 13], [93914, 14], [94178, 13], [94200, 0], [94702, 11], [94724, 5], [95225, 9], [95247, 0], [95771, 4], [96295, 1], [96796, 8], [96818, 6], [97320, 9], [97342, 1], [97863, 5], [98367, 8], [98389, 2], [98891, 9], [98913, 0], [99415, 11], [99436, 2], [99960, 6], [100462, 8], [100484, 2], [100985, 9], [101007, 5], [101509, 11], [101531, 2], [102028, 12], [102052, 3], [102159, 13], [102305, 14], [102556, 13], [102578, 0], [103080, 14], [103102, 5], [103604, 8], [103625, 0], [104149, 4], [104651, 13], [104673, 1], [105175, 13], [105196, 6], [105698, 14], [105720, 1], [106241, 5], [106767, 2], [107291, 0], [107815, 2], [108338, 6], [108862, 2], [109385, 5], [109909, 2], [110431, 3], [110435, 12], [110555, 13], [110671, 14], [110935, 13], [110956, 0], [111458, 11], [111480, 5], [111982, 9], [112004, 0], [112527, 4], [113051, 1], [113553, 8], [113575, 6], [114076, 9], [114098, 1], [114620, 5], [115124, 8], [115145, 2], [115647, 9], [115669, 0], [116171, 11], [116193, 2], [116716, 6], [117218, 8], [117240, 2], [117742, 9], [117764, 5], [118265, 11], [118287, 2], [118759, 12], [118809, 3], [118846, 13], [118946, 14], [119313, 13], [119335, 0], [119836, 14], [119858, 5], [120360, 8], [120382, 0], [120905, 4], [121407, 14], [121429, 1], [121931, 8], [121953, 6], [122455, 8], [122476, 1], [122998, 5], [123502, 9], [123524, 2], [124025, 10], [124047, 0], [124549, 9], [124571, 2], [125095, 6], [125596, 14], [125618, 2], [126120, 13], [126142, 5], [126644, 11], [126665, 2], [127187, 3], [127191, 12], [127311, 13], [127427, 14], [127691, 13], [127713, 0], [128215, 11], [128236, 5], [128738, 9], [128760, 0], [129284, 4], [129807, 1], [130309, 8], [130331, 6], [130833, 9], [130855, 1], [131376, 5], [131880, 8], [131902, 2], [132404, 9], [132425, 0], [132927, 11], [132949, 2], [133473, 6], [133975, 8], [133996, 2], [134498, 9], [134520, 5], [135022, 11], [135044, 2], [135541, 12], [135565, 3], [135672, 13], [135818, 14], [136069, 13], [136091, 0], [136593, 14], [136615, 5], [137116, 8], [137138, 0], [137662, 4], [138164, 13], [138185, 1], [138687, 13], [138709, 6], [139211, 14], [139233, 1], [139754, 0], [140280, 4], [140804, 0], [141327, 4], [141851, 6], [141873, 13], [142375, 4], [142898, 6], [143422, 4], [143943, 4], [144469, 2], [144993, 4], [145516, 2], [146040, 2], [146564, 6], [147087, 2], [147611, 6], [148198, 6], [152324, 4], [152847, 0], [153371, 1], [153895, 2], [154418, 4], [154942, 1], [155465, 2], [155989, 4], [156491, 13], [156513, 1], [157036, 2], [157560, 4], [158084, 1], [158585, 14], [158607, 2], [159131, 4], [159655, 1], [160178, 2], [160680, 9], [160702, 4]]
var context = null;
var TPMS = 10;//ticks per ms
var TPMSBASE = 10;//ticks per ms
var SLEEP = 1;
var curIndex = 0;
var curTick = 0;
var maxValue = 0;
var curIns = 0;
var sounds = [new Array(15), new Array(15)];
var dlId = new Array(100);
var audioBuffers = new Array(100);
var dlCnt = 0;
var dlNum = 30;

function getSounds(index, insid, ins, suffix = ".wav") {
    var request = new XMLHttpRequest();
    request.open('GET', ins + "/" + (notes[index]) + suffix, true);
    request.responseType = 'arraybuffer';
    request.onload = function () {
        dlId[dlCnt] = [insid, index]
        audioBuffers[dlCnt++] = request.response;
        $("#initProcess").text(Math.ceil(dlCnt / dlNum * 100) + "%")
        if (dlCnt === dlNum) {
            $("#initProcess").hide();
            $("#gobtn").show();
        }
    };
    request.send();
}


function playSound(buffer) {
    var source = context.createBufferSource(), g = context.createGain();
    source.buffer = buffer;
    source.start(0);
    g.gain.value = 0.5;
    source.connect(g);
    g.connect(context.destination);
}

function playNote(index, stay) {
    playSound(sounds[curIns][index]);
    //animate
    $("#key" + index).addClass("keys_on");
    $("#key" + index + " .flip")[0].style.animation = 'none';
    $("#key" + index + " .flip")[0].offsetHeight;
    $("#key" + index + " .flip")[0].style.animation = "tap 0.3s linear";
    if (!stay) {
        setTimeout(function () {
            $("#key" + index).removeClass("keys_on");
        }, 100)
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function playInterval(stay) {
    if (stay) for (let i = 0; i < 15; i++) $("#key" + i).removeClass("keys_on");
    while (curIndex < sheet.length && sheet[curIndex][0] - curTick <= TPMS) {
        playNote(sheet[curIndex][1], stay);
        curIndex++;
    }
    $("#slider").val(curTick);
}

function playNext() {
    if (curIndex >= sheet.length) return false;
    playInterval();
    curTick += TPMS + 1;
    return true;
}

function prev() {
    var prevInterval = function () {
        if (curIndex <= 0) return false;
        curTick = sheet[curIndex - 1][0];
        while (curIndex > 0 && curTick - sheet[curIndex - 1][0] <= TPMS) curIndex--;
        return true;
    };
    if (prevInterval() && prevInterval()) {
        playInterval(1);
        return true;
    }
    return false;
}

function next() {
    if (curIndex >= sheet.length) return false;
    curTick = sheet[curIndex][0];
    playInterval(1);
    return true;
}

var playing = false;

async function playAll() {
    playing = true;
    let it = 0;
    while (playing && playNext()) await sleep(SLEEP);
    if (playing && !playNext()) $("#playbtn").click()
}

$(document).ready(function () {
    for (let i = 0; i < 15; i++) getSounds(i, 0, "v1", ".wav");
    for (let i = 0; i < 15; i++) getSounds(i, 1, "piano", ".mp3");
    for (let i = 0; i < sheet.length; i++) if (maxValue < sheet[i][0]) maxValue = sheet[i][0];
    $("#slider").attr("max", maxValue);
    document.addEventListener('touchmove', function (event) {
        if (event.scale !== 1) {
            event.preventDefault();
        }
    }, {passive: false});

    $("#pause").hide();

    const clickEvent = (function () {
        if ('ontouchstart' in document.documentElement)
            return 'touchstart';
        else
            return 'click';
    })();

    const mouseupEvent = (function () {
        if ('ontouchend' in document.documentElement)
            return 'touchend';
        else
            return 'mouseup';
    })();

    const mousedownEvent = (function () {
        if ('ontouchstart' in document.documentElement)
            return 'touchstart';
        else
            return 'mousedown';
    })();

    var queue = []
    var res = ["9", "7", "4", "7", "8", "11", "4", "8", "9", "8", "4", "7"]

    $(".keys").on(clickEvent, function (e) {
        let note = e.currentTarget.dataset.note;
        queue.push(note)
        if (queue.length > 12) queue.shift();
        if (JSON.stringify(queue) === JSON.stringify(res)) {
            $("#chocolate")[0].style.opacity = 1;
            $("#chocolate").show();
        }
        playNote(note, false);
    });

    $("#playbtn").click(function (e) {
        if (playing) {
            playing = false;
            $("#pause").hide();
            $("#play").show();
        } else {
            $("#pause").show();
            $("#play").hide();
            playAll();
        }
    });

    $("#prevbtn").click(function (e) {
        if (playing) $("#playbtn").click();
        prev();
    });

    $("#nextbtn").click(function (e) {
        if (playing) $("#playbtn").click();
        next();
    });

    $("#gobtn").click(function (e) {
        $(".mask").hide();
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        context = new AudioContext();
        for (let i = 0; i < dlNum; i++) {
            context.decodeAudioData(audioBuffers[i], function (buffer) {
                sounds[dlId[i][0]][dlId[i][1]] = buffer;
            }, function (e) {
                console.log(e)
            });
        }
    });

    $("#closebtn").hide();
    $("#gobtn").hide();
    $("#closebtn").click(function (e) {
        $("#menubtn").show();
        $("#closebtn").hide();
        $("#menu")[0].style.top = "-100vh";
    });
    $("#menubtn").click(function (e) {
        $("#menubtn").hide();
        $("#closebtn").show();
        $("#menu")[0].style.top = "0";
    });
    $(document).on('keydown', function (event) {
        var key = String.fromCharCode(event.keyCode);
        console.log(key)
        console.log(key == 'Q')
        if (key == 'Q') $("#key0").click();
        if (key == 'W') $("#key1").click();
        if (key == 'E') $("#key2").click();
        if (key == 'R') $("#key3").click();
        if (key == 'T') $("#key4").click();
        if (key == 'A') $("#key5").click();
        if (key == 'S') $("#key6").click();
        if (key == 'D') $("#key7").click();
        if (key == 'F') $("#key8").click();
        if (key == 'G') $("#key9").click();
        if (key == 'Z') $("#key10").click();
        if (key == 'X') $("#key11").click();
        if (key == 'C') $("#key12").click();
        if (key == 'V') $("#key13").click();
        if (key == 'B') $("#key14").click();
    });
    var prePlaying = false;
    $('#slider').on(mousedownEvent, function (e) {
        prePlaying = playing;
        if (playing) $("#playbtn").click();
    });
    $('#slider').on(mouseupEvent, function () {
        for (let i = 0; i < sheet.length; i++) {
            if ($(this).val() <= sheet[i][0]) {
                curIndex = i;
                curTick = sheet[i][0];
                break;
            }
        }
        setTimeout(function () {
            if (prePlaying) $("#playbtn").click();
        }, 20)
    });
    $(".ins").on(mouseupEvent, function (e) {
        let value = e.currentTarget.dataset.value;
        $(".ins").each(function () {
            $(this)[0].style.color = null
        });
        $(this)[0].style.color = "deepskyblue";
        curIns = value
    });
    $(".ins")[curIns].style.color = "deepskyblue";

    $(".speed").on(mouseupEvent, function (e) {
        let value = e.currentTarget.dataset.value;
        $(".speed").each(function () {
            $(this)[0].style.color = null
        });
        $(this)[0].style.color = "deepskyblue";
        if (value == 0) TPMS = Math.floor(TPMSBASE * 0.5);
        if (value == 1) TPMS = Math.floor(TPMSBASE * 1);
        if (value == 2) TPMS = Math.floor(TPMSBASE * 1.5);
        if (value == 3) TPMS = Math.floor(TPMSBASE * 2);
    });
    $(".speed")[1].style.color = "deepskyblue";
})
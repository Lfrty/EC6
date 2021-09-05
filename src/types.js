var n = 8;
var isToday = true;
var names = ['Edu', "Miguel", "Matt", 6];
var gatos;
(function (gatos) {
    gatos[gatos["Persa"] = 0] = "Persa";
    gatos[gatos["Siames"] = 1] = "Siames";
    gatos[gatos["egipcio"] = 2] = "egipcio";
})(gatos || (gatos = {}));
var cat = gatos.egipcio;

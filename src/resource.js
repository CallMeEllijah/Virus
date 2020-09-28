var res = {
    HelloWorld_png : "res/HelloWorld.png",
    c1_png : "res/characters_0001.png",
    c2_png : "res/characters_0002.png",
    c3_png : "res/characters_0003.png",
    c4_png : "res/characters_0004.png",
    c5_png : "res/characters_0005.png",
    c6_png : "res/characters_0006.png",
    popupBase: "res/Button9SliceLogo.png",
    button9slicePng: "res/Button9Slice.png",
    button9sliceSelectedPng: "res/Button9SliceSelected.png",
    pixel_font: {
        type: "font",
        name: "Pixel",
        srcs: ["res/fonts/slkscr.ttf"],
    }
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

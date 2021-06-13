// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile18 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile19 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile20 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile23 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile24 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile25 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile26 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile27 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile28 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Menu":
            case "level1":return tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101010101010101010201010101010101010603010101010101010105010101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7], TileScale.Sixteen);
            case "Breakaway":
            case "level2":return tiles.createTilemap(hex`0a001800010101010302010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104040101010101010101010101010101`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile5,myTiles.tile8,myTiles.tile9], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`0a00080010101010101010101010100d0f0f0f0f0f0f0e1009060c0c0c0c0c0c070908030808080808080508080308080808080805080a020b0b0b0b0b0b040a0101010101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile10,myTiles.tile12,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile10":
            case "tile12":return tile12;
            case "myTile12":
            case "tile14":return tile14;
            case "myTile13":
            case "tile15":return tile15;
            case "myTile14":
            case "tile16":return tile16;
            case "myTile15":
            case "tile17":return tile17;
            case "myTile16":
            case "tile18":return tile18;
            case "myTile17":
            case "tile19":return tile19;
            case "myTile18":
            case "tile20":return tile20;
            case "myTile21":
            case "tile23":return tile23;
            case "myTile22":
            case "tile24":return tile24;
            case "myTile23":
            case "tile25":return tile25;
            case "myTile24":
            case "tile26":return tile26;
            case "myTile25":
            case "tile27":return tile27;
            case "myTile26":
            case "tile28":return tile28;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

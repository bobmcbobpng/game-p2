namespace SpriteKind {
    export const Teleporter1 = SpriteKind.create()
    export const Teleporter2 = SpriteKind.create()
    export const tptoshooting = SpriteKind.create()
    export const aim = SpriteKind.create()
    export const StartPuck = SpriteKind.create()
    export const AIhelp = SpriteKind.create()
    export const defadvance = SpriteKind.create()
    export const track1 = SpriteKind.create()
    export const track2 = SpriteKind.create()
    export const track3 = SpriteKind.create()
    export const track4 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.track2, function (sprite, otherSprite) {
    aimpos = 2
})
function Game11 () {
    Clear2()
    tiles.setTilemap(tilemap`level3`)
    Map = 2
    Aimsight = sprites.create(assets.image`Aim`, SpriteKind.aim)
    controller.moveSprite(Aimsight, 200, 200)
    setupforpostracking()
}
function Clear () {
    Net1.destroy()
    Net2.destroy()
    ref1.destroy()
    ref2.destroy()
    Puck.destroy()
}
function Goaldefstuff () {
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        lineonmap = sprites.create(assets.image`Net5`, SpriteKind.tptoshooting)
        tiles.placeOnTile(lineonmap, value)
        tiles.setTileAt(value, assets.tile`myTile0`)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile6`)) {
        Net6 = sprites.create(assets.image`Net6`, SpriteKind.tptoshooting)
        tiles.placeOnTile(Net6, value2)
        tiles.setTileAt(value2, assets.tile`myTile0`)
    }
}
function defAI () {
    Defence.follow(defpos3, 70)
    _2secdelay()
    Defence.follow(defpos2, 70)
    _2secdelay()
    Defence.follow(defpos1, 60)
}
// normal delay stops check diff functions
function _2secdelay () {
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
    pause(10)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Teleporter1, function (sprite, otherSprite) {
    Game1()
})
function defpositionfollow () {
    defpos1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.AIhelp)
    defpos1.setPosition(80, 344)
    controller.moveSprite(defpos1)
    defpos2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.AIhelp)
    defpos2.setPosition(80, 328)
    controller.moveSprite(defpos2)
    defpos3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.AIhelp)
    defpos3.setPosition(80, 312)
    controller.moveSprite(defpos3)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Teleporter2, function (sprite, otherSprite) {
    Game2()
})
function Clear2 () {
    Topdownplayer.destroy()
    Defence.destroy()
    lineonmap.destroy()
    Net6.destroy()
    line1.destroy()
    line2.destroy()
    line3.destroy()
    line4.destroy()
    line5.destroy()
    line6.destroy()
    line7.destroy()
    line8.destroy()
    line9.destroy()
    line10.destroy()
}
function Game2 () {
	
}
function setupforpostracking () {
    track1 = sprites.create(img`
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . 7 . . . . . . . . 7 . . . 
        . . 7 . . . . . . . . . . 7 . . 
        . 7 . . . . . . . . . . . . 7 . 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . 7 7 . . . . . . 7 
        7 . . . . . . 7 7 . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        . 7 . . . . . . . . . . . . 7 . 
        . . 7 . . . . . . . . . . 7 . . 
        . . . 7 . . . . . . . . 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        `, SpriteKind.track1)
    track1.setPosition(40, 40)
    track2 = sprites.create(img`
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . 7 . . . . . . . . 7 . . . 
        . . 7 . . . . . . . . . . 7 . . 
        . 7 . . . . . . . . . . . . 7 . 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . 7 7 . . . . . . 7 
        7 . . . . . . 7 7 . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        . 7 . . . . . . . . . . . . 7 . 
        . . 7 . . . . . . . . . . 7 . . 
        . . . 7 . . . . . . . . 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        `, SpriteKind.Player)
    track2.setPosition(120, 40)
    track3 = sprites.create(img`
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . 7 . . . . . . . . 7 . . . 
        . . 7 . . . . . . . . . . 7 . . 
        . 7 . . . . . . . . . . . . 7 . 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . 7 7 . . . . . . 7 
        7 . . . . . . 7 7 . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        . 7 . . . . . . . . . . . . 7 . 
        . . 7 . . . . . . . . . . 7 . . 
        . . . 7 . . . . . . . . 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        `, SpriteKind.Player)
    track3.setPosition(40, 88)
    track4 = sprites.create(img`
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . 7 . . . . . . . . 7 . . . 
        . . 7 . . . . . . . . . . 7 . . 
        . 7 . . . . . . . . . . . . 7 . 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . 7 7 . . . . . . 7 
        7 . . . . . . 7 7 . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        7 . . . . . . . . . . . . . . 7 
        . 7 . . . . . . . . . . . . 7 . 
        . . 7 . . . . . . . . . . 7 . . 
        . . . 7 . . . . . . . . 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        `, SpriteKind.Player)
    track4.setPosition(120, 88)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.track3, function (sprite, otherSprite) {
    aimpos = 3
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.defadvance, function (sprite, otherSprite) {
    Defence.follow(Topdownplayer, 90)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.track4, function (sprite, otherSprite) {
    aimpos = 4
})
function Menu () {
    tiles.setTilemap(tilemap`Menu`)
    Map = 0
    Puck = sprites.create(assets.image`Puck`, SpriteKind.Player)
    controller.moveSprite(Puck)
    for (let value3 of tiles.getTilesByType(assets.tile`myTile1`)) {
        Net1 = sprites.create(assets.image`Net1`, SpriteKind.Teleporter1)
        tiles.placeOnTile(Net1, value3)
        tiles.setTileAt(value3, assets.tile`myTile0`)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`myTile2`)) {
        Net2 = sprites.create(assets.image`Net2`, SpriteKind.Teleporter1)
        tiles.placeOnTile(Net2, value4)
        tiles.setTileAt(value4, assets.tile`myTile0`)
    }
    for (let value5 of tiles.getTilesByType(assets.tile`myTile4`)) {
        ref1 = sprites.create(assets.image`Net3`, SpriteKind.Teleporter2)
        tiles.placeOnTile(ref1, value5)
        tiles.setTileAt(value5, assets.tile`myTile0`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile5`)) {
        ref2 = sprites.create(assets.image`Net4`, SpriteKind.Teleporter2)
        tiles.placeOnTile(ref2, value6)
        tiles.setTileAt(value6, assets.tile`myTile0`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.tptoshooting, function (sprite, otherSprite) {
    Game11()
})
function defstuffsetup () {
    for (let value7 of tiles.getTilesByType(assets.tile`myTile89`)) {
        line1 = sprites.create(img`
            7 7 7 7 5 5 5 5 5 5 5 5 5 5 5 5 
            7 7 7 7 5 5 5 5 5 6 5 5 5 5 5 5 
            7 7 7 7 5 5 5 5 5 5 6 5 5 5 5 5 
            7 7 7 7 5 5 5 5 5 5 5 6 5 5 5 5 
            7 7 7 7 7 5 5 5 5 5 5 5 6 5 5 5 
            7 7 7 7 7 5 5 5 5 5 5 5 5 6 5 5 
            5 7 7 7 7 5 5 5 5 5 5 5 5 5 5 5 
            5 7 7 7 7 5 5 5 5 5 5 5 5 5 5 5 
            5 7 7 7 7 7 5 5 5 5 5 5 5 5 5 5 
            5 7 7 7 7 7 5 5 5 6 5 5 5 5 5 5 
            5 5 7 7 7 7 5 5 5 5 6 5 5 5 5 5 
            5 5 7 7 7 7 7 5 5 5 5 6 5 5 5 5 
            5 5 5 7 7 7 7 7 5 5 5 5 5 5 5 5 
            5 5 5 7 7 7 7 7 5 5 5 5 5 5 5 5 
            5 5 5 7 7 7 7 7 7 5 5 5 5 5 5 5 
            5 5 5 5 7 7 7 7 7 7 5 5 5 5 5 5 
            `, SpriteKind.defadvance)
        tiles.placeOnTile(line1, value7)
        tiles.setTileAt(value7, assets.tile`myTile65`)
    }
    for (let value8 of tiles.getTilesByType(assets.tile`myTile90`)) {
        line2 = sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 7 7 7 7 
            5 5 5 5 5 5 5 5 5 6 5 5 7 7 7 7 
            5 5 5 5 5 5 5 5 5 5 6 5 5 7 7 7 
            5 5 5 5 5 5 5 5 5 5 5 6 5 5 7 7 
            5 5 5 5 5 5 5 5 5 5 5 5 6 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 6 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 6 5 5 5 5 5 5 6 5 5 5 5 5 5 
            5 5 5 6 5 5 5 5 5 5 6 5 5 5 5 5 
            5 5 5 5 6 5 5 5 5 5 5 6 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, SpriteKind.defadvance)
        tiles.placeOnTile(line2, value8)
        tiles.setTileAt(value8, assets.tile`myTile71`)
    }
    for (let value9 of tiles.getTilesByType(assets.tile`myTile91`)) {
        line3 = sprites.create(img`
            7 7 7 7 5 5 5 5 5 5 5 5 5 5 5 5 
            7 7 7 7 5 5 5 5 5 6 5 5 5 5 5 5 
            7 7 7 5 5 5 5 5 5 5 6 5 5 5 5 5 
            7 7 5 5 5 5 5 5 5 5 5 6 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 6 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 6 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 6 5 5 5 5 5 5 6 5 5 5 5 5 5 
            5 5 5 6 5 5 5 5 5 5 6 5 5 5 5 5 
            5 5 5 5 6 5 5 5 5 5 5 6 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, SpriteKind.defadvance)
        tiles.placeOnTile(line3, value9)
        tiles.setTileAt(value9, assets.tile`myTile70`)
    }
    for (let value10 of tiles.getTilesByType(assets.tile`myTile92`)) {
        line4 = sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 7 7 7 7 
            5 5 5 5 5 5 5 5 5 6 5 5 7 7 7 7 
            5 5 5 5 5 5 5 5 5 5 6 5 7 7 7 7 
            5 5 5 5 5 5 5 5 5 5 5 5 7 7 7 7 
            5 5 5 5 5 5 5 5 5 5 5 7 7 7 7 7 
            5 5 5 5 5 5 5 5 5 5 5 7 7 7 7 7 
            5 5 5 5 5 5 5 5 5 5 5 7 7 7 7 5 
            5 5 5 5 5 5 5 5 5 5 5 7 7 7 7 5 
            5 6 5 5 5 5 5 5 5 5 7 7 7 7 7 5 
            5 5 6 5 5 5 5 5 5 5 7 7 7 7 7 5 
            5 5 5 6 5 5 5 5 5 5 7 7 7 7 5 5 
            5 5 5 5 6 5 5 5 5 7 7 7 7 7 5 5 
            5 5 5 5 5 5 5 5 7 7 7 7 7 5 5 5 
            5 5 5 5 5 5 5 5 7 7 7 7 7 5 5 5 
            5 5 5 5 5 5 5 7 7 7 7 7 7 5 5 5 
            5 5 5 5 5 5 7 7 7 7 7 7 5 5 5 5 
            `, SpriteKind.defadvance)
        tiles.placeOnTile(line4, value10)
        tiles.setTileAt(value10, assets.tile`myTile60`)
    }
    for (let value11 of tiles.getTilesByType(assets.tile`myTile93`)) {
        line5 = sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 6 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 6 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 6 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 6 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 6 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 6 5 5 5 5 5 5 6 5 5 5 5 5 5 
            5 5 5 6 5 5 5 5 5 5 6 5 5 5 5 5 
            5 5 5 5 6 5 5 5 5 5 5 6 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, SpriteKind.defadvance)
        tiles.placeOnTile(line5, value11)
        tiles.setTileAt(value11, assets.tile`myTile0`)
    }
    for (let value12 of tiles.getTilesByType(assets.tile`myTile94`)) {
        line6 = sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 6 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 6 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 6 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 6 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 6 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 6 5 5 5 5 5 5 6 5 5 5 5 5 5 
            5 5 5 6 5 5 5 5 5 5 6 5 5 5 5 5 
            5 5 5 5 6 5 5 5 5 5 5 6 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, SpriteKind.defadvance)
        tiles.placeOnTile(line6, value12)
        tiles.setTileAt(value12, assets.tile`myTile0`)
    }
    for (let value13 of tiles.getTilesByType(assets.tile`myTile95`)) {
        line7 = sprites.create(img`
            7 7 7 7 5 5 5 5 5 5 5 5 5 5 5 5 
            7 7 7 7 5 5 5 5 5 6 5 5 5 5 5 5 
            7 7 7 7 5 5 5 5 5 5 6 5 5 5 5 5 
            7 7 7 7 5 5 5 5 5 5 5 6 5 5 5 5 
            7 7 7 7 7 5 5 5 5 5 5 5 6 5 5 5 
            7 7 7 7 7 5 5 5 5 5 5 5 5 6 5 5 
            5 7 7 7 7 5 5 5 5 5 5 5 5 5 5 5 
            5 7 7 7 7 5 5 5 5 5 5 5 5 5 5 5 
            5 7 7 7 7 7 5 5 5 5 5 5 5 5 5 5 
            5 7 7 7 7 7 5 5 5 6 5 5 5 5 5 5 
            5 5 7 7 7 7 5 5 5 5 6 5 5 5 5 5 
            5 5 7 7 7 7 7 5 5 5 5 6 5 5 5 5 
            5 5 5 7 7 7 7 7 5 5 5 5 5 5 5 5 
            5 5 5 7 7 7 7 7 5 5 5 5 5 5 5 5 
            5 5 5 7 7 7 7 7 7 5 5 5 5 5 5 5 
            5 5 5 5 7 7 7 7 7 7 5 5 5 5 5 5 
            `, SpriteKind.defadvance)
        tiles.placeOnTile(line7, value13)
        tiles.setTileAt(value13, assets.tile`myTile0`)
    }
    for (let value14 of tiles.getTilesByType(assets.tile`myTile96`)) {
        line8 = sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 7 7 7 7 
            5 5 5 5 5 5 5 5 5 6 5 5 7 7 7 7 
            5 5 5 5 5 5 5 5 5 5 6 5 5 7 7 7 
            5 5 5 5 5 5 5 5 5 5 5 6 5 5 7 7 
            5 5 5 5 5 5 5 5 5 5 5 5 6 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 6 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 6 5 5 5 5 5 5 6 5 5 5 5 5 5 
            5 5 5 6 5 5 5 5 5 5 6 5 5 5 5 5 
            5 5 5 5 6 5 5 5 5 5 5 6 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, SpriteKind.defadvance)
        tiles.placeOnTile(line8, value14)
        tiles.setTileAt(value14, assets.tile`myTile0`)
    }
    for (let value15 of tiles.getTilesByType(assets.tile`myTile97`)) {
        line9 = sprites.create(img`
            7 7 7 7 5 5 5 5 5 5 5 5 5 5 5 5 
            7 7 7 7 5 5 5 5 5 6 5 5 5 5 5 5 
            7 7 7 5 5 5 5 5 5 5 6 5 5 5 5 5 
            7 7 5 5 5 5 5 5 5 5 5 6 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 6 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 6 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 6 5 5 5 5 5 5 6 5 5 5 5 5 5 
            5 5 5 6 5 5 5 5 5 5 6 5 5 5 5 5 
            5 5 5 5 6 5 5 5 5 5 5 6 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, SpriteKind.defadvance)
        tiles.placeOnTile(line9, value15)
        tiles.setTileAt(value15, assets.tile`myTile0`)
    }
    for (let value16 of tiles.getTilesByType(assets.tile`myTile98`)) {
        line10 = sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 7 7 7 7 
            5 5 5 5 5 5 5 5 5 6 5 5 7 7 7 7 
            5 5 5 5 5 5 5 5 5 5 6 5 7 7 7 7 
            5 5 5 5 5 5 5 5 5 5 5 5 7 7 7 7 
            5 5 5 5 5 5 5 5 5 5 5 7 7 7 7 7 
            5 5 5 5 5 5 5 5 5 5 5 7 7 7 7 7 
            5 5 5 5 5 5 5 5 5 5 5 7 7 7 7 5 
            5 5 5 5 5 5 5 5 5 5 5 7 7 7 7 5 
            5 6 5 5 5 5 5 5 5 5 7 7 7 7 7 5 
            5 5 6 5 5 5 5 5 5 5 7 7 7 7 7 5 
            5 5 5 6 5 5 5 5 5 5 7 7 7 7 5 5 
            5 5 5 5 6 5 5 5 5 7 7 7 7 7 5 5 
            5 5 5 5 5 5 5 5 7 7 7 7 7 5 5 5 
            5 5 5 5 5 5 5 5 7 7 7 7 7 5 5 5 
            5 5 5 5 5 5 5 7 7 7 7 7 7 5 5 5 
            5 5 5 5 5 5 7 7 7 7 7 7 5 5 5 5 
            `, SpriteKind.defadvance)
        tiles.placeOnTile(line10, value16)
        tiles.setTileAt(value16, assets.tile`myTile0`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.StartPuck, function (sprite, otherSprite) {
    Map = 1.1
    Topdownplayer.setImage(img`
        . . . . . . . . . . . 3 
        . . . . . . . . . . . . 
        . . . . . . . . . . 1 1 
        . . . . . . . . . 1 . . 
        . . . 7 7 7 7 . 1 . . . 
        . . 7 7 7 7 7 7 . . . . 
        . 7 7 7 7 7 7 7 7 . . . 
        7 7 7 7 7 7 7 7 7 7 . . 
        7 7 7 7 7 7 7 7 7 7 . . 
        7 7 7 7 7 7 7 7 7 7 . . 
        . 7 7 7 7 7 7 7 7 . . . 
        . . 7 7 7 7 7 7 . . . . 
        . . . . 7 7 . . . . . . 
        `)
    pause(10)
    Startpuck.destroy()
    Goaldefstuff()
    defAI()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.track1, function (sprite, otherSprite) {
    aimpos = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
function Game1 () {
    Clear()
    tiles.setTilemap(tilemap`Breakaway`)
    Map = 1
    defstuffsetup()
    Defence = sprites.create(assets.image`Defence`, SpriteKind.Enemy)
    Topdownplayer = sprites.create(assets.image`Breakaway-player`, SpriteKind.Player)
    Startpuck = sprites.create(img`
        3 3 
        3 3 
        `, SpriteKind.StartPuck)
    Topdownplayer.setPosition(80, 360)
    Startpuck.setPosition(80, 288)
    Defence.setPosition(80, 200)
    controller.moveSprite(Topdownplayer)
    scene.cameraFollowSprite(Topdownplayer)
    defpositionfollow()
}
let Startpuck: Sprite = null
let track4: Sprite = null
let track3: Sprite = null
let track2: Sprite = null
let track1: Sprite = null
let line10: Sprite = null
let line9: Sprite = null
let line8: Sprite = null
let line7: Sprite = null
let line6: Sprite = null
let line5: Sprite = null
let line4: Sprite = null
let line3: Sprite = null
let line2: Sprite = null
let line1: Sprite = null
let Topdownplayer: Sprite = null
let defpos1: Sprite = null
let defpos2: Sprite = null
let defpos3: Sprite = null
let Defence: Sprite = null
let Net6: Sprite = null
let lineonmap: Sprite = null
let Puck: Sprite = null
let ref2: Sprite = null
let ref1: Sprite = null
let Net2: Sprite = null
let Net1: Sprite = null
let Aimsight: Sprite = null
let Map = 0
let aimpos = 0
Menu()
forever(function () {
    if (Map == 1) {
        if (controller.right.isPressed()) {
            Topdownplayer.setImage(img`
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                . . . . . . . . . . 1 1 
                . . . . . . . . . 1 . . 
                . . . 7 7 7 7 . 1 . . . 
                . . 7 7 7 7 7 7 . . . . 
                . 7 7 7 7 7 7 7 7 . . . 
                7 7 7 7 7 7 7 7 7 7 . . 
                7 7 7 7 7 7 7 7 7 7 . . 
                7 7 7 7 7 7 7 7 7 7 . . 
                . 7 7 7 7 7 7 7 7 . . . 
                . . 7 7 7 7 7 7 . . . . 
                . . . . 7 7 . . . . . . 
                `)
        }
        if (controller.left.isPressed()) {
            Topdownplayer.setImage(img`
                . . . . . . . . . . . . 
                . . . . . . . . . . . . 
                1 1 . . . . . . . . . . 
                . . 1 . . . . . . . . . 
                . . . 1 . 7 7 7 7 . . . 
                . . . . 7 7 7 7 7 7 . . 
                . . . 7 7 7 7 7 7 7 7 . 
                . . 7 7 7 7 7 7 7 7 7 7 
                . . 7 7 7 7 7 7 7 7 7 7 
                . . 7 7 7 7 7 7 7 7 7 7 
                . . . 7 7 7 7 7 7 7 7 . 
                . . . . 7 7 7 7 7 7 . . 
                . . . . . . 7 7 . . . . 
                `)
        }
    }
    if (Map == 1.1) {
        if (controller.right.isPressed()) {
            Topdownplayer.setImage(img`
                . . . . . . . . . . . 3 
                . . . . . . . . . . . . 
                . . . . . . . . . . 1 1 
                . . . . . . . . . 1 . . 
                . . . 7 7 7 7 . 1 . . . 
                . . 7 7 7 7 7 7 . . . . 
                . 7 7 7 7 7 7 7 7 . . . 
                7 7 7 7 7 7 7 7 7 7 . . 
                7 7 7 7 7 7 7 7 7 7 . . 
                7 7 7 7 7 7 7 7 7 7 . . 
                . 7 7 7 7 7 7 7 7 . . . 
                . . 7 7 7 7 7 7 . . . . 
                . . . . 7 7 . . . . . . 
                `)
        }
        if (controller.left.isPressed()) {
            Topdownplayer.setImage(img`
                3 . . . . . . . . . . . 
                . . . . . . . . . . . . 
                1 1 . . . . . . . . . . 
                . . 1 . . . . . . . . . 
                . . . 1 . 7 7 7 7 . . . 
                . . . . 7 7 7 7 7 7 . . 
                . . . 7 7 7 7 7 7 7 7 . 
                . . 7 7 7 7 7 7 7 7 7 7 
                . . 7 7 7 7 7 7 7 7 7 7 
                . . 7 7 7 7 7 7 7 7 7 7 
                . . . 7 7 7 7 7 7 7 7 . 
                . . . . 7 7 7 7 7 7 . . 
                . . . . . . 7 7 . . . . 
                `)
        }
    }
})

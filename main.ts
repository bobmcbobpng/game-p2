namespace SpriteKind {
    export const Teleporter1 = SpriteKind.create()
    export const Teleporter2 = SpriteKind.create()
    export const tptoshooting = SpriteKind.create()
    export const aim = SpriteKind.create()
}
function Clear () {
    Net1.destroy()
    Net2.destroy()
    Net3.destroy()
    Net4.destroy()
    Puck.destroy()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Teleporter1, function (sprite, otherSprite) {
    Game1()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Teleporter2, function (sprite, otherSprite) {
    Game2()
})
function Goal () {
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        Net5 = sprites.create(assets.image`Net5`, SpriteKind.tptoshooting)
        tiles.placeOnTile(Net5, value)
        tiles.setTileAt(value, assets.tile`myTile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        Net6 = sprites.create(assets.image`Net6`, SpriteKind.tptoshooting)
        tiles.placeOnTile(Net6, value)
        tiles.setTileAt(value, assets.tile`myTile0`)
    }
}
function Clear2 () {
    Topdownplayer.destroy()
    Defence.destroy()
    Net5.destroy()
    Net6.destroy()
}
function ShootingGame () {
    Clear2()
    tiles.setTilemap(tilemap`level3`)
    Aimsight = sprites.create(assets.image`Aim`, SpriteKind.aim)
    controller.moveSprite(Aimsight)
}
function Game2 () {
	
}
function Menu () {
    tiles.setTilemap(tilemap`Menu`)
    Puck = sprites.create(assets.image`Puck`, SpriteKind.Player)
    controller.moveSprite(Puck)
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        Net1 = sprites.create(assets.image`Net1`, SpriteKind.Teleporter1)
        tiles.placeOnTile(Net1, value)
        tiles.setTileAt(value, assets.tile`myTile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        Net2 = sprites.create(assets.image`Net2`, SpriteKind.Teleporter1)
        tiles.placeOnTile(Net2, value)
        tiles.setTileAt(value, assets.tile`myTile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        Net3 = sprites.create(assets.image`Net3`, SpriteKind.Teleporter2)
        tiles.placeOnTile(Net3, value)
        tiles.setTileAt(value, assets.tile`myTile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        Net4 = sprites.create(assets.image`Net4`, SpriteKind.Teleporter2)
        tiles.placeOnTile(Net4, value)
        tiles.setTileAt(value, assets.tile`myTile0`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.tptoshooting, function (sprite, otherSprite) {
    ShootingGame()
})
function Game1 () {
    Clear()
    tiles.setTilemap(tilemap`Breakaway`)
    Goal()
    Defence = sprites.create(assets.image`Defence`, SpriteKind.Enemy)
    Topdownplayer = sprites.create(assets.image`Breakaway-player`, SpriteKind.Player)
    Topdownplayer.setPosition(80, 360)
    controller.moveSprite(Topdownplayer)
    scene.cameraFollowSprite(Topdownplayer)
}
let Aimsight: Sprite = null
let Defence: Sprite = null
let Topdownplayer: Sprite = null
let Net6: Sprite = null
let Net5: Sprite = null
let Puck: Sprite = null
let Net4: Sprite = null
let Net3: Sprite = null
let Net2: Sprite = null
let Net1: Sprite = null
Menu()

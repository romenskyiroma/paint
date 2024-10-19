namespace SpriteKind {
    export const Lastick = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 9 9 9 . . . . 
        . . . . . . . 9 9 2 2 9 9 . . . 
        . . . . . . 9 9 2 2 2 2 9 . . . 
        . . . . 9 9 9 2 2 2 2 2 9 . . . 
        . . 9 9 9 2 2 2 2 2 2 2 9 9 . . 
        9 9 9 2 2 2 2 2 2 2 2 2 2 9 . . 
        9 8 8 9 2 2 2 2 2 2 2 2 2 9 . . 
        9 8 8 8 9 2 2 2 2 2 2 2 2 9 . . 
        9 8 8 8 9 9 2 2 2 2 2 2 9 . . . 
        9 8 8 8 8 9 2 2 2 2 2 9 9 . . . 
        9 9 8 8 8 9 9 2 2 2 9 9 . . . . 
        . 9 9 8 8 8 9 2 2 9 9 . . . . . 
        . . 9 9 8 8 9 2 9 9 . . . . . . 
        . . . 9 9 8 9 9 9 . . . . . . . 
        . . . . 9 9 9 . . . . . . . . . 
        `)
    mySprite.setKind(SpriteKind.Lastick)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . e e 
        . . . . . . . . . . . . . e e e 
        . . . . . . . . . . . . e e e . 
        . . . . . . . . . . . e e e . . 
        . . . . . . . . . . e e e . . . 
        . . . . . . . . . e e e . . . . 
        . . . . . . . . e e e . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . d d d e . . . . . . . . . 
        . . c d d d . . . . . . . . . . 
        . . c c d . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite.setKind(SpriteKind.Player)
})
scene.onOverlapTile(SpriteKind.Lastick, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile0`)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . e e 
    . . . . . . . . . . . . . e e e 
    . . . . . . . . . . . . e e e . 
    . . . . . . . . . . . e e e . . 
    . . . . . . . . . . e e e . . . 
    . . . . . . . . . e e e . . . . 
    . . . . . . . . e e e . . . . . 
    . . . . . . . e e e . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . e e e . . . . . . . . 
    . . . d d d e . . . . . . . . . 
    . . c d d d . . . . . . . . . . 
    . . c c d . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)

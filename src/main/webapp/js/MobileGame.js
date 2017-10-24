/* THIS SECTION IS SPECIFICALLY FOR ADDING A MOBILE CONTROLS OVERLAY TO THE GAME */
var DPAD_UP_X = 150;
var DPAD_UP_Y = 250;
var DPAD_RIGHT_X = 200;
var DPAD_RIGHT_Y = 350;
var DPAD_DOWN_X = 150;
var DPAD_DOWN_Y = 400;
var DPAD_LEFT_X = 50;
var DPAD_LEFT_Y = 350;
var DPAD_V_WIDTH = 50;
var DPAD_V_HEIGHT = 100;
var DPAD_H_WIDTH = 100;
var DPAD_H_HEIGHT = 50;

var SHOOT_X = 774;
var SHOOT_Y = 325;
var SHOOT_LENGTH = 100;
var initialized = false;

var mobileControls = false;

/* THIS FUNCTION TOGGLES THE MOBILE CONTROLS */
function toggleMobileControls(){
    console.log("toggling mobile controls");
    if(mobileControls === true){
        mobileControls = false;
    } else {
        mobileControls = true;
    }
    console.log(mobileControls);
}

/* THIS FUNCTIONS RENDERS THE BUTTONS */
function renderMobileControls(){
    if(mobileControls === true){
        canvas2DDev.fillStyle = "rgba(255, 255, 255, 0.5)";
        canvas2DDev.fillRect(DPAD_UP_X, DPAD_UP_Y, DPAD_V_WIDTH, DPAD_V_HEIGHT);
        canvas2DDev.fillRect(DPAD_RIGHT_X, DPAD_RIGHT_Y, DPAD_H_WIDTH, DPAD_H_HEIGHT);
        canvas2DDev.fillRect(DPAD_DOWN_X, DPAD_DOWN_Y, DPAD_V_WIDTH, DPAD_V_HEIGHT);
        canvas2DDev.fillRect(DPAD_LEFT_X, DPAD_LEFT_Y, DPAD_H_WIDTH, DPAD_H_HEIGHT);
        canvas2DDev.fillRect(SHOOT_X, SHOOT_Y, SHOOT_LENGTH, SHOOT_LENGTH);
    }
}

/* THIS FUNCTION IS THE OVERLAY FUNCTIONALITY */
function initMobileEventHandlers() {
    if(initialized == false) { // The hammer has not yet been made
        console.log("init touch handlers");
        canvasDev.addEventListener("touchstart", function (event) {
            if(mobileControls === true){
                var rect = event.target.getBoundingClientRect();
                console.log(rect);
                var touchX = event.targetTouches[0].pageX - document.getElementById("game_canvas").clientX;
                var touchY = event.targetTtouches[0].pageY - document.getElementById("game_canvas").clientY;
                console.log(touchX + " : " + touchY);
                if (touchX > DPAD_UP_X && touchX < DPAD_UP_X + DPAD_V_WIDTH && touchY > DPAD_UP_Y && touchY < DPAD_UP_Y + DPAD_V_HEIGHT) {
                    changeShipDirDev("up", -1);
                } else if (touchX > DPAD_RIGHT_X && touchX < DPAD_RIGHT_X + DPAD_H_WIDTH && touchY > DPAD_RIGHT_Y && touchY < DPAD_RIGHT_Y + DPAD_H_HEIGHT) {
                    console.log("dpad right");
                    changeShipDirDev("right", -2);
                } else if (touchX > DPAD_DOWN_X && touchX < DPAD_DOWN_X + DPAD_V_WIDTH && touchY > DPAD_DOWN_Y && touchY < DPAD_DOWN_Y + DPAD_V_HEIGHT) {
                    changeShipDirDev("down", -3);
                } else if (touchX > DPAD_LEFT_X && touchX < DPAD_LEFT_X + DPAD_H_WIDTH && touchY > DPAD_LEFT_Y && touchY < DPAD_LEFT_Y + DPAD_H_HEIGHT) {
                    changeShipDirDev("left", -4);
                } else if (touchX > SHOOT_X && touchX < SHOOT_X + SHOOT_LENGTH && touchY > SHOOT_Y && touchY < SHOOT_Y + SHOOT_LENGTH) {
                    // USER PRESSED THE SHOOT BUTTON
                    // SHOOT A BULLET FROM THE TIP OF THE SHIP
                    if (bulletsConsumed < bulletLimitDev) {
                        if (playerShipDev.dirSpaceship === "up") {
                            dirBulletDev = "up"
                            velBulletDev = 2 * playerShipDev.velSpaceship;
                            xBulletDev = playerShipDev.xSpaceship + 2;
                            yBulletDev = playerShipDev.ySpaceship;
                        } else if (playerShipDev.dirSpaceship === "right") {
                            dirBulletDev = "right"
                            velBulletDev = 2 * playerShipDev.velSpaceship;
                            xBulletDev = playerShipDev.xSpaceship + 7;
                            yBulletDev = playerShipDev.ySpaceship + 2;
                        } else if (playerShipDev.dirSpaceship === "down") {
                            dirBulletDev = "down"
                            velBulletDev = 2 * playerShipDev.velSpaceship;
                            xBulletDev = playerShipDev.xSpaceship + 2;
                            yBulletDev = playerShipDev.ySpaceship + 7;
                        } else if (playerShipDev.dirSpaceship === "left") {
                            dirBulletDev = "left"
                            velBulletDev = 2 * playerShipDev.velSpaceship;
                            xBulletDev = playerShipDev.xSpaceship;
                            yBulletDev = playerShipDev.ySpaceship + 2;
                        }

                        bulletDev = new bullet(xBulletDev, yBulletDev, dirBulletDev, velBulletDev);
                        // SET THE BULLET INTO THE ARRAY OF BULLETS
                        bulletListDev.push(bulletDev);
                        bulletsConsumed++;
                    } else {
                        console.log("No bullets remaining");
                    }
                }
            }
        });

        canvasDev.addEventListener("touchmove", function (event) {
            if(mobileControls === true){
                var rect = event.target.getBoundingClientRect();
                var touchX = event.touches[0].pageX - rect.left;
                var touchY = event.touches[0].pageY - rect.top;
                console.log(touchX + " : " + touchY);
                if (touchX > DPAD_UP_X && touchX < DPAD_UP_X + DPAD_V_WIDTH && touchY > DPAD_UP_Y && touchY < DPAD_UP_Y + DPAD_V_HEIGHT) {
                    for (var i = 0; i < keysPressed.length; i++) {
                        var val = keysPressed[i];
                        if (val < 0) {
                            keysPressed.splice(i, 1);
                        }
                    }
                    changeShipDirDev("up", -1);
                } else if (touchX > DPAD_RIGHT_X && touchX < DPAD_RIGHT_X + DPAD_H_WIDTH && touchY > DPAD_RIGHT_Y && touchY < DPAD_RIGHT_Y + DPAD_H_HEIGHT) {
                    for (var i = 0; i < keysPressed.length; i++) {
                        var val = keysPressed[i];
                        if (val < 0) {
                            keysPressed.splice(i, 1);
                        }
                    }
                    changeShipDirDev("right", -2);
                } else if (touchX > DPAD_DOWN_X && touchX < DPAD_DOWN_X + DPAD_V_WIDTH && touchY > DPAD_DOWN_Y && touchY < DPAD_DOWN_Y + DPAD_V_HEIGHT) {
                    for (var i = 0; i < keysPressed.length; i++) {
                        var val = keysPressed[i];
                        if (val < 0) {
                            keysPressed.splice(i, 1);
                        }
                    }
                    changeShipDirDev("down", -3);
                } else if (touchX > DPAD_LEFT_X && touchX < DPAD_LEFT_X + DPAD_H_WIDTH && touchY > DPAD_LEFT_Y && touchY < DPAD_LEFT_Y + DPAD_H_HEIGHT) {
                    for (var i = 0; i < keysPressed.length; i++) {
                        var val = keysPressed[i];
                        if (val < 0) {
                            keysPressed.splice(i, 1);
                        }
                    }
                    changeShipDirDev("left", -4);
                }
            }
        });

        canvasDev.addEventListener("touchend", function (event) {
            if(mobileControls === true){
                stopShipDev(-1);
            }
        });

        initialized = true;
    }
}
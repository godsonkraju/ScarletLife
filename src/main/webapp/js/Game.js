// CONSTANTS
// THESE REPRESENT THE POSSIBLE STATES FOR EACH CELL
var DEAD_CELL_DEV;
var SPACESHIP_CELL_DEV;
var FINISH_CELL_DEV;
var BAD_CELL_DEV;
var GOOD_CELL_DEV;
var VOID_CELL_DEV;
var BULLET_CELL_DEV;
var TOKEN_CELL_DEV;
var KEY_CELL_DEV;
// POWERUP CELLS
var RANDOM_POWERUP_CELL_DEV;
var FUEL_CELL_DEV;
var HEALTH_CELL_DEV;
var SLOW_TIME_CELL_DEV;
var MORE_BULLETS_CELL_DEV;
// ASTHETIC CELLS
var SPACESHIP_DAMAGED_CELL_DEV;
var FINISH_LOCKED_CELL_DEV;
// ALL VALUES PAST THIS POINT ARE TELEPORTER VALUES
var TELEPORTER_BASE_VAL_DEV;

var BAD_COLOR_DEV;
var GRID_LINES_COLOR_DEV;
var GRID_BACKGROUND_COLOR_DEV;
var SPACESHIP_COLOR_DEV;
var SPACESHIP_DAMAGED_COLOR_DEV;
var FINISH_COLOR_DEV;
var FINISH_LOCKED_COLOR_DEV;
var GOOD_COLOR_DEV;
var POWERUP_COLOR_DEV;
var HEALTH_OUTLINE_DEV;
var FUEL_OUTLINE_DEV;
var SLOW_TIME_OUTLINE_DEV;
var MORE_BULLETS_OUTLINE_DEV;
var BULLET_COLOR_DEV;
var TOKEN_COLOR_DEV;
var KEY_COLOR_DEV;
var TELEPORTER_COLOR_DEV;
var TEXT_COLOR_DEV;

var TOP_LEFT_DEV;
var TOP_RIGHT_DEV;
var BOTTOM_LEFT_DEV;
var BOTTOM_RIGHT_DEV;
var TOP_DEV;
var BOTTOM_DEV;
var LEFT_DEV;
var RIGHT_DEV;
var CENTER_DEV;

var MILLISECONDS_IN_ONE_SECOND_DEV;
var MAX_FPS_DEV;
var MIN_FPS_DEV;
var FPS_INC_DEV;
var FPS_X_DEV;
var FPS_Y_DEV;
var FUEL_X_DEV;
var FUEL_Y_DEV;
var HEALTH_X_DEV;
var HEALTH_Y_DEV;
var MAX_CELL_LENGTH_DEV;
var MIN_CELL_LENGTH_DEV;
var CELL_LENGTH_INC_DEV;
var CELL_LENGTH_X_DEV;
var CELL_LENGTH_Y_DEV;
var GRID_LINE_LENGTH_RENDERING_THRESHOLD_DEV;

// FRAME RATE TIMING VARIABLES
var timerDev;
var shipTimerDev;
var fpsDev;
var frameIntervalDev;
var slowTimerDev;

// CANVAS VARIABLES
var canvasWidthDev;
var canvasHeightDev;
var canvasDev;
var canvas2DDev;

// CANVAS OVERLAY VARIABLES
//var startOverlay = true;
//var failedOverlay = false;
//var beatenOverlay = false;
var OVERLAY_COLOR;
var OVERLAY_TEXT_COLOR;
var OVERLAY_TITLE_X;
var OVERLAY_TITLE_Y;

// GRID VARIABLES
var gridWidthDev;
var gridHeightDev;
var updateLifeGridDev;
var renderLifeGridDev;
var updatePlayerGridDev;
var renderPlayerGridDev;

// RENDERING VARIABLES
var cellLengthDev;

// PATTERN PIXELS
var patternsDev;
var cellLookupDev;
var imgDirDev;
var imagesLoadedDev;

// AUDIO FOR SOUND EFFECTS
var bulletFireAudio = new Audio("./music/Laser_Shoot.mp3");
var bulletCollisionAudio = new Audio("./music/Explosion.mp3")
var damageAudio = new Audio("./music/DamageEffect.mp3");
var powerupAudio = new Audio("./music/Powerup3.mp3");
var finishAudio = new Audio("./music/Finish.mp3");
var keyPickupAudio = new Audio("./music/KeyPickUp.mp3");
var wallAudio = new Audio("./music/Wall2.mp3");
var teleportAudio = new Audio("./music/teleport3.mp3");
var looseLevelAudio = new Audio("./music/failed2.mp3");
var unlockedAudio = new Audio("./music/UnlockFinish.mp3");
var unlockAudioPlayed = false;

// HAMMER
// HAMMER JS
var hammerDev;

// VERTICLE SLICE
var testGrid0 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,3,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,3,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,3,3,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,3,0,0,0,3,3,0,0,0,0,0,0,3,3,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,3,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,3,3,3,3,0,0,3,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,3,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,3,3,3,0,3,3,0,0,0,0,3,3,3,0,0,0,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,3,3,3,0,3,3,0,0,0,0,3,3,3,0,0,0,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,'h',0,'h',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,'h','h',0,'h','h',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,'h',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'h','h',0,'h','h',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'h',0,'h',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,0,2,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,3,0,0,3,0,3,3,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,2,0,2,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,3,0,0,0,0,3,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,2,0,2,0,2,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,3,0,0,3,0,3,3,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,2,0,2,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,0,2,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'g',0,'g',0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'g','g',0,'g','g',0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'g',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'g','g',0,'g','g',0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'g',0,'g',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,
                 0,4,4,4,0,4,4,0,0,0,0,4,4,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,5,0,0,0,4,4,4,0,4,4,0,0,0,0,4,4,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,4,4,4,4,0,0,4,0,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,5,0,0,0,4,4,4,4,0,0,4,0,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,3,3,0,0,0,0,0,
                 0,0,0,0,0,4,4,0,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,4,0,0,0,5,4,0,0,0,0,0,0,4,4,0,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,4,0,0,0,4,4,0,0,0,0,0,3,3,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,3,0,0,3,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,4,0,0,0,5,4,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,4,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,3,3,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,4,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,3,3,0,0,3,3,0,0,9,9,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,0,0,0,0,3,3,0,0,3,3,0,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,0,0,0,0,
                 0,0,0,3,3,0,0,3,3,0,0,9,9,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,0,0,0,0,3,3,0,0,3,3,0,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,3,3,0,0,3,3,0,0,'a','a',0,0,'b','b',0,0,'c','c',0,0,7,7,0,0,8,8,0,0,'d','d',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,3,3,0,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,0,0,0,0,
                 0,0,0,3,3,0,0,3,3,0,0,'a','a',0,0,'b','b',0,0,'c','c',0,0,7,7,0,0,8,8,0,0,'d','d',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,3,3,0,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                 0,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,0,0,0,0];

var levelGrid = testGrid0;
var currentGrid = "testGrid0";

// SHIP VARIABLES
var xSpaceshipDev;
var ySpaceshipDev;
var dirSpaceshipDev;
var velSpaceshipDev;
var playerShipDev;
var fuelDev;
var healthDev;

// SHIP MOVEMENT VARIABLES
var moveShip;
var forceMove;
var keysPressed;

// BULLET VARIABLES
var xBulletDev;
var yBulletDev;
var dirBulletDev;
var velBulletDev;
var bulletDev;
var bulletListDev;
var bulletLimitDev;
var bulletsConsumed;

// KEY VARIABLES
var numKeysDev;
var keysDev;

// TELEPORTER VARIABLES
var teleporterListDev;
var toTeleport;

// Is there a level being loaded?
var toPlay = false;
var nextLevelDev = null;

// METHOD TO PLAY A DESIRED LEVEL
function playSelectedLevel(level){
    modalType = "start";
    currentLevel = JSON.parse(level);
    levelGrid = currentLevel.cells;
    playerShipDev = currentLevel.spaceship;
    xSpaceshipDev = playerShipDev.xSpaceship;
    ySpaceshipDev = playerShipDev.ySpaceship;
    velSpaceshipDev = playerShipDev.velSpaceship;
    cellLengthDev = currentLevel.cellLength;
    fpsDev = currentLevel.fps;
    healthDev = currentLevel.health;
    playerShipDev.health = healthDev;
    playerShipDev.fuel = fuelDev;
    dirSpaceshipDev = playerShipDev.dirSpaceship;
    fuelDev = currentLevel.fuel;
    bulletLimitDev = currentLevel.bulletLimit;
    nextLevelDev = currentLevel.nextLevel;
    toPlay = true;
    pauseGameOfLifeDev();
    initGameOfLifeDev();
}

// INITIALIZATION METHODS

/*
 * This method initializes the Game of Life, setting it up with
 * and empty grid, ready to accept additions at the request
 * of the user.
 */
function initGameOfLifeDev()
{
    window.onbeforeunload = function(event) {
        console.log("game no longer in focus");
        pauseGameOfLifeDev();
        enableScroll();
        $('#overlay-modal').modal('close');
        modalType = null;
    };

    // INIT ALL THE CONSTANTS, i.e. ALL THE
    // THINGS THAT WILL NEVER CHANGE
    initConstantsDev();

    // INIT THE RENDERING SURFACE
    initCanvasDev();

    // INIT ALL THE GAME-RELATED VARIABLES
    initGameOfLifeDataDev();

    // INIT THE LOOKUP TABLES FOR THE SIMULATION
    initCellLookupDev();

    // SETUP THE EVENT HANDLERS
    initEventHandlersDev();

    // CLEAR THE CANVAS AND INTIALIZE THE GRIDS
    // also adds grid lines to the canvasDev
    resetGameOfLifeDev();

    // RENDER THE GRID
    initGridDev();

    // INIT IMAGES AND SUBSEQUENTLY THE SHIP
    initShipPatternsDev();

    // BRING UP START SCREEN
    //if(startOverlay === true){
        //document.getElementById("middle-card-play").style.backgroundImage = null;
    pauseGameOfLifeDev();
    //} else {
        //document.getElementById("middle-card-play").style.backgroundImage = null;
        //startGameOfLifeDev();
    //}
    showGameStartDev()

    console.log(cellLengthDev);
}


/*
 * This function initializes all the things that never change.
 */
function initConstantsDev()
{
    // THESE REPRESENT THE TWO POSSIBLE STATES FOR EACH CELL
    DEAD_CELL_DEV = '0';
    SPACESHIP_CELL_DEV = '1';
    FINISH_CELL_DEV = '2';
    BAD_CELL_DEV = '3';
    GOOD_CELL_DEV = '4';
    VOID_CELL_DEV = '5';
    BULLET_CELL_DEV = '6';
    TOKEN_CELL_DEV = '7';
    KEY_CELL_DEV = '8';
    // POWERUP CELLS
    RANDOM_POWERUP_CELL_DEV = '9';
    FUEL_CELL_DEV = 'a';
    HEALTH_CELL_DEV = 'b';
    SLOW_TIME_CELL_DEV = 'c';
    MORE_BULLETS_CELL_DEV = 'd';
    // ASTHETIC CELLS
    SPACESHIP_DAMAGED_CELL_DEV = 'e';
    FINISH_LOCKED_CELL_DEV = 'f';
    // ALL VALUES PAST THIS POINT ARE TELEPORTER VALUES
    TELEPORTER_BASE_VAL_DEV = 'g';

    // COLORS FOR RENDERING
    BAD_COLOR_DEV = "#FF0000";
    SPACESHIP_COLOR_DEV = "#AFAFAF";
    FINISH_COLOR_DEV = "#B938FF"
    FINISH_LOCKED_COLOR_DEV = "#65156b";
    SPACESHIP_DAMAGED_COLOR_DEV = "#FFA411";
    GRID_LINES_COLOR_DEV = "#CCCCCC";
    GRID_BACKGROUND_COLOR_DEV = "#000000"
    TEXT_COLOR_DEV = "#FFFF00";
    VOID_COLOR_DEV = "#444444";
    GOOD_COLOR_DEV = "#54a04b";
    POWERUP_COLOR_DEV = "#fff956";
    BULLET_COLOR_DEV = "#FFFFFF";
    KEY_COLOR_DEV = "#ff00ae";
    TOKEN_COLOR_DEV = "#fff39e";
    TELEPORTER_COLOR_DEV = "#0affd6";

    HEALTH_OUTLINE_DEV = "#00e845";
    FUEL_OUTLINE_DEV = "#7a4f00";
    SLOW_TIME_OUTLINE_DEV = "#0053d8";
    MORE_BULLETS_OUTLINE_DEV = "#aaaaaa";

    OVERLAY_COLOR = "rgba(0, 0, 0, 0.57)";
    OVERLAY_TEXT_COLOR = "#FFFFFF";
    OVERLAY_TITLE_X = 330;
    OVERLAY_TITLE_Y = 200;

    // THESE REPRESENT THE DIFFERENT TYPES OF CELL LOCATIONS IN THE GRID
    TOP_LEFT_DEV = 0;
    TOP_RIGHT_DEV = 1;
    BOTTOM_LEFT_DEV = 2;
    BOTTOM_RIGHT_DEV = 3;
    TOP_DEV = 4;
    BOTTOM_DEV = 5;
    LEFT_DEV = 6;
    RIGHT_DEV = 7;
    CENTER_DEV = 8;

    // FPS CONSTANTS
    MILLISECONDS_IN_ONE_SECOND_DEV = 1000;
    MAX_FPS_DEV = 33;
    MIN_FPS_DEV = 1;
    FPS_INC_DEV = 1;

    // CELL LENGTH CONSTANTS
    MAX_CELL_LENGTH_DEV = 32;
    MIN_CELL_LENGTH_DEV = 1;
    CELL_LENGTH_INC_DEV = 2;
    GRID_LINE_LENGTH_RENDERING_THRESHOLD_DEV = 8;

    // RENDERING LOCATIONS FOR TEXT ON THE CANVAS
    FPS_X_DEV = 20;
    FPS_Y_DEV = 450;
    CELL_LENGTH_X_DEV = 20;
    CELL_LENGTH_Y_DEV = 480;
    FUEL_X_DEV = 230;
    FUEL_Y_DEV = 30;
    HEALTH_X_DEV = 650;
    HEALTH_Y_DEV = 30;

    // To make sure that all images are loaded
    imagesLoadedDev = 0; // MAXIMUM = 4 (ship Up, Right, Down, Left)

    fpsDev = 20;

    // give the level default values
    if(toPlay === false){
        // DEFAULT VALUES
        xSpaceshipDev = 2;
        ySpaceshipDev = 30;
        dirSpaceshipDev = "right";
        velSpaceshipDev = 1;
        fuelDev = 100;
        healthDev = 100;
        cellLengthDev = 8;
        bulletLimitDev = 10;

    }
    moveShip = false;
    forceMove = false;

    bulletsConsumed = 0;

    keysPressed = new Array();

    playerShipDev = new spaceship(xSpaceshipDev, ySpaceshipDev, dirSpaceshipDev, velSpaceshipDev, healthDev, fuelDev);

    numKeysDev = 0;

    keysDev = {32: 1, 37: 1, 38: 1, 39: 1, 40: 1};

    teleporterListDev = new Array();
    toTeleport = false;
}


/*
 * This method retrieves the canvasDev from the Web page and
 * gets a 2D drawing context so that we can render to it
 * when the time comes.
 */
function initCanvasDev()
{
    // GET THE CANVAS
    canvasDev = document.getElementById("game_canvas");

    // GET THE 2D RENDERING CONTEXT
    canvas2DDev = canvasDev.getContext("2d");

    // INIT THE FONT FOR TEXT RENDERED ON THE CANVAS. NOTE
    // THAT WE'LL BE RENDERING THE FRAME RATE AND ZOOM LEVEL
    // ON THE CANVAS
    canvas2DDev.font = "24px Arial";

    // NOTE THAT THESE DIMENSIONS SHOULD BE THE
    // SAME AS SPECIFIED IN THE WEB PAGE, WHERE
    // THE CANVAS IS SIZED
    canvasWidthDev = canvasDev.width;
    canvasHeightDev = canvasDev.height;
}



/*
 * This function initializes all the important game-related
 * variables, including the necessary data structures for
 * managing the game grid.
 */
function initGameOfLifeDataDev()
{
    // INIT THE TIMING DATA
    timerDev = null;
    shipTimerDev = null;
    // *** KEEP IN MIND THAT THE SHIP IS REFRESHING AT FPS
    // THE LIFE IS REFRESHING AT FPS / (SHIP VELOCITY)
    frameIntervalDev = MILLISECONDS_IN_ONE_SECOND_DEV/fpsDev;
}


/*
 * This function initializes all the event handlers, registering
 * the proper response methods.
 */
function initEventHandlersDev(){
    // Computer user requires keyboard presses
    document.onkeydown = respondToKeyPress;
    document.onkeyup = respondToKeyRelease;
    initTouchEventHandlers();
    // initButtonEventHandlers();
    initMobileEventHandlers();
}

/*
 * Helper functions to disable unwanted page scrolling
 */
function preventDefault(e) {
    if (modalType === "start" || modalType === "paused") {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
        console.log("disabling mobile swiping");
    }
}

function preventDefaultForScrollKeys(e) {
    console.log(modalType);
    if (modalType === "start" || modalType === "paused") {
        if (keysDev[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }
}

function disableScroll() {
    // modern browsers
    window.onwheel = preventDefault;
    window.onkeydown = preventDefaultForScrollKeys;
}

function disableScrollMobile() {
    // mobile
    window.ontouchmove = preventDefault;
    window.onunload = function(){ window.scrollTo(0,0); }
}

function enableScroll() {
    window.onwheel = null;
    window.onmousewheel = null;
    document.onmousewheel = null;
    document.onkeydown = null;
    document.onkeypress = null;
    document.onkeyup = null;
    // for mobile
    window.ontouchmove = null;
    console.log("enabled scrolling!!!");
}

/*
 * A helper function to determine which key was pressed.
 */
function respondToKeyPress(event) {

    // Determine which key was pressed and move in the respective direction
    var code = event.keyCode;
    // DO NOTHING IF THE KEY IS REPEATEDLY PRESSED WITH NO RELEASE
    if(keysPressed.indexOf(code) < 0) { // code is not already in the array
        switch (code) {
            case 16:
                // USER PRESSED SHIFT, CRUISE CONTROL TOGGLE
                if(forceMove === true){
                    forceMove = false;
                } else {
                    forceMove = true;
                }
                break;
            case 65:
                // USER PRESSED A
                changeShipDirDev("left", code);
                break;
            case 87:
                // USER PRESSED W
                changeShipDirDev("up", code);
                break;
            case 68:
                // USER PRESSED D
                changeShipDirDev("right", code);
                break;
            case 83:
                // USER PRESSED S
                changeShipDirDev("down", code);
                break;
            case 66:
                // USER PRESSED B
                // SHOOT A BULLET FROM THE TIP OF THE SHIP
                if (bulletsConsumed < bulletLimitDev) {
                    if (playerShipDev.dirSpaceship === "up") {
                        if (currentMutedState() !== true)
                            bulletFireAudio.play();
                        dirBulletDev = "up"
                        velBulletDev = 2 * playerShipDev.velSpaceship;
                        xBulletDev = playerShipDev.xSpaceship + 2;
                        yBulletDev = playerShipDev.ySpaceship;
                    } else if (playerShipDev.dirSpaceship === "right") {
                        if (currentMutedState() !== true)
                            bulletFireAudio.play();
                        dirBulletDev = "right"
                        velBulletDev = 2 * playerShipDev.velSpaceship;
                        xBulletDev = playerShipDev.xSpaceship + 7;
                        yBulletDev = playerShipDev.ySpaceship + 2;
                    } else if (playerShipDev.dirSpaceship === "down") {
                        if (currentMutedState() !== true)
                            bulletFireAudio.play();
                        dirBulletDev = "down"
                        velBulletDev = 2 * playerShipDev.velSpaceship;
                        xBulletDev = playerShipDev.xSpaceship + 2;
                        yBulletDev = playerShipDev.ySpaceship + 7;
                    } else if (playerShipDev.dirSpaceship === "left") {
                        if (currentMutedState() !== true)
                            bulletFireAudio.play();
                        dirBulletDev = "left"
                        velBulletDev = 2 * playerShipDev.velSpaceship;
                        xBulletDev = playerShipDev.xSpaceship;
                        yBulletDev = playerShipDev.ySpaceship + 2;
                    }

                    bulletDev = new bullet(xBulletDev, yBulletDev, dirBulletDev, velBulletDev);
                    // SET THE BULLET INTO THE ARRAY OF BULLETS
                    bulletListDev.push(bulletDev);
                    bulletsConsumed++;
                }
                else {
                    console.log("No bullets remaining");
                }
                break;
            case 82:
                // USER PRESSED 'R' for RESET
                pauseGameOfLifeDev();
                initGameOfLifeDev();
                break;
            case 80:
                // USER PRESSED 'P' for PAUSE
                showGamePaused();
                break;
            // ARROW KEYS AND SPACE HANDLERS ARE THE SAME AS WASD AND B
            case 37:
                // USER PRESSED LEFT ARROW
                changeShipDirDev("left", code);
                break;
            case 38:
                // USER PRESSED UP ARROW
                changeShipDirDev("up", code);
                break;
            case 39:
                // USER PRESSED RIGHT ARROW
                changeShipDirDev("right", code);
                break;
            case 40:
                // USER PRESSED DOWN ARROW
                changeShipDirDev("down", code);
                break;
            case 32:
                // USER PRESSED SPACE
                // SHOOT A BULLET FROM THE TIP OF THE SHIP
                if (bulletsConsumed < bulletLimitDev) {
                    if (playerShipDev.dirSpaceship === "up") {
                        if (currentMutedState() !== true)
                            bulletFireAudio.play();
                        dirBulletDev = "up"
                        velBulletDev = 2 * playerShipDev.velSpaceship;
                        xBulletDev = playerShipDev.xSpaceship + 2;
                        yBulletDev = playerShipDev.ySpaceship;
                    } else if (playerShipDev.dirSpaceship === "right") {
                        if (currentMutedState() !== true)
                            bulletFireAudio.play();
                        dirBulletDev = "right"
                        velBulletDev = 2 * playerShipDev.velSpaceship;
                        xBulletDev = playerShipDev.xSpaceship + 7;
                        yBulletDev = playerShipDev.ySpaceship + 2;
                    } else if (playerShipDev.dirSpaceship === "down") {
                        if (currentMutedState() !== true)
                            bulletFireAudio.play();
                        dirBulletDev = "down"
                        velBulletDev = 2 * playerShipDev.velSpaceship;
                        xBulletDev = playerShipDev.xSpaceship + 2;
                        yBulletDev = playerShipDev.ySpaceship + 7;
                    } else if (playerShipDev.dirSpaceship === "left") {
                        if (currentMutedState() !== true)
                            bulletFireAudio.play();
                        dirBulletDev = "left"
                        velBulletDev = 2 * playerShipDev.velSpaceship;
                        xBulletDev = playerShipDev.xSpaceship;
                        yBulletDev = playerShipDev.ySpaceship + 2;
                    }

                    bulletDev = new bullet(xBulletDev, yBulletDev, dirBulletDev, velBulletDev);
                    // SET THE BULLET INTO THE ARRAY OF BULLETS
                    bulletListDev.push(bulletDev);
                    bulletsConsumed++;
                }
                else {
                    console.log("No bullets remaining");
                }
                break;
            default:
                console.log("Pressed an invalid key");
        }
        // set the new lastPressed
        lastPressed = code;
    }
}

/*
 * A helper function to determine which key was released
 */
function respondToKeyRelease(event) {

    // Determine which key was pressed and move in the respective direction
    var code = event.keyCode;
    // ONLY REMOVE THE KEY IF IT IS CONTAINED IN THE ARRAY
    if(keysPressed.indexOf(code) > -1){
        switch(code) {
            case 65:
                // USER RELEASED A
                stopShipDev(code);
                break;
            case 87:
                // USER RELEASED W
               stopShipDev(code);
                break;
            case 68:
                // USER RELEASED D
                stopShipDev(code);
                break;
            case 83:
                // USER RELEASED S
                stopShipDev(code);
                break;
            // ARROW KEYS RELEASED
            case 37:
                // USER RELEASED LEFTARROW
                stopShipDev(code);
                break;
            case 38:
                // USER RELEASED UP ARROW
                stopShipDev(code);
                break;
            case 39:
                // USER RELEASED RIGHT ARROW
                stopShipDev(code);
                break;
            case 40:
                // USER RELEASED DOWN ARROW
                stopShipDev(code);
                break;
        }
    }
}

// THIS FUNCTION MANAGES TOUCH EVENTS
function initTouchEventHandlers(){
    // HAMMER JS
    if(typeof hammerDev === 'undefined'){ // The hammer has not yet been made
        hammerDev = new Hammer(canvasDev);
        // SET SWIPE DETECTION TO AL DIRECTIONS
        hammerDev.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

        hammerDev.on('swiperight', function(event) {
            console.log("swiped right");
            if (playerShipDev.dirSpaceship !== "right") {
                    // kill current ship
                    killShipCells();
                    // alter coordinates for fluid direction change
                    if (playerShipDev.dirSpaceship === "left") {
                        playerShipDev.xSpaceship += 3;
                    } else if (playerShipDev.dirSpaceship === "up") {
                        playerShipDev.ySpaceship += 2;
                    }
                    playerShipDev.dirSpaceship = "right";
                }
                forceMove = true;
        });

        hammerDev.on('swipeleft', function(event) {
            console.log("swiped left");
            if (playerShipDev.dirSpaceship !== "left") {
                    // kill current ship
                    killShipCells();
                    // alter coordinates for fluid direction change
                    if (playerShipDev.dirSpaceship === "right") {
                        playerShipDev.xSpaceship -= 3;
                    } else if (playerShipDev.dirSpaceship === "down"){
                        playerShipDev.xSpaceship -= 2;
                    } else if (playerShipDev.dirSpaceship === "up"){
                        playerShipDev.xSpaceship -= 2;
                        playerShipDev.ySpaceship += 2;
                    }
                    playerShipDev.dirSpaceship = "left";
                }
                forceMove = true;
        });

        hammerDev.on('swipeup', function(event) {
            console.log("swiped up");
            if (playerShipDev.dirSpaceship !== "up") {
                    // kill current ship
                    killShipCells();
                    // alter coordinates for fluid direction change
                    if (playerShipDev.dirSpaceship === "right") {
                        playerShipDev.ySpaceship -= 2;
                    } else if (playerShipDev.dirSpaceship === "down") {
                        playerShipDev.ySpaceship -= 3;
                    } else if (playerShipDev.dirSpaceship === "left") {
                        playerShipDev.xSpaceship += 2;
                        playerShipDev.ySpaceship -= 2;
                    }
                    playerShipDev.dirSpaceship = "up";
                }
                forceMove = true;
        });
        hammerDev.on('swipedown', function(event) {
            console.log("swiped down");
            if (playerShipDev.dirSpaceship !== "down") {
                    // kill current ship
                    killShipCells();
                    // alter coordinates for fluid direction change
                    if (playerShipDev.dirSpaceship === "left") {
                        playerShipDev.xSpaceship += 2;
                    } else if (playerShipDev.dirSpaceship === "up") {
                        playerShipDev.ySpaceship += 3;
                    }
                    playerShipDev.dirSpaceship = "down";
                }
                forceMove = true;
        });
    }

    canvasDev.onclick = function(event) {
        console.log("tapped the screen");
        // SHOOT A BULLET FROM THE TIP OF THE SHIP
        if (bulletsConsumed < bulletLimitDev) {
            if (playerShipDev.dirSpaceship === "up") {
                if (currentMutedState() !== true)
                    bulletFireAudio.play();
                dirBulletDev = "up"
                velBulletDev = 2 * playerShipDev.velSpaceship;
                xBulletDev = playerShipDev.xSpaceship + 2;
                yBulletDev = playerShipDev.ySpaceship;
            } else if (playerShipDev.dirSpaceship === "right") {
                if (currentMutedState() !== true)
                    bulletFireAudio.play();
                dirBulletDev = "right"
                velBulletDev = 2 * playerShipDev.velSpaceship;
                xBulletDev = playerShipDev.xSpaceship + 7;
                yBulletDev = playerShipDev.ySpaceship + 2;
            } else if (playerShipDev.dirSpaceship === "down") {
                if (currentMutedState() !== true)
                    bulletFireAudio.play();
                dirBulletDev = "down"
                velBulletDev = 2 * playerShipDev.velSpaceship;
                xBulletDev = playerShipDev.xSpaceship + 2;
                yBulletDev = playerShipDev.ySpaceship + 7;
            } else if (playerShipDev.dirSpaceship === "left") {
                if (currentMutedState() !== true)
                    bulletFireAudio.play();
                dirBulletDev = "left"
                velBulletDev = 2 * playerShipDev.velSpaceship;
                xBulletDev = playerShipDev.xSpaceship;
                yBulletDev = playerShipDev.ySpaceship + 2;
            }

            bulletDev = new bullet(xBulletDev, yBulletDev, dirBulletDev, velBulletDev);
            // SET THE BULLET INTO THE ARRAY OF BULLETS
            bulletListDev.push(bulletDev);
            bulletsConsumed++;
        }
        else {
            console.log("No bullets remaining");
        }
    }
}

function initButtonEventHandlers(){
       // One of the overlay buttons was pressed
       /*
    document.getElementById("start").onclick = function(){
        console.log("You pressed start button");
            if(beatenOverlay === true){
                pauseGameOfLifeDev();
                initGameOfLifeDev();
                beatenOverlay = false;
            }
            else if(startOverlay === true){
                pauseGameOfLifeDev();
                startGameOfLifeDev();
                startOverlay = false;
            } else {
                pauseGameOfLifeDev();
                initGameOfLifeDev();
                failedOverlay = false;
            }
    };
    */

    document.getElementById("shoot").onclick = function(){
        console.log("You pressed shoot button");
            // SHOOT A BULLET FROM THE TIP OF THE SHIP
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
    };

    document.getElementById("left").onclick = function(){
        console.log("You pressed left button");
        if (playerShipDev.dirSpaceship !== "left") {
                    // kill current ship
                    killShipCells();
                    // alter coordinates for fluid direction change
                    if (playerShipDev.dirSpaceship === "right") {
                        playerShipDev.xSpaceship -= 3;
                    } else if (playerShipDev.dirSpaceship === "down"){
                        playerShipDev.xSpaceship -= 2;
                    } else if (playerShipDev.dirSpaceship === "up"){
                        playerShipDev.xSpaceship -= 2;
                        playerShipDev.ySpaceship += 2;
                    }
                    playerShipDev.dirSpaceship = "left";
                }
                forceMove = true;
    };

    document.getElementById("up").onclick = function(){
        console.log("You pressed up button");
        if (playerShipDev.dirSpaceship !== "up") {
                    // kill current ship
                    killShipCells();
                    // alter coordinates for fluid direction change
                    if (playerShipDev.dirSpaceship === "right") {
                        playerShipDev.ySpaceship -= 2;
                    } else if (playerShipDev.dirSpaceship === "down") {
                        playerShipDev.ySpaceship -= 3;
                    } else if (playerShipDev.dirSpaceship === "left") {
                        playerShipDev.xSpaceship += 2;
                        playerShipDev.ySpaceship -= 2;
                    }
                    playerShipDev.dirSpaceship = "up";
                }
                forceMove = true;
    };

    document.getElementById("right").onclick = function(){
        console.log("You pressed right button");
        if (playerShipDev.dirSpaceship !== "right") {
                    // kill current ship
                    killShipCells();
                    // alter coordinates for fluid direction change
                    if (playerShipDev.dirSpaceship === "left") {
                        playerShipDev.xSpaceship += 3;
                    } else if (playerShipDev.dirSpaceship === "up") {
                        playerShipDev.ySpaceship += 2;
                    }
                    playerShipDev.dirSpaceship = "right";
                }
                forceMove = true;
    };

    document.getElementById("down").onclick = function(){
        console.log("You pressed down button");
        if (playerShipDev.dirSpaceship !== "down") {
                    // kill current ship
                    killShipCells();
                    // alter coordinates for fluid direction change
                    if (playerShipDev.dirSpaceship === "left") {
                        playerShipDev.xSpaceship += 2;
                    } else if (playerShipDev.dirSpaceship === "up") {
                        playerShipDev.ySpaceship += 3;
                    }
                    playerShipDev.dirSpaceship = "down";
                }
                forceMove = true;
    };
}

// This function changes the direction of the ship!
function changeShipDirDev(direction, keyCode){
    if(direction === "left"){
        if (playerShipDev.dirSpaceship !== "left") {
            // kill current ship
            killShipCells();
            // alter coordinates for fluid direction change
            if (playerShipDev.dirSpaceship === "right") {
                playerShipDev.xSpaceship -= 3;
            } else if (playerShipDev.dirSpaceship === "down"){
                playerShipDev.xSpaceship -= 2;
            } else if (playerShipDev.dirSpaceship === "up"){
                playerShipDev.xSpaceship -= 2;
                playerShipDev.ySpaceship += 2;
            }
            playerShipDev.dirSpaceship = "left";
        }
    } else if(direction === "up"){
        if (playerShipDev.dirSpaceship !== "up") {
            // kill current ship
            killShipCells();
            // alter coordinates for fluid direction change
            if (playerShipDev.dirSpaceship === "right") {
                playerShipDev.ySpaceship -= 2;
            } else if (playerShipDev.dirSpaceship === "down") {
                playerShipDev.ySpaceship -= 3;
            } else if (playerShipDev.dirSpaceship === "left") {
                playerShipDev.xSpaceship += 2;
                playerShipDev.ySpaceship -= 2;
            }
            playerShipDev.dirSpaceship = "up";
        }
    } else if(direction === "right"){
        if (playerShipDev.dirSpaceship !== "right") {
            // kill current ship
            killShipCells();
            // alter coordinates for fluid direction change
            if (playerShipDev.dirSpaceship === "left") {
                playerShipDev.xSpaceship += 3;
            } else if (playerShipDev.dirSpaceship === "up") {
                playerShipDev.ySpaceship += 2;
            }
            playerShipDev.dirSpaceship = "right";
        }
    }else if(direction === "down"){
        if (playerShipDev.dirSpaceship !== "down") {
            // kill current ship
            killShipCells();
            // alter coordinates for fluid direction change
            if (playerShipDev.dirSpaceship === "left") {
                playerShipDev.xSpaceship += 2;
            } else if (playerShipDev.dirSpaceship === "up") {
                playerShipDev.ySpaceship += 3;
            }
            playerShipDev.dirSpaceship = "down";
        }
    }
    keysPressed.push(keyCode);
    moveShip = true;
}

// this function stops the ship from moving!
function stopShipDev(key){
    keysPressed.splice(keysPressed.indexOf(key), 1);
    // no more keys are being pressed
    if(keysPressed.length < 1){
        moveShip = false;
    }
}

/*
 * This function returns a JavaScript object, which is kind of like
 * a C struct in that it only has data. There are 9 different types of
 * cells in the grid, and so we use 9 CellTypeDev objects to store which
 * adjacent cells need to be checked when running the simulation.
 */
function CellTypeDev(initNumNeighbors, initCellValues)
{
    this.numNeighbors = initNumNeighbors;
    this.cellValues = initCellValues;
}


/*
 * This function initizlies the 9 CellTypeDev objects that serve
 * as a lookup table for when we are running the simulation so
 * that we know which neighboring cells have to be examined for
 * determining the next frame's state for a given cell.
 */
function initCellLookupDev()
{
    // WE'LL PUT ALL THE VALUES IN HERE
    cellLookupDev = new Array();

    // TOP_DEV LEFT_DEV
    var topLeftArray        = new Array( 1, 0,  1,  1,  0,  1);
    cellLookupDev[TOP_LEFT_DEV]    = new CellTypeDev(3, topLeftArray);

    // TOP_DEV RIGHT_DEV
    var topRightArray       = new Array(-1, 0, -1,  1,  0,  1);
    cellLookupDev[TOP_RIGHT_DEV]   = new CellTypeDev(3, topRightArray);

    // BOTTOM_DEV LEFT_DEV
    var bottomLeftArray     = new Array( 1, 0,  1, -1, 0, -1);
    cellLookupDev[BOTTOM_LEFT_DEV] = new CellTypeDev(3, bottomLeftArray);

    // BOTTOM_DEV RIGHT_DEV
    var bottomRightArray    = new Array(-1, 0, -1, -1, 0, -1);
    cellLookupDev[BOTTOM_RIGHT_DEV]= new CellTypeDev(3, bottomRightArray);

    // TOP_DEV
    var topArray            = new Array(-1, 0, -1, 1, 0, 1, 1, 1, 1, 0);
    cellLookupDev[TOP_DEV]         = new CellTypeDev(5, topArray);

    // BOTTOM_DEV
    var bottomArray         = new Array(-1, 0, -1, -1, 0, -1, 1, -1, 1, 0);
    cellLookupDev[BOTTOM_DEV]      = new CellTypeDev(5, bottomArray);

    // LEFT_DEV
    var leftArray           = new Array(0, -1, 1, -1, 1, 0, 1, 1, 0, 1);
    cellLookupDev[LEFT_DEV]        = new CellTypeDev(5, leftArray);

    // RIGHT_DEV
    var rightArray          = new Array(0, -1, -1, -1, -1, 0, -1, 1, 0, 1);
    cellLookupDev[RIGHT_DEV]       = new CellTypeDev(5, rightArray);

    // CENTER_DEV
    var centerArray         = new Array(-1, -1, -1, 0, -1, 1, 0, 1, 1, 1, 1, 0, 1, -1, 0, -1);
    cellLookupDev[CENTER_DEV]      = new CellTypeDev(8, centerArray);
}


function startGameOfLifeDev()
{
    console.log("start game of life");
    if(timerDev !== null){
        clearInterval(timerDev);
    }
    // START A NEW TIMER
    timerDev = setInterval(stepGameOfLifeDev, frameIntervalDev);

    if(shipTimerDev = null){
        clearInterval(shipTimerDev);
    }
    // THIS INTERVAL IS FOR UPDATING THE SHIP
    // FOR NOW WE'RE DOING THIS TO SIMULATE MORE FLUID MOVEMENT
    // THE SHIP TRAVELS AT FPS AND THE LIFE UPDATE SLOWS DOWN BASED ON VELOCITY
    shipTimerDev = setInterval(updateShip, frameIntervalDev);
}



/*
 * This function pauses the simulation such that the update and render
 * are no longer called on a timed basis.
 */
function pauseGameOfLifeDev()
{
    console.log("pausing game of life");
    // TELL JavaScript TO STOP RUNNING THE LOOP
    clearInterval(timerDev);
    clearInterval(shipTimerDev);
    clearTimeout(slowTimerDev);

    // AND THIS IS HOW WE'LL KEEP TRACK OF WHETHER
    // THE SIMULATION IS RUNNING OR NOT
    timerDev = null;
    shipTimerDev = null;
    slowTimerDev = null;
}



// GRID CELL MANAGEMENT METHODS

/*
 * This function tests to see if (row, col) represents a
 * valid cell in the grid. If it is a valid cell, true is
 * returned, else false.
 */
function isValidCellDev(row, col)
{
    // IS IT OUTSIDE THE GRID?
    if (    (row < 0) ||
        (col < 0) ||
        (row >= gridHeightDev) ||
        (col >= gridWidthDev))
    {
        return false;
    }
    // IT'S INSIDE THE GRID
    else
    {
        return true;
    }
}


/*
 * Accessor method for getting the cell value in the grid at
 * location (row, col).
 */
function getGridCellDev(grid, row, col)
{
    // IGNORE IF IT'S OUTSIDE THE GRID
    if (!isValidCellDev(row, col))
    {
        return -1;
    }
    var index = (row * gridWidthDev) + col;
    return grid[index];
}



/*
 * Mutator method for setting the cell value in the grid at
 * location (row, col).
 */
function setGridCellDev(grid, row, col, value)
{
    // IGNORE IF IT'S OUTSIDE THE GRID
    if (!isValidCellDev(row, col))
    {
        return;
    }
    var index = (row * gridWidthDev) + col;
    grid[index] = value;
}




/*
 * A cell's type determines which adjacent cells need to be tested
 * during each frame of the simulation. This method tests the cell
 * at (row, col), and returns the constant representing which of
 * the 9 different types of cells it is.
 */
function determineCellTypeDev(row, col)
{
    if ((row === 0) && (col === 0))                                 return TOP_LEFT_DEV;
    else if ((row === 0) && (col === (gridWidthDev-1)))                return TOP_RIGHT_DEV;
    else if ((row === (gridHeightDev-1)) && (col === 0))               return BOTTOM_LEFT_DEV;
    else if ((row === (gridHeightDev-1)) && (col === (gridHeightDev-1)))  return BOTTOM_RIGHT_DEV;
    else if (row === 0)                                             return TOP_DEV;
    else if (col === 0)                                             return LEFT_DEV;
    else if (row === (gridHeightDev-1))                                return BOTTOM_DEV;
    else if (col === (gridWidthDev-1))                                 return RIGHT_DEV;
    else                                                            return CENTER_DEV;
}


/*
 * This method counts the living cells adjacent to the cell at
 * (row, col). This count is returned.
 */
function calcLivingNeighborsDev(row, col)
{
    var numLivingNeighbors = 0;

    // DEPENDING ON THE TYPE OF CELL IT IS WE'LL CHECK
    // DIFFERENT ADJACENT CELLS
    var cellType = determineCellTypeDev(row, col);
    var cellsToCheck = cellLookupDev[cellType];
    for (var counter = 0; counter < (cellsToCheck.numNeighbors * 2); counter+=2)
    {
        var neighborCol = col + cellsToCheck.cellValues[counter];
        var neighborRow = row + cellsToCheck.cellValues[counter+1];
        var index = (neighborRow * gridWidthDev) + neighborCol;
        var neighborValue = updateLifeGridDev[index];
        if (neighborValue === BAD_CELL_DEV || neighborValue === GOOD_CELL_DEV) {
            // Neighbor cell value is 3, so only increase number of neighbors by 1
            numLivingNeighbors += 1;
        }

    }
    return numLivingNeighbors;
}

/*
 * This method returns the dominant surrounding life
 * type around a dead cell
 */
function getDominantLife(row, col)
{
    var dominant = "bad";
    var goodCount = 0;
    var badCount = 0;

    // DEPENDING ON THE TYPE OF CELL IT IS WE'LL CHECK
    // DIFFERENT ADJACENT CELLS
    var cellType = determineCellTypeDev(row, col);
    var cellsToCheck = cellLookupDev[cellType];
    for (var counter = 0; counter < (cellsToCheck.numNeighbors * 2); counter+=2)
    {
        var neighborCol = col + cellsToCheck.cellValues[counter];
        var neighborRow = row + cellsToCheck.cellValues[counter+1];
        var index = (neighborRow * gridWidthDev) + neighborCol;
        var neighborValue = updateLifeGridDev[index];
        if (neighborValue === BAD_CELL_DEV) { // cell has a bad neighbor
            badCount += 1;
        }
        else if (neighborValue === GOOD_CELL_DEV) { // cell has a good neighbor
            goodCount += 1;
        }

        if(goodCount > badCount){
            dominant = "good";
        }
    }
    return dominant;
}


/*
 * Called each frame on a timed basis, this method updates the grid
 * and renders the simulation.
 */
function stepGameOfLifeDev()
{
    // RESET DAMAGE BASED COLORS
    SPACESHIP_COLOR_DEV = "#AFAFAF";
    GRID_BACKGROUND_COLOR_DEV = "#000000";
    // FIRST PERFORM GAME LOGIC
    updateGameDev();

    // THE GRID WE RENDER THIS FRAME WILL BE USED AS THE BASIS
    // FOR THE UPDATE GRID NEXT FRAME
    swapGridsDev();
}

/*
 * This function is called each frame of the simulation and
 * it tests and updates each cell according to the rules
 * of Conway's Game of Life.
 */
function updateGameDev()
{
    // GO THROUGH THE UPDATE GRID AND USE IT TO CHANGE THE RENDER GRID
    for (var i = 0; i < gridHeightDev; i++)
    {
        for (var j = 0; j < gridWidthDev; j++)
        {
            // HOW MANY NEIGHBORS DOES THIS CELL HAVE?
            var numLivingNeighbors = calcLivingNeighborsDev(i, j);
            // CALCULATE THE ARRAY INDEX OF THIS CELL
            // AND GET ITS CURRENT STATE
            var index = (i * gridWidthDev) + j;
            var testCell = updateLifeGridDev[index];

            // CASES
            // 1) IT'S ALIVE
            if (testCell === BAD_CELL_DEV || testCell === GOOD_CELL_DEV)
            {
                // 1a FEWER THAN 2 LIVING NEIGHBORS
                if (numLivingNeighbors < 2)
                {
                    // IT DIES FROM UNDER-POPULATION
                    renderLifeGridDev[index] = DEAD_CELL_DEV;
                }
                // 1b MORE THAN 3 LIVING NEIGHBORS
                else if (numLivingNeighbors > 3)
                {
                    // IT DIES FROM OVERCROWDING
                    renderLifeGridDev[index] = DEAD_CELL_DEV;
                }
                // 1c 2 OR 3 LIVING NEIGHBORS, WE DO NOTHING
                else
                {
                    if (testCell === BAD_CELL_DEV)
                        renderLifeGridDev[index] = BAD_CELL_DEV;
                    else if(testCell === GOOD_CELL_DEV){
                        renderLifeGridDev[index] = GOOD_CELL_DEV;
                    }
                }
                // IT'S A FINISH CELL
            } else if (testCell === FINISH_CELL_DEV) {
                // DON'T CHANGE ANYTHING
                // ITS A VOID CELL
            } else if (testCell === VOID_CELL_DEV) {
                // DON'T CHANGE ANYTHING
            }
            // IT'S DEAD
            else if (numLivingNeighbors === 3)
            {
                var dominantLife = getDominantLife(i, j);
                if(dominantLife === "bad"){
                    renderLifeGridDev[index] = BAD_CELL_DEV;
                }
                else if (dominantLife === "good"){
                    renderLifeGridDev[index] = GOOD_CELL_DEV;
                }
            }
            else
            {
                renderLifeGridDev[index] = DEAD_CELL_DEV;
            }
        }
    }
}

/*
 * This function is called between frames of the simulation and
 * it "moves" the ship. While moving the ship, the function also
 * detects collisions with Scarlet Life.
 */
function updateShip()
{   
    // MAKE SURE THE GAME IS STILL IN FOCUS

    toTeleport = false;
    if (playerShipDev.fuel === 0) {
        // If fuelDev is zero, pause the game
        //failedOverlay = true;
        showGameFailed();
    }
    else {
        playerShipDev.fuel = playerShipDev.fuel - 0.1;
    }
    updateFuel();

    updateBullets();

    killShipCells();
    // increment position based on direction
    if(moveShip === true || forceMove === true){
        if (playerShipDev.dirSpaceship === "right") {
            // CHECK TO SEE IF SHIP WILL GO OUT OF BOUNDS
            if(playerShipDev.xSpaceship !== gridWidthDev - 7
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship + 2, playerShipDev.xSpaceship + 7) != VOID_CELL_DEV // tip of ship
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship + 1, playerShipDev.xSpaceship + 4) != VOID_CELL_DEV // left mid
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship, playerShipDev.xSpaceship + 2) != VOID_CELL_DEV // left wing
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship + 3, playerShipDev.xSpaceship + 4) != VOID_CELL_DEV // right mid
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship + 4, playerShipDev.xSpaceship + 2) != VOID_CELL_DEV) { // right wing
                playerShipDev.xSpaceship += 1;
            }
            else {
                if (currentMutedState() !== true) {
                    wallAudio.play();
                }
            }
        } else if (playerShipDev.dirSpaceship === "down") {
            // CHECK TO SEE IF SHIP WILL GO OUT OF BOUNDS
            if(playerShipDev.ySpaceship !== gridHeightDev - 7
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship + 7, playerShipDev.xSpaceship + 2) != VOID_CELL_DEV // tip of ship
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship + 4, playerShipDev.xSpaceship + 1) != VOID_CELL_DEV // right mid
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship + 2, playerShipDev.xSpaceship) != VOID_CELL_DEV // right wing
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship + 4, playerShipDev.xSpaceship + 3) != VOID_CELL_DEV // left mid
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship + 2, playerShipDev.xSpaceship + 4) != VOID_CELL_DEV) { // left wing
                playerShipDev.ySpaceship += 1;

            }
            else {
                if (currentMutedState() !== true) {
                    wallAudio.play();
                }
            }
        } else if (playerShipDev.dirSpaceship === "left") {
            // CHECK TO SEE IF SHIP WILL GO OUT OF BOUNDS
            if(playerShipDev.xSpaceship !== 0
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship + 2, playerShipDev.xSpaceship - 1) != VOID_CELL_DEV // tip of ship
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship + 1, playerShipDev.xSpaceship + 2) != VOID_CELL_DEV // right mid
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship, playerShipDev.xSpaceship + 4) != VOID_CELL_DEV // right wing
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship + 3, playerShipDev.xSpaceship + 2) != VOID_CELL_DEV // left mid
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship + 4, playerShipDev.xSpaceship + 4) != VOID_CELL_DEV) { // left wing
                playerShipDev.xSpaceship -= 1;
            }
            else {
                if (currentMutedState() !== true) {
                    wallAudio.play();
                }
            }
        } else if (playerShipDev.dirSpaceship === "up") {
            // CHECK TO SEE IF SHIP WILL GO OUT OF BOUNDS
            if(playerShipDev.ySpaceship !== 0
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship - 1, playerShipDev.xSpaceship + 2) != VOID_CELL_DEV // tip of ship
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship + 2, playerShipDev.xSpaceship + 1) != VOID_CELL_DEV // left mid
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship + 4, playerShipDev.xSpaceship) != VOID_CELL_DEV // left wing
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship + 2, playerShipDev.xSpaceship + 3) != VOID_CELL_DEV // right mid
                    && getGridCellDev(updateLifeGridDev, playerShipDev.ySpaceship + 4, playerShipDev.xSpaceship + 4) != VOID_CELL_DEV) {
                playerShipDev.ySpaceship -= 1;
            }
            else {
                if (currentMutedState() !== true) {
                    wallAudio.play();
                }
            }
        }
    }
    initShip();
}

 /*
  * This function updates the positions of each bullet
  *
  */
function updateBullets(){
    // THEN CALCULATE NEW POSITIONS FOR BULLETS
    for(var i = 0; i < bulletListDev.length; i++){
        bulletDev = bulletListDev[i];
        // kill the bullet
        var underCell = getGridCellDev(renderPlayerGridDev, bulletDev.yBullet, bulletDev.xBullet);
        if(underCell === BULLET_CELL_DEV){
            setGridCellDev(renderPlayerGridDev, bulletDev.yBullet, bulletDev.xBullet, DEAD_CELL_DEV);
            setGridCellDev(updatePlayerGridDev, bulletDev.yBullet, bulletDev.xBullet, DEAD_CELL_DEV);
        }
        // CHECK IF THE BULLET IS OUT OF BOUNDS
        if(bulletDev.xBullet > gridWidthDev || bulletDev.xBullet < 0 || bulletDev.yBullet > gridHeightDev || bulletDev.yBullet < 0){
            bulletListDev.splice(i, 1);
        } else if(bulletDev.collided === true) {
            killBulletExplosion(bulletDev);
            bulletListDev.splice(i, 1);
        } else {
            if (bulletDev.dirBullet === "up") {
                bulletDev.yBullet -= bulletDev.velBullet;
            } else if (bulletDev.dirBullet === "right") {
                bulletDev.xBullet += bulletDev.velBullet;
            } else if (bulletDev.dirBullet === "down") {
                bulletDev.yBullet += bulletDev.velBullet;
            } else if (bulletDev.dirBullet === "left") {
                bulletDev.xBullet -= bulletDev.velBullet;
            }
            bulletListDev[i] = bulletDev;
            detectBulletCollision(bulletDev);
            // DO NOT REPLACE POWERUPS UNLESS THERE IS AN EXPLOSION
            underCell = getGridCellDev(renderPlayerGridDev, bulletDev.yBullet, bulletDev.xBullet);
            if(underCell === DEAD_CELL_DEV){
                setGridCellDev(renderPlayerGridDev, bulletDev.yBullet, bulletDev.xBullet, BULLET_CELL_DEV);
                setGridCellDev(updatePlayerGridDev, bulletDev.yBullet, bulletDev.xBullet, BULLET_CELL_DEV);
            }
        }
    }
}

function killBulletExplosion(bullet){
    setGridCellDev(renderLifeGridDev, bulletDev.yBullet - 1, bulletDev.xBullet - 1, DEAD_CELL_DEV);
    setGridCellDev(updateLifeGridDev, bulletDev.yBullet - 1, bulletDev.xBullet - 1, DEAD_CELL_DEV);

    setGridCellDev(renderLifeGridDev, bulletDev.yBullet - 1, bulletDev.xBullet, DEAD_CELL_DEV);
    setGridCellDev(updateLifeGridDev, bulletDev.yBullet - 1, bulletDev.xBullet, DEAD_CELL_DEV);

    setGridCellDev(renderLifeGridDev, bulletDev.yBullet - 1, bulletDev.xBullet + 1, DEAD_CELL_DEV);
    setGridCellDev(updateLifeGridDev, bulletDev.yBullet - 1, bulletDev.xBullet + 1, DEAD_CELL_DEV);

    setGridCellDev(renderLifeGridDev, bulletDev.yBullet, bulletDev.xBullet - 1, DEAD_CELL_DEV);
    setGridCellDev(updateLifeGridDev, bulletDev.yBullet, bulletDev.xBullet - 1, DEAD_CELL_DEV);

    setGridCellDev(renderLifeGridDev, bulletDev.yBullet, bulletDev.xBullet, DEAD_CELL_DEV);
    setGridCellDev(updateLifeGridDev, bulletDev.yBullet, bulletDev.xBullet, DEAD_CELL_DEV);

    setGridCellDev(renderLifeGridDev, bulletDev.yBullet, bulletDev.xBullet + 1, DEAD_CELL_DEV);
    setGridCellDev(updateLifeGridDev, bulletDev.yBullet, bulletDev.xBullet + 1, DEAD_CELL_DEV);

    setGridCellDev(renderLifeGridDev, bulletDev.yBullet + 1, bulletDev.xBullet - 1, DEAD_CELL_DEV);
    setGridCellDev(updateLifeGridDev, bulletDev.yBullet + 1, bulletDev.xBullet - 1, DEAD_CELL_DEV);

    setGridCellDev(renderLifeGridDev, bulletDev.yBullet + 1, bulletDev.xBullet, DEAD_CELL_DEV);
    setGridCellDev(updateLifeGridDev, bulletDev.yBullet + 1, bulletDev.xBullet, DEAD_CELL_DEV);

    setGridCellDev(renderLifeGridDev, bulletDev.yBullet + 1, bulletDev.xBullet + 1, DEAD_CELL_DEV);
    setGridCellDev(updateLifeGridDev, bulletDev.yBullet + 1, bulletDev.xBullet + 1, DEAD_CELL_DEV);
}

/*
 * A helper function to determine if a collision occured.
 */
function detectBulletCollision(bullet) {
    var lifeGridVal = getGridCellDev(renderLifeGridDev, bullet.yBullet, bullet.xBullet);
    var lifeGridAheadVal;
    if(bullet.dirBulletDev = "up"){
        lifeGridAheadVal = getGridCellDev(renderLifeGridDev, bullet.yBullet - 1, bullet.xBullet);
    } else if(bullet.dirBulletDev = "right"){
        lifeGridAheadVal = getGridCellDev(renderLifeGridDev, bullet.yBullet, bullet.xBullet + 1);
    } else if(bullet.dirBulletDev = "down"){
        lifeGridAheadVal = getGridCellDev(renderLifeGridDev, bullet.yBullet + 1, bullet.xBullet);
    } else if(bullet.dirBulletDev = "left"){
        lifeGridAheadVal = getGridCellDev(renderLifeGridDev, bullet.yBullet, bullet.xBullet - 1);
    }

    // Check if the player collided with Scarlet Life
    if (lifeGridVal === BAD_CELL_DEV || lifeGridVal === GOOD_CELL_DEV
        || lifeGridAheadVal === BAD_CELL_DEV || lifeGridAheadVal === GOOD_CELL_DEV) {
        bullet.collided = true;

        if (currentMutedState() !== true) {
            bulletCollisionAudio.play();
        }

        setGridCellDev(renderLifeGridDev, bulletDev.yBullet - 1, bulletDev.xBullet - 1, BULLET_CELL_DEV);
        setGridCellDev(updateLifeGridDev, bulletDev.yBullet - 1, bulletDev.xBullet - 1, BULLET_CELL_DEV);

        setGridCellDev(renderLifeGridDev, bulletDev.yBullet - 1, bulletDev.xBullet, BULLET_CELL_DEV);
        setGridCellDev(updateLifeGridDev, bulletDev.yBullet - 1, bulletDev.xBullet, BULLET_CELL_DEV);

        setGridCellDev(renderLifeGridDev, bulletDev.yBullet - 1, bulletDev.xBullet + 1, BULLET_CELL_DEV);
        setGridCellDev(updateLifeGridDev, bulletDev.yBullet - 1, bulletDev.xBullet + 1, BULLET_CELL_DEV);

        setGridCellDev(renderLifeGridDev, bulletDev.yBullet, bulletDev.xBullet - 1, BULLET_CELL_DEV);
        setGridCellDev(updateLifeGridDev, bulletDev.yBullet, bulletDev.xBullet - 1, BULLET_CELL_DEV);

        setGridCellDev(renderLifeGridDev, bulletDev.yBullet, bulletDev.xBullet, BULLET_CELL_DEV);
        setGridCellDev(updateLifeGridDev, bulletDev.yBullet, bulletDev.xBullet, BULLET_CELL_DEV);

        setGridCellDev(renderLifeGridDev, bulletDev.yBullet, bulletDev.xBullet + 1, BULLET_CELL_DEV);
        setGridCellDev(updateLifeGridDev, bulletDev.yBullet, bulletDev.xBullet + 1, BULLET_CELL_DEV);

        setGridCellDev(renderLifeGridDev, bulletDev.yBullet + 1, bulletDev.xBullet - 1, BULLET_CELL_DEV);
        setGridCellDev(updateLifeGridDev, bulletDev.yBullet + 1, bulletDev.xBullet - 1, BULLET_CELL_DEV);

        setGridCellDev(renderLifeGridDev, bulletDev.yBullet + 1, bulletDev.xBullet, BULLET_CELL_DEV);
        setGridCellDev(updateLifeGridDev, bulletDev.yBullet + 1, bulletDev.xBullet, BULLET_CELL_DEV);

        setGridCellDev(renderLifeGridDev, bulletDev.yBullet + 1, bulletDev.xBullet + 1, BULLET_CELL_DEV);
        setGridCellDev(updateLifeGridDev, bulletDev.yBullet + 1, bulletDev.xBullet + 1, BULLET_CELL_DEV);
    }
}

/*
 * This function adds dead cells to the playergrid
 * in the ships previous position.
 */
function killShipCells()
{
    // Check which direction the player ship is to be facing and place it there.
    if (playerShipDev.dirSpaceship === "right") {
        // Load the pixels of spaceship to draw
        var value = "playerRight.png";
        var pixels = patternsDev[value];

        // OBTAIN THE LOCATION TO PLACE THE SHIP AT
        var xPosition = playerShipDev.xSpaceship;
        var yPosition = playerShipDev.ySpaceship;

        // GO THROUGH ALL THE PIXELS IN THE PATTERN AND PUT THEM IN THE GRID
        for (var i = 0; i < pixels.length; i += 2) {
            var col = xPosition + pixels[i];
            var row = yPosition + pixels[i + 1];
            var cell = getGridCellDev(updatePlayerGridDev, row, col);
            if(cell < TELEPORTER_BASE_VAL_DEV.charCodeAt(0) && cell !== KEY_CELL_DEV){
                setGridCellDev(renderPlayerGridDev, row, col, DEAD_CELL_DEV);
                setGridCellDev(updatePlayerGridDev, row, col, DEAD_CELL_DEV);
            }
        }
    } else if (playerShipDev.dirSpaceship === "down") {
        // Load the pixels of spaceship to draw
        var value = "playerDown.png";
        var pixels = patternsDev[value];

        // OBTAIN THE LOCATION TO PLACE THE SHIP AT
        var xPosition = playerShipDev.xSpaceship;
        var yPosition = playerShipDev.ySpaceship;

        // GO THROUGH ALL THE PIXELS IN THE PATTERN AND PUT THEM IN THE GRID
        for (var i = 0; i < pixels.length; i += 2) {
            var col = xPosition + pixels[i];
            var row = yPosition + pixels[i + 1];
            var cell = getGridCellDev(updatePlayerGridDev, row, col);
            if(cell < TELEPORTER_BASE_VAL_DEV.charCodeAt(0) && cell !== KEY_CELL_DEV){
                setGridCellDev(renderPlayerGridDev, row, col, DEAD_CELL_DEV);
                setGridCellDev(updatePlayerGridDev, row, col, DEAD_CELL_DEV);
            }
        }
    } else if (playerShipDev.dirSpaceship === "left") {
        // Load the pixels of spaceship to draw
        var value = "playerLeft.png";
        var pixels = patternsDev[value];

        // OBTAIN THE LOCATION TO PLACE THE SHIP AT
        var xPosition = playerShipDev.xSpaceship;
        var yPosition = playerShipDev.ySpaceship;

        // GO THROUGH ALL THE PIXELS IN THE PATTERN AND PUT THEM IN THE GRID
        for (var i = 0; i < pixels.length; i += 2) {
            var col = xPosition + pixels[i];
            var row = yPosition + pixels[i + 1];
            var cell = getGridCellDev(updatePlayerGridDev, row, col);
            if(cell < TELEPORTER_BASE_VAL_DEV.charCodeAt(0)  && cell !== KEY_CELL_DEV){
                setGridCellDev(renderPlayerGridDev, row, col, DEAD_CELL_DEV);
                setGridCellDev(updatePlayerGridDev, row, col, DEAD_CELL_DEV);
            }
        }
    } else if (playerShipDev.dirSpaceship === "up") {
        // Load the pixels of spaceship to draw
        var value = "playerUp.png";
        var pixels = patternsDev[value];

        // OBTAIN THE LOCATION TO PLACE THE SHIP AT
        var xPosition = playerShipDev.xSpaceship;
        var yPosition = playerShipDev.ySpaceship;

        // GO THROUGH ALL THE PIXELS IN THE PATTERN AND PUT THEM IN THE GRID
        for (var i = 0; i < pixels.length; i += 2) {
            var col = xPosition + pixels[i];
            var row = yPosition + pixels[i + 1];
            var cell = getGridCellDev(updatePlayerGridDev, row, col);
            if(cell < TELEPORTER_BASE_VAL_DEV.charCodeAt(0)  && cell !== KEY_CELL_DEV){
                setGridCellDev(renderPlayerGridDev, row, col, DEAD_CELL_DEV);
                setGridCellDev(updatePlayerGridDev, row, col, DEAD_CELL_DEV);
            }
        }
    }
}

/* this function kills a set of connected cells */
function killAdjacentCells(row, col){
    var cellValue = getGridCellDev(updatePlayerGridDev, row, col);
    // killing a key reduces the number of keys
    if(cellValue === KEY_CELL_DEV){
        numKeysDev--;
        if (numKeysDev === 0 && currentMutedState() !== true && unlockAudioPlayed !== true) {
                unlockedAudio.play();
                unlockAudioPlayed = false;
        }
    }
    setGridCellDev(updatePlayerGridDev, row, col, DEAD_CELL_DEV);
    setGridCellDev(renderPlayerGridDev, row, col, DEAD_CELL_DEV);
    // DEPENDING ON THE TYPE OF CELL IT IS WE'LL CHECK
    // DIFFERENT ADJACENT CELLS
    var cellType = determineCellTypeDev(row, col);
    var cellsToCheck = cellLookupDev[cellType];
    for (var counter = 0; counter < (cellsToCheck.numNeighbors * 2); counter+=2)
    {
        var neighborCol = col + cellsToCheck.cellValues[counter];
        var neighborRow = row + cellsToCheck.cellValues[counter+1];
        var neighborValue = getGridCellDev(updatePlayerGridDev, neighborRow, neighborCol);
        if (neighborValue === cellValue) {
            // Neighbor cell value is of the same type, so kill that cell too
            killAdjacentCells(neighborRow, neighborCol); // RECURSIVE CALL TO KILL CHAINED POWERUP CELLS
        }
    }
}

/*
 * This function renders a single frame of the simulation, including
 * the grid itself, as well as the text displaying the current
 * fpsDev and cellLengthDev levels.
 */
function renderGameDev()
{
    // CLEAR THE CANVAS
    canvas2DDev.fillStyle = GRID_BACKGROUND_COLOR_DEV;
    canvas2DDev.fillRect(0, 0, canvasWidthDev, canvasHeightDev);
    //levelStats2D.clearRect(0, 0, levelStatsWidth, levelStatsHeight);

    // RENDER THE GRID LINES, IF NEEDED
    if (cellLengthDev >= GRID_LINE_LENGTH_RENDERING_THRESHOLD_DEV)
        //renderGridLinesDev();

    // RENDER THE GAME CELLS
    renderCellsDev();

    // RENDER THE HEALTH AND FUEL BARS
    renderBars();

    // RENDER OVERLAYS IF NECESSARY
    /*
    if(startOverlay === true){
        showGameStartDev();
    } else if(failedOverlay === true){
        showGameFailed();
    } else if(beatenOverlay === true){
        showGameBeaten();
    }
*/
}

function renderBars(){
    // Bar line width
    canvas2DDev.lineWidth = 1;

    // canvas is 512 x 1024
    // fuel bar above ship
    // FUEL BAR
    canvas2DDev.fillStyle = "rgb(255, " + Math.floor(255 * (playerShipDev.fuel / fuelDev)) + ", 0)";
    canvas2DDev.fillRect((playerShipDev.xSpaceship * cellLengthDev), (playerShipDev.ySpaceship * cellLengthDev) - 10, (7 * cellLengthDev) * (playerShipDev.fuel / fuelDev), 5);

    canvas2DDev.strokeStyle = "white";
    canvas2DDev.strokeRect((playerShipDev.xSpaceship * cellLengthDev), (playerShipDev.ySpaceship * cellLengthDev) - 10, (7 * cellLengthDev), 5);

    canvas2DDev.font = "10px Arial";
    canvas2DDev.fillText("F:", playerShipDev.xSpaceship * cellLengthDev - 10, (playerShipDev.ySpaceship * cellLengthDev) - 5);

    // BIG BARS ON TOP
    canvas2DDev.font = "24px Arial";
    // FUEL BAR
    canvas2DDev.fillStyle = "rgba(255, " + Math.floor(255 * (playerShipDev.fuel / fuelDev)) + ", 0, 0.5)";
    canvas2DDev.fillRect( 34, 10, 300 * (playerShipDev.fuel / fuelDev), 20);
    canvas2DDev.fillRect( 34, 10, 300, 20);
    canvas2DDev.fillText("F", 12, 28);
    canvas2DDev.fillText("F", 12, 28);
    // fuel remaining
    canvas2DDev.fillStyle = "black";
    canvas2DDev.fillText("" + Math.floor(playerShipDev.fuel), 36, 29);

    // HEALTH BAR
    //canvas2DDev.fillStyle = "#5bed2f";
    if((playerShipDev.health / healthDev) > 0.5){
        canvas2DDev.fillStyle = "rgba(" + Math.floor(255 * ((healthDev - playerShipDev.health) / healthDev)) + ", 255, 0, 0.5)";
    } else {
        canvas2DDev.fillStyle = "rgba(255, " + Math.floor(255 * (playerShipDev.health / healthDev)) + ", 0, 0.5)";
    }
    // // health above ship
    // // fill it twice
    // canvas2DDev.fillRect((playerShipDev.xSpaceship * cellLengthDev), (playerShipDev.ySpaceship * cellLengthDev) - 10, (7 * cellLengthDev) * (playerShipDev.health / healthDev), 5);
    // canvas2DDev.fillRect((playerShipDev.xSpaceship * cellLengthDev), (playerShipDev.ySpaceship * cellLengthDev) - 10, (7 * cellLengthDev) * (playerShipDev.health / healthDev), 5);
    // canvas2DDev.strokeRect((playerShipDev.xSpaceship * cellLengthDev), (playerShipDev.ySpaceship * cellLengthDev) - 10, (7 * cellLengthDev), 5);
    // canvas2DDev.font = "10px Arial";
    // canvas2DDev.fillText("H", playerShipDev.xSpaceship * cellLengthDev - 10, (playerShipDev.ySpaceship * cellLengthDev) - 5);
    // health on top of game
    canvas2DDev.fillRect(368, 10, 300 * (playerShipDev.health / healthDev), 20);
    canvas2DDev.fillRect(368, 10, 300, 20);
    canvas2DDev.font = "24px Arial";
    canvas2DDev.fillText("H", 346, 28);
    canvas2DDev.fillText("H", 346, 28);
    // health remaining
    canvas2DDev.fillStyle = "black";
    canvas2DDev.fillText("" + Math.floor(playerShipDev.health), 370, 29);

    // BULLET BAR
    canvas2DDev.fillStyle = "rgba(255, 255, 255, 0.5)"; // white
    canvas2DDev.fillRect(702, 10, 300 * ((bulletLimitDev - bulletsConsumed) / bulletLimitDev), 20);
    canvas2DDev.fillRect(702, 10, 300, 20);
    canvas2DDev.fillText("B", 680, 28);
    canvas2DDev.fillText("B", 680, 28);
    // bullets remaining
    canvas2DDev.fillStyle = "black";
    canvas2DDev.fillText("" + (bulletLimitDev - bulletsConsumed), 704, 29);

    // render the mobile controls
    renderMobileControls();
}


/*
 * Renders the cells in the game grid, with only the live
 * cells being rendered as filled boxes. Note that boxes are
 * rendered according to the current cell length.
 */
function renderCellsDev()
{
    // set line width for cells
    canvas2DDev.lineWidth = 2;
    // RENDER THE LIVE CELLS IN THE GRID
    for (var i = 0; i <= gridHeightDev; i++)
    {
        for (var j = 0; j < gridWidthDev; j++)
        {
            var cell = getGridCellDev(renderLifeGridDev, i, j);
            if(cell === DEAD_CELL_DEV){
                // DO NOTHING, OPTIMIZATION
            }
            else if (cell === BAD_CELL_DEV)
            {
                // SET THE RENDER COLOR FOR SCARLET LIFE
                canvas2DDev.fillStyle = BAD_COLOR_DEV;
                var x = j * cellLengthDev;
                var y = i * cellLengthDev;
                canvas2DDev.fillRect(x, y, cellLengthDev, cellLengthDev);
            }
            else if (cell === GOOD_CELL_DEV)
            {
                // SET THE RENDER COLOR FOR SCARLET LIFE
                canvas2DDev.fillStyle = GOOD_COLOR_DEV;
                var x = j * cellLengthDev;
                var y = i * cellLengthDev;
                canvas2DDev.fillRect(x, y, cellLengthDev, cellLengthDev);
            }
            else if (cell === FINISH_CELL_DEV)
            {
                // SET THE RENDER COLOR FOR SCARLET LIFE
                var x = j * cellLengthDev;
                var y = i * cellLengthDev;
                if(numKeysDev < 1){ // the finish is unlocked
                    canvas2DDev.fillStyle = FINISH_COLOR_DEV;
                    canvas2DDev.fillRect(x, y, cellLengthDev, cellLengthDev);
                } else { // the finish is locked
                    canvas2DDev.fillStyle = FINISH_LOCKED_COLOR_DEV;
                    // CORRESPONDING OUTLINE
                    canvas2DDev.strokeStyle = MORE_BULLETS_OUTLINE_DEV;
                    canvas2DDev.strokeRect(x,y,cellLengthDev,cellLengthDev);

                    canvas2DDev.fillRect(x, y, cellLengthDev, cellLengthDev);
                }
            }
            else if (cell === VOID_CELL_DEV)
            {
                // SET THE RENDER COLOR FOR SCARLET LIFE
                canvas2DDev.fillStyle = VOID_COLOR_DEV;
                var x = j * cellLengthDev;
                var y = i * cellLengthDev;
                canvas2DDev.fillRect(x, y, cellLengthDev, cellLengthDev);
            }
            // check for bullet explosion
            if (cell === BULLET_CELL_DEV)
            {
                // SET THE RENDER COLOR FOR BULLETS
                canvas2DDev.fillStyle = BULLET_COLOR_DEV;
                var x = j * cellLengthDev;
                var y = i * cellLengthDev;
                canvas2DDev.fillRect(x, y, cellLengthDev, cellLengthDev);

            }
            // BEGIN PLAYER GRID CHECKS, ALWAYS ABOVE LIFE GRID
            var cell = getGridCellDev(renderPlayerGridDev, i, j);
            if(cell === DEAD_CELL_DEV){
                // DO NOTHING -- optimization
            }
            else if (cell === RANDOM_POWERUP_CELL_DEV)
            {
                // SET THE RENDER COLOR FOR SCARLET LIFE
                canvas2DDev.fillStyle = POWERUP_COLOR_DEV;
                var x = j * cellLengthDev;
                var y = i * cellLengthDev;
                canvas2DDev.fillRect(x, y, cellLengthDev, cellLengthDev);
                // pick random outline color
                var choices = [FUEL_OUTLINE_DEV, HEALTH_OUTLINE_DEV, MORE_BULLETS_OUTLINE_DEV, SLOW_TIME_OUTLINE_DEV]
                canvas2DDev.strokeStyle = choices[Math.floor(Math.random()*4)]
                canvas2DDev.strokeRect(x,y,cellLengthDev,cellLengthDev);
            }
            else if (cell === FUEL_CELL_DEV)
            {
                // SET THE RENDER COLOR FOR KEYS
                canvas2DDev.fillStyle = POWERUP_COLOR_DEV;
                var x = j * cellLengthDev;
                var y = i * cellLengthDev;
                canvas2DDev.fillRect(x, y, cellLengthDev, cellLengthDev);
                // CORRESPONDING OUTLINE
                canvas2DDev.strokeStyle = FUEL_OUTLINE_DEV;
                canvas2DDev.strokeRect(x,y,cellLengthDev,cellLengthDev);
            }
            else if (cell === HEALTH_CELL_DEV)
            {
                // SET THE RENDER COLOR FOR KEYS
                canvas2DDev.fillStyle = POWERUP_COLOR_DEV;
                var x = j * cellLengthDev;
                var y = i * cellLengthDev;
                canvas2DDev.fillRect(x, y, cellLengthDev, cellLengthDev);
                // CORRESPONDING OUTLINE
                canvas2DDev.strokeStyle = HEALTH_OUTLINE_DEV;
                canvas2DDev.strokeRect(x,y,cellLengthDev,cellLengthDev);
            }
            else if (cell === SLOW_TIME_CELL_DEV)
            {
                // SET THE RENDER COLOR FOR KEYS
                canvas2DDev.fillStyle = POWERUP_COLOR_DEV;
                var x = j * cellLengthDev;
                var y = i * cellLengthDev;
                canvas2DDev.fillRect(x, y, cellLengthDev, cellLengthDev);
                // CORRESPONDING OUTLINE
                canvas2DDev.strokeStyle = SLOW_TIME_OUTLINE_DEV;
                canvas2DDev.strokeRect(x,y,cellLengthDev,cellLengthDev);
            }
            else if (cell === MORE_BULLETS_CELL_DEV)
            {
                // SET THE RENDER COLOR FOR KEYS
                canvas2DDev.fillStyle = POWERUP_COLOR_DEV;
                var x = j * cellLengthDev;
                var y = i * cellLengthDev;
                canvas2DDev.fillRect(x, y, cellLengthDev, cellLengthDev);
                // CORRESPONDING OUTLINE
                canvas2DDev.strokeStyle = MORE_BULLETS_OUTLINE_DEV;
                canvas2DDev.strokeRect(x,y,cellLengthDev,cellLengthDev);
            }
            else if (cell === KEY_CELL_DEV)
            {
                // SET THE RENDER COLOR FOR KEYS
                canvas2DDev.strokeStyle = KEY_COLOR_DEV;
                var x = j * cellLengthDev;
                var y = i * cellLengthDev;
                canvas2DDev.strokeRect(x, y, cellLengthDev, cellLengthDev);
            }
            else if (cell === TOKEN_CELL_DEV)
            {
                // SET THE RENDER COLOR FOR TOKENS
                canvas2DDev.strokeStyle = TOKEN_COLOR_DEV;
                var x = j * cellLengthDev;
                var y = i * cellLengthDev;
                canvas2DDev.strokeRect(x, y, cellLengthDev, cellLengthDev);

            }
            else if (cell >= TELEPORTER_BASE_VAL_DEV)
            {
                // SET THE RENDER COLOR FOR TELEPORTERS
                canvas2DDev.fillStyle = TELEPORTER_COLOR_DEV;
                var x = j * cellLengthDev;
                var y = i * cellLengthDev;
                canvas2DDev.fillRect(x, y, cellLengthDev, cellLengthDev);

            }
            // BEGIN OVERLAPPING GRID ELEMENTS
            if (cell === BULLET_CELL_DEV)
            {
                // SET THE RENDER COLOR FOR BULLETS
                canvas2DDev.fillStyle = BULLET_COLOR_DEV;
                var x = j * cellLengthDev;
                var y = i * cellLengthDev;
                canvas2DDev.fillRect(x, y, cellLengthDev, cellLengthDev);

            }
            else if (cell === SPACESHIP_CELL_DEV)
            {
                // SET THE RENDER COLOR FOR SPACESHIP
                canvas2DDev.fillStyle = SPACESHIP_COLOR_DEV;
                var x = j * cellLengthDev;
                var y = i * cellLengthDev;
                canvas2DDev.fillRect(x, y, cellLengthDev, cellLengthDev);
            }
            if (cell === SPACESHIP_DAMAGED_CELL_DEV)
            {
                // SET THE RENDER COLOR FOR DAMAGED SPACESHIP
                canvas2DDev.fillStyle = SPACESHIP_DAMAGED_COLOR_DEV;
                var x = j * cellLengthDev;
                var y = i * cellLengthDev;
                canvas2DDev.fillRect(x, y, cellLengthDev, cellLengthDev);
            }
        }
    }
}


/*
 *
 * Renders the cells to contain the Scarlet Life cells from the level grid
 *
 */
function initGridDev()
{

    gridWidthDev = canvasWidthDev/cellLengthDev;
    gridHeightDev = canvasHeightDev/cellLengthDev;

    // PROPPERLY POPULATE GRIDS
    for (var i = 0; i <= gridHeightDev; i++) {
        for (var j = 0; j < gridWidthDev; j++) {
            var cell = getGridCellDev(levelGrid, i, j);
            if(typeof cell === "number"){
                cell = String.fromCharCode(cell + 48);
            }
            if (cell === BAD_CELL_DEV) {
                setGridCellDev(renderLifeGridDev, i, j, BAD_CELL_DEV);
                setGridCellDev(updateLifeGridDev, i, j, BAD_CELL_DEV);
            } else if( cell === GOOD_CELL_DEV){
                setGridCellDev(renderLifeGridDev, i, j, GOOD_CELL_DEV);
                setGridCellDev(updateLifeGridDev, i, j, GOOD_CELL_DEV);
            }else if( cell === VOID_CELL_DEV){
                setGridCellDev(renderLifeGridDev, i, j, VOID_CELL_DEV);
                setGridCellDev(updateLifeGridDev, i, j, VOID_CELL_DEV);
            } else if( cell === FINISH_CELL_DEV){
                setGridCellDev(renderLifeGridDev, i, j, FINISH_CELL_DEV);
                setGridCellDev(updateLifeGridDev, i, j, FINISH_CELL_DEV);
            } else if( cell >= TELEPORTER_BASE_VAL_DEV){
                setGridCellDev(renderPlayerGridDev, i, j, cell);
                setGridCellDev(updatePlayerGridDev, i, j, cell);
                analyzeTeleporter(i, j, cell);
            } else if( cell === RANDOM_POWERUP_CELL_DEV){
                setGridCellDev(renderPlayerGridDev, i, j, RANDOM_POWERUP_CELL_DEV);
                setGridCellDev(updatePlayerGridDev, i, j, RANDOM_POWERUP_CELL_DEV);
            } else if( cell === HEALTH_CELL_DEV){
                setGridCellDev(renderPlayerGridDev, i, j, HEALTH_CELL_DEV);
                setGridCellDev(updatePlayerGridDev, i, j, HEALTH_CELL_DEV);
            } else if( cell === FUEL_CELL_DEV){
                setGridCellDev(renderPlayerGridDev, i, j, FUEL_CELL_DEV);
                setGridCellDev(updatePlayerGridDev, i, j, FUEL_CELL_DEV);
            } else if( cell === SLOW_TIME_CELL_DEV){
                setGridCellDev(renderPlayerGridDev, i, j, SLOW_TIME_CELL_DEV);
                setGridCellDev(updatePlayerGridDev, i, j, SLOW_TIME_CELL_DEV);
            } else if( cell === MORE_BULLETS_CELL_DEV){
                setGridCellDev(renderPlayerGridDev, i, j, MORE_BULLETS_CELL_DEV);
                setGridCellDev(updatePlayerGridDev, i, j, MORE_BULLETS_CELL_DEV);
            } else if( cell === BULLET_CELL_DEV){
                setGridCellDev(renderPlayerGridDev, i, j, BULLET_CELL_DEV);
                setGridCellDev(updatePlayerGridDev, i, j, BULLET_CELL_DEV);
            } else if( cell === KEY_CELL_DEV){
                // increase number of keys
                numKeysDev++;
                setGridCellDev(renderPlayerGridDev, i, j, KEY_CELL_DEV);
                setGridCellDev(updatePlayerGridDev, i, j, KEY_CELL_DEV);
            } else if( cell === TOKEN_CELL_DEV){
                setGridCellDev(renderPlayerGridDev, i, j, TOKEN_CELL_DEV);
                setGridCellDev(updatePlayerGridDev, i, j, TOKEN_CELL_DEV);
            }

        }
    }
}

/*
 * Sets up necessary teleporter pairs
 */
function analyzeTeleporter(row, col, value)
{
    // figure out if the teleporter has already been added
    var notAdded = true;
    for (var i = 0; i < teleporterListDev.length; i++) {
        if(teleporterListDev[i].teleOdd === value || teleporterListDev[i].teleEven === value){
            // the teleporter has already been added
            notAdded = false;
        }
    }
    // if the teleporter has not yet been added
    if(notAdded === true){
        var teleOdd;
        var xTeleOdd;
        var yTeleOdd;
        var teleEven;
        var xTeleEven;
        var yTeleEven;

        // figure out what we're looking for and set up appropriate values from there
        var lookingFor;
        if(value.charCodeAt(0) % 2 === 0){
            // THE TELEPORTER BASE IS EVEN, SO THE EVENS TLEPORT TO THE ODD BELOW THEM
            lookingFor = String.fromCharCode(value.charCodeAt(0) - 1);
            teleEven = value;
            xTeleEven = col;
            yTeleEven = row;
                // PROPPERLY POPULATE VALUES
            for (var i = 0; i <= gridHeightDev; i++) {
                for (var j = 0; j < gridWidthDev; j++) {
                    var cell = getGridCellDev(levelGrid, i, j);
                    if( cell === lookingFor){
                        // We found what we're looking for!
                        teleOdd = cell;
                        xTeleOdd = j;
                        yTeleOdd = i;
                        // add the new teleporter to the list
                        var newTele = new teleporter(teleOdd, xTeleOdd, yTeleOdd, teleEven, xTeleEven, yTeleEven);
                        teleporterListDev.push(newTele);
                    }
                }
            }
        } else { // the teleporter is odd
            // THE TELPORTER BASE IS ODD, SO THE ODDS TELEPORT TO THE EVEN ABOVE THEM
            lookingFor = String.fromCharCode(value.charCodeAt(0) + 1);
            teleOdd = value;
            xTeleOdd = col;
            yTeleOdd = row;
                // PROPPERLY POPULATE VALUES
            for (var i = 0; i <= gridHeightDev; i++) {
                for (var j = 0; j < gridWidthDev; j++) {
                    var cell = getGridCellDev(levelGrid, i, j);
                    if( cell === lookingFor){
                        // We found what we're looking for!
                        teleEven = cell;
                        xTeleEven = j;
                        yTeleEven = i;
                        // add the new teleporter to the list
                        var newTele = new teleporter(teleOdd, xTeleOdd, yTeleOdd, teleEven, xTeleEven, yTeleEven);
                        teleporterListDev.push(newTele);
                    }
                }
            }
        }
    }
}

/*
 * Renders the grid lines.
 */
function renderGridLinesDev()
{
    // SET THE PROPER COLOR
    canvas2DDev.strokeStyle = GRID_LINES_COLOR_DEV;

    // VERTICAL LINES
    for (var i = 0; i < gridWidthDev; i++)
    {
        var x1 = i * cellLengthDev;
        var y1 = 0;
        var x2 = x1;
        var y2 = canvasHeightDev;
        canvas2DDev.beginPath();
        canvas2DDev.moveTo(x1, y1);
        canvas2DDev.lineTo(x2, y2);
        canvas2DDev.stroke();
    }

    // HORIZONTAL LINES
    for (var j = 0; j < gridHeightDev; j++)
    {
        var x1 = 0;
        var y1 = j * cellLengthDev;
        var x2 = canvasWidthDev;
        var y2 = y1;
        canvas2DDev.moveTo(x1, y1);
        canvas2DDev.lineTo(x2, y2);
        canvas2DDev.stroke();
    }
}


/*
 * We need one grid's cells to determine the grid's values for
 * the next frame. So, we update the render grid based on the contents
 * of the update grid, and then, after rending, we swap them, so that
 * the next frame we'll be progressing the game properly.
 */
function swapGridsDev()
{
    var temp = updateLifeGridDev;
    updateLifeGridDev = renderLifeGridDev;
    renderLifeGridDev = temp;
}

/*
 * This function resets the grid containing the current state of the
 * Game of Life such that all cells in the game are dead.
 */
function resetGameOfLifeDev()
{
    // RESET ALL THE DATA STRUCTURES TOO
    gridWidthDev = canvasWidthDev/cellLengthDev;
    gridHeightDev = canvasHeightDev/cellLengthDev;
    updateLifeGridDev = new Array();
    renderLifeGridDev = new Array();
    updatePlayerGridDev = new Array();
    renderPlayerGridDev = new Array();

    bulletListDev = new Array();

    // INIT THE CELLS IN THE GRID
    for (var i = 0; i < gridHeightDev; i++)
    {
        for (var j = 0; j < gridWidthDev; j++)
        {
            setGridCellDev(updateLifeGridDev, i, j, DEAD_CELL_DEV);
            setGridCellDev(renderLifeGridDev, i, j, DEAD_CELL_DEV);
            setGridCellDev(updatePlayerGridDev, i, j, DEAD_CELL_DEV);
            setGridCellDev(renderPlayerGridDev, i, j, DEAD_CELL_DEV);
        }
    }

    // RENDER THE CLEARED SCREEN
    renderGameDev();
}
/*
 * Loads the ship paterns. Then, places the appropriate ship onto the grid.
 */
function initShipPatternsDev() {
    // First, load the ship images

    // THIS IS WHERE ALL THE IMAGES SHOULD BE
    imgDirDev = "img/";

    // THIS WILL STORE ALL THE SHIP PATTERNS IN AN ASSOCIATIVE ARRAY
    patternsDev = new Array();

    // THIS WILL STORE ALL THE SHIP PATTERNS DIRECTIONS IN AN ASSOCIATIVE ARRAY
    directions = ["playerUp.png", "playerRight.png", "playerDown.png", "playerLeft.png"];

    // GO THROUGH THE LIST AND LOAD ALL THE IMAGES
    for (var i = 0; i < directions.length; i++)
    {
        // GET THE NAME OF THE IMAGE FILE AND MAKE
        // A NEW ARRAY TO STORE IT'S PIXEL COORDINATES
        var key = directions[i];
        var pixelArray = new Array();

        // NOW LOAD THE DATA FROM THE IMAGE
        loadOffscreenImageDev(key, pixelArray);

        // AND PUT THE DATA IN THE ASSIATIVE ARRAY,
        // BY KEY
        patternsDev[key] = pixelArray;
    }
}

/*
 * Loads the ship paterns. Then, places the appropriate ship onto the grid.
 */
function initShip() {
    // ONLY INIT THE SHIP IF ALL THE SHIPS IMAGES ARE LOADED
    if(imagesLoadedDev === 4) { // 4 IMAGES HAVE BEEN LOADED (ship Up, Right, Down, Left)
        // Load the patternsDev into the grid

        // Check which direction the player ship is to be facing and place it there.
        if (playerShipDev.dirSpaceship === "right") {
            // Load the pixels of spaceship to draw
            var value = "playerRight.png";
            var pixels = patternsDev[value];

            // OBTAIN THE LOCATION TO PLACE THE SHIP AT
            var xPosition = playerShipDev.xSpaceship;
            var yPosition = playerShipDev.ySpaceship;

            // GO THROUGH ALL THE PIXELS IN THE PATTERN AND PUT THEM IN THE GRID
            for (var i = 0; i < pixels.length; i += 2) {
                var col = xPosition + pixels[i];
                var row = yPosition + pixels[i + 1];
                // Check for overlap between spaceship, Scarlet Life, and finish area
                detectCollision(row, col);
            }
            // RENDER THE GAME IMMEDIATELY
            renderGameDev();
        } else if (playerShipDev.dirSpaceship === "down") {
            // Load the pixels of spaceship to draw
            var value = "playerDown.png";
            var pixels = patternsDev[value];

            // OBTAIN THE LOCATION TO PLACE THE SHIP AT
            var xPosition = playerShipDev.xSpaceship;
            var yPosition = playerShipDev.ySpaceship;

            // GO THROUGH ALL THE PIXELS IN THE PATTERN AND PUT THEM IN THE GRID
            for (var i = 0; i < pixels.length; i += 2) {
                var col = xPosition + pixels[i];
                var row = yPosition + pixels[i + 1];
                // Check for overlap between spaceship, Scarlet Life, and finish area
                detectCollision(row, col);
            }
            // RENDER THE GAME IMMEDIATELY
            renderGameDev();
        } else if (playerShipDev.dirSpaceship === "left") {
            // Load the pixels of spaceship to draw
            var value = "playerLeft.png";
            var pixels = patternsDev[value];

            // OBTAIN THE LOCATION TO PLACE THE SHIP AT
            var xPosition = playerShipDev.xSpaceship;
            var yPosition = playerShipDev.ySpaceship;

            // GO THROUGH ALL THE PIXELS IN THE PATTERN AND PUT THEM IN THE GRID
            for (var i = 0; i < pixels.length; i += 2) {
                var col = xPosition + pixels[i];
                var row = yPosition + pixels[i + 1];
                // Check for overlap between spaceship, Scarlet Life, and finish area
                detectCollision(row, col);
            }
            // RENDER THE GAME IMMEDIATELY
            renderGameDev();
        } else if (playerShipDev.dirSpaceship === "up") {
            // Load the pixels of spaceship to draw
            var value = "playerUp.png";
            var pixels = patternsDev[value];

            // OBTAIN THE LOCATION TO PLACE THE SHIP AT
            var xPosition = playerShipDev.xSpaceship;
            var yPosition = playerShipDev.ySpaceship;

            // GO THROUGH ALL THE PIXELS IN THE PATTERN AND PUT THEM IN THE GRID
            for (var i = 0; i < pixels.length; i += 2) {
                var col = xPosition + pixels[i];
                var row = yPosition + pixels[i + 1];
                // Check for overlap between spaceship, Scarlet Life, and finish area
                detectCollision(row, col);
            }
            // RENDER THE GAME IMMEDIATELY
            renderGameDev();
        }
    }
}

/*
 * This function loads the image and then examines it, extracting
 * all the pixels and saving the coordinates that are non-white.
 */
function loadOffscreenImageDev(imgName, pixelArray)
{
    // FIRST GET THE IMAGE DATA
    var img = new Image();

    // document.URL IS THE URL OF WHERE THE WEB PAGE IS FROM WHICH THIS
    // JavaScript PROGRAM IS BEING USED. NOTE THAT ASSIGNING A URL TO
    // A CONSTRUCTED Image's src VARIABLE INITIATES THE IMAGE-LOADING
    // PROCESS
    var path = document.URL;
    var indexLocation = path.indexOf("index.html");
    path = path.substring(0, indexLocation);
    img.src = path + imgDirDev + imgName;
    // NOTE THAT THE IMAGE WILL LOAD IN THE BACKGROUND, BUT
    // WE CAN TELL JavaScript TO LET US KNOW WHEN IT HAS FULLY
    // LOADED AND RESPOND THEN.
    img.onload = function() { respondToLoadedImageDev(imgName, img, pixelArray); };

}

/*
 * This method is called in response to an Image having completed loading. We
 * respond by examining the contents of the image, and keeping the non-white
 * pixel coordinates in our patternsDev array so that the user may use those
 * patternsDev in the simulation.
 */
function respondToLoadedImageDev(imgName, img, pixelArray)
{
    // WE'LL EXAMINE THE PIXELS BY FIRST DRAWING THE LOADED
    // IMAGE TO AN OFFSCREEN CANVAS. SO FIRST WE NEED TO
    // MAKE THE CANVAS, WHICH WILL NEVER ACTUALLY BE VISIBLE.
    var offscreenCanvas = document.createElement("canvas");
    offscreenCanvas.width = img.width;
    offscreenCanvas.height = img.height;
    var offscreenCanvas2D = offscreenCanvas.getContext("2d");
    offscreenCanvas2D.drawImage(img, 0, 0);

    // NOW GET THE DATA FROM THE IMAGE WE JUST DREW TO OUR OFFSCREEN CANVAS
    var imgData = offscreenCanvas2D.getImageData( 0, 0, img.width, img.height );

    // THIS WILL COUNT THE FOUND NON-WHITE PIXLS
    var pixelArrayCounter = 0;

    // GO THROUGH THE IMAGE DATA AND PICK OUT THE COORDINATES
    for (var i = 0; i < imgData.data.length; i+=4)
    {
        // THE DATA ARRAY IS STRIPED RGBA, WE'LL IGNORE
        // THE ALPHA CHANNEL
        var r = imgData.data[i];
        var g = imgData.data[i+1];
        var b = imgData.data[i+2];

        // KEEP THE PIXEL IF IT'S NON-WHITE
        if ((r < 255) && (g < 255) && (b < 255))
        {
            // CALCULATE THE LOCAL COORDINATE OF
            // THE FOUND PIXEL. WE DO THIS BECAUSE WE'RE
            // NOT KEEPING ALL THE PIXELS
            var x = Math.floor((i/4)) % img.width;
            var y = Math.floor(Math.floor((i/4)) / img.width);

            // STORE THE COORDINATES OF OUR PIXELS
            pixelArray[pixelArrayCounter] = x;
            pixelArray[pixelArrayCounter+1] = y;
            pixelArrayCounter += 2;
        }
    }
    imagesLoadedDev ++;
    // check to see if we can init the ship
    initShip();
}

/*
 * Updates and renders the fuelDev bar below the game canvasDev.
 */
function updateFuel()
{
    if (playerShipDev.fuel === 0) {
        // If fuelDev is zero, pause the game
        //failedOverlay = true;
        showGameFailed();
    }

    if(moveShip === true){
        playerShipDev.fuel = playerShipDev.fuel - 0.3;
    } else{
        playerShipDev.fuel = playerShipDev.fuel - 0.1;
    }
    if (playerShipDev.fuel <= 0) {
        //failedOverlay = true;
        showGameFailed();
    }
}

/*
 * A helper function to determine if a collision occured.
 */
function detectCollision(row, col) {
    var lifeGridVal = getGridCellDev(renderLifeGridDev, row, col);
    // If player healthDev is 0, it's game over
    if (playerShipDev.health <= 0) {
        // If healthDev is zero, pause the game
        //failedOverlay = true;
        showGameFailed();
    }
    // Check if the player reached an unlocked finish line
    if (numKeysDev < 1 && lifeGridVal === FINISH_CELL_DEV && playerShipDev.health > 0 && playerShipDev.fuel > 0) {
        if (currentMutedState() !== true) {
            finishAudio.play();
        }
        //beatenOverlay = true;
        showGameBeaten();
    }

    // CHECK OVERLAPPED VALUES IN THE PLAYER GRID
    var playerGridVal = getGridCellDev(updatePlayerGridDev, row, col);
    if(playerGridVal === DEAD_CELL_DEV){
        // THIS IS A DEAD CELL, DO NOTHING
    } else if(playerGridVal === RANDOM_POWERUP_CELL_DEV){
        var random = Math.floor((Math.random() * 4) + 1);
        console.log(random);
        if(random === 1){
            if (currentMutedState() !== true)
                powerupAudio.play();
            console.log("health restore!");
            if(playerShipDev.health + 30 > healthDev){
                playerShipDev.health = healthDev;
            } else {
                playerShipDev.health += 30;
            }
        } else if(random === 2){
            if (currentMutedState() !== true)
                powerupAudio.play();
            console.log("fuel restore!");
            if(playerShipDev.fuel + 30 > fuelDev){
                playerShipDev.fuel = fuelDev;
            } else {
                playerShipDev.fuel += 30;
            }
        } else if(random === 3){
            if (currentMutedState() !== true)
                powerupAudio.play();
            console.log("slow time!");
            // slow frame interval by half
            pauseGameOfLifeDev();
            frameIntervalDev = MILLISECONDS_IN_ONE_SECOND_DEV / fpsDev * 2;
            startGameOfLifeDev();
            slowTimerDev = setTimeout(function(){ // set back to normal after 5 seconds
                pauseGameOfLifeDev();
                frameIntervalDev = MILLISECONDS_IN_ONE_SECOND_DEV / fpsDev;
                startGameOfLifeDev();
            }, 5000);
        } else if(random === 4){
            if (currentMutedState() !== true)
                powerupAudio.play();
            if(bulletsConsumed - 30 < 0){
                bulletsConsumed = 0;
            } else {
                bulletsConsumed -= 30;
            }
        }
        killAdjacentCells(row, col);
    } else if (playerGridVal === HEALTH_CELL_DEV) {
        console.log("health restore!");
            if (currentMutedState() !== true)
                powerupAudio.play();
            if(playerShipDev.health + 30 > healthDev){
                playerShipDev.health = healthDev;
            } else {
                playerShipDev.health += 30;
            }
            killAdjacentCells(row, col);
    } else if (playerGridVal === FUEL_CELL_DEV) {
        console.log("fuel restore!");
            if (currentMutedState() !== true)
                powerupAudio.play();
            if(playerShipDev.fuel + 30 > fuelDev){
                playerShipDev.fuel = fuelDev;
            } else {
                playerShipDev.fuel += 30;
            }
            killAdjacentCells(row, col);
    } else if (playerGridVal === SLOW_TIME_CELL_DEV) {
        console.log("slow time!");
            if (currentMutedState() !== true)
                powerupAudio.play();
            // slow frame interval by half
            pauseGameOfLifeDev();
            frameIntervalDev = MILLISECONDS_IN_ONE_SECOND_DEV / fpsDev * 2;
            startGameOfLifeDev();
           slowTimerDev =  setTimeout(function(){ // set back to normal after 5 seconds
                pauseGameOfLifeDev();
                frameIntervalDev = MILLISECONDS_IN_ONE_SECOND_DEV / fpsDev;
                startGameOfLifeDev();
            }, 5000);
            killAdjacentCells(row, col);
    } else if (playerGridVal === MORE_BULLETS_CELL_DEV) {
        if(bulletsConsumed - 30 < 0){
            bulletsConsumed = 0;
        } else {
            bulletsConsumed -= 30;
        }
        killAdjacentCells(row, col);
    } else if (playerGridVal === KEY_CELL_DEV) {
        if (currentMutedState() !== true) {
            keyPickupAudio.play();
        }
        console.log("Collect keys to unlock the exit!");
        killAdjacentCells(row, col);
    } else if (playerGridVal === TOKEN_CELL_DEV) {
        console.log("Collect tokens to increase your score!");
        killAdjacentCells(row, col);
    } else if (playerGridVal >= TELEPORTER_BASE_VAL_DEV) {
        killShipCells();
        // find the teleporter that fits the right value
        for (var i = 0; i < teleporterListDev.length; i++) {
            if(teleporterListDev[i].teleOdd === playerGridVal){
                // send the ship to the x and y of the partner teleporter
                if (currentMutedState() !== true) {
                    teleportAudio.play();
                }
                playerShipDev.xSpaceship = teleporterListDev[i].xTeleEven;
                playerShipDev.ySpaceship = teleporterListDev[i].yTeleEven;
                toTeleport = true;
                break;
            } else if (teleporterListDev[i].teleEven === playerGridVal){
                // send the ship to the x and y of the partner teleporter
                if (currentMutedState() !== true) {
                    teleportAudio.play();
                }
                playerShipDev.xSpaceship = teleporterListDev[i].xTeleOdd;
                playerShipDev.ySpaceship = teleporterListDev[i].yTeleOdd;
                toTeleport = true;
                break;
            }
        }
        // Offset x and y based on ship direction
        if (playerShipDev.dirSpaceship === "right") {
            playerShipDev.xSpaceship += 4;
        } else if (playerShipDev.dirSpaceship === "down") {
            playerShipDev.ySpaceship += 5;
            playerShipDev.xSpaceship -= 1;
        } else if (playerShipDev.dirSpaceship === "left") {
            playerShipDev.xSpaceship -= 8;
        } else if (playerShipDev.dirSpaceship === "up") {
            playerShipDev.ySpaceship -= 7;
            playerShipDev.xSpaceship -= 1;
        }
    }
    if(toTeleport === false){ // if the ship is teleporting, don't paint the ship
        // Check if the player collided with Scarlet Life
        if (lifeGridVal === BAD_CELL_DEV && playerShipDev.health > 0) {
            if (currentMutedState() !== true)
                damageAudio.play();
            playerShipDev.health -= 5;
            // do not overwrite teleport cells
            if(playerGridVal < TELEPORTER_BASE_VAL_DEV.charCodeAt(0)){
                setGridCellDev(renderPlayerGridDev, row, col, SPACESHIP_DAMAGED_CELL_DEV);
            }
            SPACESHIP_COLOR_DEV = "#FFFFFF";
            GRID_BACKGROUND_COLOR_DEV = "#390000";
        } else {
            // PAINT A NORMAL SHIP CELL
            // do not overwrite a teleport cell or a key
            if(playerGridVal < TELEPORTER_BASE_VAL_DEV.charCodeAt(0) && playerGridVal !== KEY_CELL_DEV){
                setGridCellDev(renderPlayerGridDev, row, col, SPACESHIP_CELL_DEV);
                setGridCellDev(updatePlayerGridDev, row, col, SPACESHIP_CELL_DEV);
            }
        }
    }
}

/*
 * This is the player. The spaceship is oriented such that the top-left corner of the canvasDev is (0,0). The
 * horizontal axis is the x-axis and has positive values to the right of (0,0). The vertical-axis is the y-axis
 * and the values increase downwards from (0,0).
 */
function spaceship(xShip, yShip, dirShip, velShip, healthShip, fuelShip)
{
    this.xSpaceship = xShip;
    this.ySpaceship = yShip;
    this.dirSpaceship = dirShip;
    this.velSpaceship = velShip;
    this.health = healthShip;
    this.fuel = fuelShip;
}

/*
 * This is one bullet that the player can shoot, it travels across the screen
 * and blows up the life that it hits.
 */
function bullet(xBullet, yBullet, dirBullet, velBullet)
{
    this.xBullet = xBullet;
    this.yBullet = yBullet;
    this.dirBullet = dirBullet;
    this.velBullet = velBullet;
    this.collided = false;
}

/*
 * This class represents a teleporter pair
 */
 function teleporter(teleOdd, xTeleOdd, yTeleOdd, teleEven, xTeleEven, yTeleEven)
{
    this.teleOdd = teleOdd;
    this.xTeleOdd = xTeleOdd;
    this.yTeleOdd = yTeleOdd;
    this.teleEven = teleEven;
    this.xTeleEven = xTeleEven;
    this.yTeleEven = yTeleEven;
}

var scope;

/*
 * This function shows the game-start overlay
 */
function showGameStartDev()
{
    modalType = "start";
    // ANGULAR IS ALTERED IN MODAL.JS
    // First pause game
    pauseGameOfLifeDev();

    // Disable the scrolling for game play
    disableScrollMobile();
    disableScroll();

    // Then instantiate Modal
    //console.log("showing start modal");
    setTimeout(function(){
        initGamePlayModal();
    }, 300);

}

/*
 * This function shows the game-failed overlay
 */
function showGameFailed()
{
    if (currentMutedState() !== true)
        looseLevelAudio.play();
    modalType = "failed";
    scope.$apply(function(){
        scope.watchModalTypeVar = 'failed';
    });
    enableScroll();
    // First pause game
    pauseGameOfLifeDev();
    // Then instantiate Modal
    setTimeout(function(){
        initGamePlayModal();
    }, 50);}

/*
 * This function shows the game-beaten overlay
 * NOTE: This function has been heavily modified by Layla,
 *       please note the changes, and the analogous additions
 *       in my 'modal.js' Angular file.
 */
function showGameBeaten()
{
    modalType = "beaten";
    scope.$apply(function(){
        scope.watchModalTypeVar = 'beaten';
    });
    pauseGameOfLifeDev();
    enableScroll();
    setTimeout(function(){
        initGamePlayModal();
    }, 50);}

/*
 * This function shows the game-paused overlay
 */
function showGamePaused()
{
    modalType = "paused";
    scope.$apply(function(){
        scope.watchModalTypeVar = 'paused';
    });
    // First pause game
    pauseGameOfLifeDev();

    // Then instantiate Modal
    setTimeout(function(){
        initGamePlayModal();
    }, 50);}

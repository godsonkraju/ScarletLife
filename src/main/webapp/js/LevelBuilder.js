/*
 * Conway's Game of Life (Seawolf Edition)
 *
 * This JavaScript file should contain the full implementation of
 * our Game of Life simulation. It does all data management, including
 * updating the game grid, as well as controlling frame rate timing
 * and all rendering to the canvas.
 *
 * Authors: Richard McKenna & Evan Glover
 */

// GAME OF LIFE GLOBAL CONSTANTS & VARIABLES
var dataURL;

// THESE REPRESENT THE POSSIBLE STATES FOR EACH CELL
var DEAD_CELL;
var SPACESHIP_CELL;
var FINISH_CELL;
var BAD_CELL;
var GOOD_CELL;
var VOID_CELL;
var BULLET_CELL;
var TOKEN_CELL;
var KEY_CELL;
// POWERUP CELLS
var RANDOM_POWERUP_CELL;
var FUEL_CELL;
var HEALTH_CELL;
var SLOW_TIME_CELL;
var MORE_BULLETS_CELL;
// ASTHETIC CELLS
var GHOST_CELL;
var FINISH_LOCKED_CELL;
// ALL VALUES PAST THIS POINT ARE TELEPORTER VALUES
var TELEPORTER_BASE_VAL;
// This is the selected cell type
var CREATE_CELL;

var BAD_COLOR;
var GRID_LINES_COLOR;
var GRID_BACKGROUND_COLOR;
var SPACESHIP_COLOR;
var FINISH_COLOR;
var FINISH_LOCKED_COLOR;
var GOOD_COLOR;
var POWERUP_COLOR;
var HEALTH_OUTLINE;
var FUEL_OUTLINE;
var SLOW_TIME_OUTLINE;
var MORE_BULLETS_OUTLINE;
var BULLET_COLOR;
var TOKEN_COLOR;
var KEY_COLOR;
var TELEPORTER_COLOR;
var TEXT_COLOR;

var MILLISECONDS_IN_ONE_SECOND;
var MAX_FPS;
var MIN_FPS;
var FPS_INC;
var FPS_X;
var FPS_Y;
var MAX_CELL_LENGTH;
var MIN_CELL_LENGTH;
var CELL_LENGTH_INC;
var CELL_LENGTH_X;
var CELL_LENGTH_Y;
var GRID_LINE_LENGTH_RENDERING_THRESHOLD;

// FRAME RATE TIMING VARIABLES
var fps;

// CANVAS VARIABLES
var canvasMouseDown;
var canvasWidth;
var canvasHeight;
var canvas;
var canvas2D;

// GRID VARIABLES
var gridWidth;
var gridHeight;
var buildGrid;

var ghostGrid;

// RENDERING VARIABLES
var cellLength;
var renderCellsOnly = false;

// PATTERN PIXELS
var patterns;
var colorList;
var colorListSelection;
var cellLookup;
var imgDir;
var shipOverlap;

// HAMMER JS
var hammer;

// SHIP VARIABLES
var xSpaceship;
var ySpaceship;
var dirSpaceship;
var velSpaceship;
var playerShip;
var fuel;
var health;

// LEVEL VARIABLES
var newLevel;
var cells;
var title;
var description;
var health;
var fuel;
var privateLevel;
var difficulty;
var rating;
var creator;
var nextLevel;
var levelFps;
var cellLength;
var levelType;
var levelId = null;
var bulletLimit;

var teleporterList;

var toEdit = false;

// UNDO CHANGE VARIABLES
var undoGridStateArray;
var redoGridStateArray;
var currentStateIndex;
var startingGrid = null;
var totalNumberStates;
var newStateAdded = false;
var didRedo = true;


// FOR NOW AUTOMATIC DEFAULTS
cellLength = 8;
fps = 20;
velSpaceship = 1;

// METHOD TO EDIT A DESIRED LEVEL
function editSelectedLevel(level){
    var currentLevel = JSON.parse(level);
    buildGrid = Array.from(currentLevel.cells);
    playerShip = currentLevel.spaceship;
    xSpaceship = playerShip.xSpaceship;
    ySpaceship = playerShip.ySpaceship;
    fps = currentLevel.fps;
    health = currentLevel.health;
    playerShip.health = health;
    playerShip.fuel = fuel;
    dirSpaceship = playerShip.dirSpaceship;
    fuel = currentLevel.fuel;
    title = currentLevel.title;
    description = currentLevel.description;
    privateLevel = currentLevel.privateLevel;
    difficulty = currentLevel.difficulty;
    rating = currentLevel.rating;
    creator = currentLevel.creator;
    nextLevel = currentLevel.nextLevel;
    levelType = currentLevel.levelType;
    cellLength = currentLevel.cellLength;
    levelId = currentLevel.levelId;
    bulletLimit = currentLevel.bulletLimit;
    gridWidth = canvasWidth/cellLength;
    // This is the default grid to go back to while clicking undo
    startingGrid = currentLevel.cells;
    gridHeight = canvasHeight/cellLength;

    teleporterList = new Array();
    populateTeleporterList();

    toEdit = true;
    initLevelForm();

    initGameOfLife();
}

/* makes toEdit false */
function editFalse(){
    console.log("edit-false");
    toEdit = false;
}

/* populates the teleporter list from a grid to edit */
/*
 * Sets up necessary teleporter pairs
 */
function populateTeleporterList()
{

    for(var j = 0; j < gridHeight; j++){
        for(var k = 0; k < gridWidth; k++){
            var value = getGridCell(buildGrid, j, k);
            if(value >= TELEPORTER_BASE_VAL) {
                // figure out if the teleporter has already been added
                var notAdded = true;
                for (var i = 0; i < teleporterList.length; i++) {
                    if (teleporterList[i] === value) {
                        // the teleporter has already been added
                        notAdded = false;
                    }
                }
                // if the teleporter has not yet been added
                if (notAdded === true) {
                    teleporterList.push(value);
                }
            }
        }
    }
    teleporterList.sort();
}

// INITIALIZATION METHODS

/*
 * This method initializes the Game of Life, setting it up with
 * and empty grid, ready to accept additions at the request
 * of the user.
 */
function initGameOfLife()
{
    // INIT THE RENDERING SURFACE
    initCanvas();

    // INIT ALL THE CONSTANTS, i.e. ALL THE
    // THINGS THAT WILL NEVER CHANGE
    initConstants();

    // INIT LEVEL OBJECTS, i.e. DoublyLinkedList
    initLevelObjects();

    // INIT ALL THE GAME-RELATED VARIABLES
    initGameOfLifeData();

    // LOAD THE PATTERNS FROM IMAGES
    initPatterns();

    // PREPARE CELL LOOKUPS
    initCellLookup();

    // SETUP THE EVENT HANDLERS
    initEventHandlers();

    resetGameOfLife();

    renderCells();
}

/*
 * This function initializes the form for the level builder screen
 */
function initLevelForm() {
    document.getElementById("level_title").value = title;
    document.getElementById("level_description").value = description;
    document.getElementById("health").value = health;
    document.getElementById("fuel").value = fuel;
    document.getElementById("bulletsLimit").value = bulletLimit;
    // Private Level radio buttons
    if (privateLevel === true) {
        document.getElementById("private").checked = true;
    }
    else {
        document.getElementById("private").checked = true;
    }
    // Difficulty radio buttons
    if (difficulty === 1) {
        document.getElementById("one_difficulty_button").checked = true;
    }
    else if (difficulty === 2) {
        document.getElementById("two_difficulty_button").checked = true;
    }
    else if (difficulty === 3) {
        document.getElementById("three_difficulty_button").checked = true;
    }
    else if (difficulty === 4) {
        document.getElementById("four_difficulty_button").checked = true;
    }
    else if (difficulty === 5) {
        document.getElementById("five_difficulty_button").checked = true;
    }
    // Set the Next Level text field
    // document.getElementById("next_level").value = nextLevel;
    // Level type radio buttons
    // if (levelType === "campaign") {
    //     document.getElementById("campaign_level").checked = true;
    // }
    // else if (levelType === "custom") {
    //     document.getElementById("custom_level").checked = true;
    // }
}

/**
 * This function initializes level objects
 */
function initLevelObjects() {
    undoGridStateArray = new Array();
    redoGridStateArray = new Array();
}

/*
 * This function initializes all the things that never change.
 */
function initConstants()
{
    // THESE REPRESENT THE TWO POSSIBLE STATES FOR EACH CELL
    DEAD_CELL = '0';
    SPACESHIP_CELL = '1';
    FINISH_CELL = '2';
    BAD_CELL = '3';
    GOOD_CELL = '4';
    VOID_CELL = '5';
    BULLET_CELL = '6';
    TOKEN_CELL = '7';
    KEY_CELL = '8';
    // POWERUP CELLS
    RANDOM_POWERUP_CELL = '9';
    FUEL_CELL = 'a';
    HEALTH_CELL = 'b';
    SLOW_TIME_CELL = 'c';
    MORE_BULLETS_CELL = 'd';
    // ASTHETIC CELLS
    GHOST_CELL = 'e';
    FINISH_LOCKED_CELL = 'f';
    // ALL VALUES PAST THIS POINT ARE TELEPORTER VALUES
    TELEPORTER_BASE_VAL = 'g';

    // COLORS FOR RENDERING
    BAD_COLOR = "#FF0000";
    SPACESHIP_COLOR = "#AFAFAF";
    FINISH_COLOR = "#B938FF"
    FINISH_LOCKED_COLOR = "#65156b";
    GRID_LINES_COLOR = "#CCCCCC";
    GRID_BACKGROUND_COLOR = "#000000"
    TEXT_COLOR = "#FFFF00";
    VOID_COLOR = "#444444";
    GOOD_COLOR = "#54a04b";
    POWERUP_COLOR = "#fff956";
    BULLET_COLOR = "#FFFFFF";
    KEY_COLOR = "#ff00ae";
    TOKEN_COLOR = "#fff39e";
    TELEPORTER_COLOR = "#0affd6";

    HEALTH_OUTLINE = "#00e845";
    FUEL_OUTLINE = "#7a4f00";
    SLOW_TIME_OUTLINE = "#0053d8";
    MORE_BULLETS_OUTLINE = "#aaaaaa";
    GHOST_COLOR = "rgba(255, 255, 255, 0.40)";

    // THESE REPRESENT THE DIFFERENT TYPES OF CELL LOCATIONS IN THE GRID
    TOP_LEFT = 0;
    TOP_RIGHT = 1;
    BOTTOM_LEFT = 2;
    BOTTOM_RIGHT = 3;
    TOP = 4;
    BOTTOM = 5;
    LEFT = 6;
    RIGHT = 7;
    CENTER = 8;

    // FPS CONSTANTS
    MILLISECONDS_IN_ONE_SECOND = 1000;
    MAX_FPS = 33;
    MIN_FPS = 1;
    FPS_INC = 1;

    // CELL LENGTH CONSTANTS
    MAX_CELL_LENGTH = 32;
    MIN_CELL_LENGTH = 8;
    CELL_LENGTH_INC = 2;
    GRID_LINE_LENGTH_RENDERING_THRESHOLD = 8;

    // RENDERING LOCATIONS FOR TEXT ON THE CANVAS
    FPS_X = 20;
    FPS_Y = 450;
    CELL_LENGTH_X = 20;
    CELL_LENGTH_Y = 480;

    FUEL_X = 230;
    FUEL_Y = 30;
    HEALTH_X = 650;
    HEALTH_Y = 30;
    // GET DATA FROM OBJECT
    // INIT A SPACESHIP, x and y represent the top left of the ship image

    if(toEdit === false){
        levelId = null;
        xSpaceship = 2;
        ySpaceship = 11;
        dirSpaceship = "right";
        fuel = 100;
        health = 100;
        teleporterList = new Array();
    }

    currentStateIndex = 0;
    totalNumberStates = 0;


    // Default colorListSelection value is "Bad"
    colorListSelection = "Bad";

    playerShip = new spaceship(xSpaceship, ySpaceship, dirSpaceship, velSpaceship, health, fuel);
}

/*
 * This method retrieves the canvas from the Web page and
 * gets a 2D drawing context so that we can render to it
 * when the time comes.
 */
function initCanvas()
{
    // GET THE CANVAS
    canvas = document.getElementById("build_canvas");

    // GET THE 2D RENDERING CONTEXT
    canvas2D = canvas.getContext("2d");

    // INIT THE FONT FOR TEXT RENDERED ON THE CANVAS. NOTE
    // THAT WE'LL BE RENDERING THE FRAME RATE AND ZOOM LEVEL
    // ON THE CANVAS
    canvas2D.font = "24px Arial";

    // NOTE THAT THESE DIMENSIONS SHOULD BE THE
    // SAME AS SPECIFIED IN THE WEB PAGE, WHERE
    // THE CANVAS IS SIZED
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
}

/*
 * This function initializes all the important game-related
 * variables, including the necessary data structures for
 * managing the game grid.
 */
function initGameOfLifeData()
{
    // INIT THE CELL LENGTH
    // cellLength = MIN_CELL_LENGTH;
    //
    // fps = MAX_FPS;
}

/*
 * This method initializes all the patterns that the user
 * may put into the simulation. This is done by reading in
 * the images listed in the drop-down list, and then examining
 * the contents of those images, considering anything that is
 * not white as a "BAD_CELL". Note that this allows us to
 * easily add any new image we like as a pattern.
 */
function initPatterns()
{
    // THIS IS WHERE ALL THE IMAGES SHOULD BE
    imgDir = "/img/";

    // THIS WILL STORE ALL THE PATTERNS IN AN ASSOCIATIVE ARRAY
    patterns = new Array();

    // SET THE DROP DOWN LIST
   // var patternsList = document.getElementById("game_of_life_patterns");

    var patternsList = null;


    if (colorListSelection === "Bad") {
        document.getElementById("bad_colors").removeAttribute("hidden", "true");
        document.getElementById("finish_colors").setAttribute("hidden", "true");
        document.getElementById("good_colors").setAttribute("hidden", "true");
        document.getElementById("spaceship_colors").setAttribute("hidden", "true");
        document.getElementById("key_colors").setAttribute("hidden", "true");
        document.getElementById("void_colors").setAttribute("hidden", "true");
        document.getElementById("dead_colors").setAttribute("hidden", "true");
        document.getElementById("random_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("health_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("fuel_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("slow_time_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("bullets_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("teleporter_colors").setAttribute("hidden", "true");
        document.getElementById("tokens_colors").setAttribute("hidden", "true");
        patternsList = document.getElementById("game_of_life_patterns_bad");
    }
    else if (colorListSelection === "Finish") {
        document.getElementById("bad_colors").setAttribute("hidden", "true");
        document.getElementById("finish_colors").removeAttribute("hidden", "false");
        document.getElementById("good_colors").setAttribute("hidden", "true");
        document.getElementById("spaceship_colors").setAttribute("hidden", "true");
        document.getElementById("key_colors").setAttribute("hidden", "true");
        document.getElementById("void_colors").setAttribute("hidden", "true");
        document.getElementById("dead_colors").setAttribute("hidden", "true");
        document.getElementById("random_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("health_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("fuel_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("slow_time_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("bullets_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("teleporter_colors").setAttribute("hidden", "true");
        document.getElementById("tokens_colors").setAttribute("hidden", "true");
        patternsList = document.getElementById("game_of_life_patterns_finish");

    }
    else if (colorListSelection === "Good") {
        document.getElementById("bad_colors").setAttribute("hidden", "true");
        document.getElementById("finish_colors").setAttribute("hidden", "true");
        document.getElementById("good_colors").removeAttribute("hidden", "false");
        document.getElementById("spaceship_colors").setAttribute("hidden", "true");
        document.getElementById("key_colors").setAttribute("hidden", "true");
        document.getElementById("void_colors").setAttribute("hidden", "true");
        document.getElementById("dead_colors").setAttribute("hidden", "true");
        document.getElementById("random_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("health_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("fuel_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("slow_time_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("bullets_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("teleporter_colors").setAttribute("hidden", "true");
        document.getElementById("tokens_colors").setAttribute("hidden", "true");
        patternsList = document.getElementById("game_of_life_patterns_good");
    }
    else if (colorListSelection === "Spaceship") {
        document.getElementById("bad_colors").setAttribute("hidden", "true");
        document.getElementById("finish_colors").setAttribute("hidden", "true");
        document.getElementById("good_colors").setAttribute("hidden", "true");
        document.getElementById("spaceship_colors").removeAttribute("hidden", "false");
        document.getElementById("key_colors").setAttribute("hidden", "true");
        document.getElementById("void_colors").setAttribute("hidden", "true");
        document.getElementById("dead_colors").setAttribute("hidden", "true");
        document.getElementById("random_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("health_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("fuel_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("slow_time_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("bullets_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("teleporter_colors").setAttribute("hidden", "true");
        document.getElementById("tokens_colors").setAttribute("hidden", "true");
        patternsList = document.getElementById("game_of_life_patterns_spaceships");
    }
    else if (colorListSelection === "Key") {
        document.getElementById("bad_colors").setAttribute("hidden", "true");
        document.getElementById("finish_colors").setAttribute("hidden", "true");
        document.getElementById("good_colors").setAttribute("hidden", "true");
        document.getElementById("spaceship_colors").setAttribute("hidden", "true");
        document.getElementById("key_colors").removeAttribute("hidden", "false");
        document.getElementById("void_colors").setAttribute("hidden", "true");
        document.getElementById("dead_colors").setAttribute("hidden", "true");
        document.getElementById("random_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("health_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("fuel_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("slow_time_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("bullets_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("teleporter_colors").setAttribute("hidden", "true");
        document.getElementById("tokens_colors").setAttribute("hidden", "true");
        patternsList = document.getElementById("game_of_life_patterns_key");
    }
    else if (colorListSelection === "Void") {
        document.getElementById("bad_colors").setAttribute("hidden", "true");
        document.getElementById("finish_colors").setAttribute("hidden", "true");
        document.getElementById("good_colors").setAttribute("hidden", "true");
        document.getElementById("spaceship_colors").setAttribute("hidden", "true");
        document.getElementById("key_colors").setAttribute("hidden", "true");
        document.getElementById("void_colors").removeAttribute("hidden", "false");
        document.getElementById("dead_colors").setAttribute("hidden", "true");
        document.getElementById("random_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("health_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("fuel_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("slow_time_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("bullets_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("teleporter_colors").setAttribute("hidden", "true");
        document.getElementById("tokens_colors").setAttribute("hidden", "true");
        patternsList = document.getElementById("game_of_life_patterns_void");
    }
    else if (colorListSelection === "Dead") {
        document.getElementById("bad_colors").setAttribute("hidden", "true");
        document.getElementById("finish_colors").setAttribute("hidden", "true");
        document.getElementById("good_colors").setAttribute("hidden", "true");
        document.getElementById("spaceship_colors").setAttribute("hidden", "true");
        document.getElementById("key_colors").setAttribute("hidden", "true");
        document.getElementById("void_colors").setAttribute("hidden", "true");
        document.getElementById("dead_colors").removeAttribute("hidden", "false");
        document.getElementById("random_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("health_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("fuel_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("slow_time_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("bullets_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("teleporter_colors").setAttribute("hidden", "true");
        document.getElementById("tokens_colors").setAttribute("hidden", "true");
        patternsList = document.getElementById("game_of_life_patterns_dead");
    }
    else if (colorListSelection === "Random") {
        document.getElementById("bad_colors").setAttribute("hidden", "true");
        document.getElementById("finish_colors").setAttribute("hidden", "true");
        document.getElementById("good_colors").setAttribute("hidden", "true");
        document.getElementById("spaceship_colors").setAttribute("hidden", "true");
        document.getElementById("key_colors").setAttribute("hidden", "true");
        document.getElementById("void_colors").setAttribute("hidden", "true");
        document.getElementById("dead_colors").setAttribute("hidden", "true");
        document.getElementById("random_power_up_colors").removeAttribute("hidden", "false");
        document.getElementById("health_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("fuel_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("slow_time_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("bullets_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("teleporter_colors").setAttribute("hidden", "true");
        document.getElementById("tokens_colors").setAttribute("hidden", "true");
        patternsList = document.getElementById("game_of_life_patterns_random");
    }
    else if (colorListSelection === "Health") {
        document.getElementById("bad_colors").setAttribute("hidden", "true");
        document.getElementById("finish_colors").setAttribute("hidden", "true");
        document.getElementById("good_colors").setAttribute("hidden", "true");
        document.getElementById("spaceship_colors").setAttribute("hidden", "true");
        document.getElementById("key_colors").setAttribute("hidden", "true");
        document.getElementById("void_colors").setAttribute("hidden", "true");
        document.getElementById("dead_colors").setAttribute("hidden", "true");
        document.getElementById("random_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("health_power_up_colors").removeAttribute("hidden", "false");
        document.getElementById("fuel_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("slow_time_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("bullets_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("teleporter_colors").setAttribute("hidden", "true");
        document.getElementById("tokens_colors").setAttribute("hidden", "true");
        patternsList = document.getElementById("game_of_life_patterns_health");
    }
    else if (colorListSelection === "Fuel") {
        document.getElementById("bad_colors").setAttribute("hidden", "true");
        document.getElementById("finish_colors").setAttribute("hidden", "true");
        document.getElementById("good_colors").setAttribute("hidden", "true");
        document.getElementById("spaceship_colors").setAttribute("hidden", "true");
        document.getElementById("key_colors").setAttribute("hidden", "true");
        document.getElementById("void_colors").setAttribute("hidden", "true");
        document.getElementById("dead_colors").setAttribute("hidden", "true");
        document.getElementById("random_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("health_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("fuel_power_up_colors").removeAttribute("hidden", "false");
        document.getElementById("slow_time_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("bullets_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("teleporter_colors").setAttribute("hidden", "true");
        document.getElementById("tokens_colors").setAttribute("hidden", "true");
        patternsList = document.getElementById("game_of_life_patterns_fuel");
    }
    else if (colorListSelection === "SlowTime") {
        document.getElementById("bad_colors").setAttribute("hidden", "true");
        document.getElementById("finish_colors").setAttribute("hidden", "true");
        document.getElementById("good_colors").setAttribute("hidden", "true");
        document.getElementById("spaceship_colors").setAttribute("hidden", "true");
        document.getElementById("key_colors").setAttribute("hidden", "true");
        document.getElementById("void_colors").setAttribute("hidden", "true");
        document.getElementById("dead_colors").setAttribute("hidden", "true");
        document.getElementById("random_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("health_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("fuel_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("slow_time_power_up_colors").removeAttribute("hidden", "false");
        document.getElementById("bullets_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("teleporter_colors").setAttribute("hidden", "true");
        document.getElementById("tokens_colors").setAttribute("hidden", "true");
        patternsList = document.getElementById("game_of_life_patterns_slow_time");

    }
    else if (colorListSelection === "Bullets") {
        document.getElementById("bad_colors").setAttribute("hidden", "true");
        document.getElementById("finish_colors").setAttribute("hidden", "true");
        document.getElementById("good_colors").setAttribute("hidden", "true");
        document.getElementById("spaceship_colors").setAttribute("hidden", "true");
        document.getElementById("key_colors").setAttribute("hidden", "true");
        document.getElementById("void_colors").setAttribute("hidden", "true");
        document.getElementById("dead_colors").setAttribute("hidden", "true");
        document.getElementById("random_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("health_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("fuel_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("slow_time_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("bullets_power_up_colors").removeAttribute("hidden", "false");
        document.getElementById("teleporter_colors").setAttribute("hidden", "true");
        document.getElementById("tokens_colors").setAttribute("hidden", "true");
        patternsList = document.getElementById("game_of_life_patterns_bullets");
    }
    else if (colorListSelection === "Teleporter") {
        document.getElementById("bad_colors").setAttribute("hidden", "true");
        document.getElementById("finish_colors").setAttribute("hidden", "true");
        document.getElementById("good_colors").setAttribute("hidden", "true");
        document.getElementById("spaceship_colors").setAttribute("hidden", "true");
        document.getElementById("key_colors").setAttribute("hidden", "true");
        document.getElementById("void_colors").setAttribute("hidden", "true");
        document.getElementById("dead_colors").setAttribute("hidden", "true");
        document.getElementById("random_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("health_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("fuel_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("slow_time_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("bullets_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("teleporter_colors").removeAttribute("hidden", "false");
        document.getElementById("tokens_colors").setAttribute("hidden", "true");
        patternsList = document.getElementById("game_of_life_patterns_teleporter");
    }
    else if (colorListSelection === "Token") {
        document.getElementById("bad_colors").setAttribute("hidden", "true");
        document.getElementById("finish_colors").setAttribute("hidden", "true");
        document.getElementById("good_colors").setAttribute("hidden", "true");
        document.getElementById("spaceship_colors").setAttribute("hidden", "true");
        document.getElementById("key_colors").setAttribute("hidden", "true");
        document.getElementById("void_colors").setAttribute("hidden", "true");
        document.getElementById("dead_colors").setAttribute("hidden", "true");
        document.getElementById("random_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("health_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("fuel_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("slow_time_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("bullets_power_up_colors").setAttribute("hidden", "true");
        document.getElementById("teleporter_colors").setAttribute("hidden", "true");
        document.getElementById("tokens_colors").removeAttribute("hidden", "false");
        patternsList = document.getElementById("game_of_life_patterns_tokens");
    }


     if (patternsList === null) {
         patternsList = document.getElementById("game_of_life_patterns_bad");
     }

     // GO THROUGH THE LIST AND LOAD ALL THE IMAGES
     for (var i = 0; i < patternsList.options.length; i++)
     {
         // GET THE NAME OF THE IMAGE FILE AND MAKE
         // A NEW ARRAY TO STORE IT'S PIXEL COORDINATES
         var key = patternsList.options[i].value;
         var pixelArray = new Array();

         // NOW LOAD THE DATA FROM THE IMAGE
         loadOffscreenImage(key, pixelArray);

         // AND PUT THE DATA IN THE ASSIATIVE ARRAY,
         // BY KEY
         patterns[key] = pixelArray;
     }

}




//<option value="Bad">Bad</option>
//<option value ="Finish">Finish</option>
//<option value ="Good">Good</option>
//<option value ="Power UP">Power Up</option>
//<option value ="Spaceship">Spaceship</option>
//<option value ="Void">Void</option>
//<<option value ="Dead">Dead</option>

/*
 * This function changes cell types (and possibly pattern options
 * based on the type of life chosen.
 */
function changeCellType(){
    colorListSelection = colorList.options[colorList.selectedIndex].value;
    if(colorListSelection === "Bad"){
        CREATE_CELL = BAD_CELL;
    } else if(colorListSelection === "Finish"){
        CREATE_CELL = FINISH_CELL;
    } else if(colorListSelection === "Good"){
        CREATE_CELL = GOOD_CELL;
    } else if(colorListSelection === "Random"){
        CREATE_CELL = RANDOM_POWERUP_CELL;
    } else if(colorListSelection === "Health"){
        CREATE_CELL = HEALTH_CELL;
    } else if(colorListSelection === "Fuel"){
        CREATE_CELL = FUEL_CELL;
    } else if(colorListSelection === "SlowTime"){
        CREATE_CELL = SLOW_TIME_CELL;
    } else if(colorListSelection === "Bullets"){
        CREATE_CELL = MORE_BULLETS_CELL;
    } else if(colorListSelection === "Key"){
        CREATE_CELL = KEY_CELL;
    } else if(colorListSelection === "Token"){
        CREATE_CELL = TOKEN_CELL;
    } else if(colorListSelection === "Teleporter"){
        CREATE_CELL = TELEPORTER_BASE_VAL;
    } else if(colorListSelection === "Spaceship"){
        CREATE_CELL = SPACESHIP_CELL;
    } else if(colorListSelection === "Void"){
        CREATE_CELL = VOID_CELL;
    } else if(colorListSelection === "Dead"){
        CREATE_CELL = DEAD_CELL;
    }

    initPatterns();
}

/**
 * This function changes the content inside the game_of_life_patterns dropdown with restrctions
 * based on the selected cell type
 */
function changeLifePatterns() {

}


/*
 * This function initializes all the event handlers, registering
 * the proper response methods.
 */
function initEventHandlers()
{
    // RESPOND TO MOUSEMOVE WITH A GHOST
    canvas.onmousemove = respondToMousemove;
    canvas.onmouseout = clearGhostGrid;

    // Set flags for void dragging check mouse move
    canvas.onmousedown = respondToMouseDown;
    canvas.onmouseup = respondToMouseUp;

    // WE'LL RESPOND TO MOUSE CLICKS ON THE CANVAS
    canvas.onclick = respondToMouseClick;

    // AND ALL THE APP'S BUTTONS
    // document.getElementById("start_button").onclick= canvasToDataURL;
    // document.getElementById("pause_button").onclick= function(){alert("This should not exist as an action choice")};
    document.getElementById("undo_button").onclick=undoPlacement;
    document.getElementById("redo_button").onclick=redoPlacement;
    document.getElementById("dec_fps_button").onclick=decFPS;
    document.getElementById("inc_fps_button").onclick=incFPS;
    document.getElementById("dec_cell_length_button").onclick=decCellLength;
    document.getElementById("inc_cell_length_button").onclick=incCellLength;
    document.getElementById("game_of_life_patterns_bad").onchange = changeCellType;
    colorList = document.getElementById("game_of_life_colors");
    colorList.onchange = changeCellType;
    changeCellType();
}

function canvasToDataURL(){
    dataURL = canvas.toDataURL();
    return dataURL;
}

/*
 * This function loads the image and then examines it, extracting
 * all the pixels and saving the coordinates that are non-white.
 */
function loadOffscreenImage(imgName, pixelArray)
{
    // FIRST GET THE IMAGE DATA
    var img = new Image();

    // NOTE THAT THE IMAGE WILL LOAD IN THE BACKGROUND, BUT
    // WE CAN TELL JavaScript TO LET US KNOW WHEN IT HAS FULLY
    // LOADED AND RESPOND THEN.
    img.onload = function() { respondToLoadedImage(imgName, img, pixelArray); };

    // document.URL IS THE URL OF WHERE THE WEB PAGE IS FROM WHICH THIS
    // JavaScript PROGRAM IS BEING USED. NOTE THAT ASSIGNING A URL TO
    // A CONSTRUCTED Image's src VARIABLE INITIATES THE IMAGE-LOADING
    // PROCESS
    var path = document.URL;
    var indexLocation = path.indexOf("index.html");
    path = path.substring(0, indexLocation);
    img.src = path + imgDir + imgName;
}

// EVENT HANDLER METHODS

/*
 * This method is called in response to an Image having completed loading. We
 * respond by examining the contents of the image, and keeping the non-white
 * pixel coordinates in our patterns array so that the user may use those
 * patterns in the simulation.
 */
function respondToLoadedImage(imgName, img, pixelArray)
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
}

// marks a flag for when the mouse pressed
function respondToMouseDown(event){
    canvasMouseDown = 1;
}

// sets mousedown flag to false when released
function respondToMouseUp(event){
    canvasMouseDown = 0;
}
/*
 * This is the event handler for when the user mouseover's the canvas,
 * which means the user wants to put a ghost pattern in the grid at
 * that location.
 */
function respondToMousemove(event)
{
    // GET THE PATTERN SELECTED IN THE DROP DOWN LIST
    var patternsList = document.getElementById("game_of_life_patterns_bad");

    if (colorListSelection === "Bad") {
        patternsList = document.getElementById("game_of_life_patterns_bad");
    }
    else if (colorListSelection === "Finish") {
        patternsList = document.getElementById("game_of_life_patterns_finish");
    }
    else if (colorListSelection === "Good") {
        patternsList = document.getElementById("game_of_life_patterns_good");
    }
    else if (colorListSelection === "Spaceship") {
        patternsList = document.getElementById("game_of_life_patterns_spaceships");
    }
    else if (colorListSelection === "Key") {
        patternsList = document.getElementById("game_of_life_patterns_key");
    }
    else if (colorListSelection === "Void") {
        patternsList = document.getElementById("game_of_life_patterns_void");
    }
    else if (colorListSelection === "Dead") {
        patternsList = document.getElementById("game_of_life_patterns_dead");
    }
    else if (colorListSelection === "Random") {
        patternsList = document.getElementById("game_of_life_patterns_random");
    }
    else if (colorListSelection === "Health") {
        patternsList = document.getElementById("game_of_life_patterns_health");
    }
    else if (colorListSelection === "Fuel") {
        patternsList = document.getElementById("game_of_life_patterns_fuel");
    }
    else if (colorListSelection === "SlowTime") {
        patternsList = document.getElementById("game_of_life_patterns_slow_time");
    }
    else if (colorListSelection === "Bullets") {
        patternsList = document.getElementById("game_of_life_patterns_bullets");
    }
    else if (colorListSelection === "Teleporter") {
        patternsList = document.getElementById("game_of_life_patterns_teleporter");
    }
    else if (colorListSelection === "Token") {
        patternsList = document.getElementById("game_of_life_patterns_tokens");
    }

    var selectedPattern = patternsList.options[patternsList.selectedIndex].value;
    var selectedPatternName = patternsList.options[patternsList.selectedIndex].text;

    // LOAD THE COORDINATES OF THE PIXELS TO DRAW
    var pixels = patterns[selectedPattern];

    // CALCULATE THE ROW,COL OF THE CLICK
    var canvasCoords = getRelativeCoords(event);
    var virtualCellLength;
    virtualCellLength = canvas.clientWidth/gridWidth;

    var clickCol = Math.floor(canvasCoords.x/virtualCellLength);
    var clickRow = Math.floor(canvasCoords.y/virtualCellLength);

    shipOverlap = false;

    // clear previous ghost
    clearGhostGrid();
    // GO THROUGH ALL THE PIXELS IN THE PATTERN AND PUT THEM IN THE GRID
    for (var i = 0; i < pixels.length; i += 2)
        {
            var col = clickCol + pixels[i];
            var row = clickRow + pixels[i+1];
            if(getGridCell(buildGrid, row, col) !== DEAD_CELL // cell is dead or null
                    && ( selectedPatternName === "Player Up"
                        || selectedPatternName === "Player Right"
                        || selectedPatternName === "Player Down"
                        || selectedPatternName === "Player Left"
                        || selectedPatternName === "Teleporter")
                ){
                shipOverlap = true;
            }
            setGridCell(ghostGrid, row, col, GHOST_CELL);
        }
    // IF MOUSE IS CLICKED, TREAT AS VOID DRAG
    if(canvasMouseDown === 1){
        if(selectedPatternName === "1 x 1" || selectedPatternName == "2 x 2"){
            for (var i = 0; i < pixels.length; i += 2)
                {
                    var col = clickCol + pixels[i];
                    var row = clickRow + pixels[i+1];
                    if(getGridCell(buildGrid, row, col) >= TELEPORTER_BASE_VAL){
                        var charCode = getGridCell(buildGrid, row, col).charCodeAt(0)
                        // FIND THE PARTNER TELEPORTER
                        var checkFor = null;
                        if(charCode % 2 === 1){ // the char is odd, look for even above
                            checkFor = String.fromCharCode(charCode + 1);
                        } else { // the char is even, look for the odd below
                            checkFor = String.fromCharCode(charCode - 1);
                        }
                        var partnerRow;
                        var partnerCol;
                        var found = false;
                        for (var j = 0; j < gridHeight; j++) {
                            for (var k = 0; k < gridWidth; k++) {
                                if(getGridCell(buildGrid, j, k) === checkFor){
                                    partnerRow = j;
                                    partnerCol = k;
                                    found = true;
                                    break;
                                }
                            }
                        }
                        teleporterList.splice(teleporterList.indexOf(String.fromCharCode(charCode)), 1);
                        killAdjacentBuildCells(row, col);
                        if(found === true){
                            teleporterList.splice(teleporterList.indexOf(checkFor), 1);
                            killAdjacentBuildCells(partnerRow, partnerCol);
                        }
                        
                        reformatTeleportValues();
                    }
                    setGridCell(buildGrid, row, col, CREATE_CELL);
                }
        }
    }
    // RENDER THE GAME IMMEDIATELY IF ON PAUSE

    renderCells();

}

/*
 * This function clears the ghost grid
 */
function clearGhostGrid(){
    for (var i = 0; i < gridHeight; i++)
    {
        for (var j = 0; j < gridWidth; j++)
        {
            setGridCell(ghostGrid, i, j, DEAD_CELL);
        }
    }
    renderCells();
}

/*
 * This is the event handler for when the user clicks on the canvas,
 * which means the user wants to put a pattern in the grid at
 * that location.
 */
function respondToMouseClick(event)
{
    pauseGameOfLifeDev();
    // if the ship is overlapping, do nothing
    if(shipOverlap === false) {
        // GET THE PATTERN SELECTED IN THE DROP DOWN LIST
        var patternsList = document.getElementById("game_of_life_patterns_bad");

        if (colorListSelection === "Bad") {
            patternsList = document.getElementById("game_of_life_patterns_bad");
        }
        else if (colorListSelection === "Finish") {
            patternsList = document.getElementById("game_of_life_patterns_finish");
        }
        else if (colorListSelection === "Good") {
            patternsList = document.getElementById("game_of_life_patterns_good");
        }
        else if (colorListSelection === "Spaceship") {
            patternsList = document.getElementById("game_of_life_patterns_spaceships");
        }
        else if (colorListSelection === "Key") {
            patternsList = document.getElementById("game_of_life_patterns_key");
        }
        else if (colorListSelection === "Void") {
            patternsList = document.getElementById("game_of_life_patterns_void");
        }
        else if (colorListSelection === "Dead") {
            patternsList = document.getElementById("game_of_life_patterns_dead");
        }
        else if (colorListSelection === "Random") {
            patternsList = document.getElementById("game_of_life_patterns_random");
        }
        else if (colorListSelection === "Health") {
            patternsList = document.getElementById("game_of_life_patterns_health");
        }
        else if (colorListSelection === "Fuel") {
            patternsList = document.getElementById("game_of_life_patterns_fuel");
        }
        else if (colorListSelection === "SlowTime") {
            patternsList = document.getElementById("game_of_life_patterns_slow_time");
        }
        else if (colorListSelection === "Bullets") {
            patternsList = document.getElementById("game_of_life_patterns_bullets");
        }
        else if (colorListSelection === "Teleporter") {
            patternsList = document.getElementById("game_of_life_patterns_teleporter");
        }
        else if (colorListSelection === "Token") {
            patternsList = document.getElementById("game_of_life_patterns_tokens");
        }
        var selectedPattern = patternsList.options[patternsList.selectedIndex].value;
        var selectedPatternName = patternsList.options[patternsList.selectedIndex].text;

        // LOAD THE COORDINATES OF THE PIXELS TO DRAW
        var pixels = patterns[selectedPattern];

        // CALCULATE THE ROW,COL OF THE CLICK
        var canvasCoords = getRelativeCoords(event);
        var virtualCellLength;
        virtualCellLength = canvas.clientWidth / gridWidth;

        var clickCol = Math.floor(canvasCoords.x / virtualCellLength);
        var clickRow = Math.floor(canvasCoords.y / virtualCellLength);

        // KILL PAST SHIP
        if (selectedPatternName === "Player Up") {
            killShipCellsBuild();
            playerShip.xSpaceship = clickCol;
            playerShip.ySpaceship = clickRow;
            playerShip.dirSpaceship = "up";
        } else if (selectedPatternName === "Player Right") {
            killShipCellsBuild();
            playerShip.xSpaceship = clickCol;
            playerShip.ySpaceship = clickRow;
            playerShip.dirSpaceship = "right";
        } else if (selectedPatternName === "Player Down") {
            killShipCellsBuild();
            playerShip.xSpaceship = clickCol;
            playerShip.ySpaceship = clickRow;
            playerShip.dirSpaceship = "down";
        } else if (selectedPatternName === "Player Left") {
            killShipCellsBuild();
            playerShip.xSpaceship = clickCol;
            playerShip.ySpaceship = clickRow;
            playerShip.dirSpaceship = "left";
        } else if (selectedPatternName === "Teleporter") {
            var lowestCode = TELEPORTER_BASE_VAL;
            if(teleporterList.length === 0){
                CREATE_CELL = lowestCode;
                teleporterList.push(lowestCode);
            } else {
                var missing = true;
                for(var i = 0; i < teleporterList.length; i++){
                    // check for next teleporter value
                    if(lowestCode === teleporterList[i]){
                        lowestCode = String.fromCharCode(teleporterList[i].charCodeAt(0) + 1);
                    }
                }
                CREATE_CELL = lowestCode;
                teleporterList.push(lowestCode);
                teleporterList.sort();
            }
        }
        // GO THROUGH ALL THE PIXELS IN THE PATTERN AND PUT THEM IN THE GRID
        for (var i = 0; i < pixels.length; i += 2) {
            var col = clickCol + pixels[i];
            var row = clickRow + pixels[i + 1];
            // CREATE_CELL IS SET THROUGH THE CELL COLOR PICKER
            // IF YOU KILL A TELEPORTER
            if(getGridCell(buildGrid, row, col) >= TELEPORTER_BASE_VAL){
                var charCode = getGridCell(buildGrid, row, col).charCodeAt(0)
                // FIND THE PARTNER TELEPORTER
                var checkFor = null;
                if(charCode % 2 === 1){ // the char is odd, look for even above
                    checkFor = String.fromCharCode(charCode + 1);
                } else { // the char is even, look for the odd below
                    checkFor = String.fromCharCode(charCode - 1);
                }
                var partnerRow;
                var partnerCol;
                var found = false;
                for (var j = 0; j < gridHeight; j++) {
                    for (var k = 0; k < gridWidth; k++) {
                        if(getGridCell(buildGrid, j, k) === checkFor){
                            partnerRow = j;
                            partnerCol = k;
                            found = true;
                            break;
                        }
                    }
                }
                teleporterList.splice(teleporterList.indexOf(String.fromCharCode(charCode)), 1);
                killAdjacentBuildCells(row, col);
                if(found === true){
                    teleporterList.splice(teleporterList.indexOf(checkFor), 1);
                    killAdjacentBuildCells(partnerRow, partnerCol);
                }

                reformatTeleportValues();
            }
            setGridCell(buildGrid, row, col, CREATE_CELL);
        }
        renderCells();


        undoGridStateArray.push(Array.from(buildGrid));
        newStateAdded = true;
        console.log("pushed build grid into undo array");

        // If new pattern is added, clear the redo array
        if (redoGridStateArray.length > 0) {
            while (redoGridStateArray.length !== 0) {
                redoGridStateArray.pop();
                console.log(redoGridStateArray.length);
            }
        }
        // console.log("undo grid state array length: " + undoGridStateArray.length);
        // console.log("redo grid state array length: " + redoGridStateArray.length);

    }

}

/*
 * This function reformats teleporter values to be in the right order
 */
function reformatTeleportValues()
{
    for(var i = 0; i < teleporterList.length; i++){
        var checkFor = teleporterList[i];
        var changeTo = String.fromCharCode(TELEPORTER_BASE_VAL.charCodeAt(0) + i);
        teleporterList[i] = changeTo;
        // go through the grid and replace values with the new ones
        for (var j = 0; j < gridHeight; j++) {
            for (var k = 0; k < gridWidth; k++) {
                if(getGridCell(buildGrid, j, k) === checkFor){
                    setGridCell(buildGrid, j, k, changeTo);
                }
            }
        }
    }
}

/*
 * This function resets the grid containing the current state of the
 * Game of Life such that all cells in the game are dead.
 */
function resetGhostGrid()
{
    // RESET ALL THE DATA STRUCTURES TOO
    ghostGrid = new Array();
    // INIT THE CELLS IN THE GRID
    for (var i = 0; i < gridHeight; i++)
    {
        for (var j = 0; j < gridWidth; j++)
        {
            setGridCell(ghostGrid, i, j, DEAD_CELL);
        }
    }
}

/*
 * This function resets the grid containing the current state of the
 * Game of Life such that all cells in the game are dead.
 */
function resetGameOfLife()
{
    // RESET ALL THE DATA STRUCTURES TOO
    gridWidth = canvasWidth/cellLength;
    gridHeight = canvasHeight/cellLength;

    if(toEdit === false) {
        buildGrid = new Array();
    }
    ghostGrid = new Array();

    // INIT THE CELLS IN THE GRID
    for (var i = 0; i < gridHeight; i++)
        {
            for (var j = 0; j < gridWidth; j++)
                {
                    if(toEdit === false)
                        setGridCell(buildGrid, i, j, DEAD_CELL);
                    setGridCell(ghostGrid, i, j, DEAD_CELL);
                }
        }

    // RENDER THE CLEARED SCREEN
    renderCells();

    // if (currentStateIndex === 0) {
    //     // console.log(startingGrid);
    //     // if (startingGrid === null) {
    //     //     startingGrid = buildGrid;
    //     //     console.log("set starting grid");
    //     // }
    //     undoGridStateArray.add(buildGrid);
    // }
}

/*
 * This function decrements the frames per second used by the
 * the simulation.
 */
function decFPS()
{
    // WE CAN'T HAVE A FRAME RATE OF 0 OR LESS
    if (fps > MIN_FPS)
        {
            // UPDATE THE FPS
            fps -= FPS_INC;

           renderCells();
       }
}

/*
 * This function increments the frames per second used by the
 * the simulation.
 */
function incFPS()
{
    // WE'LL CAP THE FRAME RATE AT 33
    if (fps < MAX_FPS)
        {
            // UPDATE THE FPS
            fps += FPS_INC;
            frameInterval = MILLISECONDS_IN_ONE_SECOND/fps;

            renderCells();
        }
}

/*
 * This function decrements the cellLength factor for rendering. Note the
 * cellLength starts at 1, which is cellLengthed all the way out, where cells are
 * on a one-to-one ratio with pixels in the canvas. The numeric value
 * of the cellLength translates into the length of each side for each cell.
 */
function decCellLength()
{
    // 1 IS THE LOWEST VALUE WE ALLOW
    if (cellLength > MIN_CELL_LENGTH)
        {
            // DEC THE CELL LENGTH
            cellLength /= CELL_LENGTH_INC;

            // AND RESET THE DATA STRUCTURES
            resetGameOfLife();

            renderCells();

    }
}

/*
 * This function increments the cellLength factor for rendering. Note the
 * cellLength starts at 1, which is cellLengthed all the way out, where cells are
 * on a one-to-one ratio with pixels in the canvas. The numeric value
 * of the cellLength translates into the length of each side for each cell.
 */
function incCellLength()
{
    // 100 IS THE LARGEST VALUE WE ALLOW
    if (cellLength < MAX_CELL_LENGTH)
        {
            // INC THE CELL LENGTH
            cellLength *= CELL_LENGTH_INC;

            // AND RESET THE DATA STRUCTURES
            resetGameOfLife();

            renderCells();

        }
}

// HELPER METHODS FOR THE EVENT HANDLERS

/*
 * This function gets the mouse click coordinates relative to
 * the canvas itself, where 0,0 is the top, left corner of
 * the canvas.
 */
function getRelativeCoords(event)
{

    if (event.offsetX !== undefined && event.offsetY !== undefined)
    {
        return { x: event.offsetX, y: event.offsetY };
    }
    else
    {
        return { x: event.layerX, y: event.layerY };
    }
}

// GRID CELL MANAGEMENT METHODS

/*
 * This function tests to see if (row, col) represents a
 * valid cell in the grid. If it is a valid cell, true is
 * returned, else false.
 */
function isValidCell(row, col)
{
    // IS IT OUTSIDE THE GRID?
    if (    (row < 0) ||
            (col < 0) ||
            (row >= gridHeight) ||
            (col >= gridWidth))
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
function getGridCell(grid, row, col)
{
    // IGNORE IF IT'S OUTSIDE THE GRID
    if (!isValidCell(row, col))
        {
            return -1;
        }
    var index = (row * gridWidth) + col;
    return grid[index];
}

/*
 * Mutator method for setting the cell value in the grid at
 * location (row, col).
 */
function setGridCell(grid, row, col, value)
{
    // IGNORE IF IT'S OUTSIDE THE GRID
    if (!isValidCell(row, col))
        {
            return;
        }
    var index = (row * gridWidth) + col;
    grid[index] = value;
}

/*
 * This function adds dead cells to the buildGrid
 * in the ships previous position.
 */
function killShipCellsBuild()
{
    // Check which direction the player ship is to be facing and place it there.
    if (playerShip.dirSpaceship === "right") {
        // Load the pixels of spaceship to draw
        var value = "playerRight.png";
        var pixels = patterns[value];

        // OBTAIN THE LOCATION TO PLACE THE SHIP AT
        var xPosition = playerShip.xSpaceship;
        var yPosition = playerShip.ySpaceship;

        // GO THROUGH ALL THE PIXELS IN THE PATTERN AND PUT THEM IN THE GRID
        for (var i = 0; i < pixels.length; i += 2) {
            var col = xPosition + pixels[i];
            var row = yPosition + pixels[i + 1];
            setGridCell(buildGrid, row, col, DEAD_CELL);
        }
    } else if (playerShip.dirSpaceship === "down") {
        // Load the pixels of spaceship to draw
        var value = "playerDown.png";
        var pixels = patterns[value];

        // OBTAIN THE LOCATION TO PLACE THE SHIP AT
        var xPosition = playerShip.xSpaceship;
        var yPosition = playerShip.ySpaceship;

        // GO THROUGH ALL THE PIXELS IN THE PATTERN AND PUT THEM IN THE GRID
        for (var i = 0; i < pixels.length; i += 2) {
            var col = xPosition + pixels[i];
            var row = yPosition + pixels[i + 1];
            setGridCell(buildGrid, row, col, DEAD_CELL);
        }
    } else if (playerShip.dirSpaceship === "left") {
        // Load the pixels of spaceship to draw
        var value = "playerLeft.png";
        var pixels = patterns[value];

        // OBTAIN THE LOCATION TO PLACE THE SHIP AT
        var xPosition = playerShip.xSpaceship;
        var yPosition = playerShip.ySpaceship;

        // GO THROUGH ALL THE PIXELS IN THE PATTERN AND PUT THEM IN THE GRID
        for (var i = 0; i < pixels.length; i += 2) {
            var col = xPosition + pixels[i];
            var row = yPosition + pixels[i + 1];
            setGridCell(buildGrid, row, col, DEAD_CELL);
        }
    } else if (playerShip.dirSpaceship === "up") {
        // Load the pixels of spaceship to draw
        var value = "playerUp.png";
        var pixels = patterns[value];

        // OBTAIN THE LOCATION TO PLACE THE SHIP AT
        var xPosition = playerShip.xSpaceship;
        var yPosition = playerShip.ySpaceship;

        // GO THROUGH ALL THE PIXELS IN THE PATTERN AND PUT THEM IN THE GRID
        for (var i = 0; i < pixels.length; i += 2) {
            var col = xPosition + pixels[i];
            var row = yPosition + pixels[i + 1];
            setGridCell(buildGrid, row, col, DEAD_CELL);
        }
    }
}

/*
 * Renders the cells in the game grid, with only the live
 * cells being rendered as filled boxes. Note that boxes are
 * rendered according to the current cell length.
 */
function renderCells()
{
    // CLEAR THE CANVAS
    canvas2D.fillStyle = GRID_BACKGROUND_COLOR;
    canvas2D.fillRect(0, 0, canvasWidth, canvasHeight);

    // RENDER THE GRID LINES, IF NEEDED
    if (renderCellsOnly === false && cellLength >= GRID_LINE_LENGTH_RENDERING_THRESHOLD)
        buildGridLines();

    // SET CORRECT GHOST COLOR
    if(shipOverlap === true){
        GHOST_COLOR = "rgba(255, 0, 0, 0.40)";
    } else {
        GHOST_COLOR = "rgba(255, 255, 255, 0.40)";
    }
    // set line width for cells
    canvas2D.lineWidth = 2;
    // RENDER THE LIVE CELLS IN THE GRID
    for (var i = 0; i <= gridHeight; i++)
    {
        for (var j = 0; j < gridWidth; j++)
        {
            var cell = getGridCell(buildGrid, i, j);
            if(cell === DEAD_CELL){
                // DO NOTHING, OPTIMIZATION
            }
            else if (cell === BAD_CELL)
            {
                // SET THE RENDER COLOR FOR SCARLET LIFE
                canvas2D.fillStyle = BAD_COLOR;
                var x = j * cellLength;
                var y = i * cellLength;
                canvas2D.fillRect(x, y, cellLength, cellLength);
            }
            else if (cell === GOOD_CELL)
            {
                // SET THE RENDER COLOR FOR SCARLET LIFE
                canvas2D.fillStyle = GOOD_COLOR;
                var x = j * cellLength;
                var y = i * cellLength;
                canvas2D.fillRect(x, y, cellLength, cellLength);
            }
            else if (cell === FINISH_CELL)
            {
                // SET THE RENDER COLOR FOR SCARLET LIFE
                var x = j * cellLength;
                var y = i * cellLength;
                canvas2D.fillStyle = FINISH_COLOR;
                canvas2D.fillRect(x, y, cellLength, cellLength);
            }
            else if (cell === VOID_CELL)
            {
                // SET THE RENDER COLOR FOR SCARLET LIFE
                canvas2D.fillStyle = VOID_COLOR;
                var x = j * cellLength;
                var y = i * cellLength;
                canvas2D.fillRect(x, y, cellLength, cellLength);
            }
            // BEGIN PLAYER GRID CHECKS, ALWAYS ABOVE LIFE GRID
            if (cell === RANDOM_POWERUP_CELL)
            {
                // SET THE RENDER COLOR FOR SCARLET LIFE
                canvas2D.fillStyle = POWERUP_COLOR;
                var x = j * cellLength;
                var y = i * cellLength;
                canvas2D.fillRect(x, y, cellLength, cellLength);
                // pick random outline color
                var choices = [FUEL_OUTLINE, HEALTH_OUTLINE, MORE_BULLETS_OUTLINE, SLOW_TIME_OUTLINE]
                canvas2D.strokeStyle = choices[Math.floor(Math.random()*4)]
                canvas2D.strokeRect(x,y,cellLength,cellLength);
            }
            else if (cell === FUEL_CELL)
            {
                // SET THE RENDER COLOR FOR KEYS
                canvas2D.fillStyle = POWERUP_COLOR;
                var x = j * cellLength;
                var y = i * cellLength;
                canvas2D.fillRect(x, y, cellLength, cellLength);
                // CORRESPONDING OUTLINE
                canvas2D.strokeStyle = FUEL_OUTLINE;
                canvas2D.strokeRect(x,y,cellLength,cellLength);
            }
            else if (cell === HEALTH_CELL)
            {
                // SET THE RENDER COLOR FOR KEYS
                canvas2D.fillStyle = POWERUP_COLOR;
                var x = j * cellLength;
                var y = i * cellLength;
                canvas2D.fillRect(x, y, cellLength, cellLength);
                // CORRESPONDING OUTLINE
                canvas2D.strokeStyle = HEALTH_OUTLINE;
                canvas2D.strokeRect(x,y,cellLength,cellLength);
            }
            else if (cell === SLOW_TIME_CELL)
            {
                // SET THE RENDER COLOR FOR KEYS
                canvas2D.fillStyle = POWERUP_COLOR;
                var x = j * cellLength;
                var y = i * cellLength;
                canvas2D.fillRect(x, y, cellLength, cellLength);
                // CORRESPONDING OUTLINE
                canvas2D.strokeStyle = SLOW_TIME_OUTLINE;
                canvas2D.strokeRect(x,y,cellLength,cellLength);
            }
            else if (cell === MORE_BULLETS_CELL)
            {
                // SET THE RENDER COLOR FOR KEYS
                canvas2D.fillStyle = POWERUP_COLOR;
                var x = j * cellLength;
                var y = i * cellLength;
                canvas2D.fillRect(x, y, cellLength, cellLength);
                // CORRESPONDING OUTLINE
                canvas2D.strokeStyle = MORE_BULLETS_OUTLINE;
                canvas2D.strokeRect(x,y,cellLength,cellLength);
            }
            else if (cell === KEY_CELL)
            {
                // SET THE RENDER COLOR FOR KEYS
                canvas2D.strokeStyle = KEY_COLOR;
                var x = j * cellLength;
                var y = i * cellLength;
                canvas2D.strokeRect(x, y, cellLength, cellLength);
            }
            else if (cell === TOKEN_CELL)
            {
                // SET THE RENDER COLOR FOR TOKENS
                canvas2D.strokeStyle = TOKEN_COLOR;
                var x = j * cellLength;
                var y = i * cellLength;
                canvas2D.strokeRect(x, y, cellLength, cellLength);

            }
            else if (cell >= TELEPORTER_BASE_VAL)
            {
                // SET THE RENDER COLOR FOR TELEPORTERS
                canvas2D.fillStyle = TELEPORTER_COLOR;
                var x = j * cellLength;
                var y = i * cellLength;
                canvas2D.fillRect(x, y, cellLength, cellLength);
            }
            // BEGIN OVERLAPPING GRID ELEMENTS
            if (cell === BULLET_CELL)
            {
                // SET THE RENDER COLOR FOR BULLETS
                canvas2D.fillStyle = BULLET_COLOR;
                var x = j * cellLength;
                var y = i * cellLength;
                canvas2D.fillRect(x, y, cellLength, cellLength);

            }
            if (cell === SPACESHIP_CELL)
            {
                // SET THE RENDER COLOR FOR SPACESHIP
                canvas2D.fillStyle = SPACESHIP_COLOR;
                var x = j * cellLength;
                var y = i * cellLength;
                canvas2D.fillRect(x, y, cellLength, cellLength);
            }
            // check if the ghost is over the spot
            cell = getGridCell(ghostGrid, i, j);
            if (cell === GHOST_CELL)
            {
                // SET THE RENDER COLOR FOR SPACESHIP
                canvas2D.fillStyle = GHOST_COLOR;
                var x = j * cellLength;
                var y = i * cellLength;
                canvas2D.fillRect(x, y, cellLength, cellLength);
            }
        }
    }
    if (renderCellsOnly === false){
        renderText();
        renderTeleConnects();
    } else {
        renderCellsOnly = false;
    }
}

/*
 * Renders lines between teleporters
 */
function renderTeleConnects()
{
    if(teleporterList.length > 1){
        // go through the telporter list pairs
        for (var i = 0; i < teleporterList.length; i+=2) {
            // if the teleporter has a partner
            if(typeof teleporterList[i + 1] !== "undefined"){
                var x1 = null;
                var y1 = null;
                var x2 = null;
                var y2 = null;
                // find the x-y of the first and second value
                for(var j = 0; j < gridHeight; j++){
                    for(var k = 0; k < gridWidth; k++){
                        var cellVal = getGridCell(buildGrid, j, k);
                        if(x1 === null && cellVal === teleporterList[i]){
                            x1 = (k + 1) * cellLength + (cellLength / 2);
                            y1 = (j + 2) * cellLength + (cellLength / 2);
                        } else if (x2 === null && cellVal === teleporterList[i + 1]){
                            x2 = (k + 1) * cellLength + (cellLength / 2);
                            y2 = (j + 2) * cellLength + (cellLength / 2);
                        }
                        if(x1 !== null && x2 !== null){
                            break;
                        }
                    }
                }
                canvas2D.strokeStyle = TELEPORTER_COLOR;
                // draw the line!
                canvas2D.beginPath();
                canvas2D.moveTo(x1, y1);
                canvas2D.lineTo(x2, y2);
                canvas2D.stroke();
            }
        }
    }
}

/*
 * Renders the text on top of the grid.
 */
function renderText()
{
    // SET THE PROPER COLOR
    canvas2D.fillStyle = TEXT_COLOR;

    // RENDER THE TEXT
    canvas2D.fillText("FPS: " + fps, FPS_X, FPS_Y);
    canvas2D.fillText("Cell Length: " + cellLength, CELL_LENGTH_X, CELL_LENGTH_Y);
}

/*
 * Renders the grid lines.
 */
function buildGridLines()
{
    canvas2D.lineWidth = 1;
    // SET THE PROPER COLOR
    canvas2D.strokeStyle = GRID_LINES_COLOR;

    // VERTICAL LINES
    for (var i = 0; i < gridWidth; i++)
        {
            var x1 = i * cellLength;
            var y1 = 0;
            var x2 = x1;
            var y2 = canvasHeight;
            canvas2D.beginPath();
            canvas2D.moveTo(x1, y1);
            canvas2D.lineTo(x2, y2);
            canvas2D.stroke();
        }

    // HORIZONTAL LINES
    for (var j = 0; j < gridHeight; j++)
        {
            var x1 = 0;
            var y1 = j * cellLength;
            var x2 = canvasWidth;
            var y2 = y1;
            canvas2D.moveTo(x1, y1);
            canvas2D.lineTo(x2, y2);
            canvas2D.stroke();
        }
}

/*
* This is the level object
*/
function Level(cells, title, description, health, fuel, privateLevel, difficulty, rating, creator, nextLevel, levelFps,
               cellLength, levelType, bulletLimit) {
    this.cells = cells;
    this.title = title;
    this.description = description;
    this.health = health;
    this.fuel = fuel;
    this.privateLevel = privateLevel;
    this.difficulty = difficulty;
    this.rating = rating;
    this.creator = creator;
    this.nextLevel = nextLevel;
    this.levelFps = levelFps;
    this.cellLength = cellLength;
    this.levelType = levelType;
    this.bulletLimit = bulletLimit;
}



/*
 * This function makes a Level object and posts it to the database
 */
function makeLevelObject() {
    renderCellsOnly = true;
    renderCells();
    if(checkFeatures() === true) {
        var newLevelCells = buildGrid;
        var newTitle = document.getElementById("level_title").value;
        var newDescription = document.getElementById("level_description").value;
        var newHealth = document.getElementById("health").value;
        var newFuel = document.getElementById("fuel").value;
        var newPrivateLevel = document.querySelector('input[name = "private"]:checked').value;
        var newDifficulty = $('input[name=difficulty_radio_buttons]:checked').val();
        var newRating = 5;
        var newCreator = "Guest";
        var newNextLevel = document.getElementById("levels").value;
        var newFPS = fps;
        var newCellLength = cellLength;
        //var newLevelType = $('input[name=level_type]:checked').val();
        var newLevelType = "custom"
        var newBullets = document.getElementById("bulletsLimit").value;
        var newShip = playerShip;
        var imageURL = canvasToDataURL();
        // re-render bars
        //level = new Level(newLevelCells, newTitle, newDescription, newHealth, newFuel, newPrivateLevel, newDifficulty, newRating, newCreator, newNextLevel, newFPS, newCellLength, newLevelType);

        var newLevel = {
            cells: newLevelCells,
            title: newTitle,
            description: newDescription,
            health: newHealth,
            fuel: newFuel,
            privateLevel: newPrivateLevel,
            difficulty: newDifficulty,
            rating: newRating,
            creator: newCreator,
            nextLevel: newNextLevel,
            fps: newFPS,
            cellLength: newCellLength,
            levelType: newLevelType,
            image: imageURL,
            bulletLimit: newBullets,
            spaceship: playerShip
        };

        var level = JSON.stringify(newLevel);
        return newLevel;
    } else {
        return null;
    }
}

/**
 * This function clears the level build form and grid
 */
function clearLevelBuildForm() {
    // Clear the build grid
    toEdit = false;
    levelId = null;
    resetGameOfLife();
    // Clear the form data
    document.getElementById("level_title").value = "";
    document.getElementById("level_description").value = "";
    document.getElementById("health").value = 250;
    document.getElementById("fuel").value = 250;
    $('input[name=private]').attr('checked', false);
    $('input[name=difficulty_radio_buttons]').attr('checked', false);
    document.getElementById("levels").value = "";
    $('input[name=level_type]').attr('checked', false);
    document.getElementById("bulletsLimit").value = 250;
}

// THIS FUNCTION CHECKS TO SEE IF A LEVEL HAS A PLAYER AND A FINISH
function checkFeatures(){
    var hasSpaceship = false;
    var hasFinish = false;
    var hasEvenTeleporters = false;
    for (var i = 0; i <= gridHeight; i++) {
        for (var j = 0; j < gridWidth; j++) {
            var cell = getGridCell(buildGrid, i, j);
            if (cell === SPACESHIP_CELL) {
                hasSpaceship = true;
            }
            if (cell === FINISH_CELL) {
                hasFinish = true;
            }
            if(teleporterList.length % 2 === 0){
                hasEvenTeleporters = true;
            }
        }
    }

    if(hasSpaceship === false){
        // TOAST to notify user of no spaceship
        var $toastContent = $('<span>Your level has no spaceship!</span>');
        Materialize.toast($toastContent, 5000);
        return false;
    } else if(hasFinish === false) {
        // TOAST to notify user of no finish
        var $toastContent = $('<span>Your level has no finish!</span>');
        Materialize.toast($toastContent, 5000);
        return false;
    } else if(hasEvenTeleporters === false) {
        // TOAST to notify user of non-even teleporters
        var $toastContent = $('<span>Your level needs an even number of teleporters!</span>');
        Materialize.toast($toastContent, 5000);
        return false;
    } else {
        return true;
    }
}

/**
 * This function is called when the undo button is pressed. The function retrieves and changes to the
 * previous state of the canvas.
 */
function undoPlacement() {

    resetGameOfLife();

    // Pop off the newest state and display the previous state
    // if (undoGridStateArray.length >= 1 && newStateAdded === true && didRedo === true) {
    //     console.log("gonna pop twice");
    //     var topGrid = undoGridStateArray.pop();
    //     redoGridStateArray.push(Array.from(topGrid));
    //     if (undoGridStateArray.length >= 1 ) {
    //         var tempGrid = buildGrid = undoGridStateArray.pop();
    //         if ((typeof tempGrid) === 'object') {
    //             console.log("popped twice");
    //             buildGrid = tempGrid;
    //             redoGridStateArray.push(Array.from(buildGrid));
    //         }
    //     }
    //     renderCells();
    // }
    // else
    if (undoGridStateArray.length > 0) {
        buildGrid = undoGridStateArray.pop();
        redoGridStateArray.push(Array.from(buildGrid));
        renderCells();
    }
    else if (undoGridStateArray.length === 0) {
        console.log("nothing left to pop");
    }
    newStateAdded = false;
    // console.log("undo grid state array length: " + undoGridStateArray.length);
    // console.log("redo grid state array length: " + redoGridStateArray.length);
}

/**
 * This function is called when the redo button is pressed. The function retrieves and changes to the
 * state of the canvas before clicking undo.
 */
function redoPlacement() {
    if (redoGridStateArray.length > 0) {
        resetGameOfLife();
        buildGrid = redoGridStateArray.pop();
        renderCells();
        undoGridStateArray.push(Array.from(buildGrid));
        newStateAdded = true;
    }
    else {
        console.log("Redo array is empty");
        newStateAdded = true;
    }
    didRedo = true;

    // console.log("undo grid state array length: " + undoGridStateArray.length);
    // console.log("redo grid state array length: " + redoGridStateArray.length);
}

/* this function kills a set of connected cells */
function killAdjacentBuildCells(row, col){
    var cellValue = getGridCell(buildGrid, row, col);
    setGridCell(buildGrid, row, col, DEAD_CELL);
    // DEPENDING ON THE TYPE OF CELL IT IS WE'LL CHECK
    // DIFFERENT ADJACENT CELLS
    var cellType = determineCellType(row, col);
    var cellsToCheck = cellLookup[cellType];
    for (var counter = 0; counter < (cellsToCheck.numNeighbors * 2); counter+=2)
    {
        var neighborCol = col + cellsToCheck.cellValues[counter];
        var neighborRow = row + cellsToCheck.cellValues[counter+1];
        var neighborValue = getGridCell(buildGrid, neighborRow, neighborCol);
        if (neighborValue === cellValue) {
            // Neighbor cell value is of the same type, so kill that cell too
            killAdjacentBuildCells(neighborRow, neighborCol); // RECURSIVE CALL TO KILL CHAINED POWERUP CELLS
        }
    }
}

/*
 * This function initizlies the 9 CellType objects that serve
 * as a lookup table for when we are running the simulation so
 * that we know which neighboring cells have to be examined for
 * determining the next frame's state for a given cell.
 */
function initCellLookup()
{
    // WE'LL PUT ALL THE VALUES IN HERE
    cellLookup = new Array();

    // TOP LEFT
    var topLeftArray        = new Array( 1, 0,  1,  1,  0,  1);
    cellLookup[TOP_LEFT]    = new CellTypeDev(3, topLeftArray);

    // TOP RIGHT
    var topRightArray       = new Array(-1, 0, -1,  1,  0,  1);
    cellLookup[TOP_RIGHT]   = new CellTypeDev(3, topRightArray);

    // BOTTOM LEFT
    var bottomLeftArray     = new Array( 1, 0,  1, -1, 0, -1);
    cellLookup[BOTTOM_LEFT] = new CellTypeDev(3, bottomLeftArray);

    // BOTTOM RIGHT
    var bottomRightArray    = new Array(-1, 0, -1, -1, 0, -1);
    cellLookup[BOTTOM_RIGHT]= new CellTypeDev(3, bottomRightArray);

    // TOP
    var topArray            = new Array(-1, 0, -1, 1, 0, 1, 1, 1, 1, 0);
    cellLookup[TOP]         = new CellTypeDev(5, topArray);

    // BOTTOM
    var bottomArray         = new Array(-1, 0, -1, -1, 0, -1, 1, -1, 1, 0);
    cellLookup[BOTTOM]      = new CellTypeDev(5, bottomArray);

    // LEFT
    var leftArray           = new Array(0, -1, 1, -1, 1, 0, 1, 1, 0, 1);
    cellLookup[LEFT]        = new CellTypeDev(5, leftArray);

    // RIGHT
    var rightArray          = new Array(0, -1, -1, -1, -1, 0, -1, 1, 0, 1);
    cellLookup[RIGHT]       = new CellTypeDev(5, rightArray);

    // CENTER
    var centerArray         = new Array(-1, -1, -1, 0, -1, 1, 0, 1, 1, 1, 1, 0, 1, -1, 0, -1);
    cellLookup[CENTER]      = new CellTypeDev(8, centerArray);
}

/*
 * A cell's type determines which adjacent cells need to be tested
 * during each frame of the simulation. This method tests the cell
 * at (row, col), and returns the constant representing which of
 * the 9 different types of cells it is.
 */
function determineCellType(row, col)
{
    if ((row === 0) && (col === 0))                                 return TOP_LEFT;
    else if ((row === 0) && (col === (gridWidthDev-1)))                return TOP_RIGHT;
    else if ((row === (gridHeightDev-1)) && (col === 0))               return BOTTOM_LEFT;
    else if ((row === (gridHeightDev-1)) && (col === (gridHeightDev-1)))  return BOTTOM_RIGHT;
    else if (row === 0)                                             return TOP;
    else if (col === 0)                                             return LEFT;
    else if (row === (gridHeightDev-1))                                return BOTTOM;
    else if (col === (gridWidthDev-1))                                 return RIGHT;
    else                                                            return CENTER;
}
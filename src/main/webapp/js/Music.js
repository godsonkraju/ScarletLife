/**
 * Created by Sharanjit Singh on 12/6/16.
 */

var muted = false;

//document.getElementById("volume-button").onclick = updateVolume();

/**
 * Mutes or unmutes the volume depending on the current state of the volume
 */
function updateVolume() {
    var backgroundAudio = document.getElementById("backgroundAudio");
    var audioIcon = document.getElementById("volume-icon");

    if (muted === false) {
        // Mute the audio if its not muted
        muted = true;
        backgroundAudio.muted = true;
        audioIcon.innerHTML = "volume_off";
        console.log("muted");
    }
    else {
        muted = false;
        backgroundAudio.muted = false;
        audioIcon.innerHTML = "volume_up";
        console.log("unmuted");
    }
}

function currentMutedState() {
    return muted;
}
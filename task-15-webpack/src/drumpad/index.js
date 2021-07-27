import { playAudio } from '../exports';

import './style.css';

import bounce from './audio/8bitkit-bounce-2.wav';
import coin from './audio/8bitkit-coin-10.wav';
import explosion from './audio/8bitkit-explosion-2.wav';
import fall from './audio/8bitkit-fall.wav';
import hit from './audio/8bitkit-hit-4.wav';
import jump from './audio/8bitkit-jump-6.wav';
import laser from './audio/8bitkit-laser-4.wav';
import powerup from './audio/8bitkit-powerup-2.wav';
import select from './audio/8bitkit-select-8.wav';


const audioLinks = [bounce, coin, explosion, fall, hit, jump, laser, powerup, select];
const audios = document.querySelectorAll('audio.sound');

audios.forEach((audio, index) => {
    audio.src = audioLinks[index];
});

document.addEventListener('keyup', function (e) {
    const code = e.keyCode;
    const audio = document.querySelector(`audio[data-key='${code}']`);
    const soundButton = document.querySelector(`.sound-button[data-key='${code}']`);
    playAudio(audio);
    soundButton.classList.add('sound-button__playing');
});

const soundButtons = document.querySelectorAll('.sound-button');

soundButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        const code = e.target.dataset.key;
        const audio = document.querySelector(`audio[data-key='${code}']`);
        playAudio(audio);
        button.classList.add('sound-button__playing');
    });
});

soundButtons.forEach(function (button) {
    button.addEventListener('transitionend', function (e) {
        const prop = e.propertyName;
        if (prop == 'transform') button.classList.remove('sound-button__playing');
    });
});

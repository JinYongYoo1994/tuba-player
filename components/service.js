import tp from 'react-native-track-player';

module.exports = async function() {
    // now working!
    tp.addEventListener('remote-play', () => tp.play());
    tp.addEventListener('remote-pause', () => tp.pause());
    tp.addEventListener('remote-stop', () => tp.destroy());
    tp.addEventListener('remote-next', () => tp.destroy());
    tp.addEventListener('remote-previous', () => tp.destroy());
}
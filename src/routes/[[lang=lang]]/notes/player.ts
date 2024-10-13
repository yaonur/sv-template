let audioContext: AudioContext | null = null;

export async function initializeMIDI() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        console.log('AudioContext initialized:', audioContext);
    } catch (err) {
        console.error('Failed to initialize AudioContext:', err);
    }
}

export function playMIDINote(noteNumber: number, duration: number = 1000) {
    if (!audioContext) {
        console.error('AudioContext not initialized.');
        return;
    }
    const frequency = midiNoteToFrequency(noteNumber);
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'sine'; // You can change this to 'square', 'sawtooth', 'triangle' for different sounds
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    gainNode.gain.setValueAtTime(1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration / 1000);

    oscillator.stop(audioContext.currentTime + duration / 1000);
}

export function getMIDINoteNumber(note: string, octave: number): number {
    const noteMap = { 'C': 0, 'C#': 1, 'D': 2, 'D#': 3, 'E': 4, 'F': 5, 'F#': 6, 'G': 7, 'G#': 8, 'A': 9, 'A#': 10, 'B': 11 };
    return 12 * (octave + 1) + noteMap[note];
}

function midiNoteToFrequency(noteNumber: number): number {
    return 440 * Math.pow(2, (noteNumber - 69) / 12);
}
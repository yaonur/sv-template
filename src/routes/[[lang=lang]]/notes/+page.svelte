<script lang="ts">
    import { onMount } from 'svelte';
    import { initializeMIDI, playMIDINote, getMIDINoteNumber } from './player';

    const notes = [
        { note: 'A', octave: 3 },
        { note: 'B', octave: 3 },
        { note: 'C', octave: 4 },
        { note: 'D', octave: 4 },
        { note: 'E', octave: 4 },
        { note: 'F', octave: 4 },
        { note: 'G', octave: 4 },
        { note: 'A', octave: 4 }
    ];

    let selectedNote = null;
    let intervalId = null;

    // Timer variables in BPM
    let firstNoteBPM = 120; // BPM for the first note played
    let waitTimeBPM = 120; // BPM for the wait time before starting the ladder movement
    let ladderSpeedBPM = 300; // BPM for the speed of the ladder movement

    // Convert BPM to milliseconds
    function bpmToMs(bpm) {
        return (60 / bpm) * 1000;
    }

    onMount(async () => {
        await initializeMIDI();
    });
	var qNum =0 
    function start() {
        if (intervalId) return; // Prevent multiple intervals
        intervalId = setInterval(() => {
			debugger
			qNum++
            const filteredNotes = notes.filter(note => !(note.note === 'A' && note.octave === 3));
            const randomIndex = Math.floor(Math.random() * filteredNotes.length);
            selectedNote = filteredNotes[randomIndex];
            const noteNumber = getMIDINoteNumber(selectedNote.note, selectedNote.octave);
            playMIDINote(noteNumber, bpmToMs(firstNoteBPM)); // Play the first note
            setTimeout(() => {
                const noteIndex = notes.indexOf(selectedNote);
                ladderDown(noteIndex, selectedNote.octave);
            }, bpmToMs(waitTimeBPM)); // Wait before starting the ladder
        }, bpmToMs(firstNoteBPM) + bpmToMs(waitTimeBPM) + bpmToMs(ladderSpeedBPM) * notes.length); // Randomize a new note after the entire sequence
    }

    function stop() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    function ladderDown(noteIndex: number, octave: number) {
		debugger
        if (noteIndex < 0 || (noteIndex === 0 && octave === 3)) {
            return;
        }
        selectedNote = notes[noteIndex];
        const noteNumber = getMIDINoteNumber(selectedNote.note, selectedNote.octave);
        playMIDINote(noteNumber, bpmToMs(ladderSpeedBPM)); // Play the note in the ladder
        setTimeout(() => {
            const nextNoteIndex = noteIndex === 0 ? notes.length - 1 : noteIndex - 1;
            const nextOctave = noteIndex === 0 ? octave - 1 : octave;
            if (nextNoteIndex === 7 && nextOctave === 3) {
                selectedNote = notes[0]; // Ensure it stops at A3
                return;
            }
            ladderDown(nextNoteIndex, nextOctave);
        }, bpmToMs(ladderSpeedBPM)); // Speed of the ladder movement
    }

    function playA3() {
        const noteNumber = getMIDINoteNumber('A', 3);
        playMIDINote(noteNumber);
    }
</script>

<div class="flex flex-wrap justify-center">
    {#each notes as { note, octave }}
        <button class="note-button m-2 p-4 text-lg bg-gray-200 border border-gray-400 rounded cursor-pointer transition-colors duration-300 {selectedNote && selectedNote.note === note && selectedNote.octave === octave ? 'bg-yellow-300' : ''}">
            {note}{octave}
        </button>
    {/each}
</div>

<div class="mt-4">
	<p>Num:{qNum}</p>
    <button class="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300 mr-2" on:click={start}>Start</button>
    <button class="p-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors duration-300" on:click={stop}>Stop</button>
    <button class="p-2 bg-green-500 text-white rounded hover:bg-green-700 transition-colors duration-300 ml-2" on:click={playA3}>Play A3</button>
</div>

<div class="mt-4">
    <label class="block mb-2">First Note Duration (BPM): {firstNoteBPM}</label>
    <input type="range" min="60" max="300" value={firstNoteBPM} on:input={(e) => firstNoteBPM = e.target.value} class="w-full" />

    <label class="block mb-2 mt-4">Wait Time Before Ladder (BPM): {waitTimeBPM}</label>
    <input type="range" min="60" max="300" value={waitTimeBPM} on:input={(e) => waitTimeBPM = e.target.value} class="w-full" />

    <label class="block mb-2 mt-4">Ladder Speed (BPM): {ladderSpeedBPM}</label>
    <input type="range" min="60" max="300" value={ladderSpeedBPM} on:input={(e) => ladderSpeedBPM = e.target.value} class="w-full" />
</div>
const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
    return 'My notes...'
}

// Add notes in the json file
const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title = title);
    
    if (duplicateNote) {
        notes.push({
            title : title,
            body : body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added.'));
    } else {
        console.log(chalk.red.inverse('Note title taken'));
    }
}

// Remove notes in the json file
const removeNotes = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed'));
    } else {
        console.log(chalk.red.inverse('No note Found'));
    }
    saveNotes(notesToKeep);
}

// Listing notes
const listNotes = () => {
    const notes = loadNotes();

    console.log((chalk.inverse('My notes')));

    notes.forEach((note) => {
        console.log(note.title);
    });
}

// Reading the notes
const readNotes = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title = title);

    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Notes not found.'));
    }
}

// Save notes in JSONclear
const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

// Converts JSON into STRING
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return[];
    }
}

// Exporting functions as objects
module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
};
const chalk = require('chalk');
const validator = require('validator');
const notes = require('./notes.js');
const yargs = require('yargs');

// Creat add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'String'
        },
        body : {
            describe : 'Note title',
            demandOption : true,
            type : 'String'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Creatre remove command
yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'String'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title);  
    }
});

// Create a list command
yargs.command({
    command : 'list',
    describe : 'List a command',
    handler() {
        notes.listNotes();
    }
});

// Create a read command
yargs.command({
    command : 'read',
    describe : 'Read a command',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'String'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title);
    }
});

yargs.parse();
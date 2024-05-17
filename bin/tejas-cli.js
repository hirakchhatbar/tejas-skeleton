#!/usr/bin/env node

import fsExtra from 'fs-extra';
const { readJsonSync, mkdirsSync, pathExistsSync } = fsExtra;

// Read the configuration from tejas.config.json
const config = readJsonSync('tejas.config.json');

import { Command } from 'commander';

const program = new Command();

program
    .command('make:feature <featurename>')
    .action((featurename) => {
        // Get the target directory from the config
        const targetDir = config.dir.targets;

        // Create a new directory based on the provided feature name
        const featureDir = `${targetDir}/${featurename}`;

        // Check if the directory already exists
        if (pathExistsSync(featureDir)) {
            console.log(`Folder '${featureDir}' already exists.`);
            return;
        }

        // Create the directories recursively
        mkdirsSync(featureDir);

        // Create files inside the created directory
        createFiles(featureDir, featurename);

        console.log(`Feature '${featurename}' created successfully in '${featureDir}'`);
    });

program.parse(process.argv);

function createFiles(featureDir, featurename) {
    // Define the file names
    const fileNames = [
        `${featurename}.controller.js`,
        `${featurename}.model.js`,
        `${featurename}.queries.js`,
        `${featurename}.services.js`,
        `${featurename}.target.js`
    ];

    // Iterate through the file names and create each file
    fileNames.forEach((fileName) => {
        fsExtra.writeFileSync(`${featureDir}/${fileName}`, '');
        console.log(`File '${fileName}' created successfully.`);
    });
}

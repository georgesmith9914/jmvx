import {Command, Flags} from '@oclif/core'
import * as inquirer from 'inquirer'
import fetch from 'node-fetch'
//import { move, readdir, remove, writeFile } from 'fs-extra'
import { access, writeFile } from 'node:fs/promises';
import * as fs from 'fs';
const extract = require('extract-zip');
const open = require('open');
const util = require('util');
const exec = util.promisify(require('child_process').exec);


//import linkTreePagesAPI from '../../api/create-scene-from-linktree'

export class JMVPublish extends Command {
  static flags = {
    projectType: Flags.string({options: ['Scene', 'Other']})
  }

  static flagsSceneTypes = {
    sceneType: Flags.string({options: ['From images', 'From blog']})
  }

  async run() {
    const {flags} = await this.parse(JMVPublish)
    try {
      process.chdir('./create-scene-from-images');
      console.log('New directory: ' + process.cwd());
      var installObj = await exec('npm install');
      console.log(installObj);
      //await exec('server.js');
        var child_process = require('child_process');

        console.log("Node Version: ", process.version);

        run_script("node", ["server.js"], function(output, exit_code) {
            console.log("Process Finished.");
            console.log('closing code: ' + exit_code);
            console.log('Full output of script: ',output);
        });

        function run_script(command, args, callback) {
          console.log("Starting Process.");
          var child = child_process.spawn(command, args);
      
          var scriptOutput = "";
      
          child.stdout.setEncoding('utf8');
          child.stdout.on('data', function(data) {
              console.log('stdout: ' + data);
      
              data=data.toString();
              scriptOutput+=data;
          });
      
          child.stderr.setEncoding('utf8');
          child.stderr.on('data', function(data) {
              console.log('stderr: ' + data);
      
              data=data.toString();
              scriptOutput+=data;
          });
      
          child.on('close', function(code) {
              callback(scriptOutput,code);
          });
      }

    }
    catch (err) {
      console.log('chdir: ' + err);
    }

    await open('http://localhost:3000/publisher.html', {app: {name: 'chrome'}});
    console.log('The image viewer app quit');

  }
}


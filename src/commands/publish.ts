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
      process.chdir('./create-scene-from-images-main');
      console.log('New directory: ' + process.cwd());
      await exec('npm install');
      require('child_process').fork('server.js');

    }
    catch (err) {
      console.log('chdir: ' + err);
    }

    await open('http://localhost:3000/publisher.html', {app: {name: 'chrome'}});
    console.log('The image viewer app quit');

  }
}


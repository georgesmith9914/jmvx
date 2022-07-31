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

export class JMVInstall extends Command {

  async run() {
    const {flags} = await this.parse(JMVInstall)
    try {
      process.chdir('./create-scene-from-images');
      console.log('New directory: ' + process.cwd());
      var installObj = await exec('npm install');
      console.log(installObj);
      
    }
    catch (err) {
      console.log('chdir: ' + err);
    }

  }
}


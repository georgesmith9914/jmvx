import {Command, Flags} from '@oclif/core'
import * as inquirer from 'inquirer'
import fetch from 'node-fetch'
//import { move, readdir, remove, writeFile } from 'fs-extra'
import { access, writeFile } from 'node:fs/promises';
import * as fs from 'fs';
const extract = require('extract-zip')

//import linkTreePagesAPI from '../../api/create-scene-from-linktree'

export class JMV extends Command {
  static flags = {
    projectType: Flags.string({options: ['Scene', 'Other']})
  }

  static flagsSceneTypes = {
    sceneType: Flags.string({options: ['From images', 'From blog']})
  }

  async run() {
    const {flags} = await this.parse(JMV)
    let projectType = undefined
    if (!projectType) {
      let responses: any = await inquirer.prompt([{
        name: 'projectType',
        message: 'select a project type',
        type: 'list',
        choices: [{name: 'Scene'}, {name: 'Other'}],
      }])
      projectType = responses.projectType
    }
    this.log(`the project type is: ${projectType}`)
    //Process based on selection of project type
    if(projectType == "Scene"){
      let sceneType = undefined;
      if (!sceneType) {
        let responses: any = await inquirer.prompt([{
          name: 'sceneType',
          message: 'select a scene type',
          type: 'list',
          choices: [{name: 'From images'}, {name: 'From blog'}],
        }])
        sceneType = responses.sceneType
      }
      this.log(`the scene type is..: ${sceneType}`)
      this.log("URL is " + getRepositoryUrl("scene", sceneType + ''))

      const util = require('util')
      const fs = require('fs')
      const streamPipeline = util.promisify(require('stream').pipeline)
      
      const fetch = require('node-fetch')
      
      async function download (url: string, dest: string) {
        const response = await fetch('https://github.com/georgesmith9914/create-scene-from-images/archive/refs/heads/main.zip')
        console.log(response);
        if (!response.ok) throw new Error(`unexpected response ${response.statusText}`)
        await streamPipeline(response.body, fs.createWriteStream('./main.zip'))

      }
      //download(url, dest)

      const unzipFile = async function () {
        console.log("came into unzip file")
        await extract("main.zip", { dir: process. cwd() })
      }

      await download("" + getRepositoryUrl("scene", "From images"), "main.zip");
      await unzipFile();

      //Download repo
      

      /*interface LinkTreePage {
        name: string;
        link: string;
      }

      let linkTreePages: LinkTreePage[] = linkTreePagesAPI.list();
      this.log(linkTreePages.length + "")
      let pageName = linkTreePages[0].name
      this.log(pageName + " " + linkTreePages[0].link) */

      //Create a module to extract hyperlinks from a page

      //Crawl contents of a given hyperlink
      
    }
  }
}

export const repos = {
  scenes: [
    {
      title: 'From images',
      url: 'https://github.com/georgesmith9914/create-scene-from-images/archive/refs/heads/main.zip'
    },
    {
      title: 'From blog',
      url: 'https://github.com/georgesmith9914/defyos-mailer/archive/refs/heads/master.zip'
    }
  ],
  library:
    'https://github.com/jmv/sdk-library/archive/refs/heads/main.zip'
}



export function getRepositoryUrl(contentType: string, contentName: string): string | void{
    if (contentType == "scene" && contentName == "From images") {
      return repos.scenes[0].url
    }
}

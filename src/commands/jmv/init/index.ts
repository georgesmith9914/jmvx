import {Command, Flags} from '@oclif/core'
import * as inquirer from 'inquirer'

export class JMV extends Command {
  static flags = {
    projectType: Flags.string({options: ['Scene', 'Other']})
  }

  static flagsSceneTypes = {
    sceneType: Flags.string({options: ['From Linktree page', 'From blog']})
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
          choices: [{name: 'From Linktree page'}, {name: 'From blog'}],
        }])
        sceneType = responses.sceneType
      }
      this.log(`the scene type is: ${sceneType}`)
    }
  }
}
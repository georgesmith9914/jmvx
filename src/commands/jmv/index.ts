import {Command, Flags} from '@oclif/core'

export default class JMV extends Command {
  static description = 'Say jmv'

  static examples = [
    `$ oex jmv friend --from oclif
jmv friend from oclif! (./src/commands/jmv/index.ts)
`,
  ]

  static flags = {
    from: Flags.string({char: 'f', description: 'Whom is saying jmv', required: true}),
  }

  static args = [{name: 'person', description: 'Person to say jmv to', required: true}]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(JMV)

    this.log(`jmv ${args.person} from ${flags.from}! (./src/commands/jmv/index.ts)`)
  }
}

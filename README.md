JoinMyVerse CLI
=================

JoinMyVerse CLI. NPM package https://www.npmjs.com/package/jmvx

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g jmvx
$ jmv COMMAND
running command...
$ jmv (--version)
jmvx/0.0.5 win32-x64 node-v16.15.0
$ jmv --help [COMMAND]
USAGE
  $ jmv COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g jmvx
$ jmv COMMAND
running command...
$ jmv (--version)
jmvx/0.0.4 win32-x64 node-v16.15.0
$ jmv --help [COMMAND]
USAGE
  $ jmv COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`jmv help [COMMAND]`](#jmv-help-command)
* [`jmv jmv PERSON`](#jmv-jmv-person)
* [`jmv jmv world`](#jmv-jmv-world)
* [`jmv plugins`](#jmv-plugins)
* [`jmv plugins:install PLUGIN...`](#jmv-pluginsinstall-plugin)
* [`jmv plugins:inspect PLUGIN...`](#jmv-pluginsinspect-plugin)
* [`jmv plugins:install PLUGIN...`](#jmv-pluginsinstall-plugin-1)
* [`jmv plugins:link PLUGIN`](#jmv-pluginslink-plugin)
* [`jmv plugins:uninstall PLUGIN...`](#jmv-pluginsuninstall-plugin)
* [`jmv plugins:uninstall PLUGIN...`](#jmv-pluginsuninstall-plugin-1)
* [`jmv plugins:uninstall PLUGIN...`](#jmv-pluginsuninstall-plugin-2)
* [`jmv plugins update`](#jmv-plugins-update)

## `jmv help [COMMAND]`

Display help for jmv.

```
USAGE
  $ jmv help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for jmv.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `jmv jmv PERSON`

Say jmv

```
USAGE
  $ jmv jmv [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say jmv to

FLAGS
  -f, --from=<value>  (required) Whom is saying jmv

DESCRIPTION
  Say jmv

EXAMPLES
  $ oex jmv friend --from oclif

    $ jmv friend from oclif! (./src/commands/jmv/index.ts)
```

_See code: [dist/commands/jmv/index.ts](https://github.com/joinmyverse-cli/joinmyverse-cli/blob/v0.0.5/dist/commands/jmv/index.ts)_

## `jmv jmv world`

Say hello world

```
USAGE
  $ jmv jmv world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `jmv plugins`

List installed plugins.

```
USAGE
  $ jmv plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ jmv plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `jmv plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ jmv plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ jmv plugins add

EXAMPLES
  $ jmv plugins:install myplugin 

  $ jmv plugins:install https://github.com/someuser/someplugin

  $ jmv plugins:install someuser/someplugin
```

## `jmv plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ jmv plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ jmv plugins:inspect myplugin
```

## `jmv plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ jmv plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ jmv plugins add

EXAMPLES
  $ jmv plugins:install myplugin 

  $ jmv plugins:install https://github.com/someuser/someplugin

  $ jmv plugins:install someuser/someplugin
```

## `jmv plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ jmv plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ jmv plugins:link myplugin
```

## `jmv plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jmv plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jmv plugins unlink
  $ jmv plugins remove
```

## `jmv plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jmv plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jmv plugins unlink
  $ jmv plugins remove
```

## `jmv plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jmv plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jmv plugins unlink
  $ jmv plugins remove
```

## `jmv plugins update`

Update installed plugins.

```
USAGE
  $ jmv plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
* [`jmv help [COMMAND]`](#jmv-help-command)
* [`jmv jmv PERSON`](#jmv-jmv-person)
* [`jmv jmv world`](#jmv-jmv-world)
* [`jmv plugins`](#jmv-plugins)
* [`jmv plugins:install PLUGIN...`](#jmv-pluginsinstall-plugin)
* [`jmv plugins:inspect PLUGIN...`](#jmv-pluginsinspect-plugin)
* [`jmv plugins:install PLUGIN...`](#jmv-pluginsinstall-plugin-1)
* [`jmv plugins:link PLUGIN`](#jmv-pluginslink-plugin)
* [`jmv plugins:uninstall PLUGIN...`](#jmv-pluginsuninstall-plugin)
* [`jmv plugins:uninstall PLUGIN...`](#jmv-pluginsuninstall-plugin-1)
* [`jmv plugins:uninstall PLUGIN...`](#jmv-pluginsuninstall-plugin-2)
* [`jmv plugins update`](#jmv-plugins-update)

## `jmv help [COMMAND]`

Display help for jmv.

```
USAGE
  $ jmv help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for jmv.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `jmv jmv PERSON`

Say jmv

```
USAGE
  $ jmv jmv [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say jmv to

FLAGS
  -f, --from=<value>  (required) Whom is saying jmv

DESCRIPTION
  Say jmv

EXAMPLES
  $ oex jmv friend --from oclif

    $ jmv friend from oclif! (./src/commands/jmv/index.ts)
```

_See code: [dist/commands/jmv/index.ts](https://github.com/joinmyverse-cli/joinmyverse-cli/blob/v0.0.4/dist/commands/jmv/index.ts)_

## `jmv jmv world`

Say hello world

```
USAGE
  $ jmv jmv world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `jmv plugins`

List installed plugins.

```
USAGE
  $ jmv plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ jmv plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `jmv plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ jmv plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ jmv plugins add

EXAMPLES
  $ jmv plugins:install myplugin 

  $ jmv plugins:install https://github.com/someuser/someplugin

  $ jmv plugins:install someuser/someplugin
```

## `jmv plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ jmv plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ jmv plugins:inspect myplugin
```

## `jmv plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ jmv plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ jmv plugins add

EXAMPLES
  $ jmv plugins:install myplugin 

  $ jmv plugins:install https://github.com/someuser/someplugin

  $ jmv plugins:install someuser/someplugin
```

## `jmv plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ jmv plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ jmv plugins:link myplugin
```

## `jmv plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jmv plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jmv plugins unlink
  $ jmv plugins remove
```

## `jmv plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jmv plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jmv plugins unlink
  $ jmv plugins remove
```

## `jmv plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jmv plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jmv plugins unlink
  $ jmv plugins remove
```

## `jmv plugins update`

Update installed plugins.

```
USAGE
  $ jmv plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->

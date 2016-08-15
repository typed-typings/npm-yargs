declare namespace yargs {
  interface Argv {
    _: string[];
    '$0': string;
    [key: string]: any;
  }

  interface CommandModule {
    command: string;
    describe: string | boolean;
    builder: Builder | ((yargs: Yargs) => Yargs);
    handler: (argv: Argv) => any;
  }

  interface CommandDirOptions {
    recurse?: boolean;
    extensions?: string[];
    visit?: (commandObject: CommandModule, pathToFile: string, filename: string) => CommandModule | boolean | void;
    include?: RegExp | ((path: string) => boolean);
    exclude?: RegExp | ((path: string) => boolean);
  }

  interface Builder {
    [key: string]: Options;
  }

  interface Yargs {
    argv: Argv;
    <T> (args: string[]): T & Argv;
    parse <T> (args: string[]): T & Argv;
    alias (key: string, alias: string): this;
    alias (aliases: { [key: string]: string | string[] }): this;
    array (key: string): this;
    boolean (key: string): this;
    check (fn: (argv: Argv, aliases: { [key: string]: string[] }) => any): this;
    choices (key: string, choices: (string | number)[]): this;
    command (command: string, description: string, fn?: (yargs: this, argv: Argv) => void): this;
    commandDir (directory: string, opts?: CommandDirOptions): this;
    completion (cmd: string, fn?: SyncCompletionFunction | AsyncCompletionFunction): this;
    completion (cmd: string, description?: string, fn?: SyncCompletionFunction | AsyncCompletionFunction): this;
    config (key: string, description?: string): this;
    count (key: string): this;
    default (key: string, value: any, description?: string): this;
    default (defaults: { [key: string]: any }): this;
    demand (key: string | string[], msg?: string): this;
    demand (key: string | string[], required?: boolean): this;
    demand (count: number, msg?: string): this;
    demand (count: number, max?: number, msg?: string): this;
    require (key: string | string[], msg?: string): this;
    require (key: string | string[], required?: boolean): this;
    require (count: number, msg?: string): this;
    require (count: number, max?: number, msg?: string): this;
    required (key: string | string[], msg?: string): this;
    required (key: string | string[], required?: boolean): this;
    required (count: number, msg?: string): this;
    required (count: number, max?: number, msg?: string): this;
    describe (key: string, description: string): this;
    detectLocale (enable: boolean): this;
    env (prefix?: string | boolean): this;
    epilog (str: string): this;
    epilogue (str: string): this;
    example (cmd: string, description: string): this;
    exitProcess (enable: boolean): this;
    fail (fn: (message: string) => any): this;
    group (keys: string | string[], groupName: string): this;
    global (key: string);
    help (): string;
    help (option?: string, description?: string): this;
    implies (x: string, y: string): this;
    locale (): string;
    locale (locale: string): this;
    nargs (key: string, count: number): this;
    option (key: string, options: Options): this;
    options (key: string, options: Options): this;
    option (options: Builder): this;
    options (options: Builder): this;
    requiresArg (key: string): this;
    reset (): this;
    showCompletionScript (): string;
    showHelp (consoleLevel?: string): this;
    showHelpOnFail (enable: boolean, message?: string): this;
    strict (): this;
    string (key: string): this;
    updateLocale (obj: { [key: string]: string }): this;
    updateStrings (obj: { [key: string]: string }): this;
    usage (message: string, opts?: Options): this;
    version (version: () => string): this;
    version (version: string, option?: string, description?: string): this;
    wrap (columns: number): this;
  }

  interface Options {
    alias?: string | string[];
    array?: boolean;
    boolean?: boolean;
    choices?: (string | number)[];
    config?: boolean;
    count?: boolean;
    default?: any;
    defaultDescription?: string;
    demand?: boolean | string;
    require?: boolean | string;
    required?: boolean | string;
    desc?: string;
    describe?: string;
    description?: string;
    group?: string;
    global?: boolean;
    nargs?: number;
    requiresArg?: boolean;
    string?: boolean;
    type?: string;
  }

  type SyncCompletionFunction = (current: string, argv: any) => string[];
  type AsyncCompletionFunction = (current: string, argv: any, done: (completion: string[]) => void) => void;
}

declare var yargs: yargs.Yargs;

export = yargs;

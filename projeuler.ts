class RunConfigure {
    static fromParser(args: Args): RunConfigure {
        return new RunConfigure()
    }
}

class Args {
    command: string
    id: string
    full: boolean

    constructor(command: string, id: string, full: boolean) {
        this.command = command
        this.id = id
        this.full = full
    }
}

function parseArgs(): Args {
    const command = process.argv[2]
    const id = process.argv[3]
    const full = process.argv.includes('--full')

    const args = new Args(command, id, full)
    return args
}

function doList(id: string, full: boolean): void {
    console.log('List command:', id, full)
}

function doCreate(id: string): void {
    console.log('Create command:', id)
}

function doRun(conf: RunConfigure): void {
    console.log('Run command:', conf)
}

function main(): void {
    const args = parseArgs()

    if (args.command === "list") {
        doList(args.id, args.full)
    } else if (args.command === "create") {
        doCreate(args.id)
    } else if (args.command === "run") {
        const conf = RunConfigure.fromParser(args)
        doRun(conf)
    } else {
        console.log('Invalid command:', args.command)
        console.log('Usage: ts-node script.ts <command> <id> [--full]')
    }
}

main()

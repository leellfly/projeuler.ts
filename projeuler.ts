class RunConfigure {
    // 假设 RunConfigure 类的实现
    static fromParser(args: Args): RunConfigure {
        // 实现从 Args 对象创建 RunConfigure 对象的逻辑
        return new RunConfigure() // 这里需要根据实际逻辑返回正确的 RunConfigure 实例
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
    // 获取命令行参数
    const command = process.argv[2]
    const id = process.argv[3]
    const full = process.argv.includes('--full')

    // 创建 Args 对象
    const args = new Args(command, id, full)
    return args
}

function do_list(id: string, full: boolean): void {
    // 处理 "list" 命令的逻辑
    console.log('List command:', id, full)
}

function do_create(id: string): void {
    // 处理 "create" 命令的逻辑
    console.log('Create command:', id)
}

function do_run(conf: RunConfigure): void {
    // 处理 "run" 命令的逻辑
    console.log('Run command:', conf)
}

function main(): void {
    // 解析命令行参数
    const args = parseArgs()

    // 根据命令执行相应的操作
    if (args.command === "list") {
        do_list(args.id, args.full)
    } else if (args.command === "create") {
        do_create(args.id)
    } else if (args.command === "run") {
        const conf = RunConfigure.fromParser(args)
        do_run(conf)
    } else {
        console.log('Invalid command:', args.command)
        console.log('Usage: ts-node script.ts <command> <id> [--full]')
    }
}

// 调用 main 函数开始脚本执行
main()

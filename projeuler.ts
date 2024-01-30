import * as fs from 'fs'
import * as path from 'path'

class Args {
    command: string
    id: string

    constructor(command: string, id: string) {
        this.command = command
        this.id = id
    }
}

function parseArgs(): Args {
    const command = process.argv[2]
    const id = process.argv[3]

    const args = new Args(command, id)
    return args
}

class FolderExecutionTimer {
    private folderPath: string

    constructor(folderPath: string) {
        this.folderPath = folderPath
    }

    private getFilesInFolder(folderPath: string): string[] {
        const files = fs.readdirSync(folderPath)
        return files
            .filter(file => file.endsWith('.ts')) // Filter TypeScript files
            .map(file => path.join(folderPath, file)) // Create full paths
    }
    private executeSolveMethod(filePath: string): void {
        console.log(filePath);
        require('./' + filePath)
        console.log('__________________________________')
    }

    measureExecutionTimeForSolveMethods(): void {
        const files = this.getFilesInFolder(this.folderPath)
        files.forEach(filePath => {
            this.executeSolveMethod(filePath)
        })
    }
}

function doCreate(id: string): void {
    let filename = `p${id.toString().padStart(4, '0')}.ts`;
    const PROBLEM_DIR = 'problems'
    const filepath = path.join(PROBLEM_DIR, filename)

    if (fs.existsSync(filepath)) {
        console.log(`File ${filepath} already exists`);
    } else {
        let fileContent = (
            "/*" +
            "\n" +
            "\n" +
            '*/' +
            "\n" +
            "\n" +
            'import { measureTime } from "../utils"\n' +
            "\n" +
            "function solve() {\n" +
            "\n" +
            '}\n' +
            "\n" +
            "const [result, elapsedTime] = measureTime(() => solve())\n" +
            "console.log('result', result)\n" +
            "console.log(`Elapsed Time: ${elapsedTime} milliseconds`)\n"
        );

        fs.writeFileSync(filepath, fileContent, { encoding: 'utf-8' })
        console.log(`File ${filepath} created successfully`)
    }
}

function doRun(): void {
    const folderPath = 'problems'
    const folderTimer = new FolderExecutionTimer(folderPath)
    folderTimer.measureExecutionTimeForSolveMethods()
}

function main(): void {
    const args = parseArgs()
    console.log(args);
    if (args.command === "run") {
        doRun()
    } else if (args.command === "create") {
        doCreate(args.id)
    } else {
        console.warn('Invalid command:', args.command)
        console.warn('Usage: ts-node projeuler.ts <command> <id>')
    }
}

main()
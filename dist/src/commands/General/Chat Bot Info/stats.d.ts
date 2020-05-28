import { Command, CommandStore } from 'klasa';
import { Message } from '@klasa/core';
export default class extends Command {
    constructor(store: CommandStore, directory: string, files: readonly string[]);
    run(message: Message): Promise<Message[]>;
}

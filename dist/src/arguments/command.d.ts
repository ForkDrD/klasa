import { Argument, ArgumentStore, Command, Possible } from 'klasa';
import type { Message } from '@klasa/core';
export default class CoreArgument extends Argument {
    constructor(store: ArgumentStore, directory: string, file: readonly string[]);
    run(argument: string, possible: Possible, message: Message): Command;
}

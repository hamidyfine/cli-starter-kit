#!/usr/bin/env node

import { Command } from 'commander';
import commandName from './src/commands/command-name';
import { name, version } from './package.json';

const program = new Command();

commandName(program);

program.name(name);
program.version(version);

program.parse();

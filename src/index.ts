#! /usr/bin/env node
import Program from "./program.js";

import "./commands/dev/index.js";

import "./commands/bridge/index.js";

import "./commands/create/index.js";

import "./commands/transaction/index.js";

Program.parse();

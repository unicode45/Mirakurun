/*
   Copyright 2016 Yuki KAN

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
/// <reference path="../../typings/tsd.d.ts" />
'use strict';

import common = require('../common');
//import log = require('../log');
import events = require('events');
//import fs = require('fs');

/* interface User {
    id: string;
    agent: string;
} */

class Tuner extends events.EventEmitter {

    tuners: common.config.Tuner[] = [];

    constructor() {
        super();

        this.getTuners();
    }

    getTuners() {

        this.tuners = common.config.getTuners();
    }

    reloadTuners() {

        this.getTuners();
        //
    }
}

export = Tuner;
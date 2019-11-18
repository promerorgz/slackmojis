/**
 * This file contains ENV vars to be loaded in local dev environments.
 * Any changes to ENV vars will need to be made here as well as in
 * "/deploy/configure/forms/erb/config.js.erb" to keep them in sync. In
 * deployed environments, this file is deleted and replaced with a
 * generated config.js file from configgy
 * */

window.APP_ENV = {
    hosts: {
        formsService: "https://forms-devsa.testschoolmessenger.com"
    }
};


// Refer to the online docs for more details:
// https://nightwatchjs.org/guide/configuration/nightwatch-configuration-file.html

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ["./test"],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: ['./page-objects'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: ['node_modules/nightwatch/examples/custom-commands/'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: '',

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: [],

  // See https://nightwatchjs.org/guide/concepts/test-globals.html#external-test-globals
  globals_path: '',

  webdriver: {},

  test_workers: {
    enabled: true,
    workers: 'auto'
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'https://nightwatchjs.org',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome'
      },

      webdriver: {
        start_process: true,
        server_path: ''
      }
    },



    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '-headless',
              // '-verbose'
            ]
          }
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ]
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },
    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using the Selenium service, either locally or remote,  |
    //  like Selenium Grid                                                           |
    //////////////////////////////////////////////////////////////////////////////////
    selenium_server: {
      // Selenium Server is running locally and is managed by Nightwatch
      // Install the NPM package @nightwatch/selenium-server or download the selenium server jar file from https://github.com/SeleniumHQ/selenium/releases/, e.g.: selenium-server-4.1.1.jar
      selenium: {
        start_process: true,
        port: 4444,
        server_path: '', // Leave empty if @nightwatch/selenium-server is installed
        command: 'standalone', // Selenium 4 only
        cli_args: {
          //'webdriver.gecko.driver': '',
          //'webdriver.chrome.driver': ''
        }
      },
      webdriver: {
        start_process: false,
        default_path_prefix: '/wd/hub'
      }
    },

    'selenium.chrome': {
      extends: 'selenium_server',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          w3c: true
        }
      }
    },

    'selenium.firefox': {
      extends: 'selenium_server',
      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: [
            // '-headless',
            // '-verbose'
          ]
        }
      }
    }
  }
};

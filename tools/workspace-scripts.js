const npsUtils = require('nps-utils');

module.exports = {
  message: 'NativeScript ~ made with ❤️  Choose a command to start...',
  pageSize: 25,
	scripts: {
		default: 'nps-i',
		nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli'
    },
		format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)'
    },
    "🔧": {
      script: `npx cowsay "NativeScript apps are key to a user's ❤️"`,
      description: '_____________  Apps to develop and experiment with  _____________'
    },
		// app testing targets
		apps: {
      "...Automated...": {
        script: `npx cowsay "These run fast, watch the fireworks! 🎆"`,
        description: ` 🔻 Automated test runner which executes e2e tests on the target platform 🎆`
      },
			// Automated test runner which executes e2e tests on the target platform
			automated: {
				clean: {
          script: 'nx run apps-automated:clean',
          description: '⚆  Clean  🧹'
        },
				ios: {
          script: 'nx run apps-automated:ios',
          description: '⚆  Run iOS  '
        },
				android: {
          script: 'nx run apps-automated:android',
          description: '⚆  Run Android  🤖'
        },
      },
      "...ToolBox...": {
        script: `npx cowsay "🎯 The best development target to experiment with ideas and debug core"`,
        description: ` 🔻 Toolbox for livesyncing changes and experimenting 🎯`
      },
			// Toolbox useful for livesyncing changes and experimenting
			toolbox: {
				clean: {
          script: 'nx run apps-toolbox:clean',
          description: '⚆  Clean  🧹'
        },
				ios: {
          script: 'nx run apps-toolbox:ios',
          description: '⚆  Run iOS  '
        },
				android: {
          script: 'nx run apps-toolbox:android',
          description: '⚆  Run Android  🤖'
        },
      },
      "...UI...": {
        script: `npx cowsay "Tons of ui samples to prove out core behavior and validate github issue fixes ☑️"`,
        description: ` 🔻 Tons of ui samples to prove out core behavior and validate github issue fixes ☑️`
      },
			// Various UI level setups for @nativescript/core testing
			ui: {
				clean: {
          script: 'nx run apps-ui:clean',
          description: '⚆  Clean  🧹'
        },
				ios: {
          script: 'nx run apps-ui:ios',
          description: '⚆  Run iOS  '
        },
				android: {
          script: 'nx run apps-ui:android',
          description: '⚆  Run Android  🤖'
        },
			},
    },
    "⚙️": {
      script: `npx cowsay "@nativescript/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @nativescript/*  _____________'
    },
		// packages
		// build output is always in dist/packages
		'@nativescript': {
			// @nativescript/core
			core: {
				build: {
          script: 'nx run core:build.npm',
          description: '@nativescript/core: Build for npm'
        },
				test: {
          script: 'nx run core:unit',
          description: '@nativescript/core: Unit tests',
					watch: {
            script: 'nx run core:unit.watch',
            description: '@nativescript/core: Unit tests with watcher'
					},
				},
			},
			// tns-core-modules (old historic compatibility)
			'core-compat': {
				build: {
          script: 'nx run core-compat:build',
          description: 'tns-core-modules: (Compatibility package) Build for npm'
        },
			},
			// @nativescript/ui-mobile-base
			'ui-mobile-base': {
				build: {
          script: 'nx run ui-mobile-base:build',
          description: '@nativescript/ui-mobile-base: Build for npm'
        },
			},
			// @nativescript/webpack
			webpack: {
				build: {
          script: 'nx run webpack:build',
          description: '@nativescript/webpack: Build for npm'
        },
				test: {
          script: 'nx run webpack:test',
          description: '@nativescript/webpack: Unit tests'
        },
			},
    },
    ".....................": {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................'
    }
	},
};

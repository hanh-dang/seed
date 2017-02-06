// conf.js
exports.config = {
	// framework: 'jasmine2',
	// seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['e2eTest.spec.js'],
	baseUrl: 'http://localhost:8000/',
	rootElement: '.app',
	params: {
		login: {
			user: 'daniel@devetry.com',
			password: 'test'
		},
		testOrg: {
			parent: "Protractor test org",
			child: "Protractor test sub org",
			childRename: "Protractor sub rename",
			cycle: "Protractor test cycle"
		}
	}
}

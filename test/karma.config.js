module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'karma-typescript'],
        files: [
            '../src/*.ts',
            '../test/ts/*.ts'
        ],
        exclude: [
        ],
        preprocessors: {
            '../**/*.ts': ['karma-typescript']
        },

        typescriptPreprocessor: {
            options: {
                sourceMap: true,
                noResolve: false
            },
            transformPath: function(path) {
                return path.replace(/\.ts$/, '.js');
            }
        },
        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};
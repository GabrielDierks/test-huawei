const { withProjectBuildGradle } = require("@expo/config-plugins");
module.exports = function customGradlePlugin(config) {
  return withProjectBuildGradle(config, async (config) => {
    config.modResults.contents = config.modResults.contents.replaceAll(
      `
        google()
        mavenCentral()`,
      `
      google()
      mavenCentral()
	      
	maven {
	    url 'https://developer.huawei.com/repo/'
	  }`,
    );
    config.modResults.contents = config.modResults.contents.replace(
      "dependencies {",
      `dependencies {
	      
	    classpath 'com.huawei.agconnect:agcp:1.8.1.300'`,
    );
    return config;
  });
};

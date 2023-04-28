const { withAppBuildGradle } = require("@expo/config-plugins");

module.exports = function customGradlePlugin(config) {
  return withAppBuildGradle(config, async (config) => {
    config.modResults.contents = config.modResults.contents.replace(
      'apply plugin: "com.android.application"',
      `apply plugin: "com.android.application"
apply plugin: "com.huawei.agconnect"`,
    );
    config.modResults.contents = config.modResults.contents.replace(
      "dependencies {",
      `dependencies {
      
        implementation 'com.huawei.agconnect:agconnect-core:1.8.1.300'`,
    );

    return config;
  });
};

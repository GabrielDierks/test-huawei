const { withAndroidManifest, AndroidConfig } = require("@expo/config-plugins");

const { addMetaDataItemToMainApplication, getMainApplicationOrThrow } =
  AndroidConfig.Manifest;

module.exports = function androiManifestPlugin(config) {
  return withAndroidManifest(config, async (config) => {
    let androidManifest = config.modResults;

    androidManifest = await setCustomConfigAsync(config, androidManifest);
    androidManifest.manifest.$ = {
      ...androidManifest.manifest.$,
      "xmlns:tools": "http://schemas.android.com/tools",
    };
    androidManifest.manifest["uses-permission"].push({
      $: {
        "android:name":
          "com.huawei.appmarket.service.commondata.permission.GET_COMMON_DATA",
      },
    });
    return config;
  });
};

async function setCustomConfigAsync(config, androidManifest) {
  const appId = "107143377";
  const mainApplication = getMainApplicationOrThrow(androidManifest);

  addMetaDataItemToMainApplication(
    mainApplication,
    "com.huawei.hms.client.appid",
    appId
  );

  return androidManifest;
}

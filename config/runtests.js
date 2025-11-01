config.jars = "jar/Anyview4.0.jar";
config.jad = "jar/Anyview4.0.jad";
config.midletClassName = "com.ismyway.anyview.Anyview";

// Fix đường dẫn để chạy đúng cả Cloudflare và GitHub
if (!config.jars.startsWith("http")) {
  config.jars = "./" + config.jars.replace(/^\/+/, "");
}
if (config.jad && !config.jad.startsWith("http")) {
  config.jad = "./" + config.jad.replace(/^\/+/, "");
}

MIDlet.shouldStartBackgroundService = function() {
  return fs.exists("/startBackgroundService");
};

const appInsights = require("applicationinsights");

module.exports = function(RED) {
    function TrackEvent(config) {
        
        RED.nodes.createNode(this,config);
        var node = this;

        appInsights.setup(config.iKey).start();
        var appInsightsClient = appInsights.defaultClient;
        
        node.on('input', function(msg) {
            appInsightsClient.trackEvent(msg.payload);
            node.send(msg);
        });
    }
    RED.nodes.registerType("track-event", TrackEvent);
}
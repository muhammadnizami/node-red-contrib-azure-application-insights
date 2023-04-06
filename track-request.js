const appInsights = require("applicationinsights");

module.exports = function(RED) {
    function TrackRequest(config) {
        
        RED.nodes.createNode(this,config);
        var node = this;

        appInsights.setup(config.iKey).start();
        var appInsightsClient = appInsights.defaultClient;
        
        node.on('input', function(msg) {
            appInsightsClient.trackRequest(msg.payload);
            node.send(msg);
        });
    }
    RED.nodes.registerType("track-request", TrackRequest);
}
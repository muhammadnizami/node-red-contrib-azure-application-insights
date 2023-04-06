const appInsights = require("applicationinsights");

module.exports = function(RED) {
    function TrackDependency(config) {
        
        RED.nodes.createNode(this,config);
        var node = this;

        appInsights.setup(config.iKey).start();
        var appInsightsClient = appInsights.defaultClient;
        
        node.on('input', function(msg) {
            appInsightsClient.trackDependency(msg.payload);
            node.send(msg);
        });
    }
    RED.nodes.registerType("track-dependency", TrackDependency);
}
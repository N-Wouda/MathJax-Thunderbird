const handleStartup = () => {
    const files = {
        js: [
            {file: "src/config.js"},
            {file: "node_modules/mathjax/es5/tex-svg-full.js"}
        ]
    };

    messenger.messageDisplayScripts.register(files);
};

document.addEventListener("DOMContentLoaded", handleStartup);

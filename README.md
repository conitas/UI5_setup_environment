# UI5_setup_environment

Prerquisites
- Ubuntu 20.04
- nodejs 14 (needed to install manually since the packaged nodejs 15 didn't work with ui5)
- git    2.25.1
- Visual Studio Code 1.45.1
- npm install --global @ui5/cli (sudo when encoutering error messages)

Starting Point: https://github.com/SAP/ui5-tooling

Steps to initiate a project
- npm init --yes       (create your package.json for node)
- ui5 init             (create the ui5.yaml file)
    Problem: CLI script ui5 does not check version properly. Need to install a different nodejs version
    Problem: command didn't work; I needed to `mkdir webapp` before
- create file `manifest.json` with content
        `{
    "_version": "0.1.1",
	"sap.app": {
		"id": "conitas.ui.tests.env",
		"type": "application"
    }
    }`
        in dir `webapp`
- issue command `ui5 use openui5@latest` in top level directory (this will change the file `ui5.yaml`)
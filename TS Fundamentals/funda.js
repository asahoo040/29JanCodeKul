var osName = "10";
console.log("OS Name is " + osName);
//backticks 
function whatIsOS() {
    return osName;
}
function thisIsVersion(version) {
    console.log("the version is " + version);
}
console.log('How to compile =>tsc yourFile.ts');
console.log('How to run =>node yourFile.js');
whatIsOS();
thisIsVersion('1.2');

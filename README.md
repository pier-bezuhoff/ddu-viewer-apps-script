# ddu viewer w/ Apps Script
Web based .ddu viewer

## Latest version live hosting [here](https://script.google.com/macros/s/AKfycbwbrPwkX2CxIeIOBLiJiDtkyXRvcv0_rTBNOU6QYvU4flpNKtWnTWTuDAtrT_EqkEsgNA/exec?ddu=Sakura&delay=40)  
This script takes 2 optional request parameters:  
[link]?ddu=[name]&delay=[ms]  
*ddu* takes a name (without extension) of some .ddu file in [this folder](https://drive.google.com/drive/u/0/folders/19Y8zySkMQXaMJY3UNYna8agMlqx8qnBQ).  
*delay* takes delay between updates in miliseconds, 40ms ~ 25 FPS.

## Project structure
Apps Script only allows extensions .gs and .html, so css and js are stored in .html files.  
js.html is compiled from coffee.html w/ CoffeeScript.  
[ddu-parser.gs](https://github.com/pier-bezuhoff/ddu-viewer-apps-script/blob/main/src/ddu-parser.gs) contains simple reusable js code for parsing circles from .ddu files.

## Other
This script is a part of the [Dodeca development plan](https://docs.google.com/document/d/1kBEptEFfYeRAB6grWmbG0Fcb1H6prs738ZR6Dq3DNy4/edit#heading=h.nkjqhetp71zf).
Anyone is welcome to fork and add UI & functionality!

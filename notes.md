# midterm notes
<image src="notes.png"/>


### If having issues with MongoDB parsing, make sure node version is > v14 with 
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

### deploy to production
./deployService.sh -k <yourpemkey> -h <yourdomain> -s simon

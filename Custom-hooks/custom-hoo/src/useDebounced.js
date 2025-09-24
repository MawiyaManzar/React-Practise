function searchBackend(){
    console.log("request sent to backend")
}
let currenClock
function debouncedSearchbackend(){
    clearTimeout(currenClock)
    currenClock= setTimeout(searchBackend,300)
}

debouncedSearchbackend();
debouncedSearchbackend();
debouncedSearchbackend();
debouncedSearchbackend();
debouncedSearchbackend();
debouncedSearchbackend();
debouncedSearchbackend();
debouncedSearchbackend();
debouncedSearchbackend();
debouncedSearchbackend();
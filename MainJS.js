let themeMood = 'light';
function changeTheme(){
    if(themeMood == 'light'){
        document.getElementById('bodyID').className='Darkmode';
        document.getElementById('darkModeBtn').className='lightmode';
        themeMood = 'dark';
    }
    else{
        document.getElementById('bodyID').className='lightmode';
        document.getElementById('darkModeBtn').className='Darkmode';
        themeMood = 'light';
    }   
}
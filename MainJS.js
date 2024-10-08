let themeMood = 'light';
let dropdown_1 = false;
let dropdown_2 = false;
let dropdown_3 = false;
let dropdown_4 = false;

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
function Eddropdowninf(elementid){
    switch (elementid) {

       case 1: {
            if(dropdown_1 == false){
                document.querySelector('#eduDropDown').className='apear';
                dropdown_1 = true;
            }else{
                document.querySelector('#eduDropDown').className='dissapear';
                dropdown_1 = false;
            }
            break;
        }
        case 2: {
            if(dropdown_2 == false){
                document.querySelector('#skillDropDown').className='apear';
                dropdown_2 = true;
            }else{
                document.querySelector('#skillDropDown').className='dissapear';
                dropdown_2 = false;
            }
            break;
        }
        case 3: {
            if(dropdown_3 == false){
                document.querySelector('#achDropDown').className='apear';
                dropdown_3 = true;
            }else{
                document.querySelector('#achDropDown').className='dissapear';
                dropdown_3 = false;
            }
            break;
        }
        case 4: {
            if(dropdown_4 == false){
                document.querySelector('#hobDropDown').className='apear';
                dropdown_4 = true;
            }else{
                document.querySelector('#hobDropDown').className='dissapear';
                dropdown_4 = false;
            }
            break;
        }
    }
}

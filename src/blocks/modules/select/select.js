import 'bootstrap/js/dist/dropdown';
import 'bootstrap-select/dist/js/bootstrap-select.min';

//стилизация селекта
//дока по плагину https://github.com/snapappointments/bootstrap-select/
$(document).ready(function () {
    if($('.select-js').length > 0){
        $('.select-js').selectpicker();
    }
})


import 'bootstrap-select/dist/js/bootstrap-select.min';
import $ from "jquery";

//стилизация селекта
//дока по плагину https://github.com/snapappointments/bootstrap-select/
if($('.select-js').length > 0){
    $('.select-js').selectpicker();
}
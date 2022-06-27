import swal from 'sweetalert2'
const SweetAlertError = () => {


     new swal(

        // '!הפרטים נשמרו',
        // ' ...נעדכן אותך כשיהיה מה ',
        // 'success',

        // background:'rgb(80, 2, 58);
        {
            title: "!הפרטים שגויים",
            text: "נסה שוב",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "ok",
            customClass: {
                confirmButton: "btn btn-primary",
            },
            background: {
               color: 'rgb(80, 2, 58)'
            }
        }
    );



}

export default SweetAlertError;
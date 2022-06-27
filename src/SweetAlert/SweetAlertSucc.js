import swal from 'sweetalert2'
const SweetAlert = () => {


    new swal(

        // '!הפרטים נשמרו',
        // ' ...נעדכן אותך כשיהיה מה ',
        // 'success',

        // background:'rgb(80, 2, 58);
        {
            title: "!הפרטים נשמרו",
            text: "...נעדכן אותך כשיהיה מה",
            icon: "success",
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

export default SweetAlert;
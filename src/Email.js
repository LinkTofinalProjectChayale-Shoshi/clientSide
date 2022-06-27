// const mailjet = require("node-mailjet").connect(
//   "your-public-api-key",
//   "your-private-api-key"
// )
// function sendEmail(recipient) {
//   return mailjet
//     .post("send", { version: "v3.1" })
//     .request({
//       Messages: [
//         {
//           From: {
//             Email: "support@your-domain.com",
//             Name: "your-application-name",
//           },
//           To: [
//             {
//               Email: recipient,
//             },
//           ],
//           Subject: "",
//           TextPart: "",
//           HTMLPart: "",
//         },
//       ],
//     })
//     .then((result) => {
//       // do something with the send result or ignore
//     })
//     .catch((err) => {
//       // handle an error
//     });
// }
const Email = () => {
  return ( 
    <>
   <section class="section">
  <div class="text">
    <h1>הי, אני
      <span class="slide">
        <span class="wrapper">
          <span  className="item-a">עובד</span>
          <span  className="item-b">קשיש</span>
          <span className="item-c">עובד</span>
        </span>
      </span>
    </h1>
  </div>
</section>
    </>
   );
}
 
export default Email;

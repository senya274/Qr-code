import React from "react";
import styles from "./Info.module.css";
function Info() {
  return (
    
    <div className={styles.info_container}>
      <div className={styles.info_text}>
        <div className={styles.info_article}>
          <h2>Information about this QR code generator</h2>
          <p>
            You can generate free QR codes on this website. A QR code is a two
            dimensional barcode that stores information in black and white dots
            (called data pixels or “QR code modules”).
          </p>
        </div>

        <div className={styles.info_article}>
          <h2>Create a QR code</h2>
          <p>
            Just enter your text, your URL, a SMS or vCard contact information.
            The QR code will be generated automatically as you type. 
          </p>
          <p>
            QR codes are the way to go to create a link between the real world
            products (tagged with the QR code) and the Internet. Mobile,
            anywhere, anytime. Because QR codes make it so easy to transfer a
            web link to a mobile phone, they provide a significantly lower
            barrier to visit a site with a smart phone. But you can also work
            with other texts and data, such as advertising messages, telephone
            numbers and even entire business cards in vCard format. Just encode
            them with our QR code generator to easily transfer the data to
            mobile devices.
          </p>
        </div>

        <div className={styles.info_article}>
          <h2>What is QR code?</h2>
          <p>
            A QR code is a two-dimensional code (2D code, matrix code), this
            means it contains data not only in one dimension (e.g. horizontally
            from left to right like the barcodes on the products in e.g. your
            grocery store) but also in a second dimension (vertical and
            horizontal). The acronym QR is short for “Quick Response”.
          </p>
         
          <p>
            Like other codes, the QR code symbol can be captured with imaging
            devices like a camera and then digitally processed. A software
            prepares the captured image data until it can be algorithmically
            processed according to the QR code standard so the QR code content
            can be read. This process is assisted by the use of the Reed-Solomon
            error correction—which is also used for audio CDs to ensure that the
            data can still be read correctly even with small scratches on the
            surface.
          </p>
          <p>
            Because of the excellent error correction (they can be read even if
            up to 30 % of the surface gets destroyed) and the high memory
            capacity (in comparison with other bar codes), the QR code also
            gained traction outside the automotive industry. Modern mobile
            phones are powerful enough to run QR code reading software and also
            usually provide a camera. This combination brought up a variety of
            possibilities to use the QR code to easily transfer data without
            typing to the peoples new communication center, the smartphone.
            Therefore, a widespread use of QR codes became possible with the
            recent smartphone boom and the increasing spread of mobile internet.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Info;

import React from "react";
import QrCode from "react-qr-code"; // Import your QR code library

const Qrgenerator = () => {
  return (
    <div className="grid place-content-center">
      <h2 className="text-2xl mb-5">Welcome to Amanthrana hotel</h2>
      <div className="flex flex-wrap justify-center">
        <div className="m-2 text-center">
          <h2>Table No. 1</h2>
          <QrCode value="https://shekharfood.netlify.app/home/1" width={100} />
        </div>
        <div className="m-2 text-center">
          <h2>Table No. 2</h2>
          <QrCode value="https://shekharfood.netlify.app/home/2" width={100} />
        </div>
        <div className="m-2 text-center">
          <h2>Table No. 3</h2>
          <QrCode value="https://shekharfood.netlify.app/home/3" width={100} />
        </div>
        <div className="m-2 text-center">
          <h2>Table No. 4</h2>
          <QrCode value="https://shekharfood.netlify.app/home/4" width={100} />
        </div>
        <div className="m-2 text-center">
          <h2>Table No. 5</h2>
          <QrCode value="https://shekharfood.netlify.app/home/5" width={100} />
        </div>
        <div className="m-2 text-center">
          <h2>Table No. 6</h2>
          <QrCode value="https://shekharfood.netlify.app/home/6" width={100}  />
        </div>
      </div>
    </div>
  );
};

export default Qrgenerator;

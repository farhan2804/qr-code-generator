import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./Card.css";

const Card = () => {
  const [qrTextInputBox, setQrTextInputBox] = useState("");
  const [isQrShown, setIsQrShown] = useState(false);

  const getQRCode = (e) => {
    e.preventDefault();
    setIsQrShown(true);
  };

  const handleOnChange = (event) => {
    setQrTextInputBox(event.target.value);
    setIsQrShown(false);
  };

  return (
    <form className="form" onSubmit={getQRCode}>
      <h1 className="title">QR Code Generator</h1>
      <input
        type="text"
        className="input"
        value={qrTextInputBox}
        onChange={(event) => handleOnChange(event)}
        required
        placeholder="Enter the URL or Text"
      />
      {isQrShown && (
        <div
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: 200,
            width: "100%",
          }}
        >
          <QRCode
            size={1024}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={qrTextInputBox}
            viewBox={`0 0 256 256`}
          />
        </div>
      )}
      <input type="submit" className="submit" value="Generate QR Code" />
    </form>
  );
};

export default Card;

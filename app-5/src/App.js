import React, { useState } from "react";
import Image from "./Components/Image";

function App() {
  const [image, setImage] = useState(
    "https://images.squarespace-cdn.com/content/v1/5dbc5ac61914d2210cf76f65/1573599920157-QYSYH8JINRZQMU1SVDMG/ke17ZwdGBToddI8pDm48kJKo3YTR7zgUvInmXMbZ6zZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0geeCvn1f36QDdcifB7yxGjTk-SMFplgtEhJ5kBshkhu5q5viBDDnY2i_eu2ZnquSA/cute-short-fur-black-kitten-with-blue-eyes-2835623.jpg"
  );
  return (
    <div>
      <Image url={image} />
    </div>
  );
}

export default App;

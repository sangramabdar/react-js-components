import { randomBytes } from "crypto";
import jwt from "jsonwebtoken";

type DataType = { name: string; password: string };

type EncodeType = {
  token: string;
  key: string;
};

export function authorization(
  data: DataType,
  sizeOfBytes: number = 128,
  lifeofToken?: string
) {
  var key = randomBytes(sizeOfBytes).toString("hex").toLowerCase();

  if (lifeofToken) {
    var token = jwt.sign(data, key, {
      algorithm: "HS512",
      expiresIn: lifeofToken,
    });
  } else {
    var token = jwt.sign(data, key, {
      algorithm: "HS512",
    });
  }

  return { token, key };
}

export function encodeData(data: EncodeType): string {
  var total = "";
  var keyIndex = 0;
  var tokenIndex = 0;

  for (let i = 0; i < data.token.length + data.key.length; i++) {
    if (i % 2 != 0) {
      if (tokenIndex < data.token.length) {
        total += data.token[tokenIndex];
        tokenIndex++;
      } else {
        total += data.key[keyIndex];
        keyIndex++;
      }
    } else {
      total += data.key[keyIndex];
      keyIndex++;
    }
  }

  return `${total}_${data.token.length}`;
}

export function decodeData(data: string): EncodeType {
  var token = "";
  var key = "";
  var length = Number.parseInt(data.slice(data.length - 3));
  var tokenIndex = 0;
  var value = data.slice(0, data.length - 4);

  for (let i = 0; i < value.length; i++) {
    if (i % 2 != 0) {
      if (tokenIndex < length) {
        token += value[i];
        tokenIndex++;
      } else key += value[i];
    } else {
      key += value[i];
    }
  }

  return {
    token,
    key,
  };
}

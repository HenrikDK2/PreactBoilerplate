export async function getToken() {
  const data = await fetch(process.env.API_ENDPOINT + "token", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + key,
    },
    method: "POST",
    body: "grant_type=client_credentials",
  }).then((res) => res.json());

  //Date.now() er nuværende tid (ms) + expiresIn i ms som er den total date i ms indtil nye token.
  sessionStorage.setItem("expiresIn", Date.now() + 10 * 1000);
  sessionStorage.setItem("accessToken", data["access_token"]);
}

export function isTokenExpired() {
  const expiresIn = sessionStorage.getItem("expiresIn");

  //Hvis den nuværende tid i ms er støre end expireIn - 2000 i ms.
  if (Date.now() > parseInt(expiresIn) - 2000) {
    return true;
  } else {
    return false;
  }
}

export async function myFetch(ressource, options, admin = false) {
  if (admin) {
    if (!sessionStorage.getItem("accessToken") || isTokenExpired()) await getToken();

    return fetch(process.env.API_ENDPOINT + ressource, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      ...options,
    }).then((res) => res.json());
  } else {
    return fetch(process.env.API_ENDPOINT + ressource, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      ...options,
    }).then((res) => res.json());
  }
}
let oldSrc;
export function fileValidation({ image, imageRef }) {
  const validArr = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
  const imageDom = imageRef.current.base.querySelector("img");

  if (!oldSrc) oldSrc = imageDom.src;
  if (image.type.length < 1 || !validArr.includes(image.type)) {
    imageDom.setAttribute("src", oldSrc);
    return "Not a supported file format";
  }

  const reader = new FileReader();
  reader.onload = function () {
    const src = reader.result;
    imageDom.setAttribute("src", src);
  };
  reader.readAsDataURL(image);
}
